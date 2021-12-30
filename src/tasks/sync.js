/*
Author: Jake Mathai
Purpose: Decompile all historical blocks
*/

const fs = require('fs')
const { EVM } = require('evm');

const time = require('../utils/time')

task('sync', 'Decompile all contracts since genesis').setAction(async() => {

    const inspectTransaction = async(provider, transaction) => {
        try {
            const receipt = await transaction.wait()
            if (receipt == null || receipt.to != null)
                return null
            const contractAddress = receipt.contractAddress
            const bytecode = await provider.getCode(contractAddress)
            const evm = new EVM(bytecode)
            const sourceCode = evm.decompile()
            console.log(`${contractAddress} decompiled:`, sourceCode)
            // fs.writeFile(`${contractAddress}.sol`, sourceCode)
        }
        catch(e) {}
    }

    let provider = null
    const initializeProvider = async() => {
        provider = new ethers.providers.WebSocketProvider(process.env.WS_URL, process.env.NETWORK)
        provider.on('error', async error => {
            console.log('Provider error:', error)
            provider = null
        })
    }
    await initializeProvider()
    let latestBlock = await provider.getBlockNumber()
    for (let currentBlock = 1; currentBlock <= latestBlock; ++currentBlock) {
        console.log('On block', currentBlock)
        if (provider == null) {
            await initializeProvider()
            latestBlock = await provider.getBlockNumber()
        }
        try {
            const block = await provider.getBlockWithTransactions(currentBlock)
            for (const transaction of block.transactions)
                inspectTransaction(provider, transaction)
        }
        catch(e) {
            console.log(e)
        }
    }
})


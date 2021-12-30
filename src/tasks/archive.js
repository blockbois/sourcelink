/*
Author: Jake Mathai
Purpose: Listen for new contract deployments and attempt to decode bytecode into opcodes
*/

const fs = require('fs')
const { EVM } = require('evm');

const time = require('../utils/time')

task('archive', 'Decompiles newly deployed contracts').setAction(async() => {

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
            fs.writeFile(`${contractAddress}.sol`, sourceCode)
        }
        catch(e) {}
    }

    let provider = null

    const listen = async() => {
        provider = new ethers.providers.WebSocketProvider(process.env.WS_URL, process.env.NETWORK)
        provider.on('block', async blockNumber => {
            console.log('New block:', blockNumber)
            const block = await provider.getBlockWithTransactions(blockNumber)
            for (const transaction of block.transactions)
                inspectTransaction(provider, transaction)
        })
        provider.on('error', async error => {
            console.log('Provider error:', error)
            provider = null
        })
        console.log('Provider initialized')
    }

    await listen()
    while (true) {
        await time.sleep(60)
        if (provider == null)
            await listen()
    }
})


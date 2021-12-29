const { EVM } = require("evm");
 
(async() => {
    provider = new ethers.providers.WebSocketProvider('wss://mainnet.infura.io/ws/v3/61bee94f08184b74ad949ff1e125a730', 'mainnet')
    bytecode = await provider.getCode('0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5')
    evm = new EVM(bytecode)
    console.log(evm.getOpcodes())
    console.log(evm.getFunctions())
    console.log(evm.getEvents())
    // console.log(evm.decompile())
})()

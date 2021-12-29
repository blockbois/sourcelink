/*
Author: Jake Mathai
Purpose: Entrypoint script for running tasks. Reads the TASK environment variable mapping to configurations in conf.json
*/

const dispatch = async() => {
    const hre = require('hardhat')
    await hre.run('archiver')
}

dispatch().then(() => {
    process.exit(0)
}).catch(error => {
    console.error(error)
    process.exit(1)
})
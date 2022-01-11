const Web3 = require('web3');
//let web3 = new Web3('ws:///localhost:8545');
web3.setProvider('ws://localhost:8545')

console.log(web3);
///////////////////////////////////////
// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const Box = await ethers.getContractFactory('Box');
    
    console.log('Deploying Box...');
    const box = await Box.deploy();
    await box.deployed();
    console.log('Box deployed to:', box.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

///////https://blog.csdn.net/tangshuai96/article/details/109013726
//编译
const path=require('path');
const fs=require('fs');
const solc=require('solc');
//contract文件夹的名字
const srcpath = path.resolve(__dirname,'contract','Funding.sol');
//console.log(srcpath);读出地址
const source = fs.readFileSync(srcpath,'utf-8');
//console.log(source);打印出智能合约，读出来了
const result=solc.compile(source,1);
//console.log(result);
/*console.log(result.contracts[':Funding'].interface);
console.log(result.contracts[':FundingFactory'].interface);*/
//暴露信息 contracts方法
module.exports=result.contracts[':Funding'];

//部署
console.log('Deploying Box...');
const ipclass = await ipcalssify.depoly();
await ipclass.deployed();
console.log('Contract ipcalssify deployed to:',ipclassify.address);


//retrieve accounts from the local node
const accounts = await ethers.provider.listAccounts();
console.log(accounts);

//get contract instance
const address = 'contract address'
// Set up an ethers contract, representing our deployed Box instance
const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const ipclassify = await ethers.getContractFactory('ipclassify');
const ipclass = await Box.attach(ipclass);


//calling the contract

// Call the retrieve() function of the deployed Box contract
const value = await box.retrieve();
console.log('Box value is', value.toString());

//sending transaction
// Send a transaction to store() a new value in the Box
await box.store(23);
await ipclass.ipcalssify({,,,,})

// Call the retrieve() function of the deployed Box contract
const value = await box.retrieve();
console.log('Box value is', value.toString());


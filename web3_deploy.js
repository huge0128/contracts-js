const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const fs = require('fs-extra');
const path = require('path');

const filePath = path.resolve(__dirname, '../compiled/SuspiciousIp.json');
const {interface, bytecode} = require(filePath);


//const abi = JSON.parse(interface);
//const contract = web3.eth.contract(abi);

(async () => {
	let accounts = await web3.eth.getAccounts(); 
	console.time("deploy time")
	console.log('部署合约的账户：', accounts[0]);

	//创建合约实例并且部署
	let result = await new web3.eth.Contract(JSON.parse(interface))
	                        .deploy({data:bytecode,arguments:["“192.168.100.101”","20210526","300","85","90"]})
	                        .send({from: accounts[0], gas: 50000000});
    console.log('Deploying ipclassify...');
    console.timeEnd("deploy time")
	console.log("contract ipclassify deployed to: ", result.options.address);
//0xFe4De9d7AefBb4f4a3100849a38E66AE3bE1b2Fa
    //calling the contract

    // Call the retrieve() function of the deployed Box contract
    const value = await result.retrieve();
    console.log('countIPs', value.countIPs());


} )(); 
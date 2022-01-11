//设置web3连接
var Web3 = require('web3');
//http://localhost:7545 为Ganache提供的节点链接
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//读取合约

const fs = require('fs-extra');
const path = require('path');
//var fs = require('fs');
var contractCode = fs.readFileSync('ipclassify.sol').toString();

//编译合约代码
var solc = require('solc');
var compileCode = solc.compile(contractCode);


//获取合约abi和字节码
var abi = JSON.parse(compileCode.contracts[':SuspiciousIP'].interface);

/*
solcjs --bin --abi Hello.sol
var abi = JSON.parse(fs.readFileSync("Hello.abi"))
var bin = fs.readFileSync("Hellp.bin")
*/

//创建合约对象
const address = ' contract address'
var addr = "0xC161Bce6B901E9EC5ca1412AAD0F61a9E888E9e8";
//var VotingContract = web3.eth.contract(abi).at(addr);
var ipclassifyContract = web3.eth.contract(abi).at(addr);
//node deployed.js部署之后的合约地址:0xC161Bce6B901E9EC5ca1412AAD0F61a9E888E9e8

//var myContract = VotingContract.set({from:web3.eth.coinbase,gas:100000},function(err,result){
var myContract = ipclassifyContract.set({from:web3.eth.coinbase,gas:100000},function(err,result){
  if(err){
    console.log(err);
  }else{
    console.log("eilinge",result);
  }
})

//console.log(VotingContract);
console.log(ipclassifyContract);
//console.log(VotingContract.say.call("hello,my love"));
//调用合约方法的2种方式
//console.log(VotingContract.say("hello,my love"));
console.log(ipclassifyContract.IpClassify("192.168.100.1",202163,300,85,90));
/*
//每一个方法,都有默认的以下函数可以调用
say:
 { [Function: bound ]
   request: [Function: bound ],
   call: [Function: bound ],
   sendTransaction: [Function: bound ],
   estimateGas: [Function: bound ],
   getData: [Function: bound ],
   string: [Circular] },
*/
//console.log(VotingContract._c.sendTransaction({data:"0x"+abi,from:web3.eth.coinbase,gas:gasEstimate}));
//console.log(web3.toBigNumber(VotingContract._c.call()));
/*console.log(web3.toBigNumber(VotingContract._b()));
VotingContract._c(function(err,result){
  if(err){
    console.log(err);
  }else{
    console.log("_c",result);
  }
})
*/

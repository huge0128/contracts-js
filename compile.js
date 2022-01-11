//const fs= require('fs');
const fs = require('fs-extra');
const solc = require('solc');
const path = require('path');

//cleanup
const compiledPath = path.resolve(__dirname,'../compiled');
fs.removeSync(compiledPath);
fs.ensureDirSync(compiledPath);


//compile
const contractPath = path.resolve(__dirname,'../contracts','ipclassify.col');
const contractSource = fs.readFileSync(contractPath,'utf-8');
let compileResult = solc.compile(contractSource,1);
console.log('\n compiling contracts...');

//console.log(compileResult);


//check errors

if (Array.isArray(compileResult.errors) && compileResult.errors.length) {
	throw new Error(compileResult.errors[0]);
    console.log('\nBuild failed\n');

console.log('\nBuild finished successfully\n');
//}

//check warning

// save to disk
Object.keys(compileResult.contracts).forEach( name => {
	let contractName = name.replace(/^:/,'');
	//let filePath = path.resolve(__dirname, '../compiled',`${contractName}.json`);
	let filePath = path.resolve(compiledPath,`${contractName}.json`);
	fs.outputJsonSync(filePath, compileResult.contracts[name]);
	console.log("Saving json file to", filePath);


});

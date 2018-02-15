let environmentName = 'NODE_ENV';
let configDirectory = './src/Config/';

module.exports = function(_environmentName, _configDirectory){

	const path = require('path');
	
	if(_environmentName != undefined){
		environmentName = _environmentName;
	}
	console.log('Config environment: ' +  process.env[environmentName]);
	
	if(_configDirectory != undefined){
		configDirectory = _configDirectory;
	}
	console.log('Config configDirectory: ' + configDirectory);
	
	var environment = process.env[environmentName];
	
	var config = require(path.join(process.cwd(), configDirectory, environment + '.js'));
	
	return config;
}
let environmentName = 'NODE_ENV';
let configDirectory = './src/Config/';

module.exports = {

	init: function(_environmentName, _configDirectory){

		if(_environmentName != undefined){
			environmentName = _environmentName;
		}
		console.log('Config environment: ' +  process.env[environmentName]);
		
		if(_configDirectory != undefined){
			configDirectory = _configDirectory;
		}
		console.log('Config configDirectory: ' + configDirectory);
			
		console.log('Config environment: ' +  process.env[environmentName]);
		console.log('Config configDirectory: ' + configDirectory);
		
		const path = require('path');
			
		var environment = process.env[environmentName];
		
		var config = require(path.join(process.cwd(), configDirectory, environment + '.js'));
		
		for (var property in config) {
			this[property] = config[property];
			console.log(this[property]);
		}
		
		return this;
	}
}
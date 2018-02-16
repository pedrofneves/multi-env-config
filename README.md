## Multi env config

Multiple environment configuration file. 

## Install

> npm install multi-env-config --save


# Init

First you need to initialize using:

> const config = require('multi-env-config').init();

The module expects configuration files in "./src/Config" directory of the base path of your project.

The configuration files name must be the value assigned to "NODE_ENV" environment vairable plus ".js".

Alternatively, you can initialize the module specifying your environment variable - in case uou have many node instances in the same machine - and the directory of the configuration files.

For example:

> const config = require('multi-env-config').init('MY_PROJECT_NODE_ENV', './src/configuration');

If your MY_PROJECT_NODE_ENV environment variable has the value "development" the module will look for a "development.js" file in the "./src/configuration" directory.


# Usage

When you need to access some property of you configuration file use:

> const config = require('multi-env-config');

For example, if your "development.js" file has the following data:

~~~ Coffee-script
module.exports = {
	database: {
 		server: '192.168.0.10',
		user: 'root',
		password: '123456'
	}
}
~~~

you can access the data as following:

> const config = require('multi-env-config');
> let server = config.database.server;
> let user = config.database.user;


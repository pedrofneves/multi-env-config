## Multi env config

> Multiple environment configuration file.

## Install

npm install multi-env-config --save


# Init

First you need to initialize using:

> const config = require('multi-env-config').init();

The module expects configuration files in "./src/Config" directory.

The configuration files name must be the environment value assigned to "NODE_ENV" environment vairable plus ".js".

Alternatively, you can initialize the module specifying your environment variable - in case uou have many node instances in the same machine - and the directory of the configuration files.

For example:

> const config = require('multi-env-config').init('MY_PROJECT_NODE_ENV', './src/configuration');

If your MY_PROJECT_NODE_ENV environment variable has the value "development" the module will look for a "development.js" file in the "./src/configuration" directory.


# Usage

When you need to access some property of you configuration file use:

> const config = require('multi-env-config');
> config...

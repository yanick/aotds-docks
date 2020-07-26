const path = require('path');

module.exports = {
    stories: [ '../src/**/*stories.js' ],
    webpackFinal: (config) => {
        config.resolve.alias['~'] = path.resolve(__dirname, '../src/');
        config.resolve.alias['~C'] = path.resolve(__dirname, '../src/components/');

        return config;
    }
};

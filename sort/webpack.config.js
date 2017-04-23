const path = require('path');

module.exports = {
    entry: "./src",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,//path.join(__dirname, 'src'),
                loader: "babel-loader"
            }
        ]
    }
};

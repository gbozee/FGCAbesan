module.exports = {
    entry: "./assets/js/main.js",
    output: {
        path: __dirname,
        filename: "assets/static/js/bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|=prettyphoto\.js)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
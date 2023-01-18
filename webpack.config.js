// const path = require('path');

// module.exports = {
//   entry: './lib/components/Index.js',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [{ test: /\.js$/, use: 'babel-loader' }]
//   }
// };


// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const port = process.env.PORT || 8080;
// const path = require("path")

// module.exports = {
//   mode: 'development',  
//   resolve:{
// modules:[
//   path.resolve('./lib'),
//   path.resolve('./node_modules')
// ]
//   },
//   entry: './lib/components/index.js',
//   output: {
//     filename: 'bundle.[hash].js'
//   },
//   devtool: 'inline-source-map',
//   module: {
//     rules: [
//       {
//         test: /\.(js)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       },
     
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './views/index.ejs',
//     })
//   ],
//   devServer: {
//     host: 'localhost',
//     port: port,
//     historyApiFallback: true,
//     open: true
//   }
// };




const path= require('path')

const HTMLWebpackPlugin=require('html-webpack-plugin');

module.exports={

    mode:'development',

    entry:'./lib/components/index.js',

    output:{

        path:path.join(__dirname,'/dist'),

        filename:'bundle.js'

    },

    plugins:[

        new HTMLWebpackPlugin({

            template:'./views/index.ejs'

        })

    ],

    module:{

        rules:[

                {

                    test: /\.(js)$/,

                    exclude:/node_modules/,

                    use:{

                        loader : 'babel-loader',

                        options:{

                            presets:[

                                `@babel/preset-env`,

                                '@babel/preset-react'

                            ]

                        }

                    }



                }

        ]

    }

}
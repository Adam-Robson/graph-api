import path from 'path';
import { fileURLToPath } from 'url';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import dotenv from 'dotenv';
import webpack from 'webpack';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

export default {
  target: 'node',
  mode: 'development',
  entry: {
    server: './src/server.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'source-map', 
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  externals: {
    express: 'commonjs express',
  },
  plugins: [ 
  new webpack.DefinePlugin(envKeys),
  new ESLintWebpackPlugin({
    configType: 'flat'
  })],
};

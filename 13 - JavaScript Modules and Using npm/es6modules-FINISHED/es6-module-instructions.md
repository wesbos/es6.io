1. First Install your dependencies:

```bash
npm install webpack webpack-cli
```

2. Then, Create a `webpack.config.js` file:

```js
module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'source-map',
  entry: './app.js',
  output: {
    filename: 'bundle.js',
  },
};
```

3. Setup the build npm script in `package.json`:

```json
"build": "webpack --progress --watch"
```

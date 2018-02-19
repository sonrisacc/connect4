const path = require('path');
const DIST_DIR = path.join(__dirname, '/dist');
const SRC_DIR = path.join(__dirname, '/src');
module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  resolve: {
    extensions: ['.js']
  }
};

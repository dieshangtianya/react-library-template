const path = require('path');

const { readFileSync, writeFileSync } = require('fs');
const pkg = JSON.parse(
    readFileSync(path.resolve(__dirname, '..', 'package.json'))
);

pkg.publishConfig.tag = 'latest';

writeFileSync(
    path.resolve(__dirname, '..', 'package.json'),
    JSON.stringify(pkg, null, 2)
);

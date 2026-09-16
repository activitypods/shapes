const apods = require('./apods/index.cjs');
const as = require('./as/index.cjs');
const g1 = require('./g1/index.cjs');
const maid = require('./maid/index.cjs');
const pair = require('./pair/index.cjs');
const vcard = require('./vcard/index.cjs');
const File = require('./File.json');
module.exports = { ...apods, apods, ...as, as, ...g1, g1, ...maid, maid, ...pair, pair, ...vcard, vcard, ...File };

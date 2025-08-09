const as = require('./as/index.cjs');
const maid = require('./maid/index.cjs');
const vcard = require('./vcard/index.cjs');
const File = require('./File.cjs');
module.exports = { ...as, as, ...maid, maid, ...vcard, vcard, ...File };

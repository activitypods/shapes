const as = require('./as');
const maid = require('./maid');
const vcard = require('./vcard');
const File = require('./File.cjs');
module.exports = { ...as, as, ...maid, maid, ...vcard, vcard, ...File };

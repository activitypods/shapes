const as = require('./as');
const maid = require('./maid');
const vcard = require('./vcard');
const File = require('./File.json');
module.exports = { ...as, as, ...maid, maid, ...vcard, vcard, ...File };

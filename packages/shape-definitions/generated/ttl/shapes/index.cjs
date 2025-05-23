const as = require('./as');
const maid = require('./maid');
const solid = require('./solid');
const vcard = require('./vcard');
const activitystreams_shacl = require('./activitystreams.shacl.mjs');
module.exports = { ...as, as, ...maid, maid, ...solid, solid, ...vcard, vcard, ...activitystreams_shacl, activitystreams_shacl };

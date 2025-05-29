const as = require('./as');
const maid = require('./maid');
const solid = require('./solid');
const vcard = require('./vcard');
const activitystreams = require('./activitystreams.json');
module.exports = { ...as, as, ...maid, maid, ...solid, solid, ...vcard, vcard, ...activitystreams, activitystreams };

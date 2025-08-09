const as = require('./as/index.cjs');
const maid = require('./maid/index.cjs');
const solid = require('./solid/index.cjs');
const vcard = require('./vcard/index.cjs');
const activitystreams = require('./activitystreams.json');
module.exports = { ...as, as, ...maid, maid, ...solid, solid, ...vcard, vcard, ...activitystreams, activitystreams };

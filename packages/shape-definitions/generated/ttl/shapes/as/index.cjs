const Event = require('./Event.cjs');
const Note = require('./Note.cjs');
const Profile = require('./Profile.cjs');
module.exports = { ...Event, Event, ...Note, Note, ...Profile, Profile };

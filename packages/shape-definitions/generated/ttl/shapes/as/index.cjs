const Event = require('./Event.mjs');
const Note = require('./Note.mjs');
const Profile = require('./Profile.mjs');
module.exports = { ...Event, Event, ...Note, Note, ...Profile, Profile };

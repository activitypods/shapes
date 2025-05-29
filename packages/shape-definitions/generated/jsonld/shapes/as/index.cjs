const Event = require('./Event.json');
const Note = require('./Note.json');
const Profile = require('./Profile.json');
module.exports = { ...Event, Event, ...Note, Note, ...Profile, Profile };

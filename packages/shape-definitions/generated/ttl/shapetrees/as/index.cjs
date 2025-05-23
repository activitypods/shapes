const Article = require('./Article.mjs');
const Audio = require('./Audio.mjs');
const Event = require('./Event.mjs');
const Image = require('./Image.mjs');
const Note = require('./Note.mjs');
const Profile = require('./Profile.mjs');
const Video = require('./Video.mjs');
module.exports = { ...Article, Article, ...Audio, Audio, ...Event, Event, ...Image, Image, ...Note, Note, ...Profile, Profile, ...Video, Video };

const Article = require('./Article.cjs');
const Audio = require('./Audio.cjs');
const Event = require('./Event.cjs');
const Image = require('./Image.cjs');
const Note = require('./Note.cjs');
const Profile = require('./Profile.cjs');
const Video = require('./Video.cjs');
module.exports = { ...Article, Article, ...Audio, Audio, ...Event, Event, ...Image, Image, ...Note, Note, ...Profile, Profile, ...Video, Video };

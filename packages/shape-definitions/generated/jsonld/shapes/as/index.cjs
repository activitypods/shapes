const Article = require('./Article.json');
const Audio = require('./Audio.json');
const Event = require('./Event.json');
const Image = require('./Image.json');
const Note = require('./Note.json');
const Profile = require('./Profile.json');
const Video = require('./Video.json');
module.exports = { ...Article, Article, ...Audio, Audio, ...Event, Event, ...Image, Image, ...Note, Note, ...Profile, Profile, ...Video, Video };

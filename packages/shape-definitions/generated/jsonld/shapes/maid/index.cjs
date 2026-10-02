const Announcement = require('./Announcement.json');
const Offer = require('./Offer.json');
const Request = require('./Request.json');
module.exports = { ...Announcement, Announcement, ...Offer, Offer, ...Request, Request };

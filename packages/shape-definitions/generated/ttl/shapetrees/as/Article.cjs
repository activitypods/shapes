const turtleShape = "PREFIX : <>\nPREFIX st: <http://www.w3.org/ns/shapetrees#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX as: <https://www.w3.org/ns/activitystreams#>\n\n:Article\n  a st:ShapeTree ;\n  st:expectsType st:Resource ;\n  st:shape <../../shapes/activitypub#Article> ;\n  skos:prefLabel \"Articles\"@en, \"Articles\"@fr .\n";
module.exports = turtleShape;

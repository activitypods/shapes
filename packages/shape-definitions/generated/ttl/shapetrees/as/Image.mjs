const turtleShape = "PREFIX : <>\nPREFIX st: <http://www.w3.org/ns/shapetrees#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX as: <https://www.w3.org/ns/activitystreams#>\n\n:Image\n  a st:ShapeTree ;\n  st:expectsType st:Resource ;\n  st:shape <../../shapes/activitypub#Image> ;\n  skos:prefLabel \"Images\"@en, \"Images\"@fr .\n";
export default turtleShape;

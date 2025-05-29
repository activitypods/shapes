const turtleShape = "PREFIX : <>\nPREFIX sh: <http://www.w3.org/ns/shacl#>\nPREFIX as: <https://www.w3.org/ns/activitystreams#>\n\n:Event\n  a sh:NodeShape ;\n  sh:targetClass as:Event .\n";
module.exports = turtleShape;


function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $3fd42e7ba4a216b6$exports = {};

$parcel$export($3fd42e7ba4a216b6$exports, "shapes", () => $3fd42e7ba4a216b6$re_export$shapes);
/** Nested shape-import */ var $40fc03b76cce2cb4$exports = {};

$parcel$export($40fc03b76cce2cb4$exports, "solid", () => $40fc03b76cce2cb4$re_export$solid);
var $aeeccf19fafb51b6$exports = {};

$parcel$export($aeeccf19fafb51b6$exports, "activitystreamsContext", () => $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c);
const $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c = {
    type: {
        "@id": "@type",
        "@type": "https://www.w3.org/ns/activitystreams#Object"
    },
    attachment: {
        "@id": "https://www.w3.org/ns/activitystreams#attachment",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    attributedTo: {
        "@id": "https://www.w3.org/ns/activitystreams#attributedTo",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    audience: {
        "@id": "https://www.w3.org/ns/activitystreams#audience",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    bcc: {
        "@id": "https://www.w3.org/ns/activitystreams#bcc",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    bto: {
        "@id": "https://www.w3.org/ns/activitystreams#bto",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    cc: {
        "@id": "https://www.w3.org/ns/activitystreams#cc",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    content: {
        "@id": "https://www.w3.org/ns/activitystreams#content",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    context: {
        "@id": "https://www.w3.org/ns/activitystreams#context",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    generator: {
        "@id": "https://www.w3.org/ns/activitystreams#generator",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    icon: {
        "@id": "https://www.w3.org/ns/activitystreams#icon",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    image: {
        "@id": "https://www.w3.org/ns/activitystreams#image",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    inReplyTo: {
        "@id": "https://www.w3.org/ns/activitystreams#inReplyTo",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    location: {
        "@id": "https://www.w3.org/ns/activitystreams#location",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    name: {
        "@id": "https://www.w3.org/ns/activitystreams#name",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    preview: {
        "@id": "https://www.w3.org/ns/activitystreams#preview",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    replies: {
        "@id": "https://www.w3.org/ns/activitystreams#replies",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    summary: {
        "@id": "https://www.w3.org/ns/activitystreams#summary",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    tag: {
        "@id": "https://www.w3.org/ns/activitystreams#tag",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    to: {
        "@id": "https://www.w3.org/ns/activitystreams#to",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    url: {
        "@id": "https://www.w3.org/ns/activitystreams#url",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    duration: {
        "@id": "https://www.w3.org/ns/activitystreams#duration",
        "@type": "http://www.w3.org/2001/XMLSchema#duration"
    },
    endTime: {
        "@id": "https://www.w3.org/ns/activitystreams#endTime",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    id: {
        "@id": "https://www.w3.org/ns/activitystreams#id",
        "@type": "@id"
    },
    mediaType: {
        "@id": "https://www.w3.org/ns/activitystreams#mediaType",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    published: {
        "@id": "https://www.w3.org/ns/activitystreams#published",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    startTime: {
        "@id": "https://www.w3.org/ns/activitystreams#startTime",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    updated: {
        "@id": "https://www.w3.org/ns/activitystreams#updated",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    Link: {
        "@id": "https://www.w3.org/ns/activitystreams#Link",
        "@context": {
            type: {
                "@id": "@type"
            },
            name: {
                "@id": "https://www.w3.org/ns/activitystreams#name",
                "@type": "http://www.w3.org/2001/XMLSchema#string"
            },
            preview: {
                "@id": "https://www.w3.org/ns/activitystreams#preview",
                "@type": "http://www.w3.org/2001/XMLSchema#string",
                "@isCollection": true
            },
            height: {
                "@id": "https://www.w3.org/ns/activitystreams#height",
                "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"
            },
            href: {
                "@id": "https://www.w3.org/ns/activitystreams#href",
                "@type": "http://www.w3.org/2001/XMLSchema#anyURI"
            },
            hreflang: {
                "@id": "https://www.w3.org/ns/activitystreams#hreflang",
                "@type": "http://www.w3.org/2001/XMLSchema#string"
            },
            id: {
                "@id": "https://www.w3.org/ns/activitystreams#id",
                "@type": "@id"
            },
            mediaType: {
                "@id": "https://www.w3.org/ns/activitystreams#mediaType",
                "@type": "http://www.w3.org/2001/XMLSchema#string"
            },
            rel: {
                "@id": "https://www.w3.org/ns/activitystreams#rel",
                "@type": "http://www.w3.org/2001/XMLSchema#string",
                "@isCollection": true
            },
            width: {
                "@id": "https://www.w3.org/ns/activitystreams#width",
                "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"
            }
        }
    },
    height: {
        "@id": "https://www.w3.org/ns/activitystreams#height",
        "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"
    },
    href: {
        "@id": "https://www.w3.org/ns/activitystreams#href",
        "@type": "http://www.w3.org/2001/XMLSchema#anyURI"
    },
    hreflang: {
        "@id": "https://www.w3.org/ns/activitystreams#hreflang",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    rel: {
        "@id": "https://www.w3.org/ns/activitystreams#rel",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    width: {
        "@id": "https://www.w3.org/ns/activitystreams#width",
        "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"
    },
    actor: {
        "@id": "https://www.w3.org/ns/activitystreams#actor",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    instrument: {
        "@id": "https://www.w3.org/ns/activitystreams#instrument",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    object: {
        "@id": "https://www.w3.org/ns/activitystreams#object",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    origin: {
        "@id": "https://www.w3.org/ns/activitystreams#origin",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    result: {
        "@id": "https://www.w3.org/ns/activitystreams#result",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    target: {
        "@id": "https://www.w3.org/ns/activitystreams#target",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    totalItems: {
        "@id": "https://www.w3.org/ns/activitystreams#totalItems",
        "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"
    },
    current: {
        "@id": "https://www.w3.org/ns/activitystreams#current",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    first: {
        "@id": "https://www.w3.org/ns/activitystreams#first",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    items: {
        "@id": "https://www.w3.org/ns/activitystreams#items",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    last: {
        "@id": "https://www.w3.org/ns/activitystreams#last",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    next: {
        "@id": "https://www.w3.org/ns/activitystreams#next",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    prev: {
        "@id": "https://www.w3.org/ns/activitystreams#prev",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    orderedItems: {
        "@id": "https://www.w3.org/ns/activitystreams#orderedItems",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    partOf: {
        "@id": "https://www.w3.org/ns/activitystreams#partOf",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    startIndex: {
        "@id": "https://www.w3.org/ns/activitystreams#startIndex",
        "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"
    },
    oneOf: {
        "@id": "https://www.w3.org/ns/activitystreams#oneOf",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    anyOf: {
        "@id": "https://www.w3.org/ns/activitystreams#anyOf",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    closed: {
        "@id": "https://www.w3.org/ns/activitystreams#closed",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    subject: {
        "@id": "https://www.w3.org/ns/activitystreams#subject",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    relationship: {
        "@id": "https://www.w3.org/ns/activitystreams#relationship",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    accuracy: {
        "@id": "https://www.w3.org/ns/activitystreams#accuracy",
        "@type": "http://www.w3.org/2001/XMLSchema#float"
    },
    altitude: {
        "@id": "https://www.w3.org/ns/activitystreams#altitude",
        "@type": "http://www.w3.org/2001/XMLSchema#float"
    },
    latitude: {
        "@id": "https://www.w3.org/ns/activitystreams#latitude",
        "@type": "http://www.w3.org/2001/XMLSchema#float"
    },
    longitude: {
        "@id": "https://www.w3.org/ns/activitystreams#longitude",
        "@type": "http://www.w3.org/2001/XMLSchema#float"
    },
    radius: {
        "@id": "https://www.w3.org/ns/activitystreams#radius",
        "@type": "http://www.w3.org/2001/XMLSchema#float"
    },
    units: {
        "@id": "https://www.w3.org/ns/activitystreams#units",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    describes: {
        "@id": "https://www.w3.org/ns/activitystreams#describes",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    formerType: {
        "@id": "https://www.w3.org/ns/activitystreams#formerType",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    deleted: {
        "@id": "https://www.w3.org/ns/activitystreams#deleted",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    }
};


var $5a51491c579929c5$exports = {};

$parcel$export($5a51491c579929c5$exports, "activitystreamsSchema", () => $5a51491c579929c5$export$d7dff8426c1f1d2);
const $5a51491c579929c5$export$d7dff8426c1f1d2 = {
    type: "Schema",
    shapes: [
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#Object",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Object"
                            }
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#attachment",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#attributedTo",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#audience",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#bcc",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#bto",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#cc",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#content",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#context",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#generator",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#icon",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#image",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#inReplyTo",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#location",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#name",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#preview",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#replies",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#summary",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#tag",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#to",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#url",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#duration",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#duration"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#endTime",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#dateTime"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#id",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#mediaType",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#published",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#dateTime"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#startTime",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#dateTime"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#updated",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#dateTime"
                            },
                            min: 0,
                            max: 1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#Link",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                values: [
                                    "https://www.w3.org/ns/activitystreams#Link"
                                ]
                            }
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#name",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#preview",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#height",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
                                mininclusive: 0
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#href",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#anyURI"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#hreflang",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#id",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#mediaType",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#rel",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#width",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
                                mininclusive: 0
                            },
                            min: 0,
                            max: 1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Activity"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object",
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#actor",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#instrument",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#object",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#origin",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#result",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#target",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#IntransitiveActivity",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#IntransitiveActivity"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#Collection",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Collection"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object",
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#totalItems",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
                                mininclusive: 0
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#current",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#first",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#items",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#last",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#OrderedCollection",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#OrderedCollection"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Collection",
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#next",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#prev",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#orderedItems",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#CollectionPage",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#CollectionPage"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Collection",
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#next",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#partOf",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#prev",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#OrderedCollectionPage",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#OrderedCollectionPage"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#OrderedCollection",
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#startIndex",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
                                mininclusive: 0
                            },
                            min: 0,
                            max: 1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#AcceptShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Accept"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#AddShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Add"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#CreateShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Create"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#DeleteShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Delete"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#FollowShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Follow"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#IgnoreShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Ignore"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#JoinShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Join"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#LeaveShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Leave"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#LikeShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Like"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#OfferShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Offer"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#InviteShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Invite"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#RejectShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Reject"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#TentativeRejectShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#TentativeReject"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#RemoveShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Remove"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#UndoShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Undo"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#UpdateShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Update"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#ViewShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#View"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#ListenShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Listen"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#ReadShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Read"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#MoveShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Move"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#AnnounceShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Announce"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#FlagShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Flag"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#DislikeShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Dislike"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#ArriveShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Arrive"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#IntransitiveActivity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#TravelShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Travel"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#IntransitiveActivity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#Question",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Question"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#IntransitiveActivity",
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#oneOf",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#anyOf",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#closed",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#TentativeAcceptShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#TentativeAccept"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#BlockShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Block"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#ApplicationShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Application"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#GroupShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Group"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#OrganizationShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Organization"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#PersonShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Person"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#ServiceShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Service"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#Relationship",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Relationship"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object",
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#subject",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#object",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#relationship",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#DocumentShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Document"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#ArticleShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Article"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#AudioShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Audio"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Document"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#ImageShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Image"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Document"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#VideoShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Video"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Document"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#NoteShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Note"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#PageShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Page"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#EventShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Event"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#Place",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Place"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object",
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#accuracy",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#float",
                                mininclusive: 0,
                                maxinclusive: 100
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#altitude",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#float"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#latitude",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#float"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#longitude",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#float"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#radius",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#float",
                                mininclusive: 0
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#units",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#MentionShape",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Mention"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Link"
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#Profile",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Profile"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object",
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#describes",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/activitystreams#Tombstone",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://www.w3.org/ns/activitystreams#Tombstone"
                            }
                        },
                        "https://shapes.activitypods.org/v2/shapes/activitystreams#Object",
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#formerType",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#deleted",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#dateTime"
                            },
                            min: 0,
                            max: 1
                        }
                    ]
                }
            }
        }
    ]
};


var $75d228de1641f124$exports = {};

$parcel$export($75d228de1641f124$exports, "ObjectShapeType", () => $75d228de1641f124$export$10ed4a6ea04a5da7);
$parcel$export($75d228de1641f124$exports, "LinkShapeType", () => $75d228de1641f124$export$711627bf7900d47a);
$parcel$export($75d228de1641f124$exports, "ActivityShapeType", () => $75d228de1641f124$export$4f551c247294b576);
$parcel$export($75d228de1641f124$exports, "IntransitiveActivityShapeType", () => $75d228de1641f124$export$8278f0ce2855ac11);
$parcel$export($75d228de1641f124$exports, "CollectionShapeType", () => $75d228de1641f124$export$8d488253d594ee88);
$parcel$export($75d228de1641f124$exports, "OrderedCollectionShapeType", () => $75d228de1641f124$export$f52b300449df2b3f);
$parcel$export($75d228de1641f124$exports, "CollectionPageShapeType", () => $75d228de1641f124$export$464d3b3aa39764d1);
$parcel$export($75d228de1641f124$exports, "OrderedCollectionPageShapeType", () => $75d228de1641f124$export$27ca8464d8ec16cf);
$parcel$export($75d228de1641f124$exports, "AcceptShapeShapeType", () => $75d228de1641f124$export$853c1e95a1b4f13d);
$parcel$export($75d228de1641f124$exports, "AddShapeShapeType", () => $75d228de1641f124$export$54470b92651c6f54);
$parcel$export($75d228de1641f124$exports, "CreateShapeShapeType", () => $75d228de1641f124$export$3a74c015d90fb48a);
$parcel$export($75d228de1641f124$exports, "DeleteShapeShapeType", () => $75d228de1641f124$export$b194320e377e30fc);
$parcel$export($75d228de1641f124$exports, "FollowShapeShapeType", () => $75d228de1641f124$export$d40894f5415fdcb0);
$parcel$export($75d228de1641f124$exports, "IgnoreShapeShapeType", () => $75d228de1641f124$export$f8c85015e7349761);
$parcel$export($75d228de1641f124$exports, "JoinShapeShapeType", () => $75d228de1641f124$export$75f4c3f4458cea73);
$parcel$export($75d228de1641f124$exports, "LeaveShapeShapeType", () => $75d228de1641f124$export$74413df64bcbe663);
$parcel$export($75d228de1641f124$exports, "LikeShapeShapeType", () => $75d228de1641f124$export$abc8448eeabbbdd1);
$parcel$export($75d228de1641f124$exports, "OfferShapeShapeType", () => $75d228de1641f124$export$58d047bd7f06f05e);
$parcel$export($75d228de1641f124$exports, "InviteShapeShapeType", () => $75d228de1641f124$export$5ccaa421b5f51854);
$parcel$export($75d228de1641f124$exports, "RejectShapeShapeType", () => $75d228de1641f124$export$df337f25edddb3d4);
$parcel$export($75d228de1641f124$exports, "TentativeRejectShapeShapeType", () => $75d228de1641f124$export$df20cc89434c142c);
$parcel$export($75d228de1641f124$exports, "RemoveShapeShapeType", () => $75d228de1641f124$export$eb541117f0aec2fa);
$parcel$export($75d228de1641f124$exports, "UndoShapeShapeType", () => $75d228de1641f124$export$7bfbae0453992dcf);
$parcel$export($75d228de1641f124$exports, "UpdateShapeShapeType", () => $75d228de1641f124$export$f5189816b12b8ad7);
$parcel$export($75d228de1641f124$exports, "ViewShapeShapeType", () => $75d228de1641f124$export$f33c35e7f7c0666f);
$parcel$export($75d228de1641f124$exports, "ListenShapeShapeType", () => $75d228de1641f124$export$7e5c80c19f4c5a36);
$parcel$export($75d228de1641f124$exports, "ReadShapeShapeType", () => $75d228de1641f124$export$df70b3134eec98f);
$parcel$export($75d228de1641f124$exports, "MoveShapeShapeType", () => $75d228de1641f124$export$b592c28b99e1d44b);
$parcel$export($75d228de1641f124$exports, "AnnounceShapeShapeType", () => $75d228de1641f124$export$b60376fce881b14b);
$parcel$export($75d228de1641f124$exports, "FlagShapeShapeType", () => $75d228de1641f124$export$e491b9b2de4157da);
$parcel$export($75d228de1641f124$exports, "DislikeShapeShapeType", () => $75d228de1641f124$export$e24e4ca9e47f4568);
$parcel$export($75d228de1641f124$exports, "ArriveShapeShapeType", () => $75d228de1641f124$export$48e86937c92d8cd8);
$parcel$export($75d228de1641f124$exports, "TravelShapeShapeType", () => $75d228de1641f124$export$41c40e810465abe8);
$parcel$export($75d228de1641f124$exports, "QuestionShapeType", () => $75d228de1641f124$export$eac099d4a1b658a2);
$parcel$export($75d228de1641f124$exports, "TentativeAcceptShapeShapeType", () => $75d228de1641f124$export$1d228843c187151c);
$parcel$export($75d228de1641f124$exports, "BlockShapeShapeType", () => $75d228de1641f124$export$80979644dbf392c);
$parcel$export($75d228de1641f124$exports, "ApplicationShapeShapeType", () => $75d228de1641f124$export$842d31ccf1dfdac8);
$parcel$export($75d228de1641f124$exports, "GroupShapeShapeType", () => $75d228de1641f124$export$b564288dea0a5bd0);
$parcel$export($75d228de1641f124$exports, "OrganizationShapeShapeType", () => $75d228de1641f124$export$522f1e53d28364e8);
$parcel$export($75d228de1641f124$exports, "PersonShapeShapeType", () => $75d228de1641f124$export$5902ff62545abcf5);
$parcel$export($75d228de1641f124$exports, "ServiceShapeShapeType", () => $75d228de1641f124$export$555ca5a31e520487);
$parcel$export($75d228de1641f124$exports, "RelationshipShapeType", () => $75d228de1641f124$export$9ce6e99fcca40947);
$parcel$export($75d228de1641f124$exports, "DocumentShapeShapeType", () => $75d228de1641f124$export$dd3702b153e5244b);
$parcel$export($75d228de1641f124$exports, "ArticleShapeShapeType", () => $75d228de1641f124$export$1b7a523775299522);
$parcel$export($75d228de1641f124$exports, "AudioShapeShapeType", () => $75d228de1641f124$export$5dd967872b6cf25d);
$parcel$export($75d228de1641f124$exports, "ImageShapeShapeType", () => $75d228de1641f124$export$e68d3d081cbf05e);
$parcel$export($75d228de1641f124$exports, "VideoShapeShapeType", () => $75d228de1641f124$export$8db85f7ab45647a);
$parcel$export($75d228de1641f124$exports, "NoteShapeShapeType", () => $75d228de1641f124$export$f3f942ab50fb1d35);
$parcel$export($75d228de1641f124$exports, "PageShapeShapeType", () => $75d228de1641f124$export$352fb8bb94d77f11);
$parcel$export($75d228de1641f124$exports, "EventShapeShapeType", () => $75d228de1641f124$export$4979c852d919e99d);
$parcel$export($75d228de1641f124$exports, "PlaceShapeType", () => $75d228de1641f124$export$ab061787a3ad797b);
$parcel$export($75d228de1641f124$exports, "MentionShapeShapeType", () => $75d228de1641f124$export$c89cca55dd5b78cb);
$parcel$export($75d228de1641f124$exports, "ProfileShapeType", () => $75d228de1641f124$export$84c06d7a4d4dca59);
$parcel$export($75d228de1641f124$exports, "TombstoneShapeType", () => $75d228de1641f124$export$d4c5034320ad7d23);


const $75d228de1641f124$export$10ed4a6ea04a5da7 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Object",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$711627bf7900d47a = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Link",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$4f551c247294b576 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$8278f0ce2855ac11 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#IntransitiveActivity",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$8d488253d594ee88 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Collection",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$f52b300449df2b3f = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#OrderedCollection",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$464d3b3aa39764d1 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#CollectionPage",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$27ca8464d8ec16cf = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#OrderedCollectionPage",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$853c1e95a1b4f13d = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#AcceptShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$54470b92651c6f54 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#AddShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$3a74c015d90fb48a = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#CreateShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$b194320e377e30fc = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#DeleteShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$d40894f5415fdcb0 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#FollowShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$f8c85015e7349761 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#IgnoreShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$75f4c3f4458cea73 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#JoinShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$74413df64bcbe663 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#LeaveShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$abc8448eeabbbdd1 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#LikeShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$58d047bd7f06f05e = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#OfferShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$5ccaa421b5f51854 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#InviteShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$df337f25edddb3d4 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#RejectShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$df20cc89434c142c = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#TentativeRejectShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$eb541117f0aec2fa = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#RemoveShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$7bfbae0453992dcf = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#UndoShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$f5189816b12b8ad7 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#UpdateShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$f33c35e7f7c0666f = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#ViewShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$7e5c80c19f4c5a36 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#ListenShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$df70b3134eec98f = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#ReadShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$b592c28b99e1d44b = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#MoveShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$b60376fce881b14b = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#AnnounceShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$e491b9b2de4157da = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#FlagShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$e24e4ca9e47f4568 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#DislikeShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$48e86937c92d8cd8 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#ArriveShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$41c40e810465abe8 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#TravelShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$eac099d4a1b658a2 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Question",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$1d228843c187151c = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#TentativeAcceptShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$80979644dbf392c = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#BlockShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$842d31ccf1dfdac8 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#ApplicationShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$b564288dea0a5bd0 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#GroupShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$522f1e53d28364e8 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#OrganizationShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$5902ff62545abcf5 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#PersonShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$555ca5a31e520487 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#ServiceShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$9ce6e99fcca40947 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Relationship",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$dd3702b153e5244b = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#DocumentShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$1b7a523775299522 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#ArticleShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$5dd967872b6cf25d = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#AudioShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$e68d3d081cbf05e = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#ImageShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$8db85f7ab45647a = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#VideoShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$f3f942ab50fb1d35 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#NoteShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$352fb8bb94d77f11 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#PageShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$4979c852d919e99d = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#EventShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$ab061787a3ad797b = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Place",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$c89cca55dd5b78cb = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#MentionShape",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$84c06d7a4d4dca59 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Profile",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};
const $75d228de1641f124$export$d4c5034320ad7d23 = {
    schema: (0, $5a51491c579929c5$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Tombstone",
    context: (0, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c)
};


var $edcd6a486bf8a25d$exports = {};


var $af4281d770155332$exports = {};
var $bdf273e33df436ba$exports = {};

$parcel$export($bdf273e33df436ba$exports, "SolidNotificationContext", () => $bdf273e33df436ba$export$6cb580950f960f8);
const $bdf273e33df436ba$export$6cb580950f960f8 = {
    id: {
        "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#id",
        "@type": "@id"
    },
    subscription: {
        "@id": "http://www.w3.org/ns/solid/notifications#subscription",
        "@type": "@id",
        "@isCollection": true
    },
    channel: {
        "@id": "http://www.w3.org/ns/solid/notifications#channel",
        "@type": "@id",
        "@isCollection": true
    },
    channelType: {
        "@id": "http://www.w3.org/ns/solid/notifications#channelType",
        "@type": "@id"
    },
    feature: {
        "@id": "http://www.w3.org/ns/solid/notifications#feature",
        "@type": "@id",
        "@isCollection": true
    },
    type: {
        "@id": "@type",
        "@type": "@id",
        "@isCollection": true
    },
    topic: {
        "@id": "http://www.w3.org/ns/solid/notifications#topic",
        "@type": "@id",
        "@isCollection": true
    },
    receiveFrom: {
        "@id": "http://www.w3.org/ns/solid/notifications#receiveFrom",
        "@type": "@id"
    },
    sendTo: {
        "@id": "http://www.w3.org/ns/solid/notifications#sendTo",
        "@type": "@id"
    },
    sender: {
        "@id": "http://www.w3.org/ns/solid/notifications#sender",
        "@type": "@id"
    },
    startAt: {
        "@id": "http://www.w3.org/ns/solid/notifications#startAt",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    endAt: {
        "@id": "http://www.w3.org/ns/solid/notifications#endAt",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    state: {
        "@id": "http://www.w3.org/ns/solid/notifications#state",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    rate: {
        "@id": "http://www.w3.org/ns/solid/notifications#rate",
        "@type": "http://www.w3.org/2001/XMLSchema#duration"
    },
    accept: {
        "@id": "http://www.w3.org/ns/solid/notifications#accept",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    object: {
        "@id": "https://www.w3.org/ns/activitystreams#object",
        "@type": "@id"
    },
    published: {
        "@id": "https://www.w3.org/ns/activitystreams#published",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    target: {
        "@id": "https://www.w3.org/ns/activitystreams#target",
        "@type": "@id",
        "@isCollection": true
    }
};


var $9d2c08eaaf44c215$exports = {};

$parcel$export($9d2c08eaaf44c215$exports, "SolidNotificationSchema", () => $9d2c08eaaf44c215$export$ea6652556b7356f);
const $9d2c08eaaf44c215$export$ea6652556b7356f = {
    type: "Schema",
    shapes: [
        {
            id: "https://shapes.activitypods.org/v2/shapes/solid#DescriptionResource",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#id",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            }
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#subscription",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#channel",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            },
                            min: 0,
                            max: -1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/solid#SubscriptionService",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#id",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            }
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#channelType",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            }
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#feature",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            },
                            min: 0,
                            max: -1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/solid#NotificationChannel",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#id",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            }
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            }
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#topic",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            },
                            min: 1,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#receiveFrom",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#sendTo",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#sender",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#startAt",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#dateTime"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#endAt",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#dateTime"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#state",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#rate",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#duration"
                            },
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#accept",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        }
                    ]
                }
            }
        },
        {
            id: "https://shapes.activitypods.org/v2/shapes/solid#NotificationMessage",
            type: "ShapeDecl",
            shapeExpr: {
                type: "Shape",
                expression: {
                    type: "EachOf",
                    expressions: [
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#id",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            }
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            },
                            min: 1,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#object",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            }
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#published",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#dateTime"
                            }
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#target",
                            valueExpr: {
                                type: "NodeConstraint",
                                nodeKind: "iri"
                            },
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/notifications#state",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string"
                            },
                            min: 0,
                            max: 1
                        }
                    ]
                }
            }
        }
    ]
};


var $81f9fc733a8124f9$exports = {};

$parcel$export($81f9fc733a8124f9$exports, "DescriptionResourceShapeType", () => $81f9fc733a8124f9$export$51daf0a9e553c5b3);
$parcel$export($81f9fc733a8124f9$exports, "SubscriptionServiceShapeType", () => $81f9fc733a8124f9$export$9e1b4131740fbe8);
$parcel$export($81f9fc733a8124f9$exports, "NotificationChannelShapeType", () => $81f9fc733a8124f9$export$852cddb4525b12fc);
$parcel$export($81f9fc733a8124f9$exports, "NotificationMessageShapeType", () => $81f9fc733a8124f9$export$4426abcac492061f);


const $81f9fc733a8124f9$export$51daf0a9e553c5b3 = {
    schema: (0, $9d2c08eaaf44c215$export$ea6652556b7356f),
    shape: "https://shapes.activitypods.org/v2/shapes/solid#DescriptionResource",
    context: (0, $bdf273e33df436ba$export$6cb580950f960f8)
};
const $81f9fc733a8124f9$export$9e1b4131740fbe8 = {
    schema: (0, $9d2c08eaaf44c215$export$ea6652556b7356f),
    shape: "https://shapes.activitypods.org/v2/shapes/solid#SubscriptionService",
    context: (0, $bdf273e33df436ba$export$6cb580950f960f8)
};
const $81f9fc733a8124f9$export$852cddb4525b12fc = {
    schema: (0, $9d2c08eaaf44c215$export$ea6652556b7356f),
    shape: "https://shapes.activitypods.org/v2/shapes/solid#NotificationChannel",
    context: (0, $bdf273e33df436ba$export$6cb580950f960f8)
};
const $81f9fc733a8124f9$export$4426abcac492061f = {
    schema: (0, $9d2c08eaaf44c215$export$ea6652556b7356f),
    shape: "https://shapes.activitypods.org/v2/shapes/solid#NotificationMessage",
    context: (0, $bdf273e33df436ba$export$6cb580950f960f8)
};


var $b60e4fc21753ff26$exports = {};


$parcel$exportWildcard($af4281d770155332$exports, $bdf273e33df436ba$exports);
$parcel$exportWildcard($af4281d770155332$exports, $9d2c08eaaf44c215$exports);
$parcel$exportWildcard($af4281d770155332$exports, $81f9fc733a8124f9$exports);
$parcel$exportWildcard($af4281d770155332$exports, $b60e4fc21753ff26$exports);


$parcel$exportWildcard($40fc03b76cce2cb4$exports, $aeeccf19fafb51b6$exports);
$parcel$exportWildcard($40fc03b76cce2cb4$exports, $5a51491c579929c5$exports);
$parcel$exportWildcard($40fc03b76cce2cb4$exports, $75d228de1641f124$exports);
$parcel$exportWildcard($40fc03b76cce2cb4$exports, $edcd6a486bf8a25d$exports);
$parcel$exportWildcard($40fc03b76cce2cb4$exports, $af4281d770155332$exports);


$parcel$exportWildcard($3fd42e7ba4a216b6$exports, $40fc03b76cce2cb4$exports);




export {$3fd42e7ba4a216b6$re_export$shapes as shapes, $40fc03b76cce2cb4$re_export$solid as solid, $aeeccf19fafb51b6$export$2c8fa83ea1e9f99c as activitystreamsContext, $5a51491c579929c5$export$d7dff8426c1f1d2 as activitystreamsSchema, $75d228de1641f124$export$10ed4a6ea04a5da7 as ObjectShapeType, $75d228de1641f124$export$711627bf7900d47a as LinkShapeType, $75d228de1641f124$export$4f551c247294b576 as ActivityShapeType, $75d228de1641f124$export$8278f0ce2855ac11 as IntransitiveActivityShapeType, $75d228de1641f124$export$8d488253d594ee88 as CollectionShapeType, $75d228de1641f124$export$f52b300449df2b3f as OrderedCollectionShapeType, $75d228de1641f124$export$464d3b3aa39764d1 as CollectionPageShapeType, $75d228de1641f124$export$27ca8464d8ec16cf as OrderedCollectionPageShapeType, $75d228de1641f124$export$853c1e95a1b4f13d as AcceptShapeShapeType, $75d228de1641f124$export$54470b92651c6f54 as AddShapeShapeType, $75d228de1641f124$export$3a74c015d90fb48a as CreateShapeShapeType, $75d228de1641f124$export$b194320e377e30fc as DeleteShapeShapeType, $75d228de1641f124$export$d40894f5415fdcb0 as FollowShapeShapeType, $75d228de1641f124$export$f8c85015e7349761 as IgnoreShapeShapeType, $75d228de1641f124$export$75f4c3f4458cea73 as JoinShapeShapeType, $75d228de1641f124$export$74413df64bcbe663 as LeaveShapeShapeType, $75d228de1641f124$export$abc8448eeabbbdd1 as LikeShapeShapeType, $75d228de1641f124$export$58d047bd7f06f05e as OfferShapeShapeType, $75d228de1641f124$export$5ccaa421b5f51854 as InviteShapeShapeType, $75d228de1641f124$export$df337f25edddb3d4 as RejectShapeShapeType, $75d228de1641f124$export$df20cc89434c142c as TentativeRejectShapeShapeType, $75d228de1641f124$export$eb541117f0aec2fa as RemoveShapeShapeType, $75d228de1641f124$export$7bfbae0453992dcf as UndoShapeShapeType, $75d228de1641f124$export$f5189816b12b8ad7 as UpdateShapeShapeType, $75d228de1641f124$export$f33c35e7f7c0666f as ViewShapeShapeType, $75d228de1641f124$export$7e5c80c19f4c5a36 as ListenShapeShapeType, $75d228de1641f124$export$df70b3134eec98f as ReadShapeShapeType, $75d228de1641f124$export$b592c28b99e1d44b as MoveShapeShapeType, $75d228de1641f124$export$b60376fce881b14b as AnnounceShapeShapeType, $75d228de1641f124$export$e491b9b2de4157da as FlagShapeShapeType, $75d228de1641f124$export$e24e4ca9e47f4568 as DislikeShapeShapeType, $75d228de1641f124$export$48e86937c92d8cd8 as ArriveShapeShapeType, $75d228de1641f124$export$41c40e810465abe8 as TravelShapeShapeType, $75d228de1641f124$export$eac099d4a1b658a2 as QuestionShapeType, $75d228de1641f124$export$1d228843c187151c as TentativeAcceptShapeShapeType, $75d228de1641f124$export$80979644dbf392c as BlockShapeShapeType, $75d228de1641f124$export$842d31ccf1dfdac8 as ApplicationShapeShapeType, $75d228de1641f124$export$b564288dea0a5bd0 as GroupShapeShapeType, $75d228de1641f124$export$522f1e53d28364e8 as OrganizationShapeShapeType, $75d228de1641f124$export$5902ff62545abcf5 as PersonShapeShapeType, $75d228de1641f124$export$555ca5a31e520487 as ServiceShapeShapeType, $75d228de1641f124$export$9ce6e99fcca40947 as RelationshipShapeType, $75d228de1641f124$export$dd3702b153e5244b as DocumentShapeShapeType, $75d228de1641f124$export$1b7a523775299522 as ArticleShapeShapeType, $75d228de1641f124$export$5dd967872b6cf25d as AudioShapeShapeType, $75d228de1641f124$export$e68d3d081cbf05e as ImageShapeShapeType, $75d228de1641f124$export$8db85f7ab45647a as VideoShapeShapeType, $75d228de1641f124$export$f3f942ab50fb1d35 as NoteShapeShapeType, $75d228de1641f124$export$352fb8bb94d77f11 as PageShapeShapeType, $75d228de1641f124$export$4979c852d919e99d as EventShapeShapeType, $75d228de1641f124$export$ab061787a3ad797b as PlaceShapeType, $75d228de1641f124$export$c89cca55dd5b78cb as MentionShapeShapeType, $75d228de1641f124$export$84c06d7a4d4dca59 as ProfileShapeType, $75d228de1641f124$export$d4c5034320ad7d23 as TombstoneShapeType, $bdf273e33df436ba$export$6cb580950f960f8 as SolidNotificationContext, $9d2c08eaaf44c215$export$ea6652556b7356f as SolidNotificationSchema, $81f9fc733a8124f9$export$51daf0a9e553c5b3 as DescriptionResourceShapeType, $81f9fc733a8124f9$export$9e1b4131740fbe8 as SubscriptionServiceShapeType, $81f9fc733a8124f9$export$852cddb4525b12fc as NotificationChannelShapeType, $81f9fc733a8124f9$export$4426abcac492061f as NotificationMessageShapeType};
//# sourceMappingURL=index.cjs.js.map

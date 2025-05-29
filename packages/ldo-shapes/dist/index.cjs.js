
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
var $4ab69864c18ce8f1$exports = {};

$parcel$export($4ab69864c18ce8f1$exports, "shapes", () => $4ab69864c18ce8f1$re_export$shapes);
/** Nested shape-import */ var $2661a8d00834231b$exports = {};

$parcel$export($2661a8d00834231b$exports, "solid", () => $2661a8d00834231b$re_export$solid);
var $eb5f831e0bb7d686$exports = {};

$parcel$export($eb5f831e0bb7d686$exports, "activitystreamsContext", () => $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c);
const $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c = {
    type: {
        "@id": "@type"
    },
    Object: {
        "@id": "https://www.w3.org/ns/activitystreams#Object",
        "@context": {
            type: {
                "@id": "@type"
            },
            content: {
                "@id": "https://www.w3.org/ns/activitystreams#content",
                "@type": "http://www.w3.org/2001/XMLSchema#string"
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
            name: {
                "@id": "https://www.w3.org/ns/activitystreams#name",
                "@type": "http://www.w3.org/2001/XMLSchema#string"
            },
            preview: {
                "@id": "https://www.w3.org/ns/activitystreams#preview",
                "@type": "http://www.w3.org/2001/XMLSchema#string",
                "@isCollection": true
            },
            summary: {
                "@id": "https://www.w3.org/ns/activitystreams#summary",
                "@type": "http://www.w3.org/2001/XMLSchema#string"
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
            attachment: {
                "@id": "https://www.w3.org/ns/activitystreams#attachment",
                "@type": "@id",
                "@isCollection": true
            },
            attributedTo: {
                "@id": "https://www.w3.org/ns/activitystreams#attributedTo",
                "@type": "@id",
                "@isCollection": true
            },
            audience: {
                "@id": "https://www.w3.org/ns/activitystreams#audience",
                "@type": "@id",
                "@isCollection": true
            },
            bcc: {
                "@id": "https://www.w3.org/ns/activitystreams#bcc",
                "@type": "@id",
                "@isCollection": true
            },
            bto: {
                "@id": "https://www.w3.org/ns/activitystreams#bto",
                "@type": "@id",
                "@isCollection": true
            },
            cc: {
                "@id": "https://www.w3.org/ns/activitystreams#cc",
                "@type": "@id",
                "@isCollection": true
            },
            context: {
                "@id": "https://www.w3.org/ns/activitystreams#context",
                "@type": "@id",
                "@isCollection": true
            },
            generator: {
                "@id": "https://www.w3.org/ns/activitystreams#generator",
                "@type": "@id",
                "@isCollection": true
            },
            inReplyTo: {
                "@id": "https://www.w3.org/ns/activitystreams#inReplyTo",
                "@type": "@id",
                "@isCollection": true
            },
            location: {
                "@id": "https://www.w3.org/ns/activitystreams#location",
                "@type": "@id",
                "@isCollection": true
            },
            replies: {
                "@id": "https://www.w3.org/ns/activitystreams#replies",
                "@type": "@id"
            },
            tag: {
                "@id": "https://www.w3.org/ns/activitystreams#tag",
                "@type": "@id",
                "@isCollection": true
            },
            to: {
                "@id": "https://www.w3.org/ns/activitystreams#to",
                "@type": "@id",
                "@isCollection": true
            }
        }
    },
    content: {
        "@id": "https://www.w3.org/ns/activitystreams#content",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
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
    name: {
        "@id": "https://www.w3.org/ns/activitystreams#name",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    preview: {
        "@id": "https://www.w3.org/ns/activitystreams#preview",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    summary: {
        "@id": "https://www.w3.org/ns/activitystreams#summary",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
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
    attachment: {
        "@id": "https://www.w3.org/ns/activitystreams#attachment",
        "@type": "@id",
        "@isCollection": true
    },
    attributedTo: {
        "@id": "https://www.w3.org/ns/activitystreams#attributedTo",
        "@type": "@id",
        "@isCollection": true
    },
    audience: {
        "@id": "https://www.w3.org/ns/activitystreams#audience",
        "@type": "@id",
        "@isCollection": true
    },
    bcc: {
        "@id": "https://www.w3.org/ns/activitystreams#bcc",
        "@type": "@id",
        "@isCollection": true
    },
    bto: {
        "@id": "https://www.w3.org/ns/activitystreams#bto",
        "@type": "@id",
        "@isCollection": true
    },
    cc: {
        "@id": "https://www.w3.org/ns/activitystreams#cc",
        "@type": "@id",
        "@isCollection": true
    },
    context: {
        "@id": "https://www.w3.org/ns/activitystreams#context",
        "@type": "@id",
        "@isCollection": true
    },
    generator: {
        "@id": "https://www.w3.org/ns/activitystreams#generator",
        "@type": "@id",
        "@isCollection": true
    },
    inReplyTo: {
        "@id": "https://www.w3.org/ns/activitystreams#inReplyTo",
        "@type": "@id",
        "@isCollection": true
    },
    location: {
        "@id": "https://www.w3.org/ns/activitystreams#location",
        "@type": "@id",
        "@isCollection": true
    },
    replies: {
        "@id": "https://www.w3.org/ns/activitystreams#replies",
        "@type": "@id"
    },
    Collection: {
        "@id": "https://www.w3.org/ns/activitystreams#Collection",
        "@context": {
            type: {
                "@id": "@type"
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
                "@type": "@id",
                "@isCollection": true
            },
            last: {
                "@id": "https://www.w3.org/ns/activitystreams#last",
                "@type": "http://www.w3.org/2001/XMLSchema#string"
            }
        }
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
        "@type": "@id",
        "@isCollection": true
    },
    last: {
        "@id": "https://www.w3.org/ns/activitystreams#last",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    tag: {
        "@id": "https://www.w3.org/ns/activitystreams#tag",
        "@type": "@id",
        "@isCollection": true
    },
    to: {
        "@id": "https://www.w3.org/ns/activitystreams#to",
        "@type": "@id",
        "@isCollection": true
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
    id: {
        "@id": "https://www.w3.org/ns/activitystreams#id",
        "@type": "@id"
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
    Activity: {
        "@id": "https://www.w3.org/ns/activitystreams#Activity",
        "@context": {
            type: {
                "@id": "@type"
            },
            actor: {
                "@id": "https://www.w3.org/ns/activitystreams#actor",
                "@type": "@id",
                "@isCollection": true
            },
            instrument: {
                "@id": "https://www.w3.org/ns/activitystreams#instrument",
                "@type": "@id",
                "@isCollection": true
            },
            object: {
                "@id": "https://www.w3.org/ns/activitystreams#object",
                "@type": "@id",
                "@isCollection": true
            },
            origin: {
                "@id": "https://www.w3.org/ns/activitystreams#origin",
                "@type": "@id",
                "@isCollection": true
            },
            result: {
                "@id": "https://www.w3.org/ns/activitystreams#result",
                "@type": "@id",
                "@isCollection": true
            },
            target: {
                "@id": "https://www.w3.org/ns/activitystreams#target",
                "@type": "@id",
                "@isCollection": true
            }
        }
    },
    actor: {
        "@id": "https://www.w3.org/ns/activitystreams#actor",
        "@type": "@id",
        "@isCollection": true
    },
    instrument: {
        "@id": "https://www.w3.org/ns/activitystreams#instrument",
        "@type": "@id",
        "@isCollection": true
    },
    object: {
        "@id": "https://www.w3.org/ns/activitystreams#object",
        "@type": "@id",
        "@isCollection": true
    },
    origin: {
        "@id": "https://www.w3.org/ns/activitystreams#origin",
        "@type": "@id",
        "@isCollection": true
    },
    result: {
        "@id": "https://www.w3.org/ns/activitystreams#result",
        "@type": "@id",
        "@isCollection": true
    },
    target: {
        "@id": "https://www.w3.org/ns/activitystreams#target",
        "@type": "@id",
        "@isCollection": true
    },
    IntransitiveActivity: {
        "@id": "https://www.w3.org/ns/activitystreams#IntransitiveActivity",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    OrderedCollection: {
        "@id": "https://www.w3.org/ns/activitystreams#OrderedCollection",
        "@context": {
            type: {
                "@id": "@type"
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
                "@type": "@id",
                "@isCollection": true
            }
        }
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
        "@type": "@id",
        "@isCollection": true
    },
    CollectionPage: {
        "@id": "https://www.w3.org/ns/activitystreams#CollectionPage",
        "@context": {
            type: {
                "@id": "@type"
            },
            next: {
                "@id": "https://www.w3.org/ns/activitystreams#next",
                "@type": "http://www.w3.org/2001/XMLSchema#string"
            },
            partOf: {
                "@id": "https://www.w3.org/ns/activitystreams#partOf",
                "@type": "http://www.w3.org/2001/XMLSchema#string"
            },
            prev: {
                "@id": "https://www.w3.org/ns/activitystreams#prev",
                "@type": "http://www.w3.org/2001/XMLSchema#string"
            }
        }
    },
    partOf: {
        "@id": "https://www.w3.org/ns/activitystreams#partOf",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    OrderedCollectionPage: {
        "@id": "https://www.w3.org/ns/activitystreams#OrderedCollectionPage",
        "@context": {
            type: {
                "@id": "@type"
            },
            startIndex: {
                "@id": "https://www.w3.org/ns/activitystreams#startIndex",
                "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"
            }
        }
    },
    startIndex: {
        "@id": "https://www.w3.org/ns/activitystreams#startIndex",
        "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"
    },
    Accept: {
        "@id": "https://www.w3.org/ns/activitystreams#Accept",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Add: {
        "@id": "https://www.w3.org/ns/activitystreams#Add",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Create: {
        "@id": "https://www.w3.org/ns/activitystreams#Create",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Delete: {
        "@id": "https://www.w3.org/ns/activitystreams#Delete",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Follow: {
        "@id": "https://www.w3.org/ns/activitystreams#Follow",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Ignore: {
        "@id": "https://www.w3.org/ns/activitystreams#Ignore",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Join: {
        "@id": "https://www.w3.org/ns/activitystreams#Join",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Leave: {
        "@id": "https://www.w3.org/ns/activitystreams#Leave",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Like: {
        "@id": "https://www.w3.org/ns/activitystreams#Like",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Offer: {
        "@id": "https://www.w3.org/ns/activitystreams#Offer",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Invite: {
        "@id": "https://www.w3.org/ns/activitystreams#Invite",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Reject: {
        "@id": "https://www.w3.org/ns/activitystreams#Reject",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    TentativeReject: {
        "@id": "https://www.w3.org/ns/activitystreams#TentativeReject",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Remove: {
        "@id": "https://www.w3.org/ns/activitystreams#Remove",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Undo: {
        "@id": "https://www.w3.org/ns/activitystreams#Undo",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Update: {
        "@id": "https://www.w3.org/ns/activitystreams#Update",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    View: {
        "@id": "https://www.w3.org/ns/activitystreams#View",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Listen: {
        "@id": "https://www.w3.org/ns/activitystreams#Listen",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Read: {
        "@id": "https://www.w3.org/ns/activitystreams#Read",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Move: {
        "@id": "https://www.w3.org/ns/activitystreams#Move",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Announce: {
        "@id": "https://www.w3.org/ns/activitystreams#Announce",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Flag: {
        "@id": "https://www.w3.org/ns/activitystreams#Flag",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Dislike: {
        "@id": "https://www.w3.org/ns/activitystreams#Dislike",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Arrive: {
        "@id": "https://www.w3.org/ns/activitystreams#Arrive",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Travel: {
        "@id": "https://www.w3.org/ns/activitystreams#Travel",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Question: {
        "@id": "https://www.w3.org/ns/activitystreams#Question",
        "@context": {
            type: {
                "@id": "@type"
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
            }
        }
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
    TentativeAccept: {
        "@id": "https://www.w3.org/ns/activitystreams#TentativeAccept",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Block: {
        "@id": "https://www.w3.org/ns/activitystreams#Block",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Application: {
        "@id": "https://www.w3.org/ns/activitystreams#Application",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Group: {
        "@id": "https://www.w3.org/ns/activitystreams#Group",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Organization: {
        "@id": "https://www.w3.org/ns/activitystreams#Organization",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Person: {
        "@id": "https://www.w3.org/ns/activitystreams#Person",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Service: {
        "@id": "https://www.w3.org/ns/activitystreams#Service",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Relationship: {
        "@id": "https://www.w3.org/ns/activitystreams#Relationship",
        "@context": {
            type: {
                "@id": "@type"
            },
            subject: {
                "@id": "https://www.w3.org/ns/activitystreams#subject",
                "@type": "@id",
                "@isCollection": true
            },
            object: {
                "@id": "https://www.w3.org/ns/activitystreams#object",
                "@type": "@id",
                "@isCollection": true
            },
            relationship: {
                "@id": "https://www.w3.org/ns/activitystreams#relationship",
                "@type": "http://www.w3.org/2001/XMLSchema#string",
                "@isCollection": true
            }
        }
    },
    subject: {
        "@id": "https://www.w3.org/ns/activitystreams#subject",
        "@type": "@id",
        "@isCollection": true
    },
    relationship: {
        "@id": "https://www.w3.org/ns/activitystreams#relationship",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true
    },
    Document: {
        "@id": "https://www.w3.org/ns/activitystreams#Document",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Article: {
        "@id": "https://www.w3.org/ns/activitystreams#Article",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Audio: {
        "@id": "https://www.w3.org/ns/activitystreams#Audio",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Image: {
        "@id": "https://www.w3.org/ns/activitystreams#Image",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Video: {
        "@id": "https://www.w3.org/ns/activitystreams#Video",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Note: {
        "@id": "https://www.w3.org/ns/activitystreams#Note",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Page: {
        "@id": "https://www.w3.org/ns/activitystreams#Page",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Event: {
        "@id": "https://www.w3.org/ns/activitystreams#Event",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Place: {
        "@id": "https://www.w3.org/ns/activitystreams#Place",
        "@context": {
            type: {
                "@id": "@type"
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
            }
        }
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
    Mention: {
        "@id": "https://www.w3.org/ns/activitystreams#Mention",
        "@context": {
            type: {
                "@id": "@type"
            }
        }
    },
    Profile: {
        "@id": "https://www.w3.org/ns/activitystreams#Profile",
        "@context": {
            type: {
                "@id": "@type"
            },
            describes: {
                "@id": "https://www.w3.org/ns/activitystreams#describes",
                "@type": "http://www.w3.org/2001/XMLSchema#string"
            }
        }
    },
    describes: {
        "@id": "https://www.w3.org/ns/activitystreams#describes",
        "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    Tombstone: {
        "@id": "https://www.w3.org/ns/activitystreams#Tombstone",
        "@context": {
            type: {
                "@id": "@type"
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
        }
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


var $f770439b14f0edea$exports = {};

$parcel$export($f770439b14f0edea$exports, "activitystreamsSchema", () => $f770439b14f0edea$export$d7dff8426c1f1d2);
const $f770439b14f0edea$export$d7dff8426c1f1d2 = {
    type: "Schema",
    shapes: [
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
                                    "https://www.w3.org/ns/activitystreams#Object"
                                ]
                            }
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
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#attachment",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#attributedTo",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#audience",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#bcc",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#bto",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#cc",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#context",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#generator",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#inReplyTo",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#location",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#replies",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Collection",
                            min: 0,
                            max: 1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#tag",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#to",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        }
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Link",
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
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Activity",
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
                                    "https://www.w3.org/ns/activitystreams#Activity"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object",
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#actor",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#instrument",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#object",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#origin",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#result",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#target",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        }
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#IntransitiveActivity",
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
                                    "https://www.w3.org/ns/activitystreams#IntransitiveActivity"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Collection",
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
                                    "https://www.w3.org/ns/activitystreams#Collection"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#OrderedCollection",
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
                                    "https://www.w3.org/ns/activitystreams#OrderedCollection"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Collection",
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
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        }
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#CollectionPage",
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
                                    "https://www.w3.org/ns/activitystreams#CollectionPage"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Collection",
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
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#OrderedCollectionPage",
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
                                    "https://www.w3.org/ns/activitystreams#OrderedCollectionPage"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#OrderedCollection",
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
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Accept",
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
                                    "https://www.w3.org/ns/activitystreams#Accept"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Add",
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
                                    "https://www.w3.org/ns/activitystreams#Add"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Create",
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
                                    "https://www.w3.org/ns/activitystreams#Create"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Delete",
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
                                    "https://www.w3.org/ns/activitystreams#Delete"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Follow",
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
                                    "https://www.w3.org/ns/activitystreams#Follow"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Ignore",
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
                                    "https://www.w3.org/ns/activitystreams#Ignore"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Join",
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
                                    "https://www.w3.org/ns/activitystreams#Join"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Leave",
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
                                    "https://www.w3.org/ns/activitystreams#Leave"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Like",
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
                                    "https://www.w3.org/ns/activitystreams#Like"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Offer",
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
                                    "https://www.w3.org/ns/activitystreams#Offer"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Invite",
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
                                    "https://www.w3.org/ns/activitystreams#Invite"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Reject",
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
                                    "https://www.w3.org/ns/activitystreams#Reject"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#TentativeReject",
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
                                    "https://www.w3.org/ns/activitystreams#TentativeReject"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Remove",
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
                                    "https://www.w3.org/ns/activitystreams#Remove"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Undo",
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
                                    "https://www.w3.org/ns/activitystreams#Undo"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Update",
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
                                    "https://www.w3.org/ns/activitystreams#Update"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#View",
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
                                    "https://www.w3.org/ns/activitystreams#View"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Listen",
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
                                    "https://www.w3.org/ns/activitystreams#Listen"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Read",
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
                                    "https://www.w3.org/ns/activitystreams#Read"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Move",
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
                                    "https://www.w3.org/ns/activitystreams#Move"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Announce",
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
                                    "https://www.w3.org/ns/activitystreams#Announce"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Flag",
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
                                    "https://www.w3.org/ns/activitystreams#Flag"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Dislike",
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
                                    "https://www.w3.org/ns/activitystreams#Dislike"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Arrive",
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
                                    "https://www.w3.org/ns/activitystreams#Arrive"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#IntransitiveActivity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Travel",
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
                                    "https://www.w3.org/ns/activitystreams#Travel"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#IntransitiveActivity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Question",
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
                                    "https://www.w3.org/ns/activitystreams#Question"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#IntransitiveActivity",
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
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#TentativeAccept",
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
                                    "https://www.w3.org/ns/activitystreams#TentativeAccept"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Block",
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
                                    "https://www.w3.org/ns/activitystreams#Block"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Activity"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Application",
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
                                    "https://www.w3.org/ns/activitystreams#Application"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Group",
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
                                    "https://www.w3.org/ns/activitystreams#Group"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Organization",
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
                                    "https://www.w3.org/ns/activitystreams#Organization"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Person",
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
                                    "https://www.w3.org/ns/activitystreams#Person"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Service",
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
                                    "https://www.w3.org/ns/activitystreams#Service"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Relationship",
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
                                    "https://www.w3.org/ns/activitystreams#Relationship"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object",
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#subject",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
                            min: 0,
                            max: -1
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "https://www.w3.org/ns/activitystreams#object",
                            valueExpr: "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Document",
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
                                    "https://www.w3.org/ns/activitystreams#Document"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Article",
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
                                    "https://www.w3.org/ns/activitystreams#Article"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Audio",
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
                                    "https://www.w3.org/ns/activitystreams#Audio"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Document"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Image",
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
                                    "https://www.w3.org/ns/activitystreams#Image"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Document"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Video",
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
                                    "https://www.w3.org/ns/activitystreams#Video"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Document"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Note",
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
                                    "https://www.w3.org/ns/activitystreams#Note"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Page",
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
                                    "https://www.w3.org/ns/activitystreams#Page"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Event",
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
                                    "https://www.w3.org/ns/activitystreams#Event"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Place",
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
                                    "https://www.w3.org/ns/activitystreams#Place"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Mention",
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
                                    "https://www.w3.org/ns/activitystreams#Mention"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Link"
                    ]
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Profile",
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
                                    "https://www.w3.org/ns/activitystreams#Profile"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        },
        {
            id: "https://shapes.activitypods.org/shapes/activitystreams#Tombstone",
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
                                    "https://www.w3.org/ns/activitystreams#Tombstone"
                                ]
                            }
                        },
                        "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
                },
                extra: [
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                ]
            }
        }
    ]
};


var $69fbb77d6b36be6a$exports = {};

$parcel$export($69fbb77d6b36be6a$exports, "ObjectShapeType", () => $69fbb77d6b36be6a$export$10ed4a6ea04a5da7);
$parcel$export($69fbb77d6b36be6a$exports, "LinkShapeType", () => $69fbb77d6b36be6a$export$711627bf7900d47a);
$parcel$export($69fbb77d6b36be6a$exports, "ActivityShapeType", () => $69fbb77d6b36be6a$export$4f551c247294b576);
$parcel$export($69fbb77d6b36be6a$exports, "IntransitiveActivityShapeType", () => $69fbb77d6b36be6a$export$8278f0ce2855ac11);
$parcel$export($69fbb77d6b36be6a$exports, "CollectionShapeType", () => $69fbb77d6b36be6a$export$8d488253d594ee88);
$parcel$export($69fbb77d6b36be6a$exports, "OrderedCollectionShapeType", () => $69fbb77d6b36be6a$export$f52b300449df2b3f);
$parcel$export($69fbb77d6b36be6a$exports, "CollectionPageShapeType", () => $69fbb77d6b36be6a$export$464d3b3aa39764d1);
$parcel$export($69fbb77d6b36be6a$exports, "OrderedCollectionPageShapeType", () => $69fbb77d6b36be6a$export$27ca8464d8ec16cf);
$parcel$export($69fbb77d6b36be6a$exports, "AcceptShapeType", () => $69fbb77d6b36be6a$export$373b0e733f6a58a9);
$parcel$export($69fbb77d6b36be6a$exports, "AddShapeType", () => $69fbb77d6b36be6a$export$4b1e2013a5b1e29e);
$parcel$export($69fbb77d6b36be6a$exports, "CreateShapeType", () => $69fbb77d6b36be6a$export$53bb2f00039d84cd);
$parcel$export($69fbb77d6b36be6a$exports, "DeleteShapeType", () => $69fbb77d6b36be6a$export$b326dbb26970afbb);
$parcel$export($69fbb77d6b36be6a$exports, "FollowShapeType", () => $69fbb77d6b36be6a$export$b7576cccedad952c);
$parcel$export($69fbb77d6b36be6a$exports, "IgnoreShapeType", () => $69fbb77d6b36be6a$export$c56d9a370d377517);
$parcel$export($69fbb77d6b36be6a$exports, "JoinShapeType", () => $69fbb77d6b36be6a$export$40423390495346df);
$parcel$export($69fbb77d6b36be6a$exports, "LeaveShapeType", () => $69fbb77d6b36be6a$export$814450a210b872b7);
$parcel$export($69fbb77d6b36be6a$exports, "LikeShapeType", () => $69fbb77d6b36be6a$export$967d64d7dc043cb3);
$parcel$export($69fbb77d6b36be6a$exports, "OfferShapeType", () => $69fbb77d6b36be6a$export$76d5a5ef5adfa81c);
$parcel$export($69fbb77d6b36be6a$exports, "InviteShapeType", () => $69fbb77d6b36be6a$export$c7b35596bbddaa36);
$parcel$export($69fbb77d6b36be6a$exports, "RejectShapeType", () => $69fbb77d6b36be6a$export$98dd8636ee1b2027);
$parcel$export($69fbb77d6b36be6a$exports, "TentativeRejectShapeType", () => $69fbb77d6b36be6a$export$f210c874e8a67e08);
$parcel$export($69fbb77d6b36be6a$exports, "RemoveShapeType", () => $69fbb77d6b36be6a$export$8eb62a16c5dd25f1);
$parcel$export($69fbb77d6b36be6a$exports, "UndoShapeType", () => $69fbb77d6b36be6a$export$8e0e70e5cd971414);
$parcel$export($69fbb77d6b36be6a$exports, "UpdateShapeType", () => $69fbb77d6b36be6a$export$7a8532a8272b8fe9);
$parcel$export($69fbb77d6b36be6a$exports, "ViewShapeType", () => $69fbb77d6b36be6a$export$86f046b31e9d598a);
$parcel$export($69fbb77d6b36be6a$exports, "ListenShapeType", () => $69fbb77d6b36be6a$export$8392660fa310a61e);
$parcel$export($69fbb77d6b36be6a$exports, "ReadShapeType", () => $69fbb77d6b36be6a$export$4aadace30e70896c);
$parcel$export($69fbb77d6b36be6a$exports, "MoveShapeType", () => $69fbb77d6b36be6a$export$9de1cbd05aa4e4a2);
$parcel$export($69fbb77d6b36be6a$exports, "AnnounceShapeType", () => $69fbb77d6b36be6a$export$6a65061ecd1ed015);
$parcel$export($69fbb77d6b36be6a$exports, "FlagShapeType", () => $69fbb77d6b36be6a$export$772907b34ccd38da);
$parcel$export($69fbb77d6b36be6a$exports, "DislikeShapeType", () => $69fbb77d6b36be6a$export$6280f1022b022237);
$parcel$export($69fbb77d6b36be6a$exports, "ArriveShapeType", () => $69fbb77d6b36be6a$export$dc3522f479d91405);
$parcel$export($69fbb77d6b36be6a$exports, "TravelShapeType", () => $69fbb77d6b36be6a$export$1a4b6fd809c5438);
$parcel$export($69fbb77d6b36be6a$exports, "QuestionShapeType", () => $69fbb77d6b36be6a$export$eac099d4a1b658a2);
$parcel$export($69fbb77d6b36be6a$exports, "TentativeAcceptShapeType", () => $69fbb77d6b36be6a$export$e44d01b2a5be2258);
$parcel$export($69fbb77d6b36be6a$exports, "BlockShapeType", () => $69fbb77d6b36be6a$export$8a55b09e07eee057);
$parcel$export($69fbb77d6b36be6a$exports, "ApplicationShapeType", () => $69fbb77d6b36be6a$export$7eb06d840cd48ae1);
$parcel$export($69fbb77d6b36be6a$exports, "GroupShapeType", () => $69fbb77d6b36be6a$export$cfa2681679f25fd);
$parcel$export($69fbb77d6b36be6a$exports, "OrganizationShapeType", () => $69fbb77d6b36be6a$export$7d3c4a9772d49f4b);
$parcel$export($69fbb77d6b36be6a$exports, "PersonShapeType", () => $69fbb77d6b36be6a$export$5f641edbe0260f3);
$parcel$export($69fbb77d6b36be6a$exports, "ServiceShapeType", () => $69fbb77d6b36be6a$export$2167ff40709826a7);
$parcel$export($69fbb77d6b36be6a$exports, "RelationshipShapeType", () => $69fbb77d6b36be6a$export$9ce6e99fcca40947);
$parcel$export($69fbb77d6b36be6a$exports, "DocumentShapeType", () => $69fbb77d6b36be6a$export$567343fec6bc2c67);
$parcel$export($69fbb77d6b36be6a$exports, "ArticleShapeType", () => $69fbb77d6b36be6a$export$e95d69cde7699941);
$parcel$export($69fbb77d6b36be6a$exports, "AudioShapeType", () => $69fbb77d6b36be6a$export$98a873e8b95d6baf);
$parcel$export($69fbb77d6b36be6a$exports, "ImageShapeType", () => $69fbb77d6b36be6a$export$dea7974d2ab9d5f9);
$parcel$export($69fbb77d6b36be6a$exports, "VideoShapeType", () => $69fbb77d6b36be6a$export$4df0c0c211bb75ea);
$parcel$export($69fbb77d6b36be6a$exports, "NoteShapeType", () => $69fbb77d6b36be6a$export$8d5a952ef4e9f114);
$parcel$export($69fbb77d6b36be6a$exports, "PageShapeType", () => $69fbb77d6b36be6a$export$899495320525d3ad);
$parcel$export($69fbb77d6b36be6a$exports, "EventShapeType", () => $69fbb77d6b36be6a$export$53e4cd7400e6ee51);
$parcel$export($69fbb77d6b36be6a$exports, "PlaceShapeType", () => $69fbb77d6b36be6a$export$ab061787a3ad797b);
$parcel$export($69fbb77d6b36be6a$exports, "MentionShapeType", () => $69fbb77d6b36be6a$export$57b2cf11a29eb701);
$parcel$export($69fbb77d6b36be6a$exports, "ProfileShapeType", () => $69fbb77d6b36be6a$export$84c06d7a4d4dca59);
$parcel$export($69fbb77d6b36be6a$exports, "TombstoneShapeType", () => $69fbb77d6b36be6a$export$d4c5034320ad7d23);


const $69fbb77d6b36be6a$export$10ed4a6ea04a5da7 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Object",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$711627bf7900d47a = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Link",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$4f551c247294b576 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Activity",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$8278f0ce2855ac11 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#IntransitiveActivity",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$8d488253d594ee88 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Collection",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$f52b300449df2b3f = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#OrderedCollection",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$464d3b3aa39764d1 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#CollectionPage",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$27ca8464d8ec16cf = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#OrderedCollectionPage",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$373b0e733f6a58a9 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Accept",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$4b1e2013a5b1e29e = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Add",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$53bb2f00039d84cd = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Create",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$b326dbb26970afbb = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Delete",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$b7576cccedad952c = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Follow",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$c56d9a370d377517 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Ignore",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$40423390495346df = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Join",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$814450a210b872b7 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Leave",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$967d64d7dc043cb3 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Like",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$76d5a5ef5adfa81c = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Offer",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$c7b35596bbddaa36 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Invite",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$98dd8636ee1b2027 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Reject",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$f210c874e8a67e08 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#TentativeReject",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$8eb62a16c5dd25f1 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Remove",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$8e0e70e5cd971414 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Undo",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$7a8532a8272b8fe9 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Update",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$86f046b31e9d598a = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#View",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$8392660fa310a61e = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Listen",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$4aadace30e70896c = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Read",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$9de1cbd05aa4e4a2 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Move",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$6a65061ecd1ed015 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Announce",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$772907b34ccd38da = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Flag",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$6280f1022b022237 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Dislike",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$dc3522f479d91405 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Arrive",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$1a4b6fd809c5438 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Travel",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$eac099d4a1b658a2 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Question",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$e44d01b2a5be2258 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#TentativeAccept",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$8a55b09e07eee057 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Block",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$7eb06d840cd48ae1 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Application",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$cfa2681679f25fd = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Group",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$7d3c4a9772d49f4b = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Organization",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$5f641edbe0260f3 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Person",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$2167ff40709826a7 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Service",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$9ce6e99fcca40947 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Relationship",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$567343fec6bc2c67 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Document",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$e95d69cde7699941 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Article",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$98a873e8b95d6baf = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Audio",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$dea7974d2ab9d5f9 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Image",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$4df0c0c211bb75ea = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Video",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$8d5a952ef4e9f114 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Note",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$899495320525d3ad = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Page",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$53e4cd7400e6ee51 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Event",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$ab061787a3ad797b = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Place",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$57b2cf11a29eb701 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Mention",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$84c06d7a4d4dca59 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Profile",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};
const $69fbb77d6b36be6a$export$d4c5034320ad7d23 = {
    schema: (0, $f770439b14f0edea$export$d7dff8426c1f1d2),
    shape: "https://shapes.activitypods.org/shapes/activitystreams#Tombstone",
    context: (0, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c)
};


var $777de797be3fa128$exports = {};


var $fd9d03fdb37974ab$exports = {};
var $f5da5fe4bb3a5c60$exports = {};

$parcel$export($f5da5fe4bb3a5c60$exports, "SolidNotificationContext", () => $f5da5fe4bb3a5c60$export$6cb580950f960f8);
const $f5da5fe4bb3a5c60$export$6cb580950f960f8 = {
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


var $3278b757a0226216$exports = {};

$parcel$export($3278b757a0226216$exports, "SolidNotificationSchema", () => $3278b757a0226216$export$ea6652556b7356f);
const $3278b757a0226216$export$ea6652556b7356f = {
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


var $0c862ea91c28280b$exports = {};

$parcel$export($0c862ea91c28280b$exports, "DescriptionResourceShapeType", () => $0c862ea91c28280b$export$51daf0a9e553c5b3);
$parcel$export($0c862ea91c28280b$exports, "SubscriptionServiceShapeType", () => $0c862ea91c28280b$export$9e1b4131740fbe8);
$parcel$export($0c862ea91c28280b$exports, "NotificationChannelShapeType", () => $0c862ea91c28280b$export$852cddb4525b12fc);
$parcel$export($0c862ea91c28280b$exports, "NotificationMessageShapeType", () => $0c862ea91c28280b$export$4426abcac492061f);


const $0c862ea91c28280b$export$51daf0a9e553c5b3 = {
    schema: (0, $3278b757a0226216$export$ea6652556b7356f),
    shape: "https://shapes.activitypods.org/v2/shapes/solid#DescriptionResource",
    context: (0, $f5da5fe4bb3a5c60$export$6cb580950f960f8)
};
const $0c862ea91c28280b$export$9e1b4131740fbe8 = {
    schema: (0, $3278b757a0226216$export$ea6652556b7356f),
    shape: "https://shapes.activitypods.org/v2/shapes/solid#SubscriptionService",
    context: (0, $f5da5fe4bb3a5c60$export$6cb580950f960f8)
};
const $0c862ea91c28280b$export$852cddb4525b12fc = {
    schema: (0, $3278b757a0226216$export$ea6652556b7356f),
    shape: "https://shapes.activitypods.org/v2/shapes/solid#NotificationChannel",
    context: (0, $f5da5fe4bb3a5c60$export$6cb580950f960f8)
};
const $0c862ea91c28280b$export$4426abcac492061f = {
    schema: (0, $3278b757a0226216$export$ea6652556b7356f),
    shape: "https://shapes.activitypods.org/v2/shapes/solid#NotificationMessage",
    context: (0, $f5da5fe4bb3a5c60$export$6cb580950f960f8)
};


var $6f219be4d69e7ce6$exports = {};


$parcel$exportWildcard($fd9d03fdb37974ab$exports, $f5da5fe4bb3a5c60$exports);
$parcel$exportWildcard($fd9d03fdb37974ab$exports, $3278b757a0226216$exports);
$parcel$exportWildcard($fd9d03fdb37974ab$exports, $0c862ea91c28280b$exports);
$parcel$exportWildcard($fd9d03fdb37974ab$exports, $6f219be4d69e7ce6$exports);


$parcel$exportWildcard($2661a8d00834231b$exports, $eb5f831e0bb7d686$exports);
$parcel$exportWildcard($2661a8d00834231b$exports, $f770439b14f0edea$exports);
$parcel$exportWildcard($2661a8d00834231b$exports, $69fbb77d6b36be6a$exports);
$parcel$exportWildcard($2661a8d00834231b$exports, $777de797be3fa128$exports);
$parcel$exportWildcard($2661a8d00834231b$exports, $fd9d03fdb37974ab$exports);


$parcel$exportWildcard($4ab69864c18ce8f1$exports, $2661a8d00834231b$exports);




export {$4ab69864c18ce8f1$re_export$shapes as shapes, $2661a8d00834231b$re_export$solid as solid, $eb5f831e0bb7d686$export$2c8fa83ea1e9f99c as activitystreamsContext, $f770439b14f0edea$export$d7dff8426c1f1d2 as activitystreamsSchema, $69fbb77d6b36be6a$export$10ed4a6ea04a5da7 as ObjectShapeType, $69fbb77d6b36be6a$export$711627bf7900d47a as LinkShapeType, $69fbb77d6b36be6a$export$4f551c247294b576 as ActivityShapeType, $69fbb77d6b36be6a$export$8278f0ce2855ac11 as IntransitiveActivityShapeType, $69fbb77d6b36be6a$export$8d488253d594ee88 as CollectionShapeType, $69fbb77d6b36be6a$export$f52b300449df2b3f as OrderedCollectionShapeType, $69fbb77d6b36be6a$export$464d3b3aa39764d1 as CollectionPageShapeType, $69fbb77d6b36be6a$export$27ca8464d8ec16cf as OrderedCollectionPageShapeType, $69fbb77d6b36be6a$export$373b0e733f6a58a9 as AcceptShapeType, $69fbb77d6b36be6a$export$4b1e2013a5b1e29e as AddShapeType, $69fbb77d6b36be6a$export$53bb2f00039d84cd as CreateShapeType, $69fbb77d6b36be6a$export$b326dbb26970afbb as DeleteShapeType, $69fbb77d6b36be6a$export$b7576cccedad952c as FollowShapeType, $69fbb77d6b36be6a$export$c56d9a370d377517 as IgnoreShapeType, $69fbb77d6b36be6a$export$40423390495346df as JoinShapeType, $69fbb77d6b36be6a$export$814450a210b872b7 as LeaveShapeType, $69fbb77d6b36be6a$export$967d64d7dc043cb3 as LikeShapeType, $69fbb77d6b36be6a$export$76d5a5ef5adfa81c as OfferShapeType, $69fbb77d6b36be6a$export$c7b35596bbddaa36 as InviteShapeType, $69fbb77d6b36be6a$export$98dd8636ee1b2027 as RejectShapeType, $69fbb77d6b36be6a$export$f210c874e8a67e08 as TentativeRejectShapeType, $69fbb77d6b36be6a$export$8eb62a16c5dd25f1 as RemoveShapeType, $69fbb77d6b36be6a$export$8e0e70e5cd971414 as UndoShapeType, $69fbb77d6b36be6a$export$7a8532a8272b8fe9 as UpdateShapeType, $69fbb77d6b36be6a$export$86f046b31e9d598a as ViewShapeType, $69fbb77d6b36be6a$export$8392660fa310a61e as ListenShapeType, $69fbb77d6b36be6a$export$4aadace30e70896c as ReadShapeType, $69fbb77d6b36be6a$export$9de1cbd05aa4e4a2 as MoveShapeType, $69fbb77d6b36be6a$export$6a65061ecd1ed015 as AnnounceShapeType, $69fbb77d6b36be6a$export$772907b34ccd38da as FlagShapeType, $69fbb77d6b36be6a$export$6280f1022b022237 as DislikeShapeType, $69fbb77d6b36be6a$export$dc3522f479d91405 as ArriveShapeType, $69fbb77d6b36be6a$export$1a4b6fd809c5438 as TravelShapeType, $69fbb77d6b36be6a$export$eac099d4a1b658a2 as QuestionShapeType, $69fbb77d6b36be6a$export$e44d01b2a5be2258 as TentativeAcceptShapeType, $69fbb77d6b36be6a$export$8a55b09e07eee057 as BlockShapeType, $69fbb77d6b36be6a$export$7eb06d840cd48ae1 as ApplicationShapeType, $69fbb77d6b36be6a$export$cfa2681679f25fd as GroupShapeType, $69fbb77d6b36be6a$export$7d3c4a9772d49f4b as OrganizationShapeType, $69fbb77d6b36be6a$export$5f641edbe0260f3 as PersonShapeType, $69fbb77d6b36be6a$export$2167ff40709826a7 as ServiceShapeType, $69fbb77d6b36be6a$export$9ce6e99fcca40947 as RelationshipShapeType, $69fbb77d6b36be6a$export$567343fec6bc2c67 as DocumentShapeType, $69fbb77d6b36be6a$export$e95d69cde7699941 as ArticleShapeType, $69fbb77d6b36be6a$export$98a873e8b95d6baf as AudioShapeType, $69fbb77d6b36be6a$export$dea7974d2ab9d5f9 as ImageShapeType, $69fbb77d6b36be6a$export$4df0c0c211bb75ea as VideoShapeType, $69fbb77d6b36be6a$export$8d5a952ef4e9f114 as NoteShapeType, $69fbb77d6b36be6a$export$899495320525d3ad as PageShapeType, $69fbb77d6b36be6a$export$53e4cd7400e6ee51 as EventShapeType, $69fbb77d6b36be6a$export$ab061787a3ad797b as PlaceShapeType, $69fbb77d6b36be6a$export$57b2cf11a29eb701 as MentionShapeType, $69fbb77d6b36be6a$export$84c06d7a4d4dca59 as ProfileShapeType, $69fbb77d6b36be6a$export$d4c5034320ad7d23 as TombstoneShapeType, $f5da5fe4bb3a5c60$export$6cb580950f960f8 as SolidNotificationContext, $3278b757a0226216$export$ea6652556b7356f as SolidNotificationSchema, $0c862ea91c28280b$export$51daf0a9e553c5b3 as DescriptionResourceShapeType, $0c862ea91c28280b$export$9e1b4131740fbe8 as SubscriptionServiceShapeType, $0c862ea91c28280b$export$852cddb4525b12fc as NotificationChannelShapeType, $0c862ea91c28280b$export$4426abcac492061f as NotificationMessageShapeType};
//# sourceMappingURL=index.cjs.js.map

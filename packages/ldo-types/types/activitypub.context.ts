import { LdoJsonldContext } from "@ldo/ldo";

/**
 * =============================================================================
 * activitypubContext: JSONLD Context for activitypub
 * =============================================================================
 */
export const activitypubContext: LdoJsonldContext = {
  type: {
    "@id": "@type",
    "@type": "https://www.w3.org/ns/activitystreams#Object",
  },
  attachment: {
    "@id": "https://www.w3.org/ns/activitystreams#attachment",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  attributedTo: {
    "@id": "https://www.w3.org/ns/activitystreams#attributedTo",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  audience: {
    "@id": "https://www.w3.org/ns/activitystreams#audience",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  bcc: {
    "@id": "https://www.w3.org/ns/activitystreams#bcc",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  bto: {
    "@id": "https://www.w3.org/ns/activitystreams#bto",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  cc: {
    "@id": "https://www.w3.org/ns/activitystreams#cc",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  content: {
    "@id": "https://www.w3.org/ns/activitystreams#content",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  context: {
    "@id": "https://www.w3.org/ns/activitystreams#context",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  generator: {
    "@id": "https://www.w3.org/ns/activitystreams#generator",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  icon: {
    "@id": "https://www.w3.org/ns/activitystreams#icon",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  image: {
    "@id": "https://www.w3.org/ns/activitystreams#image",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  inReplyTo: {
    "@id": "https://www.w3.org/ns/activitystreams#inReplyTo",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  location: {
    "@id": "https://www.w3.org/ns/activitystreams#location",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  name: {
    "@id": "https://www.w3.org/ns/activitystreams#name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  preview: {
    "@id": "https://www.w3.org/ns/activitystreams#preview",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  replies: {
    "@id": "https://www.w3.org/ns/activitystreams#replies",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  summary: {
    "@id": "https://www.w3.org/ns/activitystreams#summary",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  tag: {
    "@id": "https://www.w3.org/ns/activitystreams#tag",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  to: {
    "@id": "https://www.w3.org/ns/activitystreams#to",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  url: {
    "@id": "https://www.w3.org/ns/activitystreams#url",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  duration: {
    "@id": "https://www.w3.org/ns/activitystreams#duration",
    "@type": "http://www.w3.org/2001/XMLSchema#duration",
  },
  endTime: {
    "@id": "https://www.w3.org/ns/activitystreams#endTime",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  id: {
    "@id": "https://www.w3.org/ns/activitystreams#id",
    "@type": "@id",
  },
  mediaType: {
    "@id": "https://www.w3.org/ns/activitystreams#mediaType",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  published: {
    "@id": "https://www.w3.org/ns/activitystreams#published",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  startTime: {
    "@id": "https://www.w3.org/ns/activitystreams#startTime",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  updated: {
    "@id": "https://www.w3.org/ns/activitystreams#updated",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  Link: {
    "@id": "https://www.w3.org/ns/activitystreams#Link",
    "@context": {
      type: {
        "@id": "@type",
      },
      name: {
        "@id": "https://www.w3.org/ns/activitystreams#name",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      preview: {
        "@id": "https://www.w3.org/ns/activitystreams#preview",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true,
      },
      height: {
        "@id": "https://www.w3.org/ns/activitystreams#height",
        "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
      },
      href: {
        "@id": "https://www.w3.org/ns/activitystreams#href",
        "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
      },
      hreflang: {
        "@id": "https://www.w3.org/ns/activitystreams#hreflang",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      id: {
        "@id": "https://www.w3.org/ns/activitystreams#id",
        "@type": "@id",
      },
      mediaType: {
        "@id": "https://www.w3.org/ns/activitystreams#mediaType",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      rel: {
        "@id": "https://www.w3.org/ns/activitystreams#rel",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true,
      },
      width: {
        "@id": "https://www.w3.org/ns/activitystreams#width",
        "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
      },
    },
  },
  height: {
    "@id": "https://www.w3.org/ns/activitystreams#height",
    "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
  },
  href: {
    "@id": "https://www.w3.org/ns/activitystreams#href",
    "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
  },
  hreflang: {
    "@id": "https://www.w3.org/ns/activitystreams#hreflang",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  rel: {
    "@id": "https://www.w3.org/ns/activitystreams#rel",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  width: {
    "@id": "https://www.w3.org/ns/activitystreams#width",
    "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
  },
  actor: {
    "@id": "https://www.w3.org/ns/activitystreams#actor",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  instrument: {
    "@id": "https://www.w3.org/ns/activitystreams#instrument",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  object: {
    "@id": "https://www.w3.org/ns/activitystreams#object",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  origin: {
    "@id": "https://www.w3.org/ns/activitystreams#origin",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  result: {
    "@id": "https://www.w3.org/ns/activitystreams#result",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  target: {
    "@id": "https://www.w3.org/ns/activitystreams#target",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  totalItems: {
    "@id": "https://www.w3.org/ns/activitystreams#totalItems",
    "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
  },
  current: {
    "@id": "https://www.w3.org/ns/activitystreams#current",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  first: {
    "@id": "https://www.w3.org/ns/activitystreams#first",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  items: {
    "@id": "https://www.w3.org/ns/activitystreams#items",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  last: {
    "@id": "https://www.w3.org/ns/activitystreams#last",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  orderedItems: {
    "@id": "https://www.w3.org/ns/activitystreams#orderedItems",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  next: {
    "@id": "https://www.w3.org/ns/activitystreams#next",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  partOf: {
    "@id": "https://www.w3.org/ns/activitystreams#partOf",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  prev: {
    "@id": "https://www.w3.org/ns/activitystreams#prev",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  startIndex: {
    "@id": "https://www.w3.org/ns/activitystreams#startIndex",
    "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
  },
  oneOf: {
    "@id": "https://www.w3.org/ns/activitystreams#oneOf",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  anyOf: {
    "@id": "https://www.w3.org/ns/activitystreams#anyOf",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  closed: {
    "@id": "https://www.w3.org/ns/activitystreams#closed",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  subject: {
    "@id": "https://www.w3.org/ns/activitystreams#subject",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  relationship: {
    "@id": "https://www.w3.org/ns/activitystreams#relationship",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  accuracy: {
    "@id": "https://www.w3.org/ns/activitystreams#accuracy",
    "@type": "http://www.w3.org/2001/XMLSchema#float",
  },
  altitude: {
    "@id": "https://www.w3.org/ns/activitystreams#altitude",
    "@type": "http://www.w3.org/2001/XMLSchema#float",
  },
  latitude: {
    "@id": "https://www.w3.org/ns/activitystreams#latitude",
    "@type": "http://www.w3.org/2001/XMLSchema#float",
  },
  longitude: {
    "@id": "https://www.w3.org/ns/activitystreams#longitude",
    "@type": "http://www.w3.org/2001/XMLSchema#float",
  },
  radius: {
    "@id": "https://www.w3.org/ns/activitystreams#radius",
    "@type": "http://www.w3.org/2001/XMLSchema#float",
  },
  units: {
    "@id": "https://www.w3.org/ns/activitystreams#units",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  describes: {
    "@id": "https://www.w3.org/ns/activitystreams#describes",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  formerType: {
    "@id": "https://www.w3.org/ns/activitystreams#formerType",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  deleted: {
    "@id": "https://www.w3.org/ns/activitystreams#deleted",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
};

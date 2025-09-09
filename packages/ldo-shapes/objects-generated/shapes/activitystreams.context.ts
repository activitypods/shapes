import { LdoJsonldContext } from "@ldo/ldo";

/**
 * =============================================================================
 * activitystreamsContext: JSONLD Context for activitystreams
 * =============================================================================
 */
export const activitystreamsContext: LdoJsonldContext = {
  type: {
    "@id": "@type",
    "@isCollection": true,
  },
  Object: {
    "@id": "https://www.w3.org/ns/activitystreams#Object",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
      content: {
        "@id": "https://www.w3.org/ns/activitystreams#content",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
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
      name: {
        "@id": "https://www.w3.org/ns/activitystreams#name",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      preview: {
        "@id": "https://www.w3.org/ns/activitystreams#preview",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true,
      },
      summary: {
        "@id": "https://www.w3.org/ns/activitystreams#summary",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
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
      attachment: {
        "@id": "https://www.w3.org/ns/activitystreams#attachment",
        "@type": "@id",
        "@isCollection": true,
      },
      attributedTo: {
        "@id": "https://www.w3.org/ns/activitystreams#attributedTo",
        "@type": "@id",
        "@isCollection": true,
      },
      audience: {
        "@id": "https://www.w3.org/ns/activitystreams#audience",
        "@type": "@id",
        "@isCollection": true,
      },
      bcc: {
        "@id": "https://www.w3.org/ns/activitystreams#bcc",
        "@type": "@id",
        "@isCollection": true,
      },
      bto: {
        "@id": "https://www.w3.org/ns/activitystreams#bto",
        "@type": "@id",
        "@isCollection": true,
      },
      cc: {
        "@id": "https://www.w3.org/ns/activitystreams#cc",
        "@type": "@id",
        "@isCollection": true,
      },
      context: {
        "@id": "https://www.w3.org/ns/activitystreams#context",
        "@type": "@id",
        "@isCollection": true,
      },
      generator: {
        "@id": "https://www.w3.org/ns/activitystreams#generator",
        "@type": "@id",
        "@isCollection": true,
      },
      inReplyTo: {
        "@id": "https://www.w3.org/ns/activitystreams#inReplyTo",
        "@type": "@id",
        "@isCollection": true,
      },
      location: {
        "@id": "https://www.w3.org/ns/activitystreams#location",
        "@type": "@id",
        "@isCollection": true,
      },
      replies: {
        "@id": "https://www.w3.org/ns/activitystreams#replies",
        "@type": "@id",
      },
      tag: {
        "@id": "https://www.w3.org/ns/activitystreams#tag",
        "@type": "@id",
        "@isCollection": true,
      },
      to: {
        "@id": "https://www.w3.org/ns/activitystreams#to",
        "@type": "@id",
        "@isCollection": true,
      },
    },
  },
  content: {
    "@id": "https://www.w3.org/ns/activitystreams#content",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
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
  name: {
    "@id": "https://www.w3.org/ns/activitystreams#name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  preview: {
    "@id": "https://www.w3.org/ns/activitystreams#preview",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  summary: {
    "@id": "https://www.w3.org/ns/activitystreams#summary",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
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
  attachment: {
    "@id": "https://www.w3.org/ns/activitystreams#attachment",
    "@type": "@id",
    "@isCollection": true,
  },
  attributedTo: {
    "@id": "https://www.w3.org/ns/activitystreams#attributedTo",
    "@type": "@id",
    "@isCollection": true,
  },
  audience: {
    "@id": "https://www.w3.org/ns/activitystreams#audience",
    "@type": "@id",
    "@isCollection": true,
  },
  bcc: {
    "@id": "https://www.w3.org/ns/activitystreams#bcc",
    "@type": "@id",
    "@isCollection": true,
  },
  bto: {
    "@id": "https://www.w3.org/ns/activitystreams#bto",
    "@type": "@id",
    "@isCollection": true,
  },
  cc: {
    "@id": "https://www.w3.org/ns/activitystreams#cc",
    "@type": "@id",
    "@isCollection": true,
  },
  context: {
    "@id": "https://www.w3.org/ns/activitystreams#context",
    "@type": "@id",
    "@isCollection": true,
  },
  generator: {
    "@id": "https://www.w3.org/ns/activitystreams#generator",
    "@type": "@id",
    "@isCollection": true,
  },
  inReplyTo: {
    "@id": "https://www.w3.org/ns/activitystreams#inReplyTo",
    "@type": "@id",
    "@isCollection": true,
  },
  location: {
    "@id": "https://www.w3.org/ns/activitystreams#location",
    "@type": "@id",
    "@isCollection": true,
  },
  replies: {
    "@id": "https://www.w3.org/ns/activitystreams#replies",
    "@type": "@id",
  },
  Collection: {
    "@id": "https://www.w3.org/ns/activitystreams#Collection",
    "@context": {
      type: {
        "@id": "@type",
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
        "@type": "@id",
        "@isCollection": true,
      },
      last: {
        "@id": "https://www.w3.org/ns/activitystreams#last",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
    },
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
    "@type": "@id",
    "@isCollection": true,
  },
  last: {
    "@id": "https://www.w3.org/ns/activitystreams#last",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  tag: {
    "@id": "https://www.w3.org/ns/activitystreams#tag",
    "@type": "@id",
    "@isCollection": true,
  },
  to: {
    "@id": "https://www.w3.org/ns/activitystreams#to",
    "@type": "@id",
    "@isCollection": true,
  },
  Link: {
    "@id": "https://www.w3.org/ns/activitystreams#Link",
    "@context": {
      type: {
        "@id": "@type",
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
  id: {
    "@id": "https://www.w3.org/ns/activitystreams#id",
    "@type": "@id",
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
  Activity: {
    "@id": "https://www.w3.org/ns/activitystreams#Activity",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
      actor: {
        "@id": "https://www.w3.org/ns/activitystreams#actor",
        "@type": "@id",
        "@isCollection": true,
      },
      instrument: {
        "@id": "https://www.w3.org/ns/activitystreams#instrument",
        "@type": "@id",
        "@isCollection": true,
      },
      object: {
        "@id": "https://www.w3.org/ns/activitystreams#object",
        "@type": "@id",
        "@isCollection": true,
      },
      origin: {
        "@id": "https://www.w3.org/ns/activitystreams#origin",
        "@type": "@id",
        "@isCollection": true,
      },
      result: {
        "@id": "https://www.w3.org/ns/activitystreams#result",
        "@type": "@id",
        "@isCollection": true,
      },
      target: {
        "@id": "https://www.w3.org/ns/activitystreams#target",
        "@type": "@id",
        "@isCollection": true,
      },
    },
  },
  actor: {
    "@id": "https://www.w3.org/ns/activitystreams#actor",
    "@type": "@id",
    "@isCollection": true,
  },
  instrument: {
    "@id": "https://www.w3.org/ns/activitystreams#instrument",
    "@type": "@id",
    "@isCollection": true,
  },
  object: {
    "@id": "https://www.w3.org/ns/activitystreams#object",
    "@type": "@id",
    "@isCollection": true,
  },
  origin: {
    "@id": "https://www.w3.org/ns/activitystreams#origin",
    "@type": "@id",
    "@isCollection": true,
  },
  result: {
    "@id": "https://www.w3.org/ns/activitystreams#result",
    "@type": "@id",
    "@isCollection": true,
  },
  target: {
    "@id": "https://www.w3.org/ns/activitystreams#target",
    "@type": "@id",
    "@isCollection": true,
  },
  IntransitiveActivity: {
    "@id": "https://www.w3.org/ns/activitystreams#IntransitiveActivity",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  OrderedCollection: {
    "@id": "https://www.w3.org/ns/activitystreams#OrderedCollection",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
      next: {
        "@id": "https://www.w3.org/ns/activitystreams#next",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      prev: {
        "@id": "https://www.w3.org/ns/activitystreams#prev",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      orderedItems: {
        "@id": "https://www.w3.org/ns/activitystreams#orderedItems",
        "@type": "@id",
        "@isCollection": true,
      },
    },
  },
  next: {
    "@id": "https://www.w3.org/ns/activitystreams#next",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  prev: {
    "@id": "https://www.w3.org/ns/activitystreams#prev",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  orderedItems: {
    "@id": "https://www.w3.org/ns/activitystreams#orderedItems",
    "@type": "@id",
    "@isCollection": true,
  },
  CollectionPage: {
    "@id": "https://www.w3.org/ns/activitystreams#CollectionPage",
    "@context": {
      type: {
        "@id": "@type",
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
    },
  },
  partOf: {
    "@id": "https://www.w3.org/ns/activitystreams#partOf",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  OrderedCollectionPage: {
    "@id": "https://www.w3.org/ns/activitystreams#OrderedCollectionPage",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
      startIndex: {
        "@id": "https://www.w3.org/ns/activitystreams#startIndex",
        "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
      },
    },
  },
  startIndex: {
    "@id": "https://www.w3.org/ns/activitystreams#startIndex",
    "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
  },
  Accept: {
    "@id": "https://www.w3.org/ns/activitystreams#Accept",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Add: {
    "@id": "https://www.w3.org/ns/activitystreams#Add",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Create: {
    "@id": "https://www.w3.org/ns/activitystreams#Create",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Delete: {
    "@id": "https://www.w3.org/ns/activitystreams#Delete",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Follow: {
    "@id": "https://www.w3.org/ns/activitystreams#Follow",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Ignore: {
    "@id": "https://www.w3.org/ns/activitystreams#Ignore",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Join: {
    "@id": "https://www.w3.org/ns/activitystreams#Join",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Leave: {
    "@id": "https://www.w3.org/ns/activitystreams#Leave",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Like: {
    "@id": "https://www.w3.org/ns/activitystreams#Like",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Offer: {
    "@id": "https://www.w3.org/ns/activitystreams#Offer",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Invite: {
    "@id": "https://www.w3.org/ns/activitystreams#Invite",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Reject: {
    "@id": "https://www.w3.org/ns/activitystreams#Reject",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  TentativeReject: {
    "@id": "https://www.w3.org/ns/activitystreams#TentativeReject",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Remove: {
    "@id": "https://www.w3.org/ns/activitystreams#Remove",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Undo: {
    "@id": "https://www.w3.org/ns/activitystreams#Undo",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Update: {
    "@id": "https://www.w3.org/ns/activitystreams#Update",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  View: {
    "@id": "https://www.w3.org/ns/activitystreams#View",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Listen: {
    "@id": "https://www.w3.org/ns/activitystreams#Listen",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Read: {
    "@id": "https://www.w3.org/ns/activitystreams#Read",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Move: {
    "@id": "https://www.w3.org/ns/activitystreams#Move",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Announce: {
    "@id": "https://www.w3.org/ns/activitystreams#Announce",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Flag: {
    "@id": "https://www.w3.org/ns/activitystreams#Flag",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Dislike: {
    "@id": "https://www.w3.org/ns/activitystreams#Dislike",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Arrive: {
    "@id": "https://www.w3.org/ns/activitystreams#Arrive",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Travel: {
    "@id": "https://www.w3.org/ns/activitystreams#Travel",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Question: {
    "@id": "https://www.w3.org/ns/activitystreams#Question",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
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
    },
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
  TentativeAccept: {
    "@id": "https://www.w3.org/ns/activitystreams#TentativeAccept",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Block: {
    "@id": "https://www.w3.org/ns/activitystreams#Block",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Application: {
    "@id": "https://www.w3.org/ns/activitystreams#Application",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Group: {
    "@id": "https://www.w3.org/ns/activitystreams#Group",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Organization: {
    "@id": "https://www.w3.org/ns/activitystreams#Organization",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Person: {
    "@id": "https://www.w3.org/ns/activitystreams#Person",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Service: {
    "@id": "https://www.w3.org/ns/activitystreams#Service",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Relationship: {
    "@id": "https://www.w3.org/ns/activitystreams#Relationship",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
      subject: {
        "@id": "https://www.w3.org/ns/activitystreams#subject",
        "@type": "@id",
        "@isCollection": true,
      },
      object: {
        "@id": "https://www.w3.org/ns/activitystreams#object",
        "@type": "@id",
        "@isCollection": true,
      },
      relationship: {
        "@id": "https://www.w3.org/ns/activitystreams#relationship",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true,
      },
    },
  },
  subject: {
    "@id": "https://www.w3.org/ns/activitystreams#subject",
    "@type": "@id",
    "@isCollection": true,
  },
  relationship: {
    "@id": "https://www.w3.org/ns/activitystreams#relationship",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  Document: {
    "@id": "https://www.w3.org/ns/activitystreams#Document",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Article: {
    "@id": "https://www.w3.org/ns/activitystreams#Article",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Audio: {
    "@id": "https://www.w3.org/ns/activitystreams#Audio",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Image: {
    "@id": "https://www.w3.org/ns/activitystreams#Image",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Video: {
    "@id": "https://www.w3.org/ns/activitystreams#Video",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Note: {
    "@id": "https://www.w3.org/ns/activitystreams#Note",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Page: {
    "@id": "https://www.w3.org/ns/activitystreams#Page",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Event: {
    "@id": "https://www.w3.org/ns/activitystreams#Event",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Place: {
    "@id": "https://www.w3.org/ns/activitystreams#Place",
    "@context": {
      type: {
        "@id": "@type",
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
    },
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
  Mention: {
    "@id": "https://www.w3.org/ns/activitystreams#Mention",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Profile: {
    "@id": "https://www.w3.org/ns/activitystreams#Profile",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
      describes: {
        "@id": "https://www.w3.org/ns/activitystreams#describes",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
    },
  },
  describes: {
    "@id": "https://www.w3.org/ns/activitystreams#describes",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  Tombstone: {
    "@id": "https://www.w3.org/ns/activitystreams#Tombstone",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
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
    },
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

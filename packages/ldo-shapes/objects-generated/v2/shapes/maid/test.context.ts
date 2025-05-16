import { LdoJsonldContext } from "@ldo/ldo";

/**
 * =============================================================================
 * testContext: JSONLD Context for test
 * =============================================================================
 */
export const testContext: LdoJsonldContext = {
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
};

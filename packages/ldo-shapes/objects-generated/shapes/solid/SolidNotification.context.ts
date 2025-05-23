import { LdoJsonldContext } from "@ldo/ldo";

/**
 * =============================================================================
 * SolidNotificationContext: JSONLD Context for SolidNotification
 * =============================================================================
 */
export const SolidNotificationContext: LdoJsonldContext = {
  id: {
    "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#id",
    "@type": "@id",
  },
  subscription: {
    "@id": "http://www.w3.org/ns/solid/notifications#subscription",
    "@type": "@id",
    "@isCollection": true,
  },
  channel: {
    "@id": "http://www.w3.org/ns/solid/notifications#channel",
    "@type": "@id",
    "@isCollection": true,
  },
  channelType: {
    "@id": "http://www.w3.org/ns/solid/notifications#channelType",
    "@type": "@id",
  },
  feature: {
    "@id": "http://www.w3.org/ns/solid/notifications#feature",
    "@type": "@id",
    "@isCollection": true,
  },
  type: {
    "@id": "@type",
    "@type": "@id",
    "@isCollection": true,
  },
  topic: {
    "@id": "http://www.w3.org/ns/solid/notifications#topic",
    "@type": "@id",
    "@isCollection": true,
  },
  receiveFrom: {
    "@id": "http://www.w3.org/ns/solid/notifications#receiveFrom",
    "@type": "@id",
  },
  sendTo: {
    "@id": "http://www.w3.org/ns/solid/notifications#sendTo",
    "@type": "@id",
  },
  sender: {
    "@id": "http://www.w3.org/ns/solid/notifications#sender",
    "@type": "@id",
  },
  startAt: {
    "@id": "http://www.w3.org/ns/solid/notifications#startAt",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  endAt: {
    "@id": "http://www.w3.org/ns/solid/notifications#endAt",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  state: {
    "@id": "http://www.w3.org/ns/solid/notifications#state",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  rate: {
    "@id": "http://www.w3.org/ns/solid/notifications#rate",
    "@type": "http://www.w3.org/2001/XMLSchema#duration",
  },
  accept: {
    "@id": "http://www.w3.org/ns/solid/notifications#accept",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  object: {
    "@id": "https://www.w3.org/ns/activitystreams#object",
    "@type": "@id",
  },
  published: {
    "@id": "https://www.w3.org/ns/activitystreams#published",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  target: {
    "@id": "https://www.w3.org/ns/activitystreams#target",
    "@type": "@id",
    "@isCollection": true,
  },
};

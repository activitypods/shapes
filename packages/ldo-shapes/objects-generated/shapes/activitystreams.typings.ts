import { LdoJsonldContext, LdSet } from "@ldo/ldo";

/**
 * =============================================================================
 * Typescript Typings for activitystreams
 * =============================================================================
 */

/**
 * Object Type
 */
export interface Object {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<{
    "@id": "Object";
  }>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Link Type
 */
export interface Link {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<{
    "@id": "Link";
  }>;
  name?: string;
  preview?: LdSet<string>;
  height?: number;
  href?: string;
  hreflang?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  rel?: LdSet<string>;
  width?: number;
}

/**
 * Activity Type
 */
export interface Activity {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * IntransitiveActivity Type
 */
export interface IntransitiveActivity {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "IntransitiveActivity";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Collection Type
 */
export interface Collection {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Collection";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  totalItems?: number;
  current?: string;
  first?: string;
  items?: LdSet<Object>;
  last?: string;
}

/**
 * OrderedCollection Type
 */
export interface OrderedCollection {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "OrderedCollection";
      }
    | {
        "@id": "Collection";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  totalItems?: number;
  current?: string;
  first?: string;
  items?: LdSet<Object>;
  last?: string;
  next?: string;
  prev?: string;
  orderedItems?: LdSet<Object>;
}

/**
 * CollectionPage Type
 */
export interface CollectionPage {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "CollectionPage";
      }
    | {
        "@id": "Collection";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  totalItems?: number;
  current?: string;
  first?: string;
  items?: LdSet<Object>;
  last?: string;
  next?: string;
  partOf?: string;
  prev?: string;
}

/**
 * OrderedCollectionPage Type
 */
export interface OrderedCollectionPage {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "OrderedCollectionPage";
      }
    | {
        "@id": "OrderedCollection";
      }
    | {
        "@id": "Collection";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  totalItems?: number;
  current?: string;
  first?: string;
  items?: LdSet<Object>;
  last?: string;
  next?: string;
  prev?: string;
  orderedItems?: LdSet<Object>;
  startIndex?: number;
}

/**
 * Accept Type
 */
export interface Accept {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Accept";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Add Type
 */
export interface Add {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Add";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Create Type
 */
export interface Create {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Create";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Delete Type
 */
export interface Delete {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Delete";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Follow Type
 */
export interface Follow {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Follow";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Ignore Type
 */
export interface Ignore {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Ignore";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Join Type
 */
export interface Join {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Join";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Leave Type
 */
export interface Leave {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Leave";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Like Type
 */
export interface Like {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Like";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Offer Type
 */
export interface Offer {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Offer";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Invite Type
 */
export interface Invite {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Invite";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Reject Type
 */
export interface Reject {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Reject";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * TentativeReject Type
 */
export interface TentativeReject {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "TentativeReject";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Remove Type
 */
export interface Remove {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Remove";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Undo Type
 */
export interface Undo {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Undo";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Update Type
 */
export interface Update {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Update";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * View Type
 */
export interface View {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "View";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Listen Type
 */
export interface Listen {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Listen";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Read Type
 */
export interface Read {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Read";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Move Type
 */
export interface Move {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Move";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Announce Type
 */
export interface Announce {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Announce";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Flag Type
 */
export interface Flag {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Flag";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Dislike Type
 */
export interface Dislike {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Dislike";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Arrive Type
 */
export interface Arrive {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Arrive";
      }
    | {
        "@id": "IntransitiveActivity";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Travel Type
 */
export interface Travel {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Travel";
      }
    | {
        "@id": "IntransitiveActivity";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Question Type
 */
export interface Question {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Question";
      }
    | {
        "@id": "IntransitiveActivity";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
  oneOf?: LdSet<string>;
  anyOf?: LdSet<string>;
  closed?: string;
}

/**
 * TentativeAccept Type
 */
export interface TentativeAccept {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "TentativeAccept";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Block Type
 */
export interface Block {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Block";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  actor?: LdSet<Object>;
  instrument?: LdSet<Object>;
  object?: LdSet<Object>;
  origin?: LdSet<Object>;
  result?: LdSet<Object>;
  target?: LdSet<Object>;
}

/**
 * Application Type
 */
export interface Application {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Application";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Group Type
 */
export interface Group {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Group";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Organization Type
 */
export interface Organization {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Organization";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Person Type
 */
export interface Person {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Person";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Service Type
 */
export interface Service {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Service";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Relationship Type
 */
export interface Relationship {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Relationship";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  subject?: LdSet<Object>;
  object?: LdSet<Object>;
  relationship?: LdSet<string>;
}

/**
 * Document Type
 */
export interface Document {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Document";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Article Type
 */
export interface Article {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Article";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Audio Type
 */
export interface Audio {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Audio";
      }
    | {
        "@id": "Document";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Image Type
 */
export interface Image {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Image";
      }
    | {
        "@id": "Document";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Video Type
 */
export interface Video {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Video";
      }
    | {
        "@id": "Document";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Note Type
 */
export interface Note {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Note";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Page Type
 */
export interface Page {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Page";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Event Type
 */
export interface Event {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Event";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
}

/**
 * Place Type
 */
export interface Place {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Place";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  accuracy?: string;
  altitude?: string;
  latitude?: string;
  longitude?: string;
  radius?: string;
  units?: string;
}

/**
 * Mention Type
 */
export interface Mention {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Mention";
      }
    | {
        "@id": "Link";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  name?: string;
  preview?: LdSet<string>;
  height?: number;
  href?: string;
  hreflang?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  rel?: LdSet<string>;
  width?: number;
}

/**
 * Profile Type
 */
export interface Profile {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Profile";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  describes?: string;
}

/**
 * Tombstone Type
 */
export interface Tombstone {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | {
        "@id": "Tombstone";
      }
    | {
        "@id": "Object";
      }
  >;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  content?: string;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  summary?: string;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  attachment?: LdSet<Object>;
  attributedTo?: LdSet<Object>;
  audience?: LdSet<Object>;
  bcc?: LdSet<Object>;
  bto?: LdSet<Object>;
  cc?: LdSet<Object>;
  context?: LdSet<Object>;
  generator?: LdSet<Object>;
  inReplyTo?: LdSet<Object>;
  location?: LdSet<Object>;
  replies?: Collection;
  tag?: LdSet<Object>;
  to?: LdSet<Object>;
  formerType?: LdSet<string>;
  deleted?: string;
}

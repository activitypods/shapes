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
  type: string;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
}

/**
 * Link Type
 */
export interface Link {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: {
    "@id": "Link";
  };
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
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * IntransitiveActivity Type
 */
export interface IntransitiveActivity {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * Collection Type
 */
export interface Collection {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  totalItems?: number;
  current?: string;
  first?: string;
  items?: LdSet<string>;
  last?: string;
}

/**
 * OrderedCollection Type
 */
export interface OrderedCollection {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  totalItems?: number;
  current?: string;
  first?: string;
  items?: LdSet<string>;
  last?: string;
  next?: string;
  prev?: string;
  orderedItems?: LdSet<string>;
}

/**
 * CollectionPage Type
 */
export interface CollectionPage {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  totalItems?: number;
  current?: string;
  first?: string;
  items?: LdSet<string>;
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
  type: LdSet<string | string | string | string>;
  "@id"?: LdSet<string | string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  totalItems?: number;
  current?: string;
  first?: string;
  items?: LdSet<string>;
  last?: string;
  next?: string;
  prev?: string;
  orderedItems?: LdSet<string>;
  startIndex?: number;
}

/**
 * AcceptShape Type
 */
export interface AcceptShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * AddShape Type
 */
export interface AddShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * CreateShape Type
 */
export interface CreateShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * DeleteShape Type
 */
export interface DeleteShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * FollowShape Type
 */
export interface FollowShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * IgnoreShape Type
 */
export interface IgnoreShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * JoinShape Type
 */
export interface JoinShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * LeaveShape Type
 */
export interface LeaveShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * LikeShape Type
 */
export interface LikeShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * OfferShape Type
 */
export interface OfferShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * InviteShape Type
 */
export interface InviteShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * RejectShape Type
 */
export interface RejectShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * TentativeRejectShape Type
 */
export interface TentativeRejectShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * RemoveShape Type
 */
export interface RemoveShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * UndoShape Type
 */
export interface UndoShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * UpdateShape Type
 */
export interface UpdateShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * ViewShape Type
 */
export interface ViewShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * ListenShape Type
 */
export interface ListenShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * ReadShape Type
 */
export interface ReadShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * MoveShape Type
 */
export interface MoveShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * AnnounceShape Type
 */
export interface AnnounceShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * FlagShape Type
 */
export interface FlagShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * DislikeShape Type
 */
export interface DislikeShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * ArriveShape Type
 */
export interface ArriveShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string | string>;
  "@id"?: LdSet<string | string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * TravelShape Type
 */
export interface TravelShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string | string>;
  "@id"?: LdSet<string | string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * Question Type
 */
export interface Question {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string | string>;
  "@id"?: LdSet<string | string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
  oneOf?: LdSet<string>;
  anyOf?: LdSet<string>;
  closed?: string;
}

/**
 * TentativeAcceptShape Type
 */
export interface TentativeAcceptShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * BlockShape Type
 */
export interface BlockShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string | string>;
  "@id"?: LdSet<string | string>;
  "@context"?: LdSet<LdoJsonldContext | LdoJsonldContext>;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  actor?: LdSet<string>;
  instrument?: LdSet<string>;
  object?: LdSet<string>;
  origin?: LdSet<string>;
  result?: LdSet<string>;
  target?: LdSet<string>;
}

/**
 * ApplicationShape Type
 */
export interface ApplicationShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
}

/**
 * GroupShape Type
 */
export interface GroupShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
}

/**
 * OrganizationShape Type
 */
export interface OrganizationShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
}

/**
 * PersonShape Type
 */
export interface PersonShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
}

/**
 * ServiceShape Type
 */
export interface ServiceShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
}

/**
 * Relationship Type
 */
export interface Relationship {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  subject?: LdSet<string>;
  object?: LdSet<string>;
  relationship?: LdSet<string>;
}

/**
 * DocumentShape Type
 */
export interface DocumentShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
}

/**
 * ArticleShape Type
 */
export interface ArticleShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
}

/**
 * AudioShape Type
 */
export interface AudioShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: string;
}

/**
 * ImageShape Type
 */
export interface ImageShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: string;
}

/**
 * VideoShape Type
 */
export interface VideoShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: string;
}

/**
 * NoteShape Type
 */
export interface NoteShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
}

/**
 * PageShape Type
 */
export interface PageShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
}

/**
 * EventShape Type
 */
export interface EventShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
}

/**
 * Place Type
 */
export interface Place {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  accuracy?: string;
  altitude?: string;
  latitude?: string;
  longitude?: string;
  radius?: string;
  units?: string;
}

/**
 * MentionShape Type
 */
export interface MentionShape {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<
    | string
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
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  describes?: string;
}

/**
 * Tombstone Type
 */
export interface Tombstone {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<string | string>;
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  attachment?: LdSet<string>;
  attributedTo?: LdSet<string>;
  audience?: LdSet<string>;
  bcc?: LdSet<string>;
  bto?: LdSet<string>;
  cc?: LdSet<string>;
  content?: string;
  context?: LdSet<string>;
  generator?: LdSet<string>;
  icon?: LdSet<string>;
  image?: LdSet<string>;
  inReplyTo?: LdSet<string>;
  location?: LdSet<string>;
  name?: string;
  preview?: LdSet<string>;
  replies?: string;
  summary?: string;
  tag?: LdSet<string>;
  to?: LdSet<string>;
  url?: LdSet<string>;
  duration?: string;
  endTime?: string;
  id?: {
    "@id": string;
  };
  mediaType?: string;
  published?: string;
  startTime?: string;
  updated?: string;
  formerType?: LdSet<string>;
  deleted?: string;
}

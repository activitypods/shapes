import { LdoJsonldContext, LdSet } from "@ldo/ldo";

/**
 * =============================================================================
 * Typescript Typings for test
 * =============================================================================
 */

/**
 * Ex Type
 */
export interface Ex {
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

import { LdoJsonldContext, LdSet } from "@ldo/ldo";

/**
 * =============================================================================
 * Typescript Typings for SolidNotification
 * =============================================================================
 */

/**
 * DescriptionResource Type
 */
export interface DescriptionResource {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  id: {
    "@id": string;
  };
  subscription?: LdSet<{
    "@id": string;
  }>;
  channel?: LdSet<{
    "@id": string;
  }>;
}

/**
 * SubscriptionService Type
 */
export interface SubscriptionService {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  id: {
    "@id": string;
  };
  channelType: {
    "@id": string;
  };
  feature?: LdSet<{
    "@id": string;
  }>;
}

/**
 * NotificationChannel Type
 */
export interface NotificationChannel {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  id: {
    "@id": string;
  };
  type: {
    "@id": string;
  };
  topic: LdSet<{
    "@id": string;
  }>;
  receiveFrom?: {
    "@id": string;
  };
  sendTo?: {
    "@id": string;
  };
  sender?: {
    "@id": string;
  };
  startAt?: string;
  endAt?: string;
  state?: string;
  rate?: string;
  accept?: string;
}

/**
 * NotificationMessage Type
 */
export interface NotificationMessage {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  id: {
    "@id": string;
  };
  type: LdSet<{
    "@id": string;
  }>;
  object: {
    "@id": string;
  };
  published: string;
  target?: LdSet<{
    "@id": string;
  }>;
  state?: string;
}

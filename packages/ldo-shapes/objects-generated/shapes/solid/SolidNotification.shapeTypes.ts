import { ShapeType } from "@ldo/ldo";
import { SolidNotificationSchema } from "./SolidNotification.schema";
import { SolidNotificationContext } from "./SolidNotification.context";
import {
  DescriptionResource,
  SubscriptionService,
  NotificationChannel,
  NotificationMessage,
} from "./SolidNotification.typings";

/**
 * =============================================================================
 * LDO ShapeTypes SolidNotification
 * =============================================================================
 */

/**
 * DescriptionResource ShapeType
 */
export const DescriptionResourceShapeType: ShapeType<DescriptionResource> = {
  schema: SolidNotificationSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/solid#DescriptionResource",
  context: SolidNotificationContext,
};

/**
 * SubscriptionService ShapeType
 */
export const SubscriptionServiceShapeType: ShapeType<SubscriptionService> = {
  schema: SolidNotificationSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/solid#SubscriptionServiceShape",
  context: SolidNotificationContext,
};

/**
 * NotificationChannel ShapeType
 */
export const NotificationChannelShapeType: ShapeType<NotificationChannel> = {
  schema: SolidNotificationSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/solid#NotificationChannelShape",
  context: SolidNotificationContext,
};

/**
 * NotificationMessage ShapeType
 */
export const NotificationMessageShapeType: ShapeType<NotificationMessage> = {
  schema: SolidNotificationSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/solid#NotificationMessageShape",
  context: SolidNotificationContext,
};

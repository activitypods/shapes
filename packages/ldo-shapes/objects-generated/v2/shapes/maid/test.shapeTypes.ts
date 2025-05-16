import { ShapeType } from "@ldo/ldo";
import { testSchema } from "./test.schema";
import { testContext } from "./test.context";
import { Ex } from "./test.typings";

/**
 * =============================================================================
 * LDO ShapeTypes test
 * =============================================================================
 */

/**
 * Ex ShapeType
 */
export const ExShapeType: ShapeType<Ex> = {
  schema: testSchema,
  shape: "https://ldo.js.org/shapes/activitypub#Ex",
  context: testContext,
};

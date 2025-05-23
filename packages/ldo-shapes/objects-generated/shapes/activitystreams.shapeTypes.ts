import { ShapeType } from "@ldo/ldo";
import { activitystreamsSchema } from "./activitystreams.schema";
import { activitystreamsContext } from "./activitystreams.context";
import {
  Object,
  Link,
  Activity,
  IntransitiveActivity,
  Collection,
  OrderedCollection,
  CollectionPage,
  OrderedCollectionPage,
  AcceptShape,
  AddShape,
  CreateShape,
  DeleteShape,
  FollowShape,
  IgnoreShape,
  JoinShape,
  LeaveShape,
  LikeShape,
  OfferShape,
  InviteShape,
  RejectShape,
  TentativeRejectShape,
  RemoveShape,
  UndoShape,
  UpdateShape,
  ViewShape,
  ListenShape,
  ReadShape,
  MoveShape,
  AnnounceShape,
  FlagShape,
  DislikeShape,
  ArriveShape,
  TravelShape,
  Question,
  TentativeAcceptShape,
  BlockShape,
  ApplicationShape,
  GroupShape,
  OrganizationShape,
  PersonShape,
  ServiceShape,
  Relationship,
  DocumentShape,
  ArticleShape,
  AudioShape,
  ImageShape,
  VideoShape,
  NoteShape,
  PageShape,
  EventShape,
  Place,
  MentionShape,
  Profile,
  Tombstone,
} from "./activitystreams.typings";

/**
 * =============================================================================
 * LDO ShapeTypes activitystreams
 * =============================================================================
 */

/**
 * Object ShapeType
 */
export const ObjectShapeType: ShapeType<Object> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Object",
  context: activitystreamsContext,
};

/**
 * Link ShapeType
 */
export const LinkShapeType: ShapeType<Link> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Link",
  context: activitystreamsContext,
};

/**
 * Activity ShapeType
 */
export const ActivityShapeType: ShapeType<Activity> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Activity",
  context: activitystreamsContext,
};

/**
 * IntransitiveActivity ShapeType
 */
export const IntransitiveActivityShapeType: ShapeType<IntransitiveActivity> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#IntransitiveActivity",
  context: activitystreamsContext,
};

/**
 * Collection ShapeType
 */
export const CollectionShapeType: ShapeType<Collection> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Collection",
  context: activitystreamsContext,
};

/**
 * OrderedCollection ShapeType
 */
export const OrderedCollectionShapeType: ShapeType<OrderedCollection> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#OrderedCollection",
  context: activitystreamsContext,
};

/**
 * CollectionPage ShapeType
 */
export const CollectionPageShapeType: ShapeType<CollectionPage> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#CollectionPage",
  context: activitystreamsContext,
};

/**
 * OrderedCollectionPage ShapeType
 */
export const OrderedCollectionPageShapeType: ShapeType<OrderedCollectionPage> =
  {
    schema: activitystreamsSchema,
    shape:
      "https://shapes.activitypods.org/v2/shapes/activitystreams#OrderedCollectionPage",
    context: activitystreamsContext,
  };

/**
 * AcceptShape ShapeType
 */
export const AcceptShapeShapeType: ShapeType<AcceptShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#AcceptShape",
  context: activitystreamsContext,
};

/**
 * AddShape ShapeType
 */
export const AddShapeShapeType: ShapeType<AddShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#AddShape",
  context: activitystreamsContext,
};

/**
 * CreateShape ShapeType
 */
export const CreateShapeShapeType: ShapeType<CreateShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#CreateShape",
  context: activitystreamsContext,
};

/**
 * DeleteShape ShapeType
 */
export const DeleteShapeShapeType: ShapeType<DeleteShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#DeleteShape",
  context: activitystreamsContext,
};

/**
 * FollowShape ShapeType
 */
export const FollowShapeShapeType: ShapeType<FollowShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#FollowShape",
  context: activitystreamsContext,
};

/**
 * IgnoreShape ShapeType
 */
export const IgnoreShapeShapeType: ShapeType<IgnoreShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#IgnoreShape",
  context: activitystreamsContext,
};

/**
 * JoinShape ShapeType
 */
export const JoinShapeShapeType: ShapeType<JoinShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#JoinShape",
  context: activitystreamsContext,
};

/**
 * LeaveShape ShapeType
 */
export const LeaveShapeShapeType: ShapeType<LeaveShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#LeaveShape",
  context: activitystreamsContext,
};

/**
 * LikeShape ShapeType
 */
export const LikeShapeShapeType: ShapeType<LikeShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#LikeShape",
  context: activitystreamsContext,
};

/**
 * OfferShape ShapeType
 */
export const OfferShapeShapeType: ShapeType<OfferShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#OfferShape",
  context: activitystreamsContext,
};

/**
 * InviteShape ShapeType
 */
export const InviteShapeShapeType: ShapeType<InviteShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#InviteShape",
  context: activitystreamsContext,
};

/**
 * RejectShape ShapeType
 */
export const RejectShapeShapeType: ShapeType<RejectShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#RejectShape",
  context: activitystreamsContext,
};

/**
 * TentativeRejectShape ShapeType
 */
export const TentativeRejectShapeShapeType: ShapeType<TentativeRejectShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#TentativeRejectShape",
  context: activitystreamsContext,
};

/**
 * RemoveShape ShapeType
 */
export const RemoveShapeShapeType: ShapeType<RemoveShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#RemoveShape",
  context: activitystreamsContext,
};

/**
 * UndoShape ShapeType
 */
export const UndoShapeShapeType: ShapeType<UndoShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#UndoShape",
  context: activitystreamsContext,
};

/**
 * UpdateShape ShapeType
 */
export const UpdateShapeShapeType: ShapeType<UpdateShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#UpdateShape",
  context: activitystreamsContext,
};

/**
 * ViewShape ShapeType
 */
export const ViewShapeShapeType: ShapeType<ViewShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#ViewShape",
  context: activitystreamsContext,
};

/**
 * ListenShape ShapeType
 */
export const ListenShapeShapeType: ShapeType<ListenShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#ListenShape",
  context: activitystreamsContext,
};

/**
 * ReadShape ShapeType
 */
export const ReadShapeShapeType: ShapeType<ReadShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#ReadShape",
  context: activitystreamsContext,
};

/**
 * MoveShape ShapeType
 */
export const MoveShapeShapeType: ShapeType<MoveShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#MoveShape",
  context: activitystreamsContext,
};

/**
 * AnnounceShape ShapeType
 */
export const AnnounceShapeShapeType: ShapeType<AnnounceShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#AnnounceShape",
  context: activitystreamsContext,
};

/**
 * FlagShape ShapeType
 */
export const FlagShapeShapeType: ShapeType<FlagShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#FlagShape",
  context: activitystreamsContext,
};

/**
 * DislikeShape ShapeType
 */
export const DislikeShapeShapeType: ShapeType<DislikeShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#DislikeShape",
  context: activitystreamsContext,
};

/**
 * ArriveShape ShapeType
 */
export const ArriveShapeShapeType: ShapeType<ArriveShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#ArriveShape",
  context: activitystreamsContext,
};

/**
 * TravelShape ShapeType
 */
export const TravelShapeShapeType: ShapeType<TravelShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#TravelShape",
  context: activitystreamsContext,
};

/**
 * Question ShapeType
 */
export const QuestionShapeType: ShapeType<Question> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Question",
  context: activitystreamsContext,
};

/**
 * TentativeAcceptShape ShapeType
 */
export const TentativeAcceptShapeShapeType: ShapeType<TentativeAcceptShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#TentativeAcceptShape",
  context: activitystreamsContext,
};

/**
 * BlockShape ShapeType
 */
export const BlockShapeShapeType: ShapeType<BlockShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#BlockShape",
  context: activitystreamsContext,
};

/**
 * ApplicationShape ShapeType
 */
export const ApplicationShapeShapeType: ShapeType<ApplicationShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#ApplicationShape",
  context: activitystreamsContext,
};

/**
 * GroupShape ShapeType
 */
export const GroupShapeShapeType: ShapeType<GroupShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#GroupShape",
  context: activitystreamsContext,
};

/**
 * OrganizationShape ShapeType
 */
export const OrganizationShapeShapeType: ShapeType<OrganizationShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#OrganizationShape",
  context: activitystreamsContext,
};

/**
 * PersonShape ShapeType
 */
export const PersonShapeShapeType: ShapeType<PersonShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#PersonShape",
  context: activitystreamsContext,
};

/**
 * ServiceShape ShapeType
 */
export const ServiceShapeShapeType: ShapeType<ServiceShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#ServiceShape",
  context: activitystreamsContext,
};

/**
 * Relationship ShapeType
 */
export const RelationshipShapeType: ShapeType<Relationship> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#Relationship",
  context: activitystreamsContext,
};

/**
 * DocumentShape ShapeType
 */
export const DocumentShapeShapeType: ShapeType<DocumentShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#DocumentShape",
  context: activitystreamsContext,
};

/**
 * ArticleShape ShapeType
 */
export const ArticleShapeShapeType: ShapeType<ArticleShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#ArticleShape",
  context: activitystreamsContext,
};

/**
 * AudioShape ShapeType
 */
export const AudioShapeShapeType: ShapeType<AudioShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#AudioShape",
  context: activitystreamsContext,
};

/**
 * ImageShape ShapeType
 */
export const ImageShapeShapeType: ShapeType<ImageShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#ImageShape",
  context: activitystreamsContext,
};

/**
 * VideoShape ShapeType
 */
export const VideoShapeShapeType: ShapeType<VideoShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#VideoShape",
  context: activitystreamsContext,
};

/**
 * NoteShape ShapeType
 */
export const NoteShapeShapeType: ShapeType<NoteShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#NoteShape",
  context: activitystreamsContext,
};

/**
 * PageShape ShapeType
 */
export const PageShapeShapeType: ShapeType<PageShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#PageShape",
  context: activitystreamsContext,
};

/**
 * EventShape ShapeType
 */
export const EventShapeShapeType: ShapeType<EventShape> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#EventShape",
  context: activitystreamsContext,
};

/**
 * Place ShapeType
 */
export const PlaceShapeType: ShapeType<Place> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Place",
  context: activitystreamsContext,
};

/**
 * MentionShape ShapeType
 */
export const MentionShapeShapeType: ShapeType<MentionShape> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/v2/shapes/activitystreams#MentionShape",
  context: activitystreamsContext,
};

/**
 * Profile ShapeType
 */
export const ProfileShapeType: ShapeType<Profile> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Profile",
  context: activitystreamsContext,
};

/**
 * Tombstone ShapeType
 */
export const TombstoneShapeType: ShapeType<Tombstone> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/v2/shapes/activitystreams#Tombstone",
  context: activitystreamsContext,
};

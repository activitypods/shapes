import { ShapeType } from "@ldo/ldo";
import { activitypubSchema } from "./activitypub.schema";
import { activitypubContext } from "./activitypub.context";
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
} from "./activitypub.typings";

/**
 * =============================================================================
 * LDO ShapeTypes activitypub
 * =============================================================================
 */

/**
 * Object ShapeType
 */
export const ObjectShapeType: ShapeType<Object> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#Object",
  context: activitypubContext,
};

/**
 * Link ShapeType
 */
export const LinkShapeType: ShapeType<Link> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#Link",
  context: activitypubContext,
};

/**
 * Activity ShapeType
 */
export const ActivityShapeType: ShapeType<Activity> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#Activity",
  context: activitypubContext,
};

/**
 * IntransitiveActivity ShapeType
 */
export const IntransitiveActivityShapeType: ShapeType<IntransitiveActivity> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#IntransitiveActivity",
  context: activitypubContext,
};

/**
 * Collection ShapeType
 */
export const CollectionShapeType: ShapeType<Collection> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#Collection",
  context: activitypubContext,
};

/**
 * OrderedCollection ShapeType
 */
export const OrderedCollectionShapeType: ShapeType<OrderedCollection> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#OrderedCollection",
  context: activitypubContext,
};

/**
 * CollectionPage ShapeType
 */
export const CollectionPageShapeType: ShapeType<CollectionPage> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#CollectionPage",
  context: activitypubContext,
};

/**
 * OrderedCollectionPage ShapeType
 */
export const OrderedCollectionPageShapeType: ShapeType<OrderedCollectionPage> =
  {
    schema: activitypubSchema,
    shape: "https://ldo.js.org/shapes/activitypub#OrderedCollectionPage",
    context: activitypubContext,
  };

/**
 * AcceptShape ShapeType
 */
export const AcceptShapeShapeType: ShapeType<AcceptShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#AcceptShape",
  context: activitypubContext,
};

/**
 * AddShape ShapeType
 */
export const AddShapeShapeType: ShapeType<AddShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#AddShape",
  context: activitypubContext,
};

/**
 * CreateShape ShapeType
 */
export const CreateShapeShapeType: ShapeType<CreateShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#CreateShape",
  context: activitypubContext,
};

/**
 * DeleteShape ShapeType
 */
export const DeleteShapeShapeType: ShapeType<DeleteShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#DeleteShape",
  context: activitypubContext,
};

/**
 * FollowShape ShapeType
 */
export const FollowShapeShapeType: ShapeType<FollowShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#FollowShape",
  context: activitypubContext,
};

/**
 * IgnoreShape ShapeType
 */
export const IgnoreShapeShapeType: ShapeType<IgnoreShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#IgnoreShape",
  context: activitypubContext,
};

/**
 * JoinShape ShapeType
 */
export const JoinShapeShapeType: ShapeType<JoinShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#JoinShape",
  context: activitypubContext,
};

/**
 * LeaveShape ShapeType
 */
export const LeaveShapeShapeType: ShapeType<LeaveShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#LeaveShape",
  context: activitypubContext,
};

/**
 * LikeShape ShapeType
 */
export const LikeShapeShapeType: ShapeType<LikeShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#LikeShape",
  context: activitypubContext,
};

/**
 * OfferShape ShapeType
 */
export const OfferShapeShapeType: ShapeType<OfferShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#OfferShape",
  context: activitypubContext,
};

/**
 * InviteShape ShapeType
 */
export const InviteShapeShapeType: ShapeType<InviteShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#InviteShape",
  context: activitypubContext,
};

/**
 * RejectShape ShapeType
 */
export const RejectShapeShapeType: ShapeType<RejectShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#RejectShape",
  context: activitypubContext,
};

/**
 * TentativeRejectShape ShapeType
 */
export const TentativeRejectShapeShapeType: ShapeType<TentativeRejectShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#TentativeRejectShape",
  context: activitypubContext,
};

/**
 * RemoveShape ShapeType
 */
export const RemoveShapeShapeType: ShapeType<RemoveShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#RemoveShape",
  context: activitypubContext,
};

/**
 * UndoShape ShapeType
 */
export const UndoShapeShapeType: ShapeType<UndoShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#UndoShape",
  context: activitypubContext,
};

/**
 * UpdateShape ShapeType
 */
export const UpdateShapeShapeType: ShapeType<UpdateShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#UpdateShape",
  context: activitypubContext,
};

/**
 * ViewShape ShapeType
 */
export const ViewShapeShapeType: ShapeType<ViewShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#ViewShape",
  context: activitypubContext,
};

/**
 * ListenShape ShapeType
 */
export const ListenShapeShapeType: ShapeType<ListenShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#ListenShape",
  context: activitypubContext,
};

/**
 * ReadShape ShapeType
 */
export const ReadShapeShapeType: ShapeType<ReadShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#ReadShape",
  context: activitypubContext,
};

/**
 * MoveShape ShapeType
 */
export const MoveShapeShapeType: ShapeType<MoveShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#MoveShape",
  context: activitypubContext,
};

/**
 * AnnounceShape ShapeType
 */
export const AnnounceShapeShapeType: ShapeType<AnnounceShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#AnnounceShape",
  context: activitypubContext,
};

/**
 * FlagShape ShapeType
 */
export const FlagShapeShapeType: ShapeType<FlagShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#FlagShape",
  context: activitypubContext,
};

/**
 * DislikeShape ShapeType
 */
export const DislikeShapeShapeType: ShapeType<DislikeShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#DislikeShape",
  context: activitypubContext,
};

/**
 * ArriveShape ShapeType
 */
export const ArriveShapeShapeType: ShapeType<ArriveShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#ArriveShape",
  context: activitypubContext,
};

/**
 * TravelShape ShapeType
 */
export const TravelShapeShapeType: ShapeType<TravelShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#TravelShape",
  context: activitypubContext,
};

/**
 * Question ShapeType
 */
export const QuestionShapeType: ShapeType<Question> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#Question",
  context: activitypubContext,
};

/**
 * TentativeAcceptShape ShapeType
 */
export const TentativeAcceptShapeShapeType: ShapeType<TentativeAcceptShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#TentativeAcceptShape",
  context: activitypubContext,
};

/**
 * BlockShape ShapeType
 */
export const BlockShapeShapeType: ShapeType<BlockShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#BlockShape",
  context: activitypubContext,
};

/**
 * ApplicationShape ShapeType
 */
export const ApplicationShapeShapeType: ShapeType<ApplicationShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#ApplicationShape",
  context: activitypubContext,
};

/**
 * GroupShape ShapeType
 */
export const GroupShapeShapeType: ShapeType<GroupShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#GroupShape",
  context: activitypubContext,
};

/**
 * OrganizationShape ShapeType
 */
export const OrganizationShapeShapeType: ShapeType<OrganizationShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#OrganizationShape",
  context: activitypubContext,
};

/**
 * PersonShape ShapeType
 */
export const PersonShapeShapeType: ShapeType<PersonShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#PersonShape",
  context: activitypubContext,
};

/**
 * ServiceShape ShapeType
 */
export const ServiceShapeShapeType: ShapeType<ServiceShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#ServiceShape",
  context: activitypubContext,
};

/**
 * Relationship ShapeType
 */
export const RelationshipShapeType: ShapeType<Relationship> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#Relationship",
  context: activitypubContext,
};

/**
 * DocumentShape ShapeType
 */
export const DocumentShapeShapeType: ShapeType<DocumentShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#DocumentShape",
  context: activitypubContext,
};

/**
 * ArticleShape ShapeType
 */
export const ArticleShapeShapeType: ShapeType<ArticleShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#ArticleShape",
  context: activitypubContext,
};

/**
 * AudioShape ShapeType
 */
export const AudioShapeShapeType: ShapeType<AudioShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#AudioShape",
  context: activitypubContext,
};

/**
 * ImageShape ShapeType
 */
export const ImageShapeShapeType: ShapeType<ImageShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#ImageShape",
  context: activitypubContext,
};

/**
 * VideoShape ShapeType
 */
export const VideoShapeShapeType: ShapeType<VideoShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#VideoShape",
  context: activitypubContext,
};

/**
 * NoteShape ShapeType
 */
export const NoteShapeShapeType: ShapeType<NoteShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#NoteShape",
  context: activitypubContext,
};

/**
 * PageShape ShapeType
 */
export const PageShapeShapeType: ShapeType<PageShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#PageShape",
  context: activitypubContext,
};

/**
 * EventShape ShapeType
 */
export const EventShapeShapeType: ShapeType<EventShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#EventShape",
  context: activitypubContext,
};

/**
 * Place ShapeType
 */
export const PlaceShapeType: ShapeType<Place> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#Place",
  context: activitypubContext,
};

/**
 * MentionShape ShapeType
 */
export const MentionShapeShapeType: ShapeType<MentionShape> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#MentionShape",
  context: activitypubContext,
};

/**
 * Profile ShapeType
 */
export const ProfileShapeType: ShapeType<Profile> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#Profile",
  context: activitypubContext,
};

/**
 * Tombstone ShapeType
 */
export const TombstoneShapeType: ShapeType<Tombstone> = {
  schema: activitypubSchema,
  shape: "https://ldo.js.org/shapes/activitypub#Tombstone",
  context: activitypubContext,
};

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
  Accept,
  Add,
  Create,
  Delete,
  Follow,
  Ignore,
  Join,
  Leave,
  Like,
  Offer,
  Invite,
  Reject,
  TentativeReject,
  Remove,
  Undo,
  Update,
  View,
  Listen,
  Read,
  Move,
  Announce,
  Flag,
  Dislike,
  Arrive,
  Travel,
  Question,
  TentativeAccept,
  Block,
  Application,
  Group,
  Organization,
  Person,
  Service,
  Relationship,
  Document,
  Article,
  Audio,
  Image,
  Video,
  Note,
  Page,
  Event,
  Place,
  Mention,
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
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Object",
  context: activitystreamsContext,
};

/**
 * Link ShapeType
 */
export const LinkShapeType: ShapeType<Link> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Link",
  context: activitystreamsContext,
};

/**
 * Activity ShapeType
 */
export const ActivityShapeType: ShapeType<Activity> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Activity",
  context: activitystreamsContext,
};

/**
 * IntransitiveActivity ShapeType
 */
export const IntransitiveActivityShapeType: ShapeType<IntransitiveActivity> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/shapes/activitystreams#IntransitiveActivity",
  context: activitystreamsContext,
};

/**
 * Collection ShapeType
 */
export const CollectionShapeType: ShapeType<Collection> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Collection",
  context: activitystreamsContext,
};

/**
 * OrderedCollection ShapeType
 */
export const OrderedCollectionShapeType: ShapeType<OrderedCollection> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/shapes/activitystreams#OrderedCollection",
  context: activitystreamsContext,
};

/**
 * CollectionPage ShapeType
 */
export const CollectionPageShapeType: ShapeType<CollectionPage> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/shapes/activitystreams#CollectionPage",
  context: activitystreamsContext,
};

/**
 * OrderedCollectionPage ShapeType
 */
export const OrderedCollectionPageShapeType: ShapeType<OrderedCollectionPage> =
  {
    schema: activitystreamsSchema,
    shape:
      "https://shapes.activitypods.org/shapes/activitystreams#OrderedCollectionPage",
    context: activitystreamsContext,
  };

/**
 * Accept ShapeType
 */
export const AcceptShapeType: ShapeType<Accept> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Accept",
  context: activitystreamsContext,
};

/**
 * Add ShapeType
 */
export const AddShapeType: ShapeType<Add> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Add",
  context: activitystreamsContext,
};

/**
 * Create ShapeType
 */
export const CreateShapeType: ShapeType<Create> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Create",
  context: activitystreamsContext,
};

/**
 * Delete ShapeType
 */
export const DeleteShapeType: ShapeType<Delete> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Delete",
  context: activitystreamsContext,
};

/**
 * Follow ShapeType
 */
export const FollowShapeType: ShapeType<Follow> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Follow",
  context: activitystreamsContext,
};

/**
 * Ignore ShapeType
 */
export const IgnoreShapeType: ShapeType<Ignore> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Ignore",
  context: activitystreamsContext,
};

/**
 * Join ShapeType
 */
export const JoinShapeType: ShapeType<Join> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Join",
  context: activitystreamsContext,
};

/**
 * Leave ShapeType
 */
export const LeaveShapeType: ShapeType<Leave> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Leave",
  context: activitystreamsContext,
};

/**
 * Like ShapeType
 */
export const LikeShapeType: ShapeType<Like> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Like",
  context: activitystreamsContext,
};

/**
 * Offer ShapeType
 */
export const OfferShapeType: ShapeType<Offer> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Offer",
  context: activitystreamsContext,
};

/**
 * Invite ShapeType
 */
export const InviteShapeType: ShapeType<Invite> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Invite",
  context: activitystreamsContext,
};

/**
 * Reject ShapeType
 */
export const RejectShapeType: ShapeType<Reject> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Reject",
  context: activitystreamsContext,
};

/**
 * TentativeReject ShapeType
 */
export const TentativeRejectShapeType: ShapeType<TentativeReject> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/shapes/activitystreams#TentativeReject",
  context: activitystreamsContext,
};

/**
 * Remove ShapeType
 */
export const RemoveShapeType: ShapeType<Remove> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Remove",
  context: activitystreamsContext,
};

/**
 * Undo ShapeType
 */
export const UndoShapeType: ShapeType<Undo> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Undo",
  context: activitystreamsContext,
};

/**
 * Update ShapeType
 */
export const UpdateShapeType: ShapeType<Update> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Update",
  context: activitystreamsContext,
};

/**
 * View ShapeType
 */
export const ViewShapeType: ShapeType<View> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#View",
  context: activitystreamsContext,
};

/**
 * Listen ShapeType
 */
export const ListenShapeType: ShapeType<Listen> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Listen",
  context: activitystreamsContext,
};

/**
 * Read ShapeType
 */
export const ReadShapeType: ShapeType<Read> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Read",
  context: activitystreamsContext,
};

/**
 * Move ShapeType
 */
export const MoveShapeType: ShapeType<Move> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Move",
  context: activitystreamsContext,
};

/**
 * Announce ShapeType
 */
export const AnnounceShapeType: ShapeType<Announce> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Announce",
  context: activitystreamsContext,
};

/**
 * Flag ShapeType
 */
export const FlagShapeType: ShapeType<Flag> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Flag",
  context: activitystreamsContext,
};

/**
 * Dislike ShapeType
 */
export const DislikeShapeType: ShapeType<Dislike> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Dislike",
  context: activitystreamsContext,
};

/**
 * Arrive ShapeType
 */
export const ArriveShapeType: ShapeType<Arrive> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Arrive",
  context: activitystreamsContext,
};

/**
 * Travel ShapeType
 */
export const TravelShapeType: ShapeType<Travel> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Travel",
  context: activitystreamsContext,
};

/**
 * Question ShapeType
 */
export const QuestionShapeType: ShapeType<Question> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Question",
  context: activitystreamsContext,
};

/**
 * TentativeAccept ShapeType
 */
export const TentativeAcceptShapeType: ShapeType<TentativeAccept> = {
  schema: activitystreamsSchema,
  shape:
    "https://shapes.activitypods.org/shapes/activitystreams#TentativeAccept",
  context: activitystreamsContext,
};

/**
 * Block ShapeType
 */
export const BlockShapeType: ShapeType<Block> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Block",
  context: activitystreamsContext,
};

/**
 * Application ShapeType
 */
export const ApplicationShapeType: ShapeType<Application> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Application",
  context: activitystreamsContext,
};

/**
 * Group ShapeType
 */
export const GroupShapeType: ShapeType<Group> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Group",
  context: activitystreamsContext,
};

/**
 * Organization ShapeType
 */
export const OrganizationShapeType: ShapeType<Organization> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Organization",
  context: activitystreamsContext,
};

/**
 * Person ShapeType
 */
export const PersonShapeType: ShapeType<Person> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Person",
  context: activitystreamsContext,
};

/**
 * Service ShapeType
 */
export const ServiceShapeType: ShapeType<Service> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Service",
  context: activitystreamsContext,
};

/**
 * Relationship ShapeType
 */
export const RelationshipShapeType: ShapeType<Relationship> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Relationship",
  context: activitystreamsContext,
};

/**
 * Document ShapeType
 */
export const DocumentShapeType: ShapeType<Document> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Document",
  context: activitystreamsContext,
};

/**
 * Article ShapeType
 */
export const ArticleShapeType: ShapeType<Article> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Article",
  context: activitystreamsContext,
};

/**
 * Audio ShapeType
 */
export const AudioShapeType: ShapeType<Audio> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Audio",
  context: activitystreamsContext,
};

/**
 * Image ShapeType
 */
export const ImageShapeType: ShapeType<Image> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Image",
  context: activitystreamsContext,
};

/**
 * Video ShapeType
 */
export const VideoShapeType: ShapeType<Video> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Video",
  context: activitystreamsContext,
};

/**
 * Note ShapeType
 */
export const NoteShapeType: ShapeType<Note> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Note",
  context: activitystreamsContext,
};

/**
 * Page ShapeType
 */
export const PageShapeType: ShapeType<Page> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Page",
  context: activitystreamsContext,
};

/**
 * Event ShapeType
 */
export const EventShapeType: ShapeType<Event> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Event",
  context: activitystreamsContext,
};

/**
 * Place ShapeType
 */
export const PlaceShapeType: ShapeType<Place> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Place",
  context: activitystreamsContext,
};

/**
 * Mention ShapeType
 */
export const MentionShapeType: ShapeType<Mention> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Mention",
  context: activitystreamsContext,
};

/**
 * Profile ShapeType
 */
export const ProfileShapeType: ShapeType<Profile> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Profile",
  context: activitystreamsContext,
};

/**
 * Tombstone ShapeType
 */
export const TombstoneShapeType: ShapeType<Tombstone> = {
  schema: activitystreamsSchema,
  shape: "https://shapes.activitypods.org/shapes/activitystreams#Tombstone",
  context: activitystreamsContext,
};

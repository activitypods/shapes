import { Schema } from "shexj";

/**
 * =============================================================================
 * activitystreamsSchema: ShexJ Schema for activitystreams
 * =============================================================================
 */
export const activitystreamsSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://ldo.js.org/shapes/activitypub#Object",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Object",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#attachment",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#attributedTo",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#audience",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#bcc",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#bto",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#cc",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#content",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#context",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#generator",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#icon",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#image",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#inReplyTo",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#location",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#preview",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#replies",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#summary",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#tag",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#to",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#url",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#duration",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#duration",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#endTime",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#id",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#mediaType",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#published",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#startTime",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#updated",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#Link",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Link"],
              },
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#preview",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#height",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
                mininclusive: 0,
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#href",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#hreflang",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#id",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#mediaType",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#rel",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#width",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
                mininclusive: 0,
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#Activity",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Activity",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#actor",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#instrument",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#object",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#origin",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#result",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#target",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#IntransitiveActivity",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype:
                  "https://www.w3.org/ns/activitystreams#IntransitiveActivity",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#Collection",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Collection",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#totalItems",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
                mininclusive: 0,
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#current",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#first",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#items",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#last",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#OrderedCollection",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype:
                  "https://www.w3.org/ns/activitystreams#OrderedCollection",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Collection",
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#orderedItems",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#CollectionPage",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype:
                  "https://www.w3.org/ns/activitystreams#CollectionPage",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Collection",
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#next",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#partOf",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#prev",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#OrderedCollectionPage",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype:
                  "https://www.w3.org/ns/activitystreams#OrderedCollectionPage",
              },
            },
            "https://ldo.js.org/shapes/activitypub#OrderedCollection",
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#startIndex",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
                mininclusive: 0,
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#AcceptShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Accept",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#AddShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Add",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#CreateShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Create",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#DeleteShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Delete",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#FollowShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Follow",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#IgnoreShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Ignore",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#JoinShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Join",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#LeaveShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Leave",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#LikeShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Like",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#OfferShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Offer",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#InviteShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Invite",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#RejectShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Reject",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#TentativeRejectShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype:
                  "https://www.w3.org/ns/activitystreams#TentativeReject",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#RemoveShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Remove",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#UndoShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Undo",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#UpdateShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Update",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#ViewShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#View",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#ListenShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Listen",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#ReadShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Read",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#MoveShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Move",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#AnnounceShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Announce",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#FlagShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Flag",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#DislikeShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Dislike",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#ArriveShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Arrive",
              },
            },
            "https://ldo.js.org/shapes/activitypub#IntransitiveActivity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#TravelShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Travel",
              },
            },
            "https://ldo.js.org/shapes/activitypub#IntransitiveActivity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#Question",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Question",
              },
            },
            "https://ldo.js.org/shapes/activitypub#IntransitiveActivity",
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#oneOf",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#anyOf",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#closed",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#TentativeAcceptShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype:
                  "https://www.w3.org/ns/activitystreams#TentativeAccept",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#BlockShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Block",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Activity",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#ApplicationShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Application",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#GroupShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Group",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#OrganizationShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Organization",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#PersonShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Person",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#ServiceShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Service",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#Relationship",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Relationship",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#subject",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#object",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#relationship",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#DocumentShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Document",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#ArticleShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Article",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#AudioShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Audio",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Document",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#ImageShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Image",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Document",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#VideoShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Video",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Document",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#NoteShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Note",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#PageShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Page",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#EventShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Event",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#Place",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Place",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#accuracy",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#float",
                mininclusive: 0,
                maxinclusive: 100,
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#altitude",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#float",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#latitude",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#float",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#longitude",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#float",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#radius",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#float",
                mininclusive: 0,
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#units",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#MentionShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Mention",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Link",
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#Profile",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Profile",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#describes",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/shapes/activitypub#Tombstone",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "https://www.w3.org/ns/activitystreams#Tombstone",
              },
            },
            "https://ldo.js.org/shapes/activitypub#Object",
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#formerType",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#deleted",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
  ],
};

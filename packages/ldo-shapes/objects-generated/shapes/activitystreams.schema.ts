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
      id: "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
                values: ["https://www.w3.org/ns/activitystreams#Object"],
              },
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
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#attachment",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#attributedTo",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#audience",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#bcc",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#bto",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#cc",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#context",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#generator",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#inReplyTo",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#location",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#replies",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Collection",
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#tag",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#to",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Link",
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
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Activity",
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
                values: ["https://www.w3.org/ns/activitystreams#Activity"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#actor",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#instrument",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#object",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#origin",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#result",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#target",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#IntransitiveActivity",
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
                values: [
                  "https://www.w3.org/ns/activitystreams#IntransitiveActivity",
                ],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Collection",
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
                values: ["https://www.w3.org/ns/activitystreams#Collection"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#OrderedCollection",
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
                values: [
                  "https://www.w3.org/ns/activitystreams#OrderedCollection",
                ],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Collection",
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
              predicate: "https://www.w3.org/ns/activitystreams#prev",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#orderedItems",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#CollectionPage",
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
                values: [
                  "https://www.w3.org/ns/activitystreams#CollectionPage",
                ],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Collection",
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
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#OrderedCollectionPage",
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
                values: [
                  "https://www.w3.org/ns/activitystreams#OrderedCollectionPage",
                ],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#OrderedCollection",
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
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Accept",
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
                values: ["https://www.w3.org/ns/activitystreams#Accept"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Add",
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
                values: ["https://www.w3.org/ns/activitystreams#Add"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Create",
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
                values: ["https://www.w3.org/ns/activitystreams#Create"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Delete",
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
                values: ["https://www.w3.org/ns/activitystreams#Delete"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Follow",
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
                values: ["https://www.w3.org/ns/activitystreams#Follow"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Ignore",
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
                values: ["https://www.w3.org/ns/activitystreams#Ignore"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Join",
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
                values: ["https://www.w3.org/ns/activitystreams#Join"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Leave",
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
                values: ["https://www.w3.org/ns/activitystreams#Leave"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Like",
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
                values: ["https://www.w3.org/ns/activitystreams#Like"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Offer",
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
                values: ["https://www.w3.org/ns/activitystreams#Offer"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Invite",
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
                values: ["https://www.w3.org/ns/activitystreams#Invite"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Reject",
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
                values: ["https://www.w3.org/ns/activitystreams#Reject"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#TentativeReject",
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
                values: [
                  "https://www.w3.org/ns/activitystreams#TentativeReject",
                ],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Remove",
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
                values: ["https://www.w3.org/ns/activitystreams#Remove"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Undo",
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
                values: ["https://www.w3.org/ns/activitystreams#Undo"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Update",
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
                values: ["https://www.w3.org/ns/activitystreams#Update"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#View",
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
                values: ["https://www.w3.org/ns/activitystreams#View"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Listen",
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
                values: ["https://www.w3.org/ns/activitystreams#Listen"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Read",
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
                values: ["https://www.w3.org/ns/activitystreams#Read"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Move",
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
                values: ["https://www.w3.org/ns/activitystreams#Move"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Announce",
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
                values: ["https://www.w3.org/ns/activitystreams#Announce"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Flag",
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
                values: ["https://www.w3.org/ns/activitystreams#Flag"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Dislike",
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
                values: ["https://www.w3.org/ns/activitystreams#Dislike"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Arrive",
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
                values: ["https://www.w3.org/ns/activitystreams#Arrive"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#IntransitiveActivity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Travel",
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
                values: ["https://www.w3.org/ns/activitystreams#Travel"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#IntransitiveActivity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Question",
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
                values: ["https://www.w3.org/ns/activitystreams#Question"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#IntransitiveActivity",
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
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#TentativeAccept",
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
                values: [
                  "https://www.w3.org/ns/activitystreams#TentativeAccept",
                ],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Block",
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
                values: ["https://www.w3.org/ns/activitystreams#Block"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Activity",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Application",
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
                values: ["https://www.w3.org/ns/activitystreams#Application"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Group",
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
                values: ["https://www.w3.org/ns/activitystreams#Group"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Organization",
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
                values: ["https://www.w3.org/ns/activitystreams#Organization"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Person",
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
                values: ["https://www.w3.org/ns/activitystreams#Person"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Service",
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
                values: ["https://www.w3.org/ns/activitystreams#Service"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Relationship",
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
                values: ["https://www.w3.org/ns/activitystreams#Relationship"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#subject",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#object",
              valueExpr:
                "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Document",
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
                values: ["https://www.w3.org/ns/activitystreams#Document"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Article",
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
                values: ["https://www.w3.org/ns/activitystreams#Article"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Audio",
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
                values: ["https://www.w3.org/ns/activitystreams#Audio"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Document",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Image",
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
                values: ["https://www.w3.org/ns/activitystreams#Image"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Document",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Video",
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
                values: ["https://www.w3.org/ns/activitystreams#Video"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Document",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Note",
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
                values: ["https://www.w3.org/ns/activitystreams#Note"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Page",
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
                values: ["https://www.w3.org/ns/activitystreams#Page"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Event",
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
                values: ["https://www.w3.org/ns/activitystreams#Event"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Place",
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
                values: ["https://www.w3.org/ns/activitystreams#Place"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Mention",
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
                values: ["https://www.w3.org/ns/activitystreams#Mention"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Link",
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Profile",
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
                values: ["https://www.w3.org/ns/activitystreams#Profile"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shapes.activitypods.org/shapes/activitystreams#Tombstone",
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
                values: ["https://www.w3.org/ns/activitystreams#Tombstone"],
              },
            },
            "https://shapes.activitypods.org/shapes/activitystreams#Object",
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
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
  ],
};

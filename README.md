![activitypods-small](https://user-images.githubusercontent.com/17931931/215525902-6ae72fa9-fde0-43eb-a053-0ccfd4565ead.png)

# ActivityPods shapes repository

A monorepo with RDF shapes, shape trees, and LDO objects used by [ActivityPods](https://activitypods.org) applications.

## Serving shapes

When developing a new application, you can serve your new shapes locally. When you are serving your app (built from the template) and pod provider in development mode, the client will notice that a local shape server is running on this port (`30916`) and use this server as the shape provider instead of https://shapes.activitypods.org/.

```bash
yarn install
yarn start
```

## Packages

This monorepo has the following structure:

- `packages/shape-definitions`: Contains the shape definitions and exports to js/ts.
- `packages/shape-definitions/source/<version/`: Contains the actual (SHACL) shape and shape-tree definitions serialized in turtle (`.shacl.ttl`). Also contains SHEX shape files: For the moment, they are generated manually and only contain ActivityStreams translations that are derived from the SHACL definitions. We need the SHEX files to generate ldo objects from them.
- `packages/ldo-types`: Contains [ldo](https://ldo.js.org/) typescript ShapeTypes derived from the shapes.

For the moment, the shex definitions need to be manually "translated" from the shacl definitions. Please note that the ldo builder does not currently support "ShapeOr, ShapeAnd, ShapeNot, ShapeExternal, or NodeConstraint". See the existing shacl and shex files as a reference. The npm package `@jeswr/shacl2shex` (does not translate all features) or an LLM might help you with the translation.

For the future, there are several approaches to improve the way we write shapes and shape trees.
Link-ML provides a way to write shapes in a uniform format that converts to various various other formats, including SHEX and SHACL. However, the SHACL translation does not handle shape inheritance well so that files get very long. Feel free to improve `@jeswr/shacl2shex`, the Link-ML to SHACL converter, or ldo to support SHACL.

## Submitting shapes

Feel free to open a PR, to submit new shapes and shapetrees.

Please run `yarn build`, to generate the typescript ldo objects before publishing.

Note that we have a versioning system. Do not edit existing shapes but create new ones.

## Funding

This project is funded through [NGI0 Commons Fund](https://nlnet.nl/commonsfund), a fund established by [NLnet](https://nlnet.nl) with financial support from the European Commission's [Next Generation Internet](https://ngi.eu) program. Learn more at the [NLnet project page](https://nlnet.nl/project/DatamiPods).

[<img src="https://nlnet.nl/logo/banner.png" alt="NLnet foundation logo" width="20%" />](https://nlnet.nl)
[<img src="https://nlnet.nl/image/logos/NGI0_tag.svg" alt="NGI Zero Logo" width="20%" />](https://nlnet.nl/commonsfund)

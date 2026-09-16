![activitypods-small](https://user-images.githubusercontent.com/17931931/215525902-6ae72fa9-fde0-43eb-a053-0ccfd4565ead.png)

# ActivityPods shapes Monorepo

A monorepo with RDF shapes, shape trees, and LDO objects used by [ActivityPods](https://activitypods.org) applications.

## Serving shapes

When developing a new application, you can serve your new shapes locally. The default port is `30916`.

```bash
yarn install
yarn start
```

Every shape and shape tree is served with content negotiation: browsers get the website, other clients get Turtle or JSON-LD depending on their `Accept` header (append `?format=turtle` or `?format=jsonld` to force a format from a browser).

## Website

The website in `website` (Vite + React + Ant Design) lists the shapes, explains what each SHACL definition describes, and shows which [trusted applications](https://activitypods.org/data/trusted-apps) use them. It is built into `website/dist` and served by the Express server.

```bash
yarn build:website   # build the website, then `yarn start` serves it
yarn dev:website     # development server on http://localhost:4010, proxying /api to the shape server
```

The server exposes two JSON endpoints for the website:

- `GET /api/shapes`: every shape tree with its labels, definitions, target class and the properties of its SHACL shape, parsed from `packages/shape-definitions/source` at startup.
- `GET /api/applications`: the trusted applications and the shape trees they request access to, crawled from their access needs and cached (see `APPLICATIONS_CACHE_TTL` in `.env`).

Labels and definitions come from the `skos:prefLabel` and `skos:definition` of each shape tree, in English and French. Applications are shown only in the languages they declare with `dc:language`.

### Proposing shapes from the website

The "Propose a shape" form generates the shape tree and SHACL files server-side (`POST /api/proposals/preview`, validated with [n3](https://github.com/rdfjs/N3.js)) and opens a draft pull request on this repository (`POST /api/proposals`). To enable it, set `GITHUB_TOKEN` in a gitignored `.env.local` file (which overrides `.env`) to a fine-grained token with *Contents* and *Pull requests* write access on the repository (`GITHUB_REPOSITORY`, default `activitypods/shapes`). Without a token the form still previews the files but cannot submit. Submissions are rate limited per client address.

## Packages

This monorepo has the following structure:

- `packages/shape-definitions`: Contains the shape definitions and exports to js/ts.
- `packages/shape-definitions/source/`: Contains the actual (SHACL) shape and shape-tree definitions serialized in turtle (`.shacl.ttl`). Also contains SHEX shape files: For the moment, they are generated manually and only contain ActivityStreams translations that are derived from the SHACL definitions. We need the SHEX files to generate ldo objects from them.
- `packages/shape-definitions/generated/` contains js-importable json-ld and ttl-string exports generated from the source `.shacl.ttl` files.
- `packages/ldo-types`: Contains [ldo](https://ldo.js.org/) typescript ShapeTypes derived from the (shex) shapes.

For the moment, the shex definitions need to be manually "translated" from the shacl definitions. Please note that the ldo builder does not support "ShapeOr, ShapeAnd, ShapeNot, ShapeExternal, or NodeConstraint" currently ([see issue](https://github.com/o-development/ldo/issues/25)). See the existing shacl and shex files as a reference. The npm package `@jeswr/shacl2shex` (does not translate all features) or an LLM might help you with the translation.

For the future, there are several approaches to improve the way we write shapes and shape trees.
Link-ML provides a way to write shapes in a uniform format that converts to various various other formats, including SHEX and SHACL. However, the SHACL translation does not handle shape inheritance well so that files get very long. Feel free to improve `@jeswr/shacl2shex`, the Link-ML to SHACL converter, or ldo to support SHACL.

## Submitting shapes

Feel free to open a PR, to submit new shapes and shapetrees!

Please run `yarn build`, to generate the typescript ldo objects before publishing.

Note that shapes must not change, they are immutable. Create a new shape, if you need it. Adding _optional_ properties to an existing SHACL shape is fine: it does not invalidate any existing resource, and it tells other applications what they can expect to find.

The main node shape must be the first subject of its file and declare its `sh:targetClass` first: the Pod provider reads the target class from the first node of the JSON-LD serialization. Nested shapes (an embedded address, a geolocation…) are declared after it, referenced with `sh:node`, and carry no `sh:targetClass`.

## Funding

This project is funded through [NGI0 Commons Fund](https://nlnet.nl/commonsfund), a fund established by [NLnet](https://nlnet.nl) with financial support from the European Commission's [Next Generation Internet](https://ngi.eu) program. Learn more at the [NLnet project page](https://nlnet.nl/project/DatamiPods).

[<img src="https://nlnet.nl/logo/banner.png" alt="NLnet foundation logo" width="20%" />](https://nlnet.nl)
[<img src="https://nlnet.nl/image/logos/NGI0_tag.svg" alt="NGI Zero Logo" width="20%" />](https://nlnet.nl/commonsfund)

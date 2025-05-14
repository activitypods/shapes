![activitypods-small](https://user-images.githubusercontent.com/17931931/215525902-6ae72fa9-fde0-43eb-a053-0ccfd4565ead.png)

# ActivityPods shapes repository

A monorepo with shapes, shape trees, and LDO objects used by [ActivityPods](https://activitypods.org) applications.

## Packages

This monorepo contains the following packages:

- **`shape-definitions`**: Contains the SHACL files and ShapeTrees.
- **`ldo-types`**: Contains Linked Data Object (LDO) definitions for typescript generated from shex-definitions. The shex definitions are derived from the shacl shape definitions since the ldo type builder requires shex definitions.

For the moment, the shex definitions need to be manually "translated" from the shacl definitions. Please note that the ldo builder does not currently support "ShapeOr, ShapeAnd, ShapeNot, ShapeExternal, or NodeConstraint". See the existing shacl and shex files as a reference. The npm package `@jeswr/shacl2shex` or an LLM might help you with the translation.

## Serving shapes

```bash
yarn install
yarn start
```

## Submitting shapes

Feel free to open a PR to submit new shapes and shapetrees.

## Funding

This project is funded through [NGI0 Commons Fund](https://nlnet.nl/commonsfund), a fund established by [NLnet](https://nlnet.nl) with financial support from the European Commission's [Next Generation Internet](https://ngi.eu) program. Learn more at the [NLnet project page](https://nlnet.nl/project/DatamiPods).

[<img src="https://nlnet.nl/logo/banner.png" alt="NLnet foundation logo" width="20%" />](https://nlnet.nl)
[<img src="https://nlnet.nl/image/logos/NGI0_tag.svg" alt="NGI Zero Logo" width="20%" />](https://nlnet.nl/commonsfund)

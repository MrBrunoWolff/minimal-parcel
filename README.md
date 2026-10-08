# Minimal Parcel

A starter for plain TypeScript web apps, with Parcel handling HTML, CSS and production bundles.

[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

## Quick start

Use the Bun version declared in [package.json](package.json).

```sh
git clone https://github.com/MrBrunoWolff/minimal-parcel.git
cd minimal-parcel
bun install --frozen-lockfile
bun run start
```

Open [localhost:1234](http://localhost:1234).

## Features

- HTML entry point with no Parcel configuration required.
- Strict TypeScript checked before production builds.
- DOM rendering and CSS imports without a framework.

## Scripts

| Command            | Description                                     |
| ------------------ | ----------------------------------------------- |
| `bun run start`    | Start development with hot reloading            |
| `bun run build`    | Type-check and build into dist/                 |
| `bun run audit`    | Audit dependencies                              |
| `bun run check:ci` | Run the complete repository validation contract |

## Development

See the [development guide](docs/development.md) for project structure, implementation details and maintenance. The complete command list is in [package.json](package.json).

## License

MIT — see [LICENSE](LICENSE).

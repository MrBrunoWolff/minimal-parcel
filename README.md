# Minimal Parcel

A minimal starter for a plain TypeScript web app bundled with Parcel 2 and managed with Bun.

[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

## Features

- Parcel 2 with zero config: the entry point is `index.html`, set by the `source` field in `package.json`.
- TypeScript 7 in strict mode, plus `noUnusedLocals`, `noUnusedParameters` and `noImplicitReturns`.
- `tsc` type-checks the code (`noEmit`) before every production build. Parcel does the transpiling.
- No framework: `src/main.ts` renders into `#app` with the DOM API.
- CSS is imported straight from TypeScript. `src/globals.d.ts` declares `*.css` modules so the import type-checks.
- `bunfig.toml` refuses npm versions published less than 3 days ago, as a defense against supply-chain attacks.
- GitHub Actions CI runs a frozen-lockfile install, the build, and `bun audit` on high or critical advisories.

## Quick start

### Clone

```sh
git clone https://github.com/MrBrunoWolff/minimal-parcel.git
cd minimal-parcel
bun install
bun run start
```

The Parcel dev server runs on `http://localhost:1234` by default.

## Scripts

| Command | Description |
| --- | --- |
| `bun run start` | Start the Parcel dev server with hot reloading. |
| `bun run build` | Type-check with `tsc`, then build a production bundle into `dist/`. |
| `bun run audit` | Run `bun audit` and fail on high or critical advisories. |

## Project structure

```
.
├── .github/workflows/ci.yml  # CI: install, build, audit
├── src/
│   ├── globals.d.ts          # Ambient module declaration for *.css imports
│   ├── main.ts               # App entry, renders into #app
│   └── style.css
├── bunfig.toml               # Bun install settings (minimum release age)
├── favicon.ico
├── index.html                # Parcel entry point
├── package.json
├── tsconfig.json
└── LICENSE
```

## CI and dependency safety

The `quality` job in `.github/workflows/ci.yml` runs on pushes to `main` and on pull requests. It uses Bun 1.4.0, the version pinned in `packageManager`, and runs these steps:

1. `bun install --frozen-lockfile`
2. `bun run build`. There are no tests, so the type-check and build are the only gate.
3. `bun run audit`

The two dependency checks cover different risks. `minimumReleaseAge` in `bunfig.toml` slows down a newly published malicious version. `bun audit` catches packages that already have a known advisory.

## License

MIT — see [LICENSE](LICENSE).

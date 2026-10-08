# Minimal Parcel development

[Project overview](../README.md)

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

## Validation and dependencies

Run `bun run check:ci` before a commit or pull request. See [QUALITY.md](../QUALITY.md) for the validation stages. Bun applies the three-day minimum release age in `bunfig.toml`; preserve it when updating dependencies. Verify a frozen install after refreshing the lockfile.

// Ambient declarations for non-code side-effect imports.
// TypeScript 7.0 enables `noUncheckedSideEffectImports` by default, so
// `import './style.css'` needs a module declaration to type-check.
declare module '*.css';

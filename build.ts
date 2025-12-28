import { $ } from "bun";
import { fixImportsPlugin } from "esbuild-fix-imports-plugin";
import { build } from "tsup";

await build({
  entry: ["src/**/*.ts"],
  outDir: "dist",
  format: ["esm", "cjs"],
  target: "node20",
  minifySyntax: true,
  minifyWhitespace: false,
  minifyIdentifiers: false,
  splitting: false,
  sourcemap: false,
  cjsInterop: false,
  clean: true,
  bundle: false,
  esbuildPlugins: [fixImportsPlugin()],
});

await $`bunx tsc --project tsconfig.dts.json`;

process.exit(0);

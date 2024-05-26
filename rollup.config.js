// rollup.config.js
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import svgr from '@svgr/rollup';
import css from "rollup-plugin-import-css";
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      svgr(),
      postcss(),
      nodeResolve({
        extensions: ['.css']
      }),
      image()
    ],
    external: ["react", "react-dom",[/\.css$/]],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts.default()],
    external:[/\.css$/]
  },
];
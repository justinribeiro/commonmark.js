// rollup.config.js
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { uglify } from "rollup-plugin-uglify";
import { terser } from "rollup-plugin-terser";

export default {
    input: "lib/index.js",
    output: [
        {
            file: "dist/commonmark.js",
            format: "umd",
            name: "commonmark",
        },
        {
            file: "dist/commonmark.min.js",
            format: "umd",
            name: "commonmark",
            plugins: [uglify()],
        },
        {
            file: "dist/commonmark.module.js",
            format: "esm",
            plugins: [terser()],
        },
    ],
    plugins: [nodeResolve(), commonjs(), json()],
};

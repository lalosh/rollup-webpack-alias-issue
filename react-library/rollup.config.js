import json from "@rollup/plugin-json";
import alias from '@rollup/plugin-alias';
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import bundleSize from "rollup-plugin-bundle-size";
import {
    terser
} from "rollup-plugin-terser";
import commonJS from "@rollup/plugin-commonjs";
import path from "path";
import postcss from 'rollup-plugin-postcss';
import imagePlugin from '@rollup/plugin-image';


const config = {
    input: "src/index.tsx",
    output: {
        file: path.join(__dirname, "./dist/index.js"),
        format: "es",
        name: "TestSDK",
    },
    external: ['react', 'react-dom'],
    plugins: [
        json(),
        imagePlugin(),
        postcss({
            modules: {
                generateScopedName: 'test_[name]_[local]'
            },
            extract: false,
            autoModules: false
        }),

        alias({
            entries: [{
                    find: 'react',
                    replacement: path.resolve(__dirname, 'node_modules/react'),
                },
                {
                    find: 'react-dom',
                    replacement: path.resolve(__dirname, 'node_modules/react-dom'),
                }
            ]
        }),

        typescript(),

        babel({
            babelHelpers: "bundled",
        }),

        resolve({
            browser: true,
            // pass custom options to the resolve plugin
            moduleDirectories: ["node_modules"],
            dedupe: ["react", "react-dom"],
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
            preventAssignment: true,
        }),

        commonJS(),

        terser(),

        bundleSize(),
    ],
};

export default config;

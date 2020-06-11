// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'

export default {
    input: 'src/index.js',
    output: {
        file: 'lib/index.js',
        format: 'cjs',
    },
    plugins: [
        resolve({
            preferBuiltins: true
        }),
        commonjs(),
        json(),
        babel({
            babelHelpers: 'runtime',
            presets: [
                ["@babel/preset-env", {"modules": false} ]
            ],
            plugins: [
                '@babel/proposal-class-properties',
                [
                    '@babel/transform-runtime',
                    {
                        // by default the plugin assumes we have 7.0.0-beta.0 version of runtime
                        // and inline all missing helpers instead of requiring them
                        version: require('@babel/plugin-transform-runtime/package.json')
                            .version,
                    },
                ],
                'lodash',
            ],
        }),
    ],
}

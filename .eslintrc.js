const Rouls = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    globals: {},
    env: {
        browser: true,
        jquery: true,
        es6: true,
        node: true
    },
    plugins: [
        'react'
    ],
    rules: {
        indent: [
            'error',
            4
        ],
        'prefer-spread': 0,
        'no-restricted-globals': 0,
        'comma-dangle': 0,
        semi: [
            'warn',
            'always',
            {
                omitLastInOneLineBlock: true
            }
        ],
        'no-use-before-define': [
            'warn',
            {
                functions: false,
                classes: false
            }
        ],
        'eol-last': 0,
        'no-mixed-spaces-and-tabs': 0,
        'no-tabs': 0,
        camelcase: 0,
        'arrow-parens': 0,
        'no-var': 0,
        'no-console': 0,
        'func-names': 0,
        'no-underscore-dangle': 0,
        'no-restricted-syntax': 0,
        'prefer-arrow-callback': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'react/jsx-indent': [
            'error',
            4
        ],
        'react/jsx-indent-props': [
            'error',
            4
        ],
        'react/no-array-index-key': 0,
        'react/prop-types': 0,
        'no-lonely-if': 0,
        'jsx-a11y/alt-text': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/anchor-has-content': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'no-useless-constructor': 1,
        'class-methods-use-this': 0,
        'react/prefer-stateless-function': 0,
        'import/prefer-default-export': 1,
        'react/require-default-props': 0,
        'react/forbid-prop-types': 0,
        'no-plusplus': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'no-useless-computed-key': 0,
        'wrap-iife': 0,
        'no-prototype-builtins': 0,
        'no-continue': 0,
        'react/no-multi-comp': 0,
        'no-useless-escape': 1,
        'no-unused-expressions': 0,
        'linebreak-style': 0,
        'react/destructuring-assignment': 0,
        'react/props-assignment': 0
    }
};
module.exports = Rouls;

import eslintConfigPrettier from 'eslint-config-prettier'

export default [
    eslintConfigPrettier,
    {
        languageOptions: {
            globals: {
                browser: true,
            },
            parserOptions: {
                sourceType: 'module',
            },
        },
        rules: {
            yoda: ['error', 'always'],
        },
    },
]

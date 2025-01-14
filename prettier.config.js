/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'avoid',
    printWidth: 120,
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'css',
    quoteProps: 'as-needed',
    proseWrap: 'never',
}

export default config

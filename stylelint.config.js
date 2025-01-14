export default {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-scss'],
    rules: {
        'declaration-block-no-redundant-longhand-properties': true,
        'length-zero-no-unit': true,
        'scss/at-mixin-argumentless-call-parentheses': 'never',
        'scss/at-rule-no-unknown': true,
        'scss/dollar-variable-pattern': '^[_a-z0-9\-]+$',
        'scss/selector-no-redundant-nesting-selector': true,
    },
}

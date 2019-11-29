module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      'standard',
      'plugin:vue/essential',
      "plugin:prettier/recommended"
    ],
    // required to lint *.vue files
    plugins: ['vue', 'prettier'],
    // lodash 全局配置
    globals: {
      "_": true
    },
    // add your custom rules here
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'vue/no-parsing-error': ['error', { 'x-invalid-end-tag': false }],
      'vue/no-unused-vars': 0,
      // allow async-await
      'generator-star-spacing': 'off',
      "prettier/prettier": [
        "error",
        {
          "endOfLine":"auto"
        }
      ],
      "vue/html-self-closing": [
        "error", {
          html: {
            void: "never",
            normal: "always",
            component: "always"
          },
          svg: "always",
          math: "always"
        }
      ]
    }
}

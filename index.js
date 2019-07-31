module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order"
  ],
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  rules: {
    // 打包时禁用
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-alert": process.env.NODE_ENV === "production" ? 2 : 0,

    // （允许）使用未知的 at 规则
    "at-rule-no-unknown": [
      true,
      { ignoreAtRules: ["mixin", "extend", "content"] }
    ],

    // （允许）使用未知单位，例如：rpx
    "unit-no-unknown": null,

    // （允许）要求或禁止在注释标签内有空白
    "comment-whitespace-inside": null,

    // 限制允许嵌套的深度
    "max-nesting-depth": 3,

    // （允许）禁用 CSS 不支持的双斜线注释
    "no-invalid-double-slash-comments": null,

    // （允许）禁止使用十六进制颜色
    "color-no-hex": null,

    // 指定十六进制颜色大小写 (upper:大写，lower:小写)
    "color-hex-case": "upper",

    // 指定十六进制颜色是否使用缩写 (short:短, long:长)
    "color-hex-length": "long",

    // 禁止数字中的拖尾 0
    "number-no-trailing-zeros": true,

    // （允许）要求或禁止小于 1 的小数的前导 0
    "number-leading-zero": null,

    // （允许）禁用未知的类型选择器
    "selector-type-no-unknown": null,

    // 长度为0时，禁止使用单位
    "length-zero-no-unit": true,

    // 指定单位的大小写
    "unit-case": null
  }
};

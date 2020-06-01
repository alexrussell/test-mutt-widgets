module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: [
    'node_modules/(?!@mutt/forms|@mutt/widgets-vue)',
  ],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
    // '^@/(.*)$': '<rootDir>/src/$1',
    // '^@mutt/forms$': '<rootDir>/node_modules/@mutt/forms/dist/mutt-forms.es.js',
    // '^@mutt/widgets-vue$': '<rootDir>/node_modules/@mutt/widgets-vue/dist/mutt-forms-vue.es.js',
  },
  collectCoverage: false,

  // moduleFileExtensions: [
  //   "js",
  //   "json",
  //   // tell Jest to handle `*.vue` files
  //   "vue"
  // ],
  // transform: {
  //   // process `*.vue` files with `vue-jest`
  //   ".*\\.(vue)$": "vue-jest"
  // }
}

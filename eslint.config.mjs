// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'no-console': 'warn',
  },
}).override('nuxt/vue/setup', (config) => {
  return {
    ...config,
    languageOptions: {
      ecmaVersion: 2020, // Define a versão do ECMAScript
      sourceType: 'module',  // Permite usar imports no código
    },
  };
});
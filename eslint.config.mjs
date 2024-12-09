import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'no-console': 'warn',
    'vue/no-multiple-template-root': 'off', // Disable if necessary
    'vue/no-v-html': 'warn', // Warn against use of v-html to prevent XSS
  },
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2020, // Defina a versão do ECMAScript
      sourceType: 'module', // Permita usar imports no código
      project: './tsconfig.json', // Aponte para o tsconfig.json
      createDefaultProgram: true, // Cria o programa TypeScript se necessário
    },
  },
})
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'
import autoImportGlobals from './eslint-auto-import.js'

export default [
  {
    ignores: ['src/components/ui/**'], // 👈 ignore shadcn components
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: { globals: { ...globals.browser, ...autoImportGlobals } },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 3,
          multiline: 1,
        },
      ],
      'capitalized-comments': [
        'error',
        'always',
        {
          ignorePattern: 'eslint|webpack|prettier',
          ignoreInlineComments: false,
          ignoreConsecutiveComments: false,
        },
      ],
    },
  },
  prettier,
]

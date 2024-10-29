// @ts-check
import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig(
  {
    ignores: ['**/*.d.ts', "**/node_modules/**", "**/ui/**"],
    react: 'next',
    tailwindCSS: true,
  },
  {
    rules: {
      '@stylistic/arrow-parens': 'off',
      'tailwindcss/classnames-order': 'off',
      'import/no-anonymous-default-export': 'off',
    },
  },
  {
    files: ['**/*/package.json', 'package.json'],
    rules: {
      'package-json/valid-package-def': 0,
      'package-json/valid-name': 0,
    },
  },
)

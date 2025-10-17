# Vue.js Project

## Node Version
- Recommended: **v22.x** (or your preferred LTS version)

## Code Formatting
This project uses **ESLint** and **Prettier** to maintain consistent code style and auto-format on save.

### ESLint & Prettier Configuration
- `eslint.config.js` & `.prettierrc` (basic setup for Vue 3)

## Project Structure
```
src/
├─ assets/ # Images, fonts, icons, styles
├─ components/ # Reusable Vue components
├─ composables/ # Vue Composition API reusable functions
├─ directives/ # Custom Vue directives
├─ helpers/ # Utility/helper functions
├─ middlewares/ # Route or app middleware
├─ mixins/ # Vue mixins
├─ modules/ # Feature modules or domain logic
├─ plugins/ # Vue plugins
├─ routes/ # Vue-router setup
├─ stores/ # Pinia store modules
├─ App.vue # Root Vue component
└─ main.ts # App entry point
```

## Vue Auto Import
- Using auto-import to automatically import Vue Composition API, and router functions.

## Libraries
- **State Management:** [Pinia](https://pinia.vuejs.org/)
- **UI Library:** 
  - [Tailwind CSS](https://tailwindcss.com/docs/aspect-ratio)
  - [ShadCN](https://shadcn-vue.com/docs/components/accordion.html)
  - [Iconify](https://iconify.design/)

## Iconify Usage
- Go to [**Iconify**](https://icon-sets.iconify.design/)  
- Select your preferred icon set and icon  
- Click **“Component → Iconify Icon”**  
- Copy the **raw icon data** and paste it into your component
- Paste it into `src/plugins/iconify/icons.json`  
- Use the icon in your component with the `local:` prefix, for example:  
  ```vue
  <Icon icon="local:profile-circle" />
  ```
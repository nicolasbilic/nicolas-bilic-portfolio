### Installed libraries/modules/scripts/plugins

> all dependencies that I installed in this project

## Nuxt UI Pro :

[Components] Install Nuxt UI Pro. **Do not Install** Nuxt UI, Nuxt Fonts, or Nuxt Icons as they are already included in Nuxt UI Pro. _Tailwind Css_ is also included with Nuxt UI.

    ```bash
    npm install @nuxt/ui-pro
    ```

Then add it to your **nuxt.config.ts** file:

    ```ts
    modules: ['@nuxt/ui-pro']
    ```

Then create a **main.css** file in the **assets/css** folder and add the following content:

    ```css
    @import "tailwindcss";
    @import "@nuxt/ui-pro";
    ```

Then add the following content to your **nuxt.config.ts** file:

    ```ts
    css: ['~/assets/css/main.css']
    ```

Make sure to import the modules before importing their styles like so :

    ```ts
    modules: [
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui-pro',
    '@nuxtjs/i18n'
    ],
    css: ['~/assets/css/main.css']
    ```

#

## Nuxt Image :

[Module] It's better to install Nuxt Image while installing a Nuxt.js project.

    ```bash
    npx nuxi@latest module add image
    ```

#

## Prettier Plugin to Sort Classes :

[Plugin](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted)

Install a Prettier v3+ plugin for Tailwind CSS v3.0+ that automatically sorts classes based on our recommended class order:

    ```bash
    npm install -D prettier prettier-plugin-tailwindcss
    ```

Then add the plugin to your Prettier configuration file **.prettierrc** at the root of you project:

    ```bash
    {
      "plugins": ["prettier-plugin-tailwindcss"]
    }
    ```

#

## Nuxt I18n :

[Script](https://i18n.nuxtjs.org/docs/getting-started)

Install Nuxt I18n in your project.

    ```bash
    npx nuxi@latest module add @nuxtjs/i18n
    ```

## material-symbols library

    ```bash
    npm i -D @iconify-json/material-symbols
    ```

## hugeicons library

    ```bash
    npm i -D @iconify-json/hugeicons
    ```

## material design icons library

    ```bash
    npm i -D @iconify-json/mdi
    ```

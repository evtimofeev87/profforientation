// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    ssr: true,
    modules: [
        '@element-plus/nuxt',
        'nuxt-tiptap-editor',
        '@nuxtjs/tailwindcss',
    ],
    tiptap: {
        prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
    },
    typescript: {
        tsConfig: {
            compilerOptions: {
                types: ['@nuxt/schema'], // Добавляет поддержку кастомных layout'ов
            },
        },
    },
})

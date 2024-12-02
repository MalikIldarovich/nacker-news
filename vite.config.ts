import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/css/themes.scss";
                    @import "@/assets/css/mixins.scss";
                    @import "@/assets/css/variables.scss";
                    @import "@/assets/css/transitions.scss";
                    @import "@/assets/css/breakpoints.scss";
                `,
            },
        },
    },
})

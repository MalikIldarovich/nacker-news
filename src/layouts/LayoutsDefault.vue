<template>
    <div class="LayoutsDefault">
        <TheBubbleBackground class="background" />
            <LayoutHeader 
                :theme="theme"
                :nav-list="navList"
                class="header"
                @change:theme="onChangeTheme"
            />

            <main class="main">
                <router-view />
            </main>

            <LayoutFooter
                :social-list="socialList"
                class="footer"
            />
    </div>
</template>

<script 
    lang="ts"
    setup
>
    /** Imports **/
    /* mock */
    import { NAVS, SOCIAL } from "@/assets/mock/layout";

    /* vue */
    import {
        ref,
        toRefs,
        reactive,
        defineComponent,
        onMounted,
        nextTick,
    } from "vue";

    /** components **/
    import LayoutHeader from "@/components/layout/LayoutHeader.vue";
    import LayoutFooter from "@/components/layout/LayoutFooter.vue";
    import TheBubbleBackground from "@/components/common/backgrounds/TheBubbleBackground.vue";

    defineComponent({
        components: {
            LayoutHeader,
            LayoutFooter,
        },
    });

    /** Props **/
    const props = defineProps<{
        theme: "dark" | "light";
    }>();

    const { theme } = toRefs(props);

    /** Data **/
    const loaded = ref(false);
    const navList = reactive(NAVS);
    const socialList = reactive(SOCIAL);

    /** Emits **/
    const emits = defineEmits(["change:theme"]);

    /** Handlers **/
    const onChangeTheme = (val: "dark" | "light") => {
        emits("change:theme", val);
    };

    onMounted(() => {
        nextTick(() => loaded.value = true);
    });
</script>
  
<style 
    lang="scss"
    scoped
>
    .LayoutsDefault {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .background {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }

        .header {
            position: sticky;
            top: 0;
            z-index: 20;
        }

        .main {
            position: relative;
            z-index: 2;
            width: 100%;
            min-height: 100vh;
        }

        .footer {
            z-index: 20;
            justify-self: flex-end;
        }

        .main {
            margin: 40px 0;
        }

        @include themify($themes) {
            background-color: themed(bg-main);
            transition: $theme-transition;
        }
    }
</style>

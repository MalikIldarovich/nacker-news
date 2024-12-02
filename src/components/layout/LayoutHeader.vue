<template>
    <header class="LayoutHeader">
        <div class="container">
            <TheLogo />
            <TheNavs :list="navList" />
            <TheSwitch
                reverse
                color="primary"
                icon-type="solid"
                :value="themeValue"
                :icon="themeIcon"
                :change-active-label="false"
                @input="onInputTheme"
            />
        </div>
    </header>
</template>


<script lang="ts" setup>
    /** Imports **/
    /* vue */
    import {
        toRefs,
        computed,
        defineProps,
        defineEmits,
    } from "vue";
    
    /* types */
    import { ILayoutHeaderProps } from "./types";

    /* components */
    import TheLogo from "@/components/ui/logo/TheLogo.vue";
    import TheSwitch from "@/components/ui/switch/TheSwitch.vue";
    import TheNavs from "@/components/common/navs/TheNavs.vue";

    /** Props **/
    const props = defineProps<ILayoutHeaderProps>();
    const { 
        theme,
        navList,
    } = toRefs(props);

    /** Computed **/
    const themeValue = computed(() => theme.value === "light");
    const themeIcon = computed(() => theme.value === 'light' ? "moon" : "sun");

    /** Emits **/
    const emits = defineEmits(["change:theme"]);

    /** Handlers **/
    const onInputTheme = (val: boolean) => {
        emits("change:theme", val);
    };
</script>


<style lang="scss" scoped>
    .LayoutHeader {
        padding: $space-xs 0;

        @include themify($themes) {
            background-color: themed(bg-header);
            color: themed(cl-main);
            transition: $theme-transition;         
        }

        .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>
  
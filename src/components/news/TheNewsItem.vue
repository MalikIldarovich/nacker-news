<template>
    <li class="TheNewsItem">
        <router-link
            :key="`${item.id}`"
            :to="`/news/${item.id}`"
        >
            <ul class="list">
                <li 
                    v-for="el in newsContent"
                    :key="el.id"
                    class="item"  
                >
                    <div class="label">
                        <span
                            class="text"
                            v-html="`${el.label}: `"
                        />
                    </div>

                    <div class="value">
                        <box-icon
                            :name="el.icon.name"
                            :type="el.icon.type"
                            color="currentColor"
                            class="icon"
                        />
                        
                        <span
                            class="text"
                            v-html="el.value ? el.value : 'Отсутствует'"
                        />
                    </div>
                </li>
            </ul>
        </router-link>
    </li>
</template>

<script
    lang="ts"
    setup
>
    /** Imports **/
    /* types */
    import type { ITheNewsItemProps } from "@/components/news/types";
    
    /* vue */
    import { toRefs, computed } from "vue";
    
    /* utils */
    import { getNewsInfoList } from "@/assets/utils/content-utils";

    /** Props **/
    const props = defineProps<ITheNewsItemProps>();

    const { item } = toRefs(props);

    /** Computed **/
    const newsContent = computed(() => getNewsInfoList(item.value));

</script>

<style
    lang="scss"
    scoped
>
    .TheNewsItem {
        padding: $space-sm $space-md;

        @include themify($themes) {
            background-color: rgba(themed(bg-soft), .8);
            color: themed(cl-soft);
            box-shadow: themed(shadow-sm);
            transition: $theme-transition;

            .label {
                color: themed(primary);
                transition: $theme-transition;
            }
            
            .value {
                color: themed(cl-main);
                transition: $theme-transition;
            }

            @include hover {
                background-color: rgba(themed(primary), .8);

                .label {
                    color: themed(bg-main);
                }
            }
        }

        .list {
            @include calcGridColumns(5);
        }
        
        .item {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: $space-md;
        }

        .label {
            font-size: $fz-sm;
        }

        .value {
            display: flex;
            align-items: center;
            gap: $space-xs;
            max-width: 100%;
            text-align: left;
            white-space: nowrap;
            font-size: $fz-md;

            .text {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .label,
        .value {
            font-weight: 600;
        }

        .icon {
            width: 20px;
            min-width: 20px;
            height: 20px;
        }

        @media (max-width: $lg) {
            &:not(:last-child) {
                margin-bottom: 16px;
                border-radius: 16px;
            }

            .list {
                grid-template-rows: repeat(2, 1fr);
                gap: 24px 16px;

                @include calcGridColumns(3);

                .item {
                    align-items: unset;
                    gap: 12px;

                    &:first-child {
                        grid-column: 1 / 3;
                    }
                }
            }
        }

        @media (max-width: $sm) {
            list {
                grid-template-rows: 1fr;

                @include calcGridColumns(1);

                .item {
                    flex-direction: row;
                }
            }
        }
    }
</style>

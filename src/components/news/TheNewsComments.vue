<template>
    <div class="TheNewsComments">
        <ul class="list">
            <li
                v-for="comment in comments"
                :key="comment.id"
                class="item"
            >
                <div class="header" @click="toggleAccordion(comment.id)">
                    <div class="info">
                        <div 
                            v-if="comment.by"
                            class="author"
                        >
                            <box-icon
                                name="user"
                                type="solid"
                                color="currentColor"
                                class="icon"
                            />
                        
                            <span
                                v-html="`${comment.by}`"
                            />
                        </div>

                        <div
                            v-if="comment.time"
                            class="date"
                        >
                            <box-icon
                                name="calendar"
                                type="solid"
                                color="currentColor"
                                class="icon"
                            />

                            <span
                                v-html="`${formatTimestamp(comment.time)}`"
                            />
                        </div>
                    </div>

                    <span 
                        class="text"
                        v-html="comment.text"
                    />

                    <div 
                        v-if="comment.kids?.length"
                        class="toggle-indicator"    
                    >
                        <span 
                            v-html="!openedAccordions.has(comment.id) ? 'Показать ещё' : 'Скрыть'"
                        />

                        <box-icon
                            :name="!openedAccordions.has(comment.id) ? 'plus-circle' : 'minus-circle'"
                            type="solid"
                            color="currentColor"
                            class="icon"
                        />
                    </div>
                </div>

                <!-- Вложенные комментарии -->
                <div v-if="openedAccordions.has(comment.id)" class="nested-comments">
                    <TheNewsComments :ids="comment.kids" />
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script lang="ts" setup>
    /** Imports **/
    /* types */
    import type { ICommentModel } from "@/api/models/news";
    import type { ITheNewsCommentsProps } from "@/components/news/types";
    
    /* vue */
    import { ref, reactive, onMounted, toRefs } from "vue";

    /* api */
    import { fetchItem } from "@/api/modules/news";
    
    /* utils */
    import { formatTimestamp } from "@/assets/utils/format-utils";

    
    /** Props **/
    const props = defineProps<ITheNewsCommentsProps>();
    
    const { ids } = toRefs(props);

    /** Data **/
    const isLoading = ref(false);
    const comments = reactive<ICommentModel[]>([]);
    const openedAccordions = reactive(new Set<number>());
    
    /** Handlers **/
    async function fetchComments() {
        if (!ids.value?.length) return;
    
        isLoading.value = true;

        try {
            for (const id of ids.value) {
                const data = await fetchItem(id);
                comments.push(data);
            }
        } catch (error) {
            console.error("Error fetching comments:", error);
        } finally {
            isLoading.value = false;
        }
    }
    
    function toggleAccordion(id: number) {
        if (openedAccordions.has(id)) {
            openedAccordions.delete(id);
        } else {
            openedAccordions.add(id);
        }
    }
    
    onMounted(fetchComments);
</script>


<style 
    lang="scss"
    scoped
>
    .TheNewsComments {
        margin: 0;
        padding: 0;

        @include themify($themes) {
            .item {
                border-left: 1px solid rgba(themed(cl-soft), .4);
                transition: $theme-transition;
            }

            .nested-comments {
                border-left: 1px solid rgba(themed(cl-soft), .8);
            }

            .text {
                color: themed(cl-main);
                transition: $theme-transition;
            }

            .icon {
                color: themed(primary);
                transition: $theme-transition;
            }

            .toggle-indicator {
                background-color: themed(bg-main);
                color: themed(cl-main);
                transition: $theme-transition;

                .icon {
                    color: themed(primary);
                }            
            }
        }

        .list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
    
        .item {
            margin-bottom: $space-sm;
            padding-left: $space-sm;
        }
    
        .header {
            cursor: pointer;
            font-weight: bold;
            margin-bottom: $space-xs;
        }

        .date,
        .info,
        .author {
            display: flex;
            align-items: center;
            gap: $space-xs;
        }
    
        .text {
            display: block;
            margin-top: $space-sm;
            font-weight: normal;
            word-wrap: break-word;
        }
    
        .toggle-indicator {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: $space-sm;
            width: max-content;
            margin: $space-sm 0;
            padding: $space-xs $space-sm;
            border-radius: $space-xs;
            font-size: $fz-sm;
        }
    
        .nested-comments {
            margin-left: $space-sm;
            padding-left: $space-xs;
        }
    }
</style>

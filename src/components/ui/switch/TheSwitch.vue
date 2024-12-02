<template>
    <div
        role="switch"
        :aria-checked="Boolean(lazyValue)"
        :aria-disabled="disabled"
        :class="[
            'TheSwitch',
            color,
            size,
            {
                disabled,
                reverse,
                active: lazyValue,
                focused: isFocused,
            }
        ]"
    >
        <span
            v-if="$slots.falseLabel"
            :class="['label', 'left', {blur: lazyValue}]"
            @click="onLabelClick(false)"
        >
            <slot name="falseLabel"></slot>
        </span>

        <div
            class="field"
            tabindex="0"
            @focus="onFocus"
            @blur="onBlur"
            @click="onChange"
            @keydown.enter="onChange"
        >
            <transition name="fade">
                <div
                    v-if="!icon"
                    class="dot"    
                />
                
                <div v-else>
                    <box-icon
                        :name="icon"
                        :type="iconType"
                        color="currentColor"
                        class="dot"
                    />
                </div>
            </transition>
        </div>

        <span
            v-if="$slots.trueLabel"
            :class="['label', 'right', {blur: !lazyValue}]"
            @click="onLabelClick(true)"
        >
            <slot name="trueLabel"></slot>
        </span>

        <input
            v-if="name"
            type="hidden"
            :name="name"
            :value="lazyValue ? trueValue : falseValue"
        >
    </div>
</template>


<script setup lang="ts">
    /** Imports **/
    /* vue */
    import {
        ref,
        watch,
        toRefs,
        computed,
        defineProps,
        defineEmits,
        withDefaults,
    } from "vue";

    /* types */
    import type { ITheSwitchProps } from "./types";

    /** Props **/
    const props = withDefaults(defineProps<ITheSwitchProps>(), {
        name: "",
        icon: "circle",
        iconType: "solid",
        value: undefined,
        trueValue: true,
        falseValue: false,
        reverse: false,
        disabled: false,
        changeActiveLabel: false,
        size: () => "md",
        color: () => "default",
    });

    const { 
        name,
        value,
        trueValue,
        falseValue,
        disabled,
        reverse,
        changeActiveLabel,
        size,
        color,
    } = toRefs(props);

    /** Data **/
    const lazyValue = ref<string | boolean | number | undefined>(false), isFocused = ref(false);

    /** Emits **/
    const emits = defineEmits(["change", "input"]);

    /** Computed **/
    const singleLabel = computed(() => {
        return false;
    });

    /** Handlers **/
    const onFocus = () => {
        isFocused.value = true;
    };

    const onBlur = () => {
        isFocused.value = false;
    };

    const onLabelClick = (val: string | boolean | number | undefined) => {
        if (disabled.value || lazyValue.value === val && !singleLabel.value) {
            return;
        }

        if (singleLabel.value) {
            return onChange();
        }

        if (value.value !== undefined) {
            emits("input", val ? trueValue.value : falseValue.value);
        } else {
            lazyValue.value = val;
            emits("change", lazyValue.value);
        }
    };

    const onChange = () => {
        if (disabled.value) {
            return;
        }

        if (value.value !== undefined) {
            emits("input", lazyValue.value ? falseValue.value : trueValue.value);
        } else {
            lazyValue.value = !lazyValue.value;
            emits("change", lazyValue.value);
        }
    };

    /** Watchers **/
    watch(value, (val) => {
        const newVal = val;
        if (newVal === trueValue.value && lazyValue.value !== true) {
            lazyValue.value = true;
            emits("change", newVal);
        } else if (lazyValue.value !== false) {
            lazyValue.value = false;
            emits("change", newVal);
        }
    });

    watch(changeActiveLabel, (val) => {
        lazyValue.value = val;
    });

    /** LifeCycles Hooks **/
    lazyValue.value = Boolean(value.value);
</script>


<style
    lang="scss"
    scoped
>
    $sm-dot-size: 12px;
    $md-dot-size: 20px;
    $lg-dot-size: 36px;

    .TheSwitch {
        display: inline-flex;
        align-items: center;
        -webkit-user-select: none;
        user-select: none;
        outline: none;
        transition: $default-transition;
        cursor: pointer;
        
        &.reverse {
            flex-direction: row-reverse;
        }

        &.single {
            .field {
                margin-left: 0;
            }
        }

        &.disabled {
            pointer-events: none;
            opacity: .5;
            cursor: default;
        }

        &.default {
            @include themify($themes) {
                @include hover {
                    .field  > .dot {
                        color: themed(cl-main);
                        transition: $theme-transition;
                    }
                }
            }
        }

        &.primary {
            @include themify($themes) {
                &.active {
                    .field {
                        background-color: themed(primary);
                    }

                    .dot {
                        background-color: themed(cl-main);
                        color: themed(bg-soft);
                    }
                }

                .dot {
                    background-color: themed(primary);
                    color: themed(cl-main);
                }
            }
        }

        &.lg {
            font-size: 16px;

            .field {
                width: 64px;
                height: 32px;
                margin: 0 12px;
            }

            .dot {
                width: $lg-dot-size;
                height: $lg-dot-size;
            }

            &.active {
                .dot {
                    left: calc(100% - #{$lg-dot-size} - 4px);
                }
            }
        }

        &.md {
            font-size: 12px;

            .field {
                width: 48px;
                height: 24px;
                margin: 0 8px;
            }

            .dot {
                width: $md-dot-size;
                height: $md-dot-size;
            }

            &.active {
                .dot {
                    left: calc(100% - #{$md-dot-size} - 4px);
                }
            }
        }

        &.sm {
            font-size: 12px;

            .field {
                width: 32px;
                height: 16px;
                margin: 0 4px;
            }

            .dot {
                width: $sm-dot-size;
                height: $sm-dot-size;
            }

            &.active {
                .dot {
                    left: calc(100% - #{$sm-dot-size} - 4px);
                }
            }
        }

        .label {
            transition: $default-transition;
        }

        .field {
            position: relative;
            display: block;
            border-radius: 1000px;
            outline: none;
            transition: background-color .3s ease-in-out;
            cursor: pointer;
        }

        .dot {
            position: absolute;
            top: 51%;
            left: 4px;
            border-radius: 50%;
            transform: translate3d(0, -50%, 0);
            transition:
                left .3s ease,
                background-color .3s ease-in-out;
            will-change: left;
        }

        @include themify($themes) {
            .field {
                background-color: themed(bg-soft);
                color: themed(cl-main);
            }
            
            .dot {
                background-color: themed(cl-main);
                color: themed(bg-main);
            }

            .label {
                &.blur {
                    color: themed(cl-main);
                }
            }
        }
    }
</style>

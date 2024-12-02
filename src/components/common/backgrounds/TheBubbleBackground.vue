<template>
    <div :class="$style.TheBubbleBackground">
        <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
        </svg>
        <div :class="$style['gradients-container']">
            <div :class="$style.g1" />
            <div :class="$style.g2" />
            <div :class="$style.g3" />
            <div :class="$style.g4" />
            <div :class="$style.g5" />
            <div :class="$style.interactive"/>
        </div>
    </div>
  </template>
  
<script lang="ts" setup>
</script>

<style
    lang="scss"
    module
>
    $color-bg1: #27094122;
    $color-bg2: #031f3f5c;
    $color1: #1271ff;
    $color2: #dd4aff;
    $color3: #64dcff;
    $color4: #c83232;
    $color5: #dbdbb3;
    $color-interactive: #8c64ff;
    $circle-size: 40%;
    $blending: hard-light;

    .TheBubbleBackground {
        position: relative;
        top: 0;
        left: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background-color: black;
        background: linear-gradient(40deg, $color-bg1 50%, $color-bg2 100%);

        svg {
            display: none;
        }

        .gradients-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
            filter: url(#goo) blur(30px);
        }

        .g1 {
            position: absolute;
            top: calc(50% - $circle-size / 2);
            left: calc(50% - $circle-size / 2);
            width: $circle-size;
            height: $circle-size;
            background: radial-gradient(circle at center, rgba($color1, 0.8) 0, rgba($color1, 0) 50%) no-repeat;
            opacity: 1;
            transform-origin: center center;
            animation: moveVertical 20s ease infinite;
        }

        .g2 {
            position: absolute;
            top: calc(50% - $circle-size / 2);
            left: calc(50% - $circle-size / 2);
            width: $circle-size;
            height: $circle-size;
            background: radial-gradient(circle at center, rgba($color2, 0.8) 0, rgba($color2, 0) 50%) no-repeat;
            opacity: 1;
            animation: moveInCircle 13s reverse infinite;
            transform-origin: calc(50% - 200px);
        }

        .g3 {
            position: absolute;
            top: calc(50% - $circle-size / 2 + 100px);
            left: calc(50% - $circle-size / 2 - 250px);
            width: $circle-size;
            height: $circle-size;
            background: radial-gradient(circle at center, rgba($color3, 0.8) 0, rgba($color3, 0) 50%) no-repeat;
            opacity: 1;
            /* mix-blend-mode: $blending; */
            animation: moveInCircle 26s linear infinite;
            transform-origin: calc(50% + 200px);
        }

        .g4 {
            position: absolute;
            top: calc(50% - $circle-size / 2);
            left: calc(50% - $circle-size / 2);
            width: $circle-size;
            height: $circle-size;
            background: radial-gradient(circle at center, rgba($color4, 0.8) 0, rgba($color4, 0) 50%) no-repeat;
            opacity: 0.7;
            /* mix-blend-mode: $blending; */
            animation: moveHorizontal 26s ease infinite;
            transform-origin: calc(50% - 100px);
        }

        .g5 {
            position: absolute;
            top: calc(50% - $circle-size);
            left: calc(50% - $circle-size);
            width: $circle-size;
            height: $circle-size;
            background: radial-gradient(circle at center, rgba($color5, 0.8) 0, rgba($color5, 0) 50%) no-repeat;
            opacity: 1;
            /* mix-blend-mode: $blending;             */
            transform-origin: calc(50% - 120px) calc(50% + 80px);
            animation: moveInCircle 20s ease infinite;
        }

        .interactive {
            position: absolute;
            top: -50%;
            left: -50%;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, rgba($color-interactive, 0.8) 0, rgba($color-interactive, 0) 50%) no-repeat;
            opacity: 0.7;
        }
    }
</style>
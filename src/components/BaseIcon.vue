<template>
    <div id="icon-wrapper">
        <svg class="icon" :width= "width" :height= "height" >
            <use v-bind= "{'xlink:href':'/feather-sprite.svg#' + name}" />
        </svg>
        <p>
            <slot></slot>
        </p>
        
    </div>
</template>

<script>
    export default {
        props:{
            name: String,
            width: {
                type: [Number, String],
                default: 24
            },
            height: {
                type: [Number, String],
                default: 24
            },
        }
    }
</script>

<style scoped lang="scss">
@import './src/styles/variables';

#icon-wrapper {

    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: rgba(0, 0, 0, 0.4);
    font-size: 1rem;
    font-weight: 600;
    
    .icon {
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      margin-right: 12px;
    }

    p{
        color: $color-black;
        font-style: italic;
        font-weight: 400;
    }
}
</style>
<template>
  <base-wrapper>
    <slot>
        <div class="showcase-main-container">
            <div @click="selectColor" class="item-container">
                <p>color Picker</p>
            </div>
        </div>
        <div class="colorpicker" v-if="showColor">
            <color-pick></color-pick>
        </div>
    </slot>
  </base-wrapper>
</template>

<script lang="typescript">
import BaseWrapper from './../BaseWrapper.vue';
import ColorPick from './ColorPick.vue';
export default {
    name: 'showcase-component',
    components: {
        BaseWrapper,
        ColorPick
    },
    data() {
        return {
            showColor: false,
        }
    },
    methods:{
        selectColor(){
            this.$data.showColor = true;
        }
    }

}
</script>

<style lang="scss" scoped>
.showcase-main-container {
    @media(min-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 700px;
        padding: 10px;
        padding-bottom: 110px;
        .item-container {
            width: 200px;
            height: 250px;
            padding: 4px;
            box-shadow: 2px 4px 4px 2px grey;
        } 
        
    }
}
.colorpicker{
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translate(-50%, 0);
        }
</style>
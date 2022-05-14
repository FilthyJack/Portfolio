<template>
    <section>
        <div class="showcase-main-container">
            <div @click="selectColor" class="item-container">
                <p>color Picker</p>
            </div>
            <div @click="selectList" class="item-container">
                <p>Infinite List</p>
            </div>
        </div>
        <div class="colorpicker" v-if="showColor">
            <color-pick @close-picker="selectColor"></color-pick>
        </div>
        <div class="colorpicker" v-if="showList">
            <List @close-list="selectList"></List>
        </div>
    </section>
</template>

<script lang="typescript">
import ColorPick from './ColorPick.vue';
import List from './List.vue';
export default {
    name: 'showcase-component',
    components: {
        ColorPick,
        List
    },
    data() {
        return {
            showColor: false,
            showList: false
        }
    },
    methods:{
        selectColor(){
            this.$data.showColor = !this.$data.showColor;
        },
        selectList(){
            this.$data.showList = !this.$data.showList;
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
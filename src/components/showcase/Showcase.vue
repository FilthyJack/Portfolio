<template>
    <section>
        <div class="showcase-main-container">
            <div @click="selectColor" class="item-container">
                <p>Video Color Picker</p>
            </div>
            <div @click="selectList" class="item-container">
                <p>Infinite Scroll List</p>
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
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 600px;
        height: 500px;
        padding: 10px;
        background-color: black;
        color: rgba(52,83,189,255);
        box-shadow: -35px 150px 120px 21px black;
        .item-container {
            display: flex;
            align-items: center;
            background-color: black;
            width: 200px;
            height: 250px;
            padding: 4px;
            box-shadow: 3px 11px 12px 2px rgb(52 83 189);
            font-size: 30px;
            font-weight: 700;
            border: 2px solid rgba(52,83,189,255);
            border-top-left-radius: 50px;
            border-bottom-right-radius: 50px;
            cursor: pointer;
            &:hover {
                box-shadow: 5px 15px 13px 5px rgb(52 83 189);
            }
        } 
        
    }

    @media(max-width: 500px) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 350px;
        height: 250px;
        padding: 10px;
        background-color: black;
        color: rgba(52,83,189,255);
        box-shadow: -35px 150px 120px 21px black;
        .item-container {
            display: flex;
            align-items: center;
            background-color: black;
            width: 120px;
            height: 180px;
            padding: 4px;
            box-shadow: 3px 11px 12px 2px rgb(52 83 189);
            font-size: 25px;
            font-weight: 700;
            border: 2px solid rgba(52,83,189,255);
            border-top-left-radius: 50px;
            border-bottom-right-radius: 50px;
            cursor: pointer;
            &:hover {
                box-shadow: 5px 15px 13px 5px rgb(52 83 189);
            }
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
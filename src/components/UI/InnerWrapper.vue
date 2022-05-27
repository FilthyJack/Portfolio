<template>

        <div class="inner-wrapper">
        <div class="closeButton" v-if="hasCloseButton" @click="close">
            <WindowCloseIcon ></WindowCloseIcon>
        </div>
        
        <slot></slot>
        </div>

</template>

<script lang="typescript">
import WindowCloseIcon from 'vue-material-design-icons/WindowClose.vue';
export default {
    name: 'InnerWrapper',
    data(){
        return {
            dummy: ''
        }
    },
    props:['hasCloseButton'],
    components:{
        WindowCloseIcon
    },
    methods:{
        close(){
            this.$emit('close-window');
        }
    }
}
</script>

<style lang="scss">
.inner-wrapper {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    padding: 20px;
    border-radius: 20px;
    display: inline-block;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    position: sticky;
    bottom: 50px;
}

.closeButton{
    position:absolute;
    top: -10px;
    right: 0px;
    cursor: pointer;
}


</style>
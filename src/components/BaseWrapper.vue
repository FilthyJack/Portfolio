<template>
    <section>
        
        <component :is="activeComp"></component>
        
        <MyMenu @select-item="selectItemHandler"></MyMenu>
    </section>
</template>

<script lang="typescript">
import Blogs from './Blogs.vue';
import Form from './Form.vue';
import Gallery from './showcase/Gallery.vue';
import Resume from './resume/Resume.vue';
import Showcase from './showcase/Showcase.vue';
import MyMenu  from './UI/MyMenu.vue';

export default {
    name: 'BaseWrapper',
    components: {
        Blogs,
        Form,
        Gallery,
        Resume,
        Showcase,
        MyMenu,
    },
    data(){
        return {
            activeComp: 'Resume'
        }
    },
    methods:{
        selectItemHandler(option){
            this.$data.activeComp = option;
        }
    }
}
</script>

<style lang="scss">
.base-wrapper {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    padding: 20px;
    border-radius: 20px;
    display: inline-block;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
}
.test {
    height: 300px;
    width: 300px;
    border: 2px solid blue;
}
.close-button{
    position: absolute;
    top: 10px;
    right: 5px;
}
</style>
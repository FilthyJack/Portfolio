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

</style>
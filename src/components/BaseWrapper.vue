<template>
    <section>
        <div class="base-wrapper">
        <p class="close-button">x</p>
        <component :is="activeComp"></component>
        <button @click="setPage('Blogs')">blog</button>
        <button @click="setPage('Form')">form</button>
        <button @click="setPage('Gallery')">gallery</button>
        <button @click="setPage('Resume')">resume</button>
        <button @click="setPage('Showcase')">Showcase</button> 
        </div>
    </section>
</template>

<script lang="typescript">
import Blogs from './Blogs.vue';
import Form from './Form.vue';
import Gallery from './showcase/Gallery.vue';
import Resume from './resume/Resume.vue';
import HelloWorld from './HelloWorld.vue';
import Showcase from './showcase/Showcase.vue';

export default {
    name: 'BaseWrapper',
    props: ['close-button'],
    components: {
        Blogs,
        Form,
        Gallery,
        Resume,
        Hello: HelloWorld,
        Showcase
    },
    data(){
        return {
            blog: 'Blogs',
            form: 'Form',
            activeComp: 'Hello'
        }
    },
    methods:{
        setPage(comp){
            this.$data.activeComp = comp;
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
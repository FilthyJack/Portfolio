<template>
    <section class="menu-container">
        <div id="circularMenu" class="circular-menu">

            <a class="floating-btn" @click="toggleMenu">
                <menu-icon :size="48" title="Click to open Menu!"></menu-icon>
            </a>

            <menu class="items-wrapper">
                <a href="#" @click="handleClick('Resume')" :class="activeOption === 'Resume'? 'activeoption menu-item': 'menu-item'">
                    <FileAccountIcon :size="35" title="See Resume"></FileAccountIcon>
                </a>
                <a href="#" @click="handleClick('Showcase')" :class="activeOption === 'Showcase'? 'activeoption menu-item': 'menu-item'">
                    <FileCodeOutlineIcon :size="35" title="Explore Showcase">
                </FileCodeOutlineIcon></a>
                <a href="#" @click="handleClick('Blogs')" :class="activeOption === 'Blogs'? 'activeoption menu-item': 'menu-item'">
                    <post-icon :size="35" title="Read Blogs"></post-icon>
                </a>
                <a href="#" @click="handleClick('Form')" :class="activeOption === 'Form'? 'activeoption menu-item': 'menu-item'">
                    <notebook-edit-icon :size="35" title="Leave a Note!"></notebook-edit-icon>
                </a>
            </menu>

        </div>
    </section>
</template>

<script lang='ts'>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import FileAccountIcon from 'vue-material-design-icons/FileAccount.vue';
import FileCodeOutlineIcon from 'vue-material-design-icons/FileCodeOutline.vue';
import PostIcon from 'vue-material-design-icons/Post.vue';
import NotebookEditIcon from 'vue-material-design-icons/NotebookEdit.vue';


export default {
    
    name: 'mymenu-component',
    components:{
        MenuIcon,
        FileAccountIcon,
        FileCodeOutlineIcon,
        PostIcon,
        NotebookEditIcon
    },
    data(){
        return{
            activeOption: 'Resume'        }
    },
    methods:{
        handleClick(option) {
            this.$data.activeOption = option;
            this.$emit('select-item', option);
        },
        toggleMenu(){
            document.getElementById('circularMenu').classList.toggle('active');
        }
    }
}
</script>

<style scoped lang='scss'>

.circular-menu {
  position: fixed;
  bottom: 1em;
  right: 1em;
}

.circular-menu .floating-btn {
  display: block;
  width: 5.5em;
  height: 5.5em;
  border-radius: 50%;
  background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(8,9,68,1) 53%, rgba(84,164,199,1) 91%);
  box-shadow: 0 2px 5px 0 hsla(0, 0%, 0%, .26);  
  color: hsl(0, 0%, 100%);
  text-align: center;
  line-height: 3.9;
  cursor: pointer;
  outline: 0;
}

.circular-menu.active .floating-btn {
  box-shadow: inset 0 0 3px hsla(0, 0%, 0%, .3);
}

.circular-menu .floating-btn:active {
  box-shadow: 0 8px 12px 0 hsla(0, 0%, 0%, .4);
}

.circular-menu .floating-btn i {
  font-size: 1.3em;
  transition: transform .2s;  
}

.circular-menu.active .floating-btn i {
  transform: rotate(-45deg);
}

.circular-menu:after {
  display: block;
  content: ' ';
  width: 5.5em;
  height: 5.5em;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -2;
  background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(8,9,68,1) 53%, rgba(84,164,199,1) 91%);
  transition: all .3s ease;
}

.circular-menu.active:after {
  transform: scale3d(4, 4, 1);
  transition-timing-function: cubic-bezier(.68, 1.55, .265, 1);
}

.circular-menu .items-wrapper {
  padding: 0;
  margin: 0;
}

.circular-menu .menu-item {
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: -1;
  display: block;
  text-decoration: none;
  color: hsl(0, 0%, 100%);
  font-size: 1em;
  width: 4em;
  height: 4em;
  border-radius: 50%;
  text-align: center;
  line-height: 3;
  background-color: hsla(0,0%,0%,.1);
  transition: transform .3s ease, background .2s ease;
}

.circular-menu .menu-item:hover {
  background-color: hsla(0,0%,0%,.3);
}

.circular-menu.active .menu-item {
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.circular-menu.active .menu-item:nth-child(1) {
  transform: translate3d(1em,-7em,0);
}

.circular-menu.active .menu-item:nth-child(2) {
  transform: translate3d(-3.5em,-6.3em,0);
}

.circular-menu.active .menu-item:nth-child(3) {
  transform: translate3d(-6.5em,-3.2em,0);
}

.circular-menu.active .menu-item:nth-child(4) {
  transform: translate3d(-7em,1em,0);
}

/**
 * The other theme for this menu
 */

.circular-menu.circular-menu-left {
  right: auto; 
  left: 1em;
}

.circular-menu.circular-menu-left .floating-btn {
  background-color: hsl(217, 89%, 61%);
}

.circular-menu.circular-menu-left:after {
  background-color: hsl(217, 89%, 61%);
}

.circular-menu.circular-menu-left.active .floating-btn i {
  transform: rotate(90deg);
}

.circular-menu.circular-menu-left.active .menu-item:nth-child(1) {
  transform: translate3d(-1em,-7em,0);
}

.circular-menu.circular-menu-left.active .menu-item:nth-child(2) {
  transform: translate3d(3.5em,-6.3em,0);
}

.circular-menu.circular-menu-left.active .menu-item:nth-child(3) {
  transform: translate3d(6.5em,-3.2em,0);
}

.circular-menu.circular-menu-left.active .menu-item:nth-child(4) {
  transform: translate3d(7em,1em,0);
}

.activeoption{
    border: 2px solid silver;
    box-shadow: inset 0 0 3px hsla(0, 0%, 0%, .3);
}
</style>
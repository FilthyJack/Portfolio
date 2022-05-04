<template>
  <base-wrapper>
    <slot>
        <div class="gallery-main-container">
            <div @mouseenter="zoomImage($event)" @mouseleave="zoomImage" class="image-container" v-for="image in images" :key="image.id">
                <img :src="image.src" :alt="image.alt? image.alt: 'default'">
            </div>
        </div>
    </slot>
  </base-wrapper>
</template>

<script lang="typescript">
import BaseWrapper from './../BaseWrapper.vue';
export default {
    name: 'gallery-component',
    components: {
        BaseWrapper
    },
    data() {
        return {
            images: [
                {
                    src: require("../../assets/logo.png"),
                    alt: 'logo',
                    id: 1
                },
                {
                    src: require("../../assets/logo.png"),
                    alt: 'logo',
                    id: 2
                },
                {
                    src: require("../../assets/logo.png"),
                    alt: 'logo',
                    id: 3
                }
            ],
            activeImage:'',
        }
    },
    methods:{
        zoomImage(event){
            if(event.target.classList.contains('zoomed')){
                event.target.classList.remove('zoomed');
            } else {
                event.target.classList.add('zoomed');
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.gallery-main-container {
    @media(min-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 700px;
        padding: 10px;
        padding-bottom: 110px;;
        .image-container {
            width: 200px;
            height: 250px;
            padding: 4px;
            box-shadow: 2px 4px 4px 2px grey;
            margin-bottom: -100px;
            &:nth-child(even) {
                align-self: center;
            }
            &:nth-child(3n) {
                align-self: end;
            }
            &:last-child(){
                margin-bottom: 10px;
            }
            background-color: white;
            transition: transform .3s;
        }
    }
    .zoomed {
        transform: scale(1.5);
    }
}
</style>
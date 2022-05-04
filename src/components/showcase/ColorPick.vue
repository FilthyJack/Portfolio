<template>
    <base-wrapper>
        <slot>
            <section ref="main" class="color-picker-main">
                <video crossorigin="anonymous" ref="video" @play="copyVideo" id="video" width="320" height="240" controls>
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4">
                </video>
                <canvas crossorigin="anonymous" @mousemove="mouseMove" ref="canvas" id="canvas" width="320" height="320">
                </canvas>
                <div class="buttons">
                    <button-component :text="!isPlaying? 'Play Video': 'Pause'" @button-click="clickHandler"></button-component>
                </div>
            </section>
        </slot>
    </base-wrapper>   
</template>

<script lang="typescript">
import BaseWrapper from './../BaseWrapper.vue';
import ButtonComponent from './../UI/Button.vue';

export default {
    name: 'video-component',
    components: {
        BaseWrapper,
        ButtonComponent
    },
    data(){
        return {
            canvas: null,
            video: null,
            context: null,
            isPlaying: false
        }
    },
    mounted(){
            this.$data.canvas = this.$refs.canvas;
            this.$data.video = this.$refs.video;
            this.$data.context = this.$data.canvas.getContext('2d');
    },
    methods:{
        copyVideo(){
            let v = this.$data.video;
            let c = this.$data.context;
            (function loop() {
        if (!v.paused && !v.ended) {
            c.drawImage(v, 0, 0);
            setTimeout(loop, 1000 / 30); // drawing at 30fps
        }
    })();
        },

        mouseMove(event){
            let position = this.findPosition();
            let x = event.pageX - position.x;
            let y = event.pageY - position.y;
            let data = this.$data.context.getImageData(x, y, 1, 1).data;
            let hex = `#${this.rgbConvert(data[0], data[1], data[2])}`;
            this.$refs.main.style.backgroundColor = hex;
        },

        findPosition(){
            let left = 0;
            let top = 0;
            if(this.$data.canvas.offsetParent){
                do{
                    left = this.$data.canvas.offsetLeft;
                    top = this.$data.canvas.offsetTop;
                } while (this.$data.canvas == this.$data.canvas.offsetParent );
                return {x: left, y: top};
                
            }
            return {x: 0, y: 0};
        },
        rgbConvert(r, g, b){
            if (r > 255 || g > 255 || b > 255)
                throw "Invalid color component";
            return ((r << 16) | (g << 8) | b).toString(16);
        },
        clickHandler(){
           if (this.$data.isPlaying){
                this.$refs.video.pause();
                this.$data.isPlaying = false;
                return;
            }
            this.$data.isPlaying = true;
            this.$refs.video.play();
        }
    }
}
</script>

<style lang="scss" scoped>
.color-picker-main{
    @media(min-width: 500px) {
        padding: 50px;
        border-radius: 15px;
        #canvas {
            width: 500px;
            height: 400px;
            background-color: darkslategray;
            border-radius: 12px;
        }
        .buttons{
            margin-left: 160px;
        }
    }

    #video{
        display: none;
    }
    
}


</style>
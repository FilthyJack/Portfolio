<template>
    <inner-wrapper>
        <slot>
            <section ref="main" class="color-picker-main">
                <video crossorigin="anonymous" ref="video" @play="copyVideo" id="video" width="320" height="240" controls>
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4">
                </video>
                <canvas crossorigin="anonymous" @mousemove="mouseMove" ref="canvas" id="canvas" width="320" height="240">
                </canvas>
                <div class="buttons">
                    <button-component :text="!isPlaying? 'Play Video': 'Pause'" @button-click="clickHandler"></button-component>
                </div>
            </section>
        </slot>
    </inner-wrapper>   
</template>

<script lang="typescript">
import InnerWrapper from './../UI/InnerWrapper.vue';
import ButtonComponent from './../UI/Button.vue';

export default {
    name: 'video-component',
    components: {
        InnerWrapper,
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
            this.$data.context = this.$data.canvas.getContext('2d',{
                colorSpace: "display-p3"
            });
    },
    methods:{
        copyVideo(){
            let v = this.$data.video;
            let c = this.$data.context;
            (function loop() {
                if (!v.paused && !v.ended) {
                    c.drawImage(v, 0, 0, 320, 240);
                    setTimeout(loop, 1000 / 60); // drawing at 30fps
                }
            })();
        },

        mouseMove(event){
            let position = this.findPosition();
            let x = event.pageX - position.x ;
            let y = event.pageY - position.y;
            let data = this.$data.context.getImageData(x, y, 1, 1).data;
            console.log(data[0]);
            console.log(data[1]);
            console.log(data[2]);

            let hex = `${this.rgbConvert(data[0], data[1], data[2])}`;
            console.log(hex);
            this.$refs.main.style.backgroundColor = hex;
        },

        findPosition(){
            let left = 0;
            let top = 0;
            if(this.$data.canvas.offsetParent){
                do{
                    //there is an issue with this, due to which current position is not being picked
                    left += this.$data.canvas.offsetLeft;
                    top += this.$data.canvas.offsetTop;
                } while (this.$data.canvas == this.$data.canvas.offsetParent );
                return {x: left, y: top};
                
            }
            return {x: undefined, y: undefined};
        },
        toHex(color){
            let v = color.toString(16);
            return v.length === 1? `0${v}`: v;
        },
        rgbConvert(r, g, b){
            if (r > 255 || g > 255 || b > 255)
                throw "Invalid color component";
            //return ((r << 16) | (g << 8) | b).toString(16);
            let red = this.toHex(r);
            let green = this.toHex(g);
            let blue = this.toHex(b);
            return `#${red}${green}${blue}`;
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
            background-color: darkslategray;
            border-radius: 12px;
            width: 320px;
            height: 240px;
        }
        .buttons{
            margin-left: 60px;
            margin-top: 80px;
        }
    }

    #video{
        display: none;
    }
    
}


</style>
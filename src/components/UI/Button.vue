<template>
    <section class="main">
        <div
            :class = "isClicked? 'button-container is-clicked': 'button-container'"
            @click="clickHandler"
            :disabled="isDisabled"
            >
                <p>{{text}}</p>
        </div>
    </section>
  
</template>

<script lang="typescript">
export default {
    name: 'button-component',
    props: {
        text: String,
    },
    data(){
        return {
            default: 'grey',
            isDisabled: false,
            isClicked: false
        }
    }, 
    methods:{
        clickHandler(){
            this.$data.isClicked = true;
            this.$emit('button-click');
            
        }
    }
}
</script>

<style lang="scss" scoped>
.main{
    position: relative;
}
.button-container {
    position: absolute;
    bottom: 10px;
    border-bottom-style: inset;
    border-right-style: outset;
    padding: 4px;
    border-radius: 20px;
    width: 180px;
    box-shadow: 2px 5px 5px 2px;
    background: rgb(29,253,246);
    background: linear-gradient(90deg, rgba(29,253,246,1) 4%, rgba(58,77,180,1) 55%, rgba(252,237,69,1) 97%);
    p {
        display: contents;
        font-size: 2em;
        color: #fff;
        -webkit-animation: glow 1s ease-in-out infinite alternate;
        -moz-animation: glow 1s ease-in-out infinite alternate;
        animation: glow 1s ease-in-out infinite alternate;
    }

    &:hover{
        background: rgb(29,253,246);
        background: radial-gradient(circle, rgba(29,253,246,1) 4%, rgba(58,77,180,1) 55%, rgba(252,237,69,1) 97%);
    }
    &:active {
        background: rgb(29,253,246);
        background: linear-gradient(45deg, rgba(29,253,246,1) 4%, rgba(58,77,180,1) 55%, rgba(252,237,69,1) 97%);
        border-bottom-style: none;
        border-right-style: none;
    }
}

</style>
<template>
    <section class="main">
        <div
            v-if="size !== 'small'"
            :class = "classes"
            @click="clickHandler"
            :disabled="isDisabled"
            >
                <p>{{text}}</p>
        </div>
        <div
            v-else
            :class = "classes"
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
        disabled: Boolean,
        size: String
    },
    data(){
        return {
            default: 'grey',
        }
    }, 
    computed:{
        classes(){
            if (this.$props.disabled){
                if(this.$props.size !== 'small') {
                    //big button & disabled
                    return 'button-container disabled';
                }
                return 'button-container-small disabled'
            }
            if(this.$props.size !== 'small') {
                    //big button & disabled
                    return 'button-container';
            }
            return 'button-container-small';
        },
        isDisabled(){
            return this.$props.disabled? true: false;
        }
    },
    methods:{
        clickHandler(){
            if (this.$props.disabled){
                return;
            }
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
    box-shadow: 2px 2px 5px 2px #386e86;
    background: rgb(15,32,39);
    background: linear-gradient(135deg, rgba(15,32,39,1) 0%, rgba(41,77,89,1) 57%, rgba(56,110,134,1) 81%);
    border: 1px solid cornsilk;
    p {
        display: contents;
        font-size: 2em;
        color: #fff;
        -webkit-animation: glow 1s ease-in-out infinite alternate;
        -moz-animation: glow 1s ease-in-out infinite alternate;
        animation: glow 1s ease-in-out infinite alternate;
    }

    &:hover{
        background: rgb(15,32,39);
        background: radial-gradient(circle, rgba(15,32,39,1) 0%, rgba(41,77,89,1) 57%, rgba(56,110,134,1) 81%);
    }
    &:active {
        background: rgb(15,32,39);
        background: linear-gradient(45deg, rgba(15,32,39,1) 0%, rgba(41,77,89,1) 57%, rgba(56,110,134,1) 81%);
        border-bottom-style: none;
        border-right-style: none;
    }
}
.button-container-small {
    position: absolute;
    bottom: 10px;
    border-bottom-style: inset;
    border-right-style: outset;
    padding: 2px;
    border-radius: 10px;
    width: 120px;
    box-shadow: 2px 2px 5px 2px #386e86;
    background: rgb(15,32,39);
    background: linear-gradient(135deg, rgba(15,32,39,1) 0%, rgba(41,77,89,1) 57%, rgba(56,110,134,1) 81%);
    p {
        display: contents;
        font-size: 1.4em;
        color: #fff;
        -webkit-animation: glow 1s ease-in-out infinite alternate;
        -moz-animation: glow 1s ease-in-out infinite alternate;
        animation: glow 1s ease-in-out infinite alternate;
    }

    &:hover{
        background: rgb(15,32,39);
        background: radial-gradient(circle, rgba(15,32,39,1) 0%, rgba(41,77,89,1) 57%, rgba(56,110,134,1) 81%);
    }
    &:active {
        background: rgb(15,32,39);
        background: linear-gradient(45deg, rgba(15,32,39,1) 0%, rgba(41,77,89,1) 57%, rgba(56,110,134,1) 81%);
        border-bottom-style: none;
        border-right-style: none;
    }
}

.disabled{
    cursor: not-allowed;
    filter: blur(2px);
}

</style>
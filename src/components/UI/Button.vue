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
    box-shadow: 2px 2px 5px 2px rgba(52,83,189,1);
    background: rgb(0,0,0);
    background: linear-gradient(324deg, rgba(0,0,0,1) 27%, rgba(52,83,189,1) 84%);
    border: 1px solid cornsilk;
    p {
        display: contents;
        font-size: 2em;
        color: #fff;
        -webkit-animation: glow 1s ease-in-out infinite alternate;
        -moz-animation: glow 1s ease-in-out infinite alternate;
        animation: glow 1s ease-in-out infinite alternate;
        font-weight: 600;
    }

    &:hover{
        background: rgb(0,0,0);
        background: radial-gradient(circle, rgba(0,0,0,1) 27%, rgba(52,83,189,1) 84%);
    }
    &:active {
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
    box-shadow: 2px 2px 5px 2px rgba(52,83,189,1);
    background: rgb(0,0,0);
    background: linear-gradient(324deg, rgba(0,0,0,1) 27%, rgba(52,83,189,1) 84%);
    p {
        display: contents;
        font-size: 1.4em;
        color: #fff;
        -webkit-animation: glow 1s ease-in-out infinite alternate;
        -moz-animation: glow 1s ease-in-out infinite alternate;
        animation: glow 1s ease-in-out infinite alternate;
        font-weight: 600;
    }

    &:hover{
        background: rgb(0,0,0);
        background: radial-gradient(circle, rgba(0,0,0,1) 27%, rgba(52,83,189,1) 84%);
    }
    &:active {
        border-bottom-style: none;
        border-right-style: none;
    }
}

.disabled{
    cursor: not-allowed;
    filter: blur(2px);
}

</style>
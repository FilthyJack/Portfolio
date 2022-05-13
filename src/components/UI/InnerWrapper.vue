<template>

        <div class="inner-wrapper">
        <slot></slot>
        </div>

</template>

<script lang="typescript">

export default {
    name: 'InnerWrapper',
    data(){
        return {
            dummy: ''
        }
    },
    methods:{
    }
}
</script>

<style lang="scss">
.inner-wrapper {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    padding: 20px;
    border-radius: 20px;
    display: inline-block;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    position: sticky;
    bottom: 50px;
}


</style>
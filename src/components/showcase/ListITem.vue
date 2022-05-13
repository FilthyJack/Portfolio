<template>
	<div class="list-item-container">
        <img :src="imgUrl" alt="image">
        <div>
            <p class='title'>{{title}}</p>
            <p class='summary'>{{summary}}</p>
        </div>
        
    </div>
</template>

<script lang="ts">


export default {
	name: 'list-item',
    props: ['title', 'imgUrl', 'summary'],
    data(){
        return {
            
        }
    },
    methods:{
        
    },
    computed:{
        
    }
};
</script>

<style scoped lang="scss">
.list-item-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 10px;
    box-shadow: 6px 6px 6px 2px grey;
    border-left: 1px solid grey;
    border-top: 1px solid grey;
    border-radius: 15px;
    transition: box-shadow 0.5s ease;
    .title{
        font-size: 20px;
        font-weight: 600;
        font-family: cursive;
        margin: 4px;
    }
    .summary{
        font-family: cursive;
        font-size: small;
        margin: 4px
    }
    img{
        border-radius: 12px;
        height: 140px;
        width: 210px;
    }

    
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 50%;
    }

    &:hover{
        box-shadow: 5px 11px 25px 15px grey;
    }
}

</style>

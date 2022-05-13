<template>
<section class="error-main">
<InnerWrapper>
	<div class="error-container">
        <div v-if="errorObject.type === 'network'" class="network">
            <p>
                <span><WebOffIcon :size="20" title="Network Issue"></WebOffIcon></span>
                {{errorObject.error}}
            </p>
        </div>
        <div v-else class="unknown">
            <p>
                <span><SkullCrossbonesOutlineIcon :size="20" title="Unknown Issue"></SkullCrossbonesOutlineIcon></span>
                Some Unknown Issue has occured, please drop me a mail if this isn't fixed soon!
            </p>
        </div>
    </div>
</InnerWrapper>
</section>
</template>

<script lang="ts">
import InnerWrapper from './InnerWrapper.vue';
import WebOffIcon from 'vue-material-design-icons/WebOff.vue';
import SkullCrossbonesOutlineIcon from 'vue-material-design-icons/SkullCrossbonesOutline.vue';

export default {
    
	name: 'Error-component',
    components:{
        InnerWrapper,
        WebOffIcon,
        SkullCrossbonesOutlineIcon
    },
    props:['errorObject'], //type & string
    data(){
        return {
            
        }
    },
    methods:{
    },
};
</script>

<style scoped lang="scss">
.error-container{
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
}

.error-main{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}



</style>

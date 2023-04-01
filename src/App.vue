<template>
	<div id="app">
		<base-wrapper></base-wrapper>
	</div>
</template>

<script>
import memeToast from "meme-toast";
import BaseWrapper from "./components/BaseWrapper.vue";



export default {
	name: "App",
	components: {
		BaseWrapper,
	},
	mounted() {
		let displayName = localStorage.getItem('displayName');
		let message = 'Hi there stranger!';
		if(displayName && displayName.length > 0){
			const name = displayName.split(' ')[0];
			message = `Thanks for coming back ${name}!`;
		}
		memeToast.toast({
            position: "bottom",
            message: message,
            duration: '5000',
            type: 'message'
        });
		
	},
};
</script>

<style lang="scss">
#app {
	
	
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: black;
	margin-top: 30px;
	@media(max-width: 500px){
		margin-top:20px;
	}
}
</style>

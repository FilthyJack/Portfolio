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
		memeToast.toast({ position: "bottom", message: 'Testing the toast', duration: '8000', type: 'success' });
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

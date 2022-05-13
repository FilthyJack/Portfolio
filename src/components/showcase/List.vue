<template>

<InnerWrapper>
	<div v-if="!showError" class="list-container">
        <div v-for="(movie,index) in movieArray" :key="index">
            <ListItem
            :key="index"
            :title="movie.title"
            :imgUrl="movie.imgUrl"
            :summary="movie.summary"
            >
            </ListItem>
            
        </div>
        
        <footer>
            <div class="last">
            
            </div>
            <Loader v-if="showLoader"></Loader>
        </footer>
        
        
    </div>
    <Error v-if="showError" :errorObject="errorObj"></Error>
</InnerWrapper>

</template>

<script lang="ts">
import axios from 'axios';
import InnerWrapper from './../UI/InnerWrapper.vue';
import ListItem from './ListITem.vue';
import Loader from './../UI/Loader.vue';
import Error from './../UI/Error.vue';


export default {
    
	name: 'List-comopnent',
    components:{
        InnerWrapper,
        ListItem,
        Loader,
        Error
    },
    data(){
        return {
            movieArray: [],
            showLoader: true,
            errorObj: {},
            showError: false
        }
    },
    created(){
        this.offset = 0;
    },
    mounted(){
        const last = document.querySelector('.last');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
                this.$data.showLoader = true;
                const url = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json';
                axios.get(url, {
                    params:{
                        offset: this.offset,
                        type: 'all',
                        'api-key': 'AuwAoGmeBKCX5hIM5lBzFS5wiTCJvw1B'
                    }
                }).then((res) => {
                    let array = [];
                    const results = res.data.results;
                    results.forEach((result) => {
                        const title = result.display_title;
                        const imgUrl = result.multimedia.src;
                        const summary = result.summary_short;
                        const ob = {title, imgUrl, summary};
                        array.push(ob);
                    });
                    this.$data.movieArray = [...this.$data.movieArray, ...array];
                    this.$data.showLoader = false;
                }).catch(() => {
                    this.$data.showLoader = false;
                    const errorObj = {
                        type: 'network',
                        error: 'something went wrong'
                    }
                    this.$data.errorObj = {...this.$data.errorObj, ...errorObj};
                    this.$data.showError = true;
                })
                this.offset+= 20;
            }
          });
        });

        observer.observe(last);
        
    },
    methods:{
    },
    computed:{
        
    }
};
</script>

<style scoped lang="scss">
.list-container{
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 20px;
}

.last{
    height: 50px;
}

</style>

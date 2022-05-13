<template>
        <div class="blog-main-container">
            <div class="blog-container" v-for="link in linkList" :key="link.id">
                <h3>{{link.title}}</h3>
                <p>{{link.subtitle}}</p>
            </div>
        </div>
</template>

<script>
export default {
    name: 'blog-component',
    components: {
    },
    data() {
        return {
            linkList: [
                {title: 'title1', subtitle: 'subTitle1', id:1},
                {title: 'title1', subtitle: 'subTitle1', id:2},
                {title: 'title1', subtitle: 'subTitle1', id:3},
                {title: 'title1', subtitle: 'subTitle1', id:4},
                {title: 'title1', subtitle: 'subTitle1', id:5},
                {title: 'title1', subtitle: 'subTitle1', id:6}

            ],
            blogList: []
        }
    },
    mounted() {
        //code to fetch links maybe,
    }
}
</script>

<style lang="scss" scoped>
.blog-main-container {
    @media(min-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 700px;
        padding: 10px;
        .blog-container {
            width: 300px;
            padding: 7px;
            box-shadow: 2px 4px 4px 2px grey;
            margin-bottom: 20px;
            &:nth-child(even) {
                align-self: end;
            }
        }
    }
}

</style>
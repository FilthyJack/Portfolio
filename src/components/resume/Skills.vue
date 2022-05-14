<template>
  <section>
        <div class="skills-main-container">
            <div v-for="skill in skills" :key="skill.name" class="skill-container">
                <p class="skill-name">{{skill.name}}</p>
                <div class="skill-bar-blank">
                    <div :class="inView? 'skill-bar-color filled': 'skill-bar-color'" :data-rating="skill.rating"></div>
                </div>
            </div>
        </div>
  </section>
</template>

<script lang="typescript">
export default {
    name: 'skill-component',
    props: {
        skills: []
    },
    mounted(){
        setTimeout(()=>{
            this.$data.inView = true;
        },500)
    },
    data() {
        return {
            inView: false
        }
    }
}
</script>

<style lang="scss">

.skill-container {
    display: flex;
    flex-direction: row;
    width: 400px;
    justify-content: space-around;
    align-items: center;
    .skill-bar-blank{
        width: 250px;
        border: 2px solid salmon;
        height: 15px;
        border-radius: 8px;
    }
    .skill-bar-color{
        width: 0%;
        height: 100%;
        transition: width 2s;
        background-color: salmon;
        border-radius: 8px;
    }
    .filled[data-rating="average"] {
        width: 80%;
    }
    .filled[data-rating="good"] {
        width: 85%;
    }
    .filled[data-rating="great"] {
        width: 90%;
    }
    .filled[data-rating="excellent"] {
        width: 95%;
    }
    .skill-name{
        display: inline-block;
        width: 140px;
        
    }
}
</style>
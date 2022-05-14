<template>
  <section class="resume-main-container">
      <section class="resume-header">
          <div class="subheader resume-name">
              <p class="name-text">{{name.toUpperCase()}}</p>
          </div>
          <div class="subheader resume-title">
              <p class="title-text">{{title.toUpperCase()}}</p>
          </div>
          <div class="subheader resume-photo">
              <img src="" alt="" class="photo">
          </div>
      </section>
      <section class="resume-body">
          <div class="resume-left">
              <div class="resume-left-heading">
                  <p>EXPERIENCE</p>
              </div>
              <div v-for="item in experience" :key="item.company" class="resume-left-item">
                  <p class="company-name">{{item.company}}</p>
                  <div v-for="role in item.roles" :key="role.role" class="roles">
                      <p>{{role.role}}</p>
                      <p>{{role.duration}}</p>
                      <p>{{role.stack[0] +  role.stack[1]}}</p>
                  </div>
              </div>
          </div>
          <div class="resume-right">
              <div class="resume-left-heading">
                  <p>EDUCATION</p>
              </div>
              <Skills
                :skills="[{name: 'Javascript',rating: 'great'}, {name: 'Javascript',rating: 'great'}]"
              >
              </Skills>
          </div>
      </section>
      <section class="resume-footer"></section>
  </section>
</template>

<script>
import Skills from './Skills.vue';
import resumeData from './../../assets/resume/resume.json';

export default {
    name: 'resume-component',
    components: {
        Skills
    },
    data() {
        return {
            name: resumeData.name,
            title: resumeData.title,
            subtitle: resumeData.subtitle,
            skillArray: resumeData.skills,
            experience: resumeData.experience

        }
    }
}
</script>

<style lang="scss" scoped>
.resume-main-container {
    @media(min-width: 500px) {
        display: flex;
        color: cornsilk;
        flex-direction: column;
        border: 3px solid cornsilk;
        border-radius: 14px;
        align-items: center;
        margin-top: 5px;
        box-shadow: 5px 1px 23px 15px #0f2027;
        background: rgb(15,32,39);
        background: linear-gradient(135deg, rgba(15,32,39,1) 0%, rgba(41,77,89,1) 57%, rgba(56,110,134,1) 81%);
        .resume-header{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 10px;
            .resume-name{
                border: 5px double;
                font-size: 35px;
                font-weight: 900;
                padding: 12px 50px 12px 50px;
                height: 40px;
                p{
                    display: inline;
                }
            }
            .resume-title{
                font-size: 17px;
                font-weight: 500;
                height: 30px;
                margin-top: 15px;
                p{
                    display: inline;
                }
            }
            .resume-photo{
                width: 130px;
                height: 125px;
                border-radius: 65px;
                background-color: blue;
                margin-top: 15px;
            }
        }

        .resume-body{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            margin-top: 29px;
            .resume-left{
                border-right: 5px solid ;
                width: 400px;
                padding-right: 30px;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }
            .resume-right{
                border-left: 5px solid ;
                height: 300px;
                width: 400px;
            }
            .resume-left-item{
                
            }
        }
        
    }
}
</style>
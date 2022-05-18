<template>
  <section class="resume-main-container">
<!-- ========================resume-left============================================ -->
      <div class="resume-left">
        
        <div class="header">
            <h2><span>ASHIM</span><br /><span>KHAN</span></h2>
            <h3>FRONTEND DEVELOPER</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here,.
            </p>
        </div>

        <div class="contacts">
            <div class="email">
                <p>Email</p>
                <p>ashim07@zohomail.in</p>
            </div>
            <div class="linkedin">
                <p>LinkedIn</p>
                <p>www.linkedin.com/in/ashim-khan</p>
            </div>
            <div class="hashnode">
                <p>Blog</p>
                <p>callbackconundrum.hashnode.dev</p>
            </div>
            <div class="npm">
                <p>NPM</p>
                <p>www.npmjs.com/package/meme-toast</p>
            </div>
        </div>

        <div class="skills">
            <h3>SkillSet</h3>
            <div class="r1">
                <div class="icon-holder">
                <img class="js" src="@/assets/js.png" alt="resume-photo" />
                </div>
                <div class="icon-holder">
                    <img src="@/assets/vue1.png" alt="resume-photo" />
                </div>
                <div class="icon-holder">
                    <img src="@/assets/react.png" alt="resume-photo" />
                </div>
                <div class="icon-holder">
                    <img src="@/assets/ts.png" alt="resume-photo" />
                </div>
            </div>
            <div class="r2">
                <div class="icon-holder">
                    <img src="@/assets/jest.png" alt="resume-photo" />
                </div>
                <div class="icon-holder">
                    <img src="@/assets/css.png" alt="resume-photo" />
                </div>
            </div>
          
        </div>

      </div>
<!-- ========================resume-left============================================ -->




      <div class="resume-right">
        <div class="resume-photo">
            <img src="@/assets/potrait1.jpg" alt="resume-photo" />
        </div>
        <div class="resume-content">
            <h1 class="education-title">EDUCATION</h1>
            <div class="resume-education">
                <div class="dot"></div>
                <h2>Bachelor of Technology</h2>
                <h3>2015 - 2019</h3>
                <p>NIT Raipur</p>
            </div>

            <h1 class="experience-title">EXPERIENCE</h1>
            <div class="resume-experience">
                <div class="dot1"></div>
                <h2>Frontend Developer</h2>
                <h3>2021 - Present  /  Enterprise Minds</h3>
                <p>Developed and delivered a full-scale Help-center for a major Bank.
                    Owned TDD for the application. End to End UI development with Vue(2)</p>
                <div class="dot2"></div>
                <h2 class="ds">R&D Development Specialist</h2>
                <h3>2019 - 2021  /  Dassault Systemes</h3>
                <p>Developed a Geological Modelling Application in a 5-member team.
                    Rebuilt UI with React 15 and Typescript & Integrated Unit Testing with Jasmine</p>
                
            </div>
        </div>
      </div>
      
  </section>
</template>

<script>
import resumeData from './../../assets/resume/resume.json';

export default {
    name: 'resume-component',
    components: {
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
        color: #fff8dc;
        position: relative;
        width: 700px;
        height: 850px;
        box-shadow: -35px 150px 120px 21px black;
        background: black;
        margin-bottom: 50px;
        
        .resume-left{
            position: absolute;
            left: 0px;
            top: 120px;
            margin-left: 35px;
            width: 45%;
            height: 85%;
            background-color: rgb(20 20 21);
            text-align: left;
            padding-right: 5px;
            border-top-left-radius: 50px;
            border-bottom-right-radius: 60px;
           .header{
               margin-left: 50px;
               h2{
                    font-size: 45px;
                    margin-top: 25px;
                    margin-bottom: 20px;
                    line-height: 35px;
                }
                h3{
                    display: inline;
                    font-size: 18px;
                    margin: 0px;
                    margin-top: 10px;
                    letter-spacing: 1px;
                    background-color: #192e77;
                    padding: 2px 10px 2px 10px;

                }
                p{
                    margin-top:20px;
                    font-weight: 400;
                    line-height: 16px;
                    color: #fff8dc;
                }
           }

           .contacts{
               margin-left: 50px;
               margin-top: 40px;
               & > div{
                   margin-top: 10px;
                   margin-bottom: 0px;
               }
               p:first-child{
                   color: #192e77;
                   font-size: 21px;
                   letter-spacing: 1px;
                   margin-top: 0px;
                   filter: brightness(1.35);
               }
               p{
                   font-size: 18px;
                   font-weight: 600;
                   margin: 0px;
                   margin-top: -5px;
                    color: #fff8dc;
               }
            }
            .skills {
                display: flex;
                flex-direction: column;
                width: 80%;
                margin-left: 40px;
                justify-content: space-evenly;
                align-items: center;
                .r1{
                    display: flex;
                    align-items: center;
                }
                .r2{
                    display: flex;
                    align-items: center;
                }
                h3{
                    font-size: 25px;
                    margin-bottom: 5px;
                }
            }
            h2{
                filter: brightness(1.35);
            }
        }
        .resume-right{
            position: absolute;
            right: 0px;
            margin-top: 10px;
            width: 55%;
            height: 90%;
            .resume-photo{
                width: 95%;
                margin-left: 20px;
                
                img{
                    width: 75%;
                    height: 300px;
                    border-top-left-radius: 50px;
                    border-bottom-right-radius: 60px;
                }
            }
            .resume-content{
                margin-left: 68px;
                text-align: left;
                h1{
                    margin-left: 15px;
                }
                .education-title, .experience-title{
                    letter-spacing: 1px;
                    font-size: 25px;
                    margin: 0;
                    margin-top: 20px;
                    margin-left: -5px;
                }
            }
            .resume-education{
                position: relative;
                width: 90%;
                border-left: 4px solid rgb(20 20 21);
                margin-top: 20px;
                text-align: left;
                .dot{
                    position: absolute;
                    width: 15px;
                    top: -2px;
                    left: -11px;
                    border: 1px solid #192e77;
                    height: 15px;
                    border-radius: 10px;
                    background-color: #192e77;
                }
                h2{
                    color: #192e77;
                    position: relative;
                    top: -10px;
                    letter-spacing: 1px;
                }
                h2,h3,p{
                    margin: 0;
                    margin-left: 15px;
                }
                h3{
                    margin-top: -10px;
                }
            }

            .resume-experience{
                position: relative;
                width: 90%;
                border-left: 4px solid rgb(20 20 21);
                margin-top: 20px;
                text-align: left;
                .dot1{
                    position: absolute;
                    width: 15px;
                    top: -2px;
                    left: -11px;
                    border: 1px solid #192e77;
                    height: 15px;
                    border-radius: 10px;
                    background-color: #192e77;
                }
                .dot2{
                    position: absolute;
                    width: 15px;
                    top: 130px;
                    left: -11px;
                    border: 1px solid #192e77;
                    height: 15px;
                    border-radius: 10px;
                    background-color: #192e77;
                }
                h2{
                    color: #192e77;
                    position: relative;
                    top: -10px;
                    letter-spacing: 1px;
                }
                h2,h3,p{
                    margin: 0;
                    margin-left: 15px;
                }
                h3{
                    margin-top: -10px;
                }
                p{
                    font-weight: 400;
                    line-height: 16px;
                }
                .ds{
                    letter-spacing: 0px;
                    margin-top: 19px;
                }
                img{
                    border: 2px solid white;
                    width: 50px;
                }
            }
            h2{
                filter: brightness(1.35);
            }
        }
    }
}

.icon-holder {
    margin: 5px;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 2px double white;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 30px;
    }
    .js{
        width: 35px;
    }
}
</style>
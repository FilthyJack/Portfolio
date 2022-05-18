<template>
        <div class="form-main-container">
            <h3 class="form-title">Leave a Note!</h3>
            <p class="form-subtitle">I promise I will read it, (maybe)</p>
            <form @submit.prevent="sendResponse" class="form-container">
                    <label for="name">Your name please!<span class="imp">*</span>
                        <input v-model="name" type="text" id="name" required>
                    </label>
                    <br />
                <label for="phone">Your Phone Number?
                    <input type="text" id="phone">
                </label>
                <br>
                <label for="email">Maybe your email too ?
                    <input type="text" id="email">
                </label>
                <br>
                <label for="comments">Anything you wanna jot down real quick ?
                    <textarea rows="4" type="textfield" id="comments"></textarea>
                </label>
                <br />
                <input v-model="disclaimer" type="checkbox" id="disclaimer" name="disclaimer" value="disclaimer" required>
                <label class="dis-label" for="disclaimer">
                    I promise to help atleast one person today.
                </label>
                <br>
                <div class='button-div'>
                    <Button size="small" text="Add Note" @button-click="sendResponse" :disabled="isDisabled"></Button>
                </div>
                      
            </form>
            <div v-if="isToastVisible" class="toast">
                <p class="toast-text">
                    Welcome back! {{visitorName}}
                </p>
            </div>
        </div>
</template>

<script>
import Button from './UI/Button.vue';
export default {
    name: 'form-component',
    components: {
        Button
    },
    mounted() {
        const visitorName = localStorage.getItem('visitor');
        if (visitorName && visitorName.length !== 0) {
            this.$data.visitorName = visitorName;
            this.$data.showToast = true;
            setTimeout(()=>{
                this.$data.showToast = false;
            }, 5000);
        }
    },
    data() {
        return {
            visitorName: '',
            showToast: false,
            name: '',
            disclaimer: false
        }
    },
    computed: {
        isToastVisible(){
            return this.$data.showToast;
        },
        isDisabled(){
            if (this.$data.name !== '' && this.$data.disclaimer === true) {
                return false;
            }
            return true;
        }
        
    },
    methods:{
        sendResponse() {
            console.log(this.$data.name);
            //code to send response thorugh api
        }
    }
}
</script>

<style lang="scss" scoped>
.form-main-container {
    @media(min-width: 500px) {
        .form-title{
            font-size: 25px;
        }
        .form-subtitle{
            display: contents;
            font-size: 18px;
        }
        
        width: 700px;
        padding: 10px;
        box-shadow: 5px 40px 20px 15px black;
        
        .form-container {
            width: 300px;
            padding: 7px;
            margin-bottom: 20px;
            margin-top: 20px;
            &:nth-child(even) {
                align-self: end;
            }
        }
        
        label{
            font-size: 16px;
            margin-top: 15px;
        }
        input, textarea{
            -webkit-appearance: none;
            outline: none;
            padding: 5px;
            font-size: 20px;
            color: white;   
            box-shadow: 2px 2px 5px 5px #192e77;
            background: black;
            border: 1px solid cornsilk;
            margin: 10px 0 20px 0;
            border-radius: 20px;
            &:active{
                border-bottom: 3px outset cyan;
            }
            &:focus{
                border-bottom: 3px outset cyan;
            }
        }
        textarea{
            font-size: 14px;
            width: 245px;
        }
        #disclaimer{
            width: 20px;
            height: 20px;
            border-radius: 5px;
            &:active{
                border-bottom: none;
            }
            &:focus{
                border-bottom: none;
            }
            &:checked {
                background: #192e77; 
                 border: 3px outset cyan;             
            }
        }
    }

    .toast {
        position: absolute;
        top:100px;
        left:400px;
        border: 3px solid black;
        padding: 20px;

    }

    .button-div{
        position:relative;
        left: 85px;
        top: 25px; 
    }

    input[type="checkbox"] {
        vertical-align:middle;
    }

    .dis-label{
        margin-left: 10px;
        vertical-align: super;
    }
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3,p, label{
            color: white;
    }
}

.imp {
    color: red;
}

</style>
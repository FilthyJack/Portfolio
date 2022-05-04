<template>
  <base-wrapper>
    <slot>
        <div class="form-main-container">
            <h3 class="form-title">Leave a Note!</h3>
            <p class="form-subtitle">I promise I will read it, maybe.</p>
            <form @submit.prevent="sendResponse" class="form-container">
                <label for="name">What is your name fellow human ?<span class="imp">*</span>
                    <input v-model="name" type="text" id="name" required>
                </label>
                <br>
                <label for="phone">Give me your number if you wanna...
                    <input type="text" id="phone">
                </label>
                <br>
                <label for="email">Maybe your email too ?
                    <input type="text" id="email">
                </label>
                <br>
                <label for="comments">Anything you wanna jot down real quick ?
                    <textarea rows="5" type="textfield" id="comments"></textarea>
                </label>
                <br />
                <input v-model="disclaimer" type="checkbox" id="disclaimer" name="disclaimer" value="disclaimer" required>
                <label class="dis-label" for="disclaimer">I promise to help atleast one person today. <span class="imp">*</span></label><br>
                <button @click="sendResponse" :disabled="isDisabled" class="submit">I'm Done!</button>       
            </form>
            <div v-if="isToastVisible" class="toast">
                <p class="toast-text">
                    Welcome back! {{visitorName}}
                </p>
            </div>
        </div>
    </slot>
  </base-wrapper>
</template>

<script>
import BaseWrapper from './BaseWrapper.vue';
export default {
    name: 'form-component',
    components: {
        BaseWrapper,
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
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 700px;
        padding: 10px;
        .form-container {
            width: 300px;
            padding: 7px;
            box-shadow: 2px 4px 4px 2px grey;
            margin-bottom: 20px;
            &:nth-child(even) {
                align-self: end;
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
}

.imp {
    color: red;
}
</style>
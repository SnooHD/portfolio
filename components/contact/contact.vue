<template>
<section id="contact" class="lg:px-4 px-0 mt-10 lg:mt-40 flex flex-col justify-between relative">
    <h1 v-if="$mq !== 'mobile'" class="font-bree-serif text-4xl text-blue-dark">Contact</h1>
    <div class="flex flex-col lg:flex-row mt-8 justify-between">
        <div class="flex flex-col rounded-mid lg:max-w-640px sm:w-full lg:w-3/5 w-contact-mobile sm:translate-none -translate-1rem bg-light shadow-window pb-6">
            <div class="bg-dark w-full flex">
                <span class="px-6 py-2 font-lato font-semibold text-white text-xl">{{ $mq === 'mobile' ? 'Contact' : 'New message' }}</span>
            </div>
            <div class="px-6 flex flex-col text-lg">
                <div class="w-full pt-5 pb-2 border-b border-gray-border relative">
                    <label class="text-light-gray font-montserrat font-medium md:text-base text-sm" for="email">From</label>
                    <input v-model="email" class="pl-3 bg-none outline-none font-lato text-gray md:text-base text-sm" id="email" placeholder="example@domain.com" />
                    <error class="absolute" :active="error.type === 'email'" :error="error" />
                </div>
                <div class="w-full flex flex-row pt-5 pb-2 border-b items-center border-gray-border">
                    <label class="text-light-gray font-montserrat font-medium md:text-base text-sm">To</label>
                    <div class="pl-3 flex flex-row">
                        <div class="bg-white rounded-full flex flex-row items-center pl-1 pr-3 py-1">
                            <div class="w-25px h-25px">
                                <img src="@/assets/images/avatar/snoo.png" />
                            </div>
                            <a tabindex="-1" class="pl-2 font-lato text-gray select-none md:text-base text-sm" href="mailto:snoohd@gmail.com">snoohd@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div class="w-full pt-5 pb-2 border-b border-gray-border">
                    <label class="text-light-gray font-montserrat font-medium md:text-base text-sm" for="subject">Subject</label>
                    <input v-model="subject" class="pl-3 bg-none outline-none font-lato text-gray md:text-base text-sm" placeholder="New job offer" id="subject"/>
                </div>
                <div class="w-full py-5 relative">
                    <textarea v-model="message" id="message" class="w-full resize-none lg:h-150px md:h-240px h-150px xl:h-240px bg-none font-montserrat font-medium text-gray outline-none md:text-base text-sm" placeholder="Message" />
                    <error :active="error.type === 'message'" :error="error" />
                </div>
                <div class="w-full flex flex-row justify-end">
                    <button @click="sendEmail" 
                        :class="[
                            'relative group rounded-mid bg-blue-mid flex h-8 w-32 flex-row px-4 items-center justify-center',
                            'transition-bg transition-400',
                            sending === 'stage' ? 'pr-4' : 'pr-12',
                            sendError === 'server' ? 'bg-red w-48': null,
                            sendError === 'again' ? 'bg-orange w-40': null,
                            error.type ? 'bg-orange': null,
                            send ? 'bg-green': null
                        ]">
                        <span v-if="sendError === 'server'" class="shake text-white font-montserrat md:text-lg font-bold py-1 text-base">Server error!</span>
                        <span v-else-if="sendError === 'again'" class="text-white font-montserrat md:text-lg font-bold py-1 text-base">Try again</span>
                        <span v-else-if="sending === 'stage'" class="text-white font-montserrat md:text-lg font-bold py-1 text-base">Sending...</span>
                        <span v-else-if="send" class="text-white font-montserrat md:text-lg font-bold py-1 text-base">Sent!</span>
                        <span v-else-if="error.type" class="text-white font-montserrat md:text-lg font-bold py-1 text-base">Oops!</span>
                        <span v-else class="text-white font-montserrat md:text-lg font-bold py-1 text-base">Send</span>
                        <svg 
                            :class="[
                                'absolute ml-3 transition-1000 right-14px top-8px',
                                sending === 'stage' ? 'transition-none translate-contact-stage opacity-0' : 'transition-opacity-transform',
                                sending ? 'translate-contact-send opacity-0' : 'opacity-100 translate-none',
                            ]" 
                            width="20" height="18" viewBox="1 7 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.10278 22.8199L21.1685 9.04534C21.7739 8.40338 21.3228 7.35644 20.4404 7.35553L1.45487 7.39118C0.733985 7.38602 0.257467 8.12489 0.538421 8.77694L2.35346 13.0146C2.55131 13.4738 3.06126 13.7223 3.54419 13.5795L17.2687 9.72391L5.03602 17.0418C4.60453 17.304 4.43488 17.8453 4.63274 18.3045L6.46614 22.5342C6.74709 23.1863 7.61141 23.3474 8.10278 22.8199Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center flex-grow">
            <ul class="lg:pl-24 mt-12 lg:mt-0 pl-0 font-montserrat font-medium text-gray text-lg">
                <li v-if="$mq === 'desktop'" class="flex flex-row">
                    <svg width="25" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5689 0C8.67516 0 6.32935 2.51338 6.32935 5.61378C6.32935 8.71419 8.67516 11.2276 11.5689 11.2276C14.4626 11.2276 16.8084 8.71419 16.8084 5.61378C16.8084 2.51338 14.4626 0 11.5689 0Z" fill="#5DC5FF"/>
                        <path d="M11.1946 11.9761C7.57233 11.9761 0.341309 14.8848 0.341309 20.6587V22.8294C0.341309 24.0233 0.951808 25.0001 1.69797 25.0001H20.6913C21.4374 25.0001 22.0479 24.0233 22.0479 22.8294V20.6587C22.0479 14.8848 14.8169 11.9761 11.1946 11.9761Z" fill="#5DC5FF"/>
                    </svg>
                    <span class="pl-6">Mike de Snoo</span>
                </li>
                <li v-if="$mq === 'desktop'" class="flex flex-row pt-6">
                    <svg width="25" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.70724 0C4.34052 0 0 4.34052 0 9.70724C0 15.49 6.12943 23.4638 8.65331 26.5008C9.20801 27.1664 10.2203 27.1664 10.775 26.5008C13.2851 23.4638 19.4145 15.49 19.4145 9.70724C19.4145 4.34052 15.074 0 9.70724 0Z" fill="#FF5D5D"/>
                        <path d="M9.62868 14.145C7.5739 14.145 5.90625 12.4774 5.90625 10.4226C5.90625 8.36784 7.5739 6.7002 9.62868 6.7002C11.6835 6.7002 13.3511 8.36784 13.3511 10.4226C13.3511 12.4774 11.6835 14.145 9.62868 14.145Z" fill="white"/>
                    </svg>
                    <span class="pl-6">
                        Rijnestijn 17<br/>
                        3334CT, Zwijndrecht<br/>
                        The Netherlands
                    </span>
                </li>
                <li class="flex flex-row pt-6">
                    <svg class="w-5 lg:w-8" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.9875 8.42022C24.9875 7.51367 24.525 6.72044 23.8125 6.27976L13.7625 0.3494C12.9875 -0.116467 12.0125 -0.116467 11.2375 0.3494L1.1875 6.27976C0.475 6.72044 0 7.51367 0 8.42022V21.0112C0 22.3962 1.125 23.5294 2.5 23.5294H22.5C23.875 23.5294 25 22.3962 25 21.0112L24.9875 8.42022Z" :fill="$mq === 'desktop' ? '#FFCE85' : '#3687a7'"/>
                        <path d="M11.175 13.8848L2.17499 8.21888L11.2375 2.86771C12.0125 2.40184 12.9875 2.40184 13.7625 2.86771L22.825 8.21888L13.825 13.8848C13.0125 14.3885 11.9875 14.3885 11.175 13.8848Z" :fill="$mq === 'desktop' ? '#fff' : '#65b4d3'"/>
                    </svg>
                    <a href="mailto:snoohd@gmail.com" class="lg:pl-6 pl-4 lg:text-base lg:text-gray text-white text-sm">snoohd@gmail.com</a>
                </li>
                <li class="flex flex-row pt-6">
                    <svg class="w-5 lg:w-8" width="25" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.13376 6.56494H0.601318V20.183H5.13376V6.56494Z" :fill="$mq === 'desktop' ? '#0077B5' : '#3687a7'"/>
                        <path d="M5.43228 2.35225C5.40287 1.017 4.44802 0 2.89751 0C1.34699 0 0.333313 1.017 0.333313 2.35225C0.333313 3.65984 1.31703 4.70612 2.83867 4.70612H2.86764C4.44802 4.70612 5.43228 3.65984 5.43228 2.35225Z" :fill="$mq === 'desktop' ? '#0077B5' : '#3687a7'"/>
                        <path d="M21.4795 12.3748C21.4795 8.1919 19.2435 6.24512 16.2609 6.24512C13.8545 6.24512 12.7771 7.5669 12.1756 8.49415V6.56526H7.64258C7.70232 7.84311 7.64258 20.1834 7.64258 20.1834H12.1756V12.5779C12.1756 12.1709 12.205 11.7649 12.3248 11.4735C12.6524 10.6604 13.3982 9.81855 14.6504 9.81855C16.2912 9.81855 16.947 11.0673 16.947 12.8973V20.183H21.4793L21.4795 12.3748Z" :fill="$mq === 'desktop' ? '#0077B5' : '#3687a7'"/>
                    </svg>
                    <a href="https://www.linkedin.com/in/snoo/" class="lg:text-blue-mid text-white lg:pl-6 pl-4 font-medium lg:text-base text-sm">linkedin.com/in/snoo/</a>
                </li>
                <li class="flex flex-row pt-6">
                    <svg class="w-5 lg:w-8" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.7636 8.34752C24.738 8.26925 24.7295 8.24367 24.7194 8.2181C24.6845 8.14137 24.6729 8.11812 24.659 8.09565C24.6148 8.02357 24.6 8.00187 24.5838 7.98095C24.5303 7.91507 24.5125 7.8957 24.4939 7.8771C24.4319 7.8182 24.4117 7.80115 24.3916 7.78487C24.3373 7.74458 24.3319 7.73915 24.3257 7.73527L12.9913 0.179025C12.6333 -0.059675 12.1675 -0.059675 11.8087 0.179025L0.475075 7.73527C0.4402 7.76007 0.4247 7.77247 0.4092 7.78487C0.388275 7.80115 0.368125 7.8182 0.34875 7.83602C0.287525 7.8957 0.2697 7.91507 0.253425 7.93523C0.200725 8.00187 0.186 8.02357 0.17205 8.04605C0.127875 8.11812 0.11625 8.14137 0.104625 8.16617C0.070525 8.24368 0.062 8.26925 0.053475 8.2956C0.02945 8.3762 0.024025 8.40643 0.0186 8.43665C0.00387496 8.5281 0 8.5746 0 8.62187V16.1781C0 16.2246 0.00387496 16.2711 0.010075 16.3176C0.024025 16.3936 0.02945 16.423 0.0372 16.4525C0.062 16.53 0.070525 16.5563 0.081375 16.5827C0.11625 16.6578 0.127875 16.6811 0.14105 16.7051C0.186 16.7764 0.200725 16.7973 0.216225 16.8183C0.2697 16.8841 0.287525 16.9043 0.306125 16.9221C0.368125 16.9818 0.388275 16.9988 0.4092 17.0151C0.46345 17.0554 0.468875 17.0609 0.475075 17.0647L11.8087 24.621C11.9877 24.7403 12.1938 24.8 12.4 24.8C12.6061 24.8 12.8123 24.7403 12.9913 24.621L24.3257 17.0647C24.3598 17.0399 24.3753 17.0275 24.3916 17.0151C24.4117 16.9988 24.4319 16.9818 24.452 16.964C24.5125 16.9043 24.5303 16.8841 24.5473 16.8648C24.6 16.7973 24.6148 16.7764 24.6287 16.754C24.6729 16.6811 24.6845 16.6579 24.6954 16.6338C24.7295 16.5563 24.738 16.53 24.7465 16.5044C24.7713 16.423 24.7768 16.3936 24.7822 16.3633C24.7969 16.2711 24.8 16.2246 24.8 16.1781V8.62187C24.8 8.5746 24.7969 8.5281 24.7907 8.48315C24.7768 8.40642 24.7713 8.3762 24.7636 8.34752Z"  :fill="$mq === 'desktop' ? '#6f6f6f' : '#3687a7'"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4656 3.05737L21.8155 8.62342L18.0862 11.1181L13.4656 8.02745V3.05737ZM12.4 14.9211L8.63115 12.4L12.4 9.87892L16.1696 12.4L12.4 14.9211ZM13.4656 16.7725V21.7426L21.8155 16.1766L18.0862 13.6826L13.4656 16.7725ZM22.6687 14.1833L20.0027 12.4L22.6687 10.6167V14.1833ZM2.9845 16.1766L11.3344 21.7426V16.7725L6.71458 13.6826L2.9845 16.1766ZM2.13123 10.6167L4.798 12.4L2.13123 14.1833V10.6167ZM11.3344 8.02745V3.05737L2.9845 8.62342L6.71458 11.1181L11.3344 8.02745Z" :fill="$mq === 'desktop' ? '#fff' : '#65b4d3'"/>
                    </svg>
                    <a href="https://codepen.io/snoo/" class="lg:text-blue-mid text-white lg:pl-6 pl-4 font-medium lg:text-base text-sm">codepen.io/snoo/</a>
                </li>
            </ul>
        </div>
    </div>
</section>
</template>

<script>
import error from '~/components/error/error.vue';
export default {
    data(){
        return {
            email: null,
            subject: null,
            message: null,
            send: false,
            sending: false,
            sendError: false,
            error: {
                trigger: false,
                type: null,
                message: null
            },
        }
    },
    watch: {
        email(){
            if(this.error.type === 'email'){
                this.error.type = null;
                this.sendError = false;
                this.send = false;
            }
            if(this.send){
                this.send = false;
            }
        },
        message(){
            if(this.error.type === 'message'){
                this.error.type = null;
                this.sendError = false;
            }
            if(this.send){
                this.send = false;
            }
        }
    },
    computed: {
        checkEmail(){
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!regex.test(this.email)){
                return false;
            }

            return true;
        }
    },
    methods: {
        async sendEmail(){
            if(!this.email){
                return this.setError('email');
            }

            if(!this.checkEmail){
                return this.setError('email-wrong');
            }

            if(!this.message){
                return this.setError('message');
            }

            let subject = this.subject;
            if(!subject){
                subject = 'New job offer';
            }
            
            this.sendError = false;

            this.sending = true;
            
            setTimeout(() => {
                if(!this.sendError){
                    this.sending = 'stage';
                }
            }, 1000);
            

            //create url
            let sendUrl = 'https://nativeway.com.uy/send-a-portfolio-email.php?'+
            'subject='+encodeURI(subject)+'&'+
            'email='+encodeURI(this.email)+'&'+
            'message='+encodeURI(this.message);

            //send email
            let send;
            try{
                send = await this.$axios.$get(sendUrl);
            }catch(e){
                console.log('server error');
            }

            if(send === 'sent'){
                setTimeout(() => {
                    this.sending = false;
                    this.send = true;
                }, 2000);

                setTimeout(() => {
                    this.send = false;
                    this.subject = null;
                    this.message = null;
                    this.email = null;
                }, 6000);
            }else{
                this.sendError = 'server';
                this.sending = false;

                setTimeout(() => {
                    this.sendError = 'again';
                }, 3000);
            }
        },
        setError(type){
            clearTimeout(this.timeout);

            let message = 'This field seems to be empty.';
            if(type === 'email-wrong'){
                message = 'Your email seems to be wrong.';
                type = 'email';
            }

            this.error.type = type;
            this.error.message = message;
            this.error.trigger = true;

            this.timeout = setTimeout(() => {
                this.error.trigger = false;
            }, 3000);
        }
    },
    components: {
        error
    }
}
</script>
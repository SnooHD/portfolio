<template>
<section id="about" class="
    lg:mt-48 relative
    md:mt-32
    mt-12
">
    <div class="
        flex
        flex-col
        items-center 
        lg:justify-between
        lg:flex-row
    ">
        <div class="flex flex-row justify-center sm:block lg:-translate-8">
            <blob/>
            <!-- <div class="flex justify-center items-center">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="31" height="31" rx="15.5" fill="#2877B2"/>
                    <path d="M20.6863 12.0601L18.3218 20.8848C17.8547 22.628 16.0954 23.8194 14.2243 23.4968C12.0829 23.1287 10.7359 21.096 11.2588 19.1442L14.0212 8.83487C14.314 7.74221 15.4054 6.97081 16.576 7.16826C17.9267 7.39608 18.7716 8.66843 18.4431 9.89455L16.0964 18.6525C15.9735 19.1113 15.4778 19.3807 14.9948 19.2513C14.5118 19.1219 14.2173 18.6407 14.3402 18.1819L16.2958 10.8836C16.3874 10.5416 16.1648 10.1781 15.8048 10.0816C15.4448 9.98512 15.0702 10.1887 14.9786 10.5307L13.0543 17.7122C12.7615 18.8049 13.321 20.0186 14.4335 20.4329C15.7171 20.911 17.085 20.2316 17.4136 19.0054L19.7223 10.3893C20.1894 8.64603 19.2616 6.73462 17.4798 6.0784C15.4325 5.32422 13.2583 6.41339 12.7354 8.36516L9.99308 18.5995C9.35165 20.9933 10.6213 23.631 13.0724 24.5292C15.8943 25.5535 18.8813 24.0653 19.6009 21.3795L22.0035 12.413C22.0951 12.071 21.8726 11.7074 21.5125 11.611C21.1525 11.5145 20.778 11.7181 20.6863 12.0601Z" fill="white"/>
                </svg>
                <a class="pl-4 text-blue-mid font-semibold text-mid" href="/pdf/cv.pdf" target="_blank">View resume</a>
            </div> -->
        </div>
        <div>
            <h2 class="
                text-blue-dark
                md:text-5.5xl
                text-4xl
                inline-block
                font-black
                relative
                before:bg-yellow-light
            ">
                <span class="relative">About me</span>
            </h2>
            <p class="mt-8 font-normal text-lg leading-wider ">
                I am a <b class="font-semibold">front-end developer</b> from Holland, the land of tulips, windmills and<br class="hidden xl:block"/>
                wooden shoes. I'm unapologetically a web generalist, but I particularly love <br class="hidden xl:block"/>
                diving deep into front-end development and UX design.<br/><br />

                <b class="font-semibold">Why work with me?</b> I develop from a strategic perspective of telling stories <br class="hidden xl:block"/>
                through visual and interactive systems. I find great joy in pressing buttons, <br class="hidden xl:block"/>
                but I also take great responsibility for how I press them. Original web design <br class="hidden xl:block"/>
                ideas are sometimes hard to implement, and fast-to-develop websites can <br class="hidden xl:block"/>
                often be not-so-pretty. My role as a pixel pusher is to find the sweet spot <br class="hidden xl:block"/>
                between practical implementation and seamless design.
            </p>
        </div>
    </div>
</section>
</template>

<script>
import blob from './blob/blob.vue';
export default {
    components: {
        blob
    }
}
</script>
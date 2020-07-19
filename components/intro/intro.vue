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
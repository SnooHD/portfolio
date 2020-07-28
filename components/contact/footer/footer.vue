<template>
<footer class="relative h-20 lg:h-48">
    <penguin class="hidden lg:block absolute bottom-0 right-.02" />
    <div class="absolute w-full h-full bottom-.75 lg:bottom-0 left-0 lg:right-auto">
        <bear class="hidden lg:block absolute z-20 lg:-left-.1 xl:left-.09 bottom-0 translate-footer-bear z-1" />
        <blob class="z-0 absolute lg:right-auto -left-.25 md:-left-.2 lg:-left-.3 xl:-left-.12 bottom-.75 lg:bottom-0" />
    </div>
    <p class="font-medium mb-4 md:mb-0 text-white lg:hidden absolute bottom-0 left-0">Snoo © 2020</p>
</footer>
</template>

<script>
import penguin from './blob/penguin.vue';
import bear from './blob/bear.vue';
import blob from './blob/blob.vue';
export default{
    components: {
        penguin,
        bear,
        blob
    }
}
</script>
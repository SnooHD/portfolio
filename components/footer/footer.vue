<template>
<footer class="relative">
    <div class="flex flex-row md:flex-col items-center md:items-start md:items-end justify-between md:justify-center mt-40 pb-2 xl:pr-12">
        <logo />
        <span class="font-montserrat text-xs text-white lg:text-gray font-bold">© 2019</span>
    </div>
    <div class="absolute bottom-100 lg:bottom-0 left-0">
        <penguin class="absolute left-0 bottom-0 translate-footer-penguin z-1" />
        <blob class="-z-1 absolute translate-footer-blob left-0 bottom-0" />
    </div>
</footer>
</template>

<script>
import logo from '../header/logo/logo.vue';
import penguin from './blob/penguin.vue';
import blob from './blob/blob.vue';
export default{
    components: {
        logo,
        penguin,
        blob
    }
}
</script>
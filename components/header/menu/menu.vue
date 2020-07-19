<template>
    <ul>
        <li class="cursor-pointer hover:text-yellow-mid transition-400 transition-color" v-scroll-to="'#about'">about</li>
        <li class="cursor-pointer hover:text-yellow-mid transition-400 transition-color" v-scroll-to="'#dev'">dev</li>
        <li class="cursor-pointer hover:text-yellow-mid transition-400 transition-color" v-scroll-to="'#design'">design</li>
        <li 
            class="
                cursor-pointer
                rounded-full
                shadow-md active:shadow
                px-4 py-1
                bg-yellow-mid
                transition-bg hover:bg-yellow-press transition-400
            " 
            v-scroll-to="'#contact'"
        >contact</li>
    </ul>
</template>
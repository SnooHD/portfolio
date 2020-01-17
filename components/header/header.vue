<template>
<header id="home">
    <div class="flex flex-row justify-between">
        <logo :mobileMenu="mobileMenu" />
        <div>
            <blob :class="[`
                absolute top-0
                xl:-right-11
                lg:-right-15 lg:transform-none
                md:-right-10 md:transform-header-blob md:transition-none md:will-change-none
                transition-1000 transition-transform transition-ease will-change-transform
                pointer-events-none
            `,
                mobileMenu ? 'translate-sm-m-blob-active' : 'sm:translate-sm-m-blob translate-m-blob'
            ]"/>
            <menu>
                <menu-block :class="[`
                    text-white font-montserrat font-bold tracking-tight flex
                    lg:text-lg lg:w-96
                    md:text-base md:w-80 md:flex-row md:translate-none md:h-auto md:px-0 md:static md:mt-0 md:transition-none  md:will-change-none
                    text-xl flex-col items-end absolute top-0 right-0 px-10 mt-8 items-center justify-between h-180px
                    transition-transform transition-ease will-change-transform
                `,
                    mobileMenu ? 'translate-none transition-delay-250 transition-800' : 'translate-menu-active transition-delay-0 transition-750'
                ]"/>
                <div @click="mobileMenu = !mobileMenu" :class="[`
                    md:hidden md:transition-none md:will-change-none
                    sm:block
                    transition-750 transition-transform transition-ease will-change-transform cursor-pointer
                `,
                    mobileMenu ? 'translate-x-120px transition-delay-250' : 'translate-none transition-delay-0'
                ]">
                    <svg class="w-10 sm:w-12" height="45" viewBox="4 1 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="16" height="2" transform="matrix(-1 0 0 1 16 0)" fill="white"/>
                        <rect width="12" height="2" transform="matrix(-1 0 0 1 16 4)" fill="white"/>
                        <rect width="8" height="2" transform="matrix(-1 0 0 1 16 8)" fill="white"/>
                    </svg>
                </div>
            </menu>
        </div>
    </div>
    <div class="
        xl:pl-12
        lg:pl-4 lg:mt-40
        md:mt-32
        mt-16
    ">
        <p style="font-family: 'Black Han Sans', sans-serif;" class="flex flex-col leading-tight text-blue-dark">
            <span class="
                xl:text-5xl
                lg:text-4xl
                md:text-3xl
                text-2xl
            ">
                Hello there, I'm Snoo.
            </span>
            <span class="
                tracking-wider
                xl:text-2xl
                md:text-lg
            ">
                Your potential new designer / developer.
            </span>
        </p>
        <div class="
            font-montserrat
            xl:mt-12
            lg:mt-10
            sm:flex sm:flex-row
            flex flex-col-reverse mt-6 items-start
        ">
            <button v-scroll-to="'#contact'" class="
                rounded-full bg-blue-mid text-white font-semibold
                sm:text-mid
                text-xs px-4 py-2
            ">
                Contact now
            </button>
            <span v-scroll-to="'#dev'" class="cursor-pointer text-blue-mid text-mid sm:pl-10 pl-1 sm:py-2 sm:pb-0 pb-4 font-bold">Show me what you got.</span>
        </div>
    </div>
</header>
</template>

<script>
import logo from './logo/logo.vue';
import menuBlock from './menu/menu.vue';
import blob from './blob/blob.vue';

export default {
    data(){
        return {
            mobileMenu: false
        }
    },
    components: {
        logo,
        menuBlock,
        blob
    }
}
</script>
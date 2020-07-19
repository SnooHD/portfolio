<template>
<section id="dev" class="
    flex flex-col items-center sm:flex-row sm:justify-between relative
    lg:mt-44
    md:mt-32
    mt-16
    w-full
    sm:space-x-12
    lg:space-x-16
    z-0
    lg:mb-0
">
    <div class="flex flex-col justify-center items-start relative z-10 w-full flex-shrink-0 sm:w-280px lg:w-363px">
        <h2 class="
            text-blue-dark
            md:text-5.5xl
            text-4xl
            inline-block
            font-black
            relative
            before:bg-yellow-light
        ">
            <span class="relative">Dev</span>
        </h2>
        <ul 
            class="hidden sm:flex relative text-md lg:text-lg flex-col font-normal leading-wider mt-6 bg-white shadow-md lg:shadow-none lg:bg-none rounded-lg px-4 -ml-4"
        >
            <div 
                v-if="$mq === 'lg' || $mq === 'md'"
                class="absolute left-100 top-0 z-10 triangle border-14 top-6 transition-transform transition-400"
                :style="`transform: translateY(${translateTriangle}px) translateX(-1px)`"
            ></div>
            <template v-for="(item, index) in items">
                <li 
                    v-if="$mq !== 'xl' ? item.mobile !== false : true"
                    @click="activeItem = index"
                    :key="item.name"
                    :class="[
                        'text-blue-gray',
                        'py-4 px-6 relative',
                        'flex flex-col cursor-pointer',
                        'overflow-y-hidden transition-all transition-400',
                        'border-b border-light-gray',
                        index === items.length - 1 ? 'border-none lg:border-b' : null,
                        activeItem === index ? 
                        'pb-dev-item-active h-177px lg:h-150px' : 
                        'pb-dev-item h-75px'
                    ]"
                >
                    <div class="flex transition-opacity transition-400 items-center hover:opacity-100" :class="activeItem === index ? 'opacity-100' : 'opacity-60'">
                        <icons :icon="item.icon" :class="item.color" class="flex justify-center"/>
                        <span :class="[
                            'pl-2 sm:pl-5',
                            activeItem === index ? 'font-semibold' : 'font-normal'
                        ]">
                            {{item.name}}
                        </span>
                    </div>
                    <div class="mt-4 font-normal">
                        <p v-html="item.content"></p>
                    </div>
                </li>
            </template>
        </ul>
    </div>
    <div class="flex w-full relative sm:static lg:relative justify-center mt-8 sm:mt-0 lg:pt-6 flex flex-col items-end flex-grow  sm:max-w-267px md:max-w-616px">
        <blob class="absolute w-full top-50 sm:top-15 md:top-0 transform-dev-mobile-blob sm:transform-dev-blob -right-1 lg:right-0" :overlay="items[activeItem].overlay"  :item="activeItem" />
        <div class="relative flex w-full sm:max-w-267px lg:max-w-616px sm:transform-mobile-top lg:transform-none items-center">
            
            <div @click="setImage('previous')" class="sm:hidden -ml-15px xs:ml-0 shadow-lg active:shadow flex items-center justify-center bg-white flex-shrink-0 rounded-full w-14 h-14 xs:w-16 xs:h-16">
                <i class="rotate-180 text-gray">
                    <svg width="12px" viewBox="-1 0 6 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.450014V7.13001C0 7.50001 0.42 7.71001 0.72 7.49001L5.58 3.85001C5.83 3.66001 5.81 3.28001 5.55 3.11001L0.68 0.0700138C0.39 -0.119986 0 0.100014 0 0.450014Z"/>
                    </svg>
                </i>
            </div>
            
            <chrome-desktop class="hidden w-full lg:block" :item="items[activeItem]" />
            <chrome-mobile @setImage="setImage" class="mx-4 xs:mx-8 sm:mx-0 max-w-267px block w-full lg:hidden" :item="activeItem" />

            <div @click="setImage('next')" class="sm:hidden -mr-15px xs:mr-0 bg-white shadow-lg active:shadow flex items-center justify-center flex-shrink-0 rounded-full w-14 h-14 xs:w-16 xs:h-16">
                <i class="text-gray">
                    <svg width="12px" viewBox="-1 0 6 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.450014V7.13001C0 7.50001 0.42 7.71001 0.72 7.49001L5.58 3.85001C5.83 3.66001 5.81 3.28001 5.55 3.11001L0.68 0.0700138C0.39 -0.119986 0 0.100014 0 0.450014Z"/>
                    </svg>
                </i>
            </div>

            <a :href="items[activeItem].link || items[activeItem].url" target="_blank" 
                class="
                    lg:transition-color lg:hover:text-yellow-mid lg:hover:bg-none
                    transition-bg hover:bg-yellow-press transition-400
                    shadow-md active:shadow lg:shadow-none
                    rounded-full lg:rounded-none bg-yellow-mid lg:bg-none px-6 lg:px-0 py-2 lg:py-0
                    absolute text-xl justify-center right-0 z-10 top-100
                    text-white transition-400 flex space-x-3 right-50 translate-link-center lg:mt-6 lg:right-9 lg:translate-none
                "
            >
                <icons icon="link" :color="true" :size="21" class="flex justify-center items-center text-white lg:text-yellow-mid"/>
                <span class="font-semibold translate-fix-text">Website</span>
            </a>
        </div>
    </div>
</section>
</template>

<script>
import blob from './blob/blob.vue';
import chromeDesktop from './chrome/desktop.vue';
import chromeMobile from './chrome/mobile.vue';
import icons from './icons/icons.vue';
export default {
    computed:{
        translateTriangle(){
            return this.activeItem * 75;
        }
    },
    data(){
        return {
            items: [
                {
                    name: 'Nativeway',
                    url: 'https://nativeway.com.uy',
                    icon: 'nuxt',
                    overlay: '35256d',
                    content: 'Website for an English Academy in Montevideo, made with <b class="font-medium">Nuxt</b>'
                },
                {
                    name: 'Hendrikx-ITC',
                    url: 'https://hendrikx-itc.nl',
                    link: 'https://dev.stijlbreuk.nu/hendrikx-itc',
                    icon: 'wordpress',
                    overlay: '4f5e8b',
                    content: '<b class="font-medium">Wordpress</b> site for a provider of data management solutions.'
                },
                {
                    name: 'Custom Fotowand',
                    url: 'https://customfotowand.nl',
                    link: 'https://ovns3.csb.app',
                    icon: 'vue',
                    overlay: '28a254',
                    content: 'A <b class="font-medium">Vue</b> based tool for desiging your own custom wallpaper.'
                },
                {
                    name: 'Quality Connection',
                    url: 'https://www.quality-connection.com',
                    link: 'http://www.quality-connection.com',
                    icon: 'html5',
                    overlay: '2a461c',
                    content: '<b class="font-medium">HTML5</b> and <b class="font-medium">CSS3</b> website for a food quality inspection startup'
                },
            ],
            activeItem: 0,
            
        }
    },
    methods: {
        setImage(dir){
            if(dir === 'next'){
                if(this.activeItem === this.items.length - 1){
                    this.activeItem = 0;
                    return;
                }
                this.activeItem++;
                return;
            }

            if(this.activeItem === 0){
                this.activeItem = this.items.length - 1;
                return;
            }
            this.activeItem--;
        },
    },
    components: {
        blob,
        chromeDesktop,
        chromeMobile,
        icons
    }
}
</script>
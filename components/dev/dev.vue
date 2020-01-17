<template>
<section id="dev" class="
    flex flex-row justify-between relative
    lg:px-4 lg:mt-40
    mt-32
">
    <div class="flex flex-col justify-center sm:pt-8 md:pt-0">
        <h1 class="
            font-bree-serif text-blue-dark
            md:text-4xl
            text-1xl
        ">
            Development
        </h1>
        <ul class="font-lato text-lg font-bold mt-4 sm:mt-0 md:mt-4">
            <template v-for="(item, index) in items">
                <li 
                    @click="activeItem = index"
                    :key="item.name" 
                    :class="[
                        activeItem === index ? 
                        'opacity-100' : 
                        'opacity-40',
                        `text-${theItem(item).color}`,
                        'flex flex-row mt-10 sm:mt-12 md:mt-14 items-center cursor-pointer transition-750 transition-opacity hover:opacity-100',
                        index === 3 ? 'lg:pb-4' : null
                    ]"
                >
                    <icons :item="theItem(item)" class="flex justify-center"/>
                    <span class="pl-2 sm:pl-5 text-mid">{{theItem(item).name}}</span>
                </li>
            </template>
        </ul>
    </div>
    <div class="pl-2">
        <blob :item="items[activeItem]" />
        <chrome-desktop class="pl-12 relative" v-if="$mq !== 'mobile'" :item="items[activeItem]" />
        <chrome-mobile v-else class="pl-12" :item="items[activeItem]" />
    </div>
</section>
</template>

<script>
import blob from './blob/blob.vue';
import chromeDesktop from './chrome/desktop.vue';
import chromeMobile from './chrome/mobile.vue';
import icons from './icons/icons.vue';
export default {
    data(){
        return {
            items: [
                {
                    name: 'Nativeway',
                    url: 'https://nativeway.com.uy',
                    icon: 'nuxt',
                    color: 'purple',
                    overlay: '40256D'
                },
                {
                    name: 'Track & Trace',
                    url: 'https://track.cinematomedia.com/',
                    link: 'http://track.cinematomedia.com/cinematomedia?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0Ijoic3VwZXJ2aXNvciJ9.0Cccr3zXYGOEWSnbVpNYXvM8aRZLnzFHSkYlnS4Gf-A',
                    icon: 'vue',
                    overlay: 'FFD464',
                    color: 'green',
                    _mobile: {
                        name: 'Legro',
                        url: 'https://legro-bv.com/',
                        icon: 'wordpress',
                        color: 'red'
                    }
                },
                {
                    name: 'HTR',
                    url: 'https://www.htrbv.nl/',
                    icon: 'wordpress',
                    overlay: 'FF2929',
                    color: 'blue-press'
                },
                {
                    name: 'Quality Connection',
                    url: 'https://www.quality-connection.com/',
                    link: 'http://www.quality-connection.com/',
                    icon: 'html5',
                    overlay: '4B9DAF',
                    color: 'blue-light'
                }
            ],
            activeItem: 0
        }
    },
    methods: {
        theItem(item){
            if(this.$mq === 'mobile'){
                return item._mobile || item;
            }

            return item;
        }
    },
    components: {
        blob,
        chromeDesktop,
        chromeMobile,
        icons
    }
}
</script>
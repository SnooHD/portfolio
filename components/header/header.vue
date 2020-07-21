<template>
<header id="home">
    <div class="flex flex-row justify-end">
        <div>
            <blob :class="[`
                absolute
                top-0
                xl:-right-11
                lg:-right-14 lg:transform-none
                md:-right-10 md:transform-header-blob md:transition-none md:will-change-none
                transition-1000 transition-transform transition-ease will-change-transform
                pointer-events-none
            `,
                mobileMenu ? 'translate-sm-m-blob-active' : 'sm:translate-sm-m-blob translate-m-blob'
            ]"/>
            <nav>
                <menu-block :class="[`
                    text-white font-bold tracking-wider flex
                    lg:text-lg md:space-x-4 lg:space-x-6
                    md:text-base md:flex-row md:translate-none md:h-auto md:px-0 md:static md:mt-0 md:transition-none  md:will-change-none
                    text-xl flex-col items-end absolute top-0 right-0 lg:px-10 mt-8 items-center justify-between h-180px
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
                        <rect width="16px" height="1.75" transform="matrix(-1 0 0 1 16 0)" fill="white"/>
                        <rect width="12px" height="1.75" transform="matrix(-1 0 0 1 16 4.5)" fill="white"/>
                        <rect 
                            width="8px"
                            height="1.75" transform="matrix(-1 0 0 1 16 9)" fill="white"/>
                    </svg>
                </div>
            </nav>
        </div>
    </div>
    <div class="
        lg:mt-24
        mt-16
    ">
        <div class="flex flex-col leading-tight text-blue-dark">
            <h1 class="
                lg:text-7xl
                md:text-5.5xl
                text-5xl
                font-black
                leading-tighter
            ">
                Hello there,<br/> <span class="tracking-tight">I'm Mike:</span>
            </h1>
            <span class="
                mt-2
                font-medium
                lg:text-2.5xl
                text-2xl
            ">
                A professional clicker.
            </span>
        </div>
        <div class="
            lg:mt-6
            flex flex-col-reverse mt-6 items-start
        ">
            <div @mousemove="$mq === 'xl' ? inspectCursor($event) : null" @mouseleave="$mq === 'xl' ? ignoreCursor($event) : null"
                class="
                    button-wrapper p-4 -ml-4 -mt-4 group
                "
            >
                <button v-scroll-to="'#dev'" class="
                    group relative z-0
                    transition-bg transition-400
                    text-white font-bold
                    text-xl tracking-wider px-6 py-2 lg:px-10 lg:py-3
                ">
                    <div 
                        ref="background"
                        :style="`transform: translate3d(${backgroundX}px, ${backgroundY}px, 0px) scale(${backgroundX ? '1.05' : '1'})`"
                        class="
                            will-change-transform
                            absolute left-0 top-0 w-full h-full z-0
                            transition-400 transition-transform
                            shadow-md group-active:shadow
                            group-hover:bg-blue-press
                            rounded-full bg-blue-mid
                        "
                        :class="[
                            isInspecting ? 'transition-easeOutQuint' : 'transition-easeOutSine'
                        ]"
                    />
                    <span
                        :style="`transform: translate3d(${textX}px, ${textY}px, 0px) scale(${textX ? '1.05' : '1'})`"
                        class="
                            will-change-transform
                            relative z-10 inline-block
                            transition-400 transition-transform
                        "
                        :class="[
                            isInspecting ? 'transition-easeOutQuint' : 'transition-easeOutSine'
                        ]"
                        ref="text"
                    >
                        How I click
                    </span>
                </button>
            </div>
        </div>
    </div>
</header>
</template>

<script>
import menuBlock from './menu/menu.vue';
import blob from './blob/blob.vue';

export default {
    data(){
        return {
            moveButton: .2,
            mobileMenu: false,
            inspecting: false,
            inspectTimeout: null,
            isInspecting: false,
            inspectButton: null,
            backgroundX: 0,
            backgroundY: 0,
            textX: 0,
            textY: 0
        }
    },
    components: {
        menuBlock,
        blob
    },
    async mounted(){
        await this.$nextTick();
        
        const background = this.$refs.background;
        const width = background.offsetWidth;
        const height = background.offsetHeight;
        this.inspectButton = {width, height}
    },
    methods: {
        inspectCursor(e){
            if(this.isInspecting === false){
                this.isInspecting = null;
                clearTimeout(this.inspectTimeout);
                this.inspectTimeout = setTimeout(() => {
                    this.isInspecting = true;
                }, 400);
            }
            
            if(!this.inspecting){
                this.inspecting = true;
                requestAnimationFrame(() => {
                    const background = this.$refs.background;
                    const x = background.getBoundingClientRect().left;
                    const y = background.getBoundingClientRect().top;
                    
                    const offsetX = e.clientX - x;
                    const offsetY = e.clientY - y;

                    const {width, height} = this.inspectButton;
                    
                    const moveBackground = this.moveButton * 100;
                    this.backgroundX = (offsetX - width / 2) / width * moveBackground;
                    this.backgroundY = (offsetY - height / 2) / height * moveBackground;
                    
                    const moveText = (this.moveButton * 1.4) * 100;
                    this.textX = (offsetX - width / 2) / width * (moveText * 1.2);
                    this.textY = (offsetY - height / 2) / height * moveText;
                    
                    this.inspecting = false;
                })
            }
        },
        ignoreCursor(e){
            requestAnimationFrame(() => {
                this.backgroundX = 0;
                this.backgroundY = 0;

                this.textX = 0;
                this.textY = 0;

                this.isInspecting = false;
            });
        }
    }
}
</script>
<template>
<div class="flex flex-col justify-center items-center" v-if="param">
    <div ref="text" class="h-64 flex flex-col justify-center fixed top-0 z-0">
        <h1 class="font-bree-serif text-1xl md:text-4xl px-12 text-center text-blue-dark">Have a look at the design of {{param.substr(0, 1).toUpperCase() + param.substr(1, param.length - 1)}}:</h1>
    </div>
    <div class="w-full mt-64 relative z-10" 
        :style="`
            transform: scale(${scale});
            transform-origin: top center;
            box-shadow: 0px 25px 50px -12px rgba(0,0,0,${alpha || '0'});
        `">
        <img class="w-full" v-if="param === 'logopicker'" src="/images/design/logopicker-full.jpg" />
        <img class="w-full" v-if="param === 'adoption'" src="/images/design/adoption-full.jpg" />
        <img class="w-full" v-if="param === 'influence'" src="/images/design/influence-full.jpg" />
        <img class="w-full" v-if="param === 'appcino'" src="/images/design/appcino-full.jpg" />
    </div>
    <div class="fixed flex bottom-0 z-20 flex-row w-full content-between justify-between sm:px-12 sm:py-12 py-8 px-4">
        <div>
            <a href="../../#design">
                <button class="
                    relative rounded-full bg-dark text-white font-semibold py-3 px-4
                    group
                    sm:text-lg
                    text-sm px-4 py-2
                ">
                    <svg class="inline-block" width="10" height="14" viewBox="0 .5 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="translate-none group-hover:-translate-x1 transition-transform transition-400" d="M6 8L0 3.97L6 0V8Z" fill="currentColor" fill-opacity=".9"/>
                    </svg>
                    <span class="pl-1">Go Back</span>
                </button>
            </a>
        </div>
        <div>
            
            <a href="../../#contact">
                <button class="
                    rounded-full bg-blue-mid text-white font-semibold py-3 px-4
                    
                    sm:text-lg
                    text-sm px-4 py-2
                ">
                    Contact now
                </button>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            designs: [
                'logopicker',
                'adoption',
                'appcino',
                'influence'
            ],
            originalScale: .9,
            scale: .9,
            fullScale: 1,
            originalAlpha: 1,
            alpha: 1,
            fullAlpha: 0
        }
    },
    methods: {
        scrolling(e){
            if(scrollY > this.textHeight){
                this.scale = this.fullScale;
                this.alpha = this.fullAlpha;
                return;
            }
            
            requestAnimationFrame(() => {
                //scale
                const scaleDifference = this.fullScale - this.originalScale;
                const scaleStep = scaleDifference / this.textHeight;
                this.scale = this.originalScale + scaleStep * scrollY;

                //shadow
                const alphaDiff = this.fullAlpha - this.originalAlpha;
                const alphaStep = alphaDiff / this.textHeight;
                this.alpha = this.originalAlpha + alphaStep * scrollY;
            });
        }
    },
    computed:{
        param(){
            return this.$route.params.design.toLowerCase();
        },
        paramUpperCase(){
            let param = this.param;
            return param.substr(0, 1).toUpperCase() + param.substr(1, param.length - 1).toLowerCase();
        }
    },
    async mounted(){
        await this.$nextTick();

        if(this.param === 'logopicker'){
            this.alpha = .35;
            this.originalAlpha = .35;
        }

        this.textHeight = this.$refs.text.getBoundingClientRect().height;
        document.addEventListener('scroll', this.scrolling);

        if(scrollY > this.textHeight){
            this.scale = this.fullScale;
            this.alpha = this.fullAlpha;
        }
    },
    beforeDestroy(){
        document.removeEventListener('scroll', this.scrolling);
    },
    validate ({ params }) {
        const param = params.design;
        const list = this.data().designs;
        if(list.indexOf(param) !== -1){
            return true;
        }
    },
    head(){
        return {
            title: `Snoo - ${this.paramUpperCase} design`,
        meta: [{
            name: 'keywords',
            content: 'Personal, Portfolio, Creative, Design, Development, Nuxt, Vue, CSS, CSS3, HTML, HTML5, JS, Javascript'
        },{
            name: 'description',
            content: `Hello! My name is Mike de Snoo, but you can call me Snoo. I am a graphic designer & developer from The Netherlands. Have a look at my design for ${this.paramUpperCase}`
        },{
            name: 'og:description',
            content: `Hello! My name is Mike de Snoo, but you can call me Snoo. I am a graphic designer & developer from The Netherlands. Have a look at my design for ${this.paramUpperCase}`
        },{
            property: 'og:image',
            content: `https://portfolio.logopicker.com/images/${this.param}-thumb.jpg`
        },{
            property: 'og:url',
            content: `https://portfolio.logopicker.com/design/${this.pram}`
        },{
            property: 'og:title',
            content: `Snoo - Portfolio ${this.paramUpperCase} design`
        },{
            property: 'og:type',
            content: 'website'
        }]
        }
    }
}
</script>
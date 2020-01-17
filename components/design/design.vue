<template>
<section ref="section" id="design" class="lg:px-4 sm:mt-24 mt-32 flex flex-col justify-between relative">
    <h1 class="font-bree-serif text-1xl md:text-4xl text-blue-dark">Design</h1>
    <div
        @swipeLeft="setImage('next')"
        @swipeRight="setImage('previous')"
        @touchstart="startTouchWrapper"
        class="flex lg:block flex-row w-320 lg:w-full sm:mt-16 mt-12 xl:px-8 transition-500 transition-transform"
        :style="[wrapperOffset ? {transform: `translateX(${wrapperOffset})`} : null, {width: scrollWrapperWidth}, {transition: moving ? 'none' : null}]"
    >
        <div v-for="(part, index) in splitImages()"
            :key="`image-block-${index}`"
            :class="[
                'flex justify-between items-center lg:px-0',
                index % 2 !== 0 ? 'flex-row-reverse lg:flex-row lg:mt-12' : 'flex-row'
            ]"
        >
            <div v-for="image in part"
                ref="images"
                :key="image.src"
                :class="[
                    'lg:w-478px lg:h428px',
                    image.size === 'small' ? 'flex flex-row justify-center sm:pl-12 lg:pl-0 pl-10' : null,
                    index % 2 !== 0 ? image.size === 'big' ? 'pl-12 lg:pl-0' : null : null
                ]"
            >
                <div :class="[
                        image.size === 'small' ? 'lg:px-12 xl:px-0' : 'lg:px-4 xl:px-0',
                        $mq === 'desktop' ? 'hover:scale-grow scale-none transition-400 transition-transform' : null
                    ]"
                    @click="toImage(image)"
                >
                    <nuxt-link v-if="$mq === 'desktop' || image.active" :to="`design/${image.design}`">
                        <img :class="['cursor-pointer', image.design === 'logopicker' ? 'shadow-design-light' : 'shadow-design-dark']" :src="image.src" />
                    </nuxt-link>
                    <img v-else :class="['cursor-pointer', image.design === 'logopicker' ? 'shadow-design-light' : 'shadow-design-dark']" :src="image.src" />
                </div>
            </div>
        </div>
    </div>
    <blobs class="-z-1 absolute -left-4 top-10 sm:top-22" />
</section>
</template>

<script>
import blobs from './blobs/blobs.vue';
export default {
    data(){
        return {
            moving: false,
            swiped: false,
            touchStart: '0px',
            wrapperOffset: null,
            scrollWrapperWidth: null,
            wrapperOffsetOrigin: null,
            images: [{
                active: true,
                src: '/images/design/logopicker-thumb.jpg',
                design: 'logopicker',
                size: 'big'
            },{
                active: false,
                src: '/images/design/adoption-thumb.jpg',
                design: 'adoption',
                size: 'small'
            },{
                active: false,
                src: '/images/design/influence-thumb.jpg',
                design: 'influence',
                size: 'small'
            },{
                active: false,
                src: '/images/design/appcino-thumb.jpg',
                design: 'appcino',
                size: 'big'
            }],
            activeIndex: 0
        }
    },
    components: {
        blobs
    },
    methods: {
        toImage(image){
            console.log(image);
            if(this.$mq === 'desktop'){
                return;
            }

            if(image.active){
                return;
            }

            let index = this.images.indexOf(image);
            console.log(this.activeIndex)
            if(this.activeIndex === 3){
                this.activeIndex = 2;
                console.log(index);
                if(index === 2){
                    index = 3;
                }
            }else if(this.activeIndex === 2){
                this.activeIndex = 3;
                index = 2;
            }
            let dir = 'next';
            if(index < this.activeIndex){
                dir = 'previous';
            }

            console.log(dir);

            this.setImage(dir);
        },
        splitImages(){
            const arr = [];
            for(let i=0; i<this.images.length; i+=2){
                const part = this.images.slice(i,i+2);
                arr.push(part);
            }
            
            return arr;
        },
        setImage(dir){
            this.swiped = true;
            let activeIndex = 0;
            for(let i=0; i<this.images.length; i++){
                const _image = this.images[i];
                if(_image.active){
                    if(dir === 'previous'){
                        activeIndex = i - 1;
                        if(i === 2){
                            activeIndex = 3;
                        }
                        if(i === 3){
                            activeIndex = 1;
                        }

                        if(!this.images[activeIndex]){
                            activeIndex = this.images.length - 2;
                        }
                    }else{
                        activeIndex = i + 1;
                        if(i === 1){
                            activeIndex = 3;
                        }
                        if(i === 3){
                            activeIndex = 2;
                        }
                        if(i === 2){
                            activeIndex = 0;
                        }
                        
                        if(!this.images[activeIndex]){
                            activeIndex = 0;
                        }
                    }
                }

                _image.active = false;
            }

            this.images[activeIndex].active = true;
            this.activeIndex = activeIndex;

            this.setWrapperOffset();
        },
        startTouchWrapper(e){
            if(this.$mq === 'desktop'){
                return;
            }
            
            this.swiped = false;
            this.touchStart = e.touches[0].clientX;
            this.wrapperOffsetOrigin = this.wrapperOffset;
            e.target.addEventListener('touchmove', this.moveWrapper);
            e.target.addEventListener('touchend', this.endTouchWrapper);
        },
        moveWrapper(e){
            const touchDistance = e.touches[0].clientX - this.touchStart;
            this.moving = true;
            const wrapperOffset = parseInt(this.wrapperOffsetOrigin.replace('px', ''));
            this.wrapperOffset = `${wrapperOffset + touchDistance}px`;
        },
        endTouchWrapper(e){
            this.moving = false;
            e.target.removeEventListener('touchmove', this.moveWrapper);
            e.target.removeEventListener('touchend', this.endTouchWrapper);
            if(!this.swiped){
                this.wrapperOffset = this.wrapperOffsetOrigin;
            }
        },
        setWrapperWidth(){
            this.scrollWrapperWidth = null;

            this.$nextTick(() => {
                const images = this.$refs.images;
                let width = 0;
                for(let i=0; i<images.length; i++){
                    width += images[i].getBoundingClientRect().width;

                    if(!this.images[i].offset){
                        this.images[i].offset = images[i].getBoundingClientRect().left;
                    }
                }
                this.scrollWrapperWidth = `${width}px`;

                this.$nextTick(() => {
                    this.setWrapperOffset();
                });
            });        
        },
        setWrapperOffset(){
            //debugger
            let offset = 0;
            let activeIndex;
            for(let i=0; i<this.images.length; i++){
                const _image = this.images[i];
                if(_image.active){
                    activeIndex = i;
                    break;
                }

                offset -= this.$refs.images[i].getBoundingClientRect().width;
            }

            const screensize = window.innerWidth;
            const leftOffset = offset + this.images[activeIndex].offset;
            const center = (screensize - this.$refs.images[activeIndex].querySelector('img').getBoundingClientRect().width) / 2;

            const paddingLeft =  parseInt(getComputedStyle(this.$refs.images[activeIndex]).getPropertyValue('padding-left'));

            const containerWidth = this.$refs.section.parentElement.getBoundingClientRect().width;
            const containerOffset = (screensize - containerWidth) / 2;

            const correction = ((center - leftOffset) - paddingLeft) - containerOffset;

            this.wrapperOffset = `${offset + correction}px`;
        },
        resizeWrapper(){
            console.log(this.$mq)
            if(this.$mq === 'desktop'){
                this.moving = false;
                this.swiped = false;
                this.touchStart = '0px';
                this.wrapperOffset = null;
                this.scrollWrapperWidth = null;
                this.wrapperOffsetOrigin = null;
                return;
            }
            
            this.setWrapperWidth();           
        }
    },
    beforeDestroy(){
        //clearInterval(this.interval);
        window.removeEventListener('resize', this.resizeWrapper);
    },
    async mounted(){
        await this.$nextTick();
        this.resizeWrapper();
        window.addEventListener('resize', this.resizeWrapper);
    }
}
</script>
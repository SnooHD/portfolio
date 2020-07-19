<template>
<div class="relative z-10">
    <svg class="absolute top-0 origin-top" width="100%" style="transform: scale(1.1);" viewBox="0 0 485 952" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#mobile-filter0_ddd)">
            <path d="M483.418 282.332H478.005V62.0988C477.982 27.8058 452.916 0 422.001 0H62.9986C32.0841 0 7.01768 27.8058 7.01768 62.0988V189.146H0V282.357H6.99475V343.311H3.50884C1.58242 343.311 0 345.041 0 347.204V402.027C0 404.367 1.39895 406.428 3.41711 407.089L6.99475 408.234L3.76111 408.997C1.55949 409.506 0 411.668 0 414.161V468.654C0 470.791 1.55948 472.546 3.50884 472.546H7.01768V889.608C7.01768 923.901 32.0841 951.706 62.9986 951.706H422.024C452.939 951.706 478.005 923.901 478.005 889.608V344.99H483.418C484.289 344.99 485 344.202 485 343.235V284.087C485 283.121 484.289 282.332 483.418 282.332Z" fill="#34434F"/>
        </g>
        <path d="M483.106 344.27H477.678V277.505H483.106C483.976 277.505 484.664 278.256 484.664 279.206V342.569C484.664 343.495 483.954 344.27 483.106 344.27Z" fill="#34434F"/>
        <path d="M0.362853 277.493L7.3479 277.493L7.3479 185.813L0.362853 185.813L0.362853 277.493Z" fill="#34434F"/>
        <path d="M3.77182 400.128L7.34449 401.254V337.416H3.84052C1.91677 337.416 0.336548 339.117 0.336548 341.243V395.15C0.336548 397.452 1.73356 399.478 3.77182 400.128Z" fill="#34434F"/>
        <path d="M3.84057 464.467H7.34454V401.254L4.11539 402.004C1.91682 402.505 0.359499 404.631 0.359499 407.082V460.664C0.336597 462.766 1.91682 464.467 3.84057 464.467Z" fill="#34434F"/>
        <path d="M477.655 869.851H7.34436V872.528C7.34436 916.429 39.9107 952 80.1033 952H404.896C445.089 952 477.655 916.429 477.655 872.528V869.851Z" fill="#34434F"/>
        <path d="M243.1 927.74C255.25 927.74 265.1 917.89 265.1 905.74C265.1 893.59 255.25 883.74 243.1 883.74C230.95 883.74 221.1 893.59 221.1 905.74C221.1 917.89 230.95 927.74 243.1 927.74Z" fill="#586C77"/>
        <path d="M266.776 49.5192H212.98C210.46 49.5192 208.399 47.2679 208.399 44.5162V39.2381C208.399 36.4865 210.46 34.2351 212.98 34.2351H266.753C269.272 34.2351 271.333 36.4865 271.333 39.2381V44.5162C271.356 47.2679 269.295 49.5192 266.776 49.5192Z" fill="#586C77"/>
        <path d="M290.571 51.4454C295.402 51.4454 299.319 47.1672 299.319 41.8897C299.319 36.6122 295.402 32.334 290.571 32.334C285.739 32.334 281.822 36.6122 281.822 41.8897C281.822 47.1672 285.739 51.4454 290.571 51.4454Z" fill="#586C77"/>
        <defs>
            <filter id="mobile-filter0_ddd" x="-100" y="-100" width="685" height="1152" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="10"/>
            <feGaussianBlur stdDeviation="25"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="chrome-effect1_dropShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="20"/>
            <feGaussianBlur stdDeviation="15"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
            <feBlend mode="normal" in2="chrome-effect1_dropShadow" result="chrome-effect2_dropShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="chrome-effect2_dropShadow" result="chrome-effect3_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="chrome-effect3_dropShadow" result="shape"/>
            </filter>
        </defs>
    </svg>

    <div class="rounded-b-sm overflow-hidden relative z-10 pb-21% pt-17%">
        <div class="relative w-full pb-177.7%">
            <div class="absolute w-full h-full left-0 top-0">
                <div ref="scrollContainer" class="bg-white overflow-x-hidden overflow-y-auto h-full w-full">
                    <div ref="scrollTo"></div>
                    <div
                        @swipeLeft="$emit('setImage', 'next')"
                        @swipeRight="$emit('setImage', 'previous')"
                        @touchstart="startTouchWrapper"
                        class="flex transition-transform transition-400 will-change-transform" 
                        :style="`transform: translateX(${-wrapperOffset}px); width: 400%; overflow-y:hidden; max-height: ${imageHeight}px`"
                    >
                        <div>
                            <img width="100%" src="/images/dev/mobile/nativeway.jpg" />
                        </div>
                        <div>
                            <img width="100%" src="/images/dev/mobile/hendrikx-itc.jpg" />
                        </div>
                        <div>
                            <img width="100%" src="/images/dev/mobile/fotowand.jpg" />
                        </div>
                        <div>
                            <img width="100%" src="/images/dev/mobile/quality-connection.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['item'],
    data(){
        return {
            imageHeight: null,
            containerWidth: null,
            isResizing: false,
            wrapperOffset: 0,
            wrapperOffsetOrigin: null,
            touchStart: null,
            moving: null,
            swiped: null,
        }
    },
    async mounted(){
        await this.$nextTick();

        if(this.$refs.scrollContainer){
            this.init();
        }

        window.addEventListener('resize', this.setContainerWidth);
    },
    beforeDestroy(){
        window.removeEventListener('resize', this.setContainerWidth);
    },
    methods: {
        init(){
            this.containerWidth = this.$refs.scrollContainer.offsetWidth;
            this.imageHeight = this.$refs.scrollContainer.querySelectorAll('img')[this.item].offsetHeight;
        },
        startTouchWrapper(e){
            if(this.$mq === 'xl'){
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
            this.wrapperOffset = this.wrapperOffsetOrigin - touchDistance;
        },
        endTouchWrapper(e){
            this.moving = false;
            e.target.removeEventListener('touchmove', this.moveWrapper);
            e.target.removeEventListener('touchend', this.endTouchWrapper);
            if(!this.swiped){
                this.wrapperOffset = this.wrapperOffsetOrigin;
                return;
            }

            if(this.wrapperOffsetOrigin > this.wrapperOffset){
                this.$emit('setImage', 'previous');
                return;
            }

            this.$emit('setImage', 'next');
        },
        setContainerWidth(){
            if(this.containerWidth === null){
                if(this.$refs.scrollContainer){
                    this.init();
                }else{
                    return;
                }
            }

            if(!this.isResizing){
                window.requestAnimationFrame(() => {
                    this.imageHeight = this.$refs.scrollContainer.querySelectorAll('img')[this.item].offsetHeight;
                    this.containerWidth = this.$refs.scrollContainer.offsetWidth;
                    this.wrapperOffset = this.containerWidth * this.item;
                    this.isResizing = false;
                });
            }

            this.isResizing = true;
        }
    },
    watch: {
        item: {
            async handler(newItem, oldItem){
                const newImage = this.$refs.scrollContainer.querySelectorAll('img')[newItem];
                this.imageHeight = newImage.offsetHeight;

                await this.$nextTick();

                const scrollContainer = this.$refs.scrollContainer;
                const scrollBottom = this.imageHeight - scrollContainer.offsetHeight;
                const currScroll = scrollContainer.scrollTop;
                if(currScroll > scrollBottom){
                    scrollContainer.scrollTo(0, scrollBottom);
                }

                this.wrapperOffset = this.containerWidth * this.item;
                
                scrollContainer.scrollTo({top: 0, behavior: 'smooth'});
            }
        }
    }

}
</script>
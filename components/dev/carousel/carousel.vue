<template>
<div
  class="relative z-10 w-full"
  :class="type === 'mobile' ? 'mx-4 xs:mx-8 sm:mx-0 max-w-267px' : null"
>
    <component :is="type">
      <div
        class="overflow-hidden relative z-10"
        :class="type === 'mobile' ? 'pb-.21 pt-.17' : null"
      >
        <div 
          class="relative w-full pb-1.777"
          :class="type === 'mobile' ? 'pb-1.777' : 'pb-.63'" 
          @swipeLeft="$emit('setImage', 'next')"
          @swipeRight="$emit('setImage', 'previous')"
        >
            <div class="absolute w-full h-full left-0 top-0">
                <div ref="scrollContainer" class="bg-white overflow-x-hidden overflow-y-auto h-full w-full">
                    <div ref="scrollTo"></div>
                    <div
                        class="flex transition-400 will-change-transform"
                        :style="`transform: translateX(${-wrapperOffset}px); width: ${100 * items.length}%; overflow-y:hidden; max-height: ${imageHeight}px`"
                    >
                      <template v-for="item in items">
                        <div
                            :key="`${type}-item-${item.name}`"
                        >
                            <img v-if="item.src" :src="item.src" :type="item.type" width="100%" :alt="item.name">
                        </div>
                      </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </component>
</div>
</template>

<script>
import desktop from './device/desktop';
import mobile from './device/mobile';
export default {
    components: {
      desktop,
      mobile
    },
    props: {
      items: {
        type: Array,
        required: true
      },
      type: {
        type: String,
        default: 'desktop'
      },
      active: {
        type: Number,
        default: 0
      }
    },
    data(){
      return {
        imageHeight: null,
        containerWidth: null,
        wrapperOffset: 0,
        resizeContainerTimeout: null
      }
    },
    async mounted(){
      await this.preload();

      await this.$nextTick();
      this.init();

      window.addEventListener('resize', this.setContainerWidth);
    },
    beforeDestroy(){
      window.removeEventListener('resize', this.setContainerWidth);
    },
    methods: {
      async preload(){

        // async request do not work in forEach loops
        for(let i=0; i<this.items.length; i++){
          let item = this.items[i];
          
          let { webp, jpg } = item;
          const prefix = `/images/dev/${this.type}`
          const src = `${prefix}/${webp}`;

          if(item.src){
            this.$set(this.items, i, { 
              ...item,
              src
            });
            // already loaded
            continue;
          }

          const fallback = `${prefix}/${jpg}`;
          const image = await this.$preload.loadImage({ src, fallback });

          this.$set(this.items, i, {
            ...item,
            ...image
          });

        }

        this[`${this.type}Loaded`] = true;
        this.$emit('update:items', this.items);
      },
      async init(){
        const { offsetWidth, offsetHeight } = this.$refs.scrollContainer.querySelectorAll('img')[this.active];
        this.containerWidth = Math.floor(offsetWidth);
        this.imageHeight = Math.floor(offsetHeight);
      },
      setContainerWidth(){
        if(this.containerWidth === null){
          if(this.$refs.scrollContainer){
            this.init();
          }else{
            return;
          }
        }

        clearTimeout(this.resizeContainerTimeout);
        this.resizeContainerTimeout = setTimeout(() => {
          this.init();
          this.wrapperOffset = this.containerWidth * this.active;
        }, 100);
          
      }
    },
    watch: {
      async type(){
        await this.preload();
        await this.$nextTick();
        this.init();
      },
      active: {
        async handler(newItem, oldItem){
          const newImage = this.$refs.scrollContainer.querySelectorAll('img')[newItem];
          const imageHeight =  Math.floor(newImage.offsetHeight);
          
          const scrollContainer = this.$refs.scrollContainer;
          this.wrapperOffset = this.containerWidth * this.active;

          const scrollBottom = imageHeight - scrollContainer.offsetHeight;
          const currScroll = scrollContainer.scrollTop;
          if(currScroll < scrollBottom){
            this.imageHeight = imageHeight;
          }

          this.$anime({
            targets: scrollContainer,
            scrollTop: 0,
            duration: 400,
            easing: 'linear',
            complete: () => {
              if(currScroll > scrollBottom){
                this.imageHeight = imageHeight;
              }
            }
          });
        }
      }
    }
}
</script>
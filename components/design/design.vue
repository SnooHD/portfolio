<template>
  <section
    ref="section"
    id="design"
    class="
        relative
        z-0
        lg:mt-40
        md:mt-26
        mt-32
    "
  >
    <section-title title="Design" />
    <div
      @swipeLeft="setImage('next')"
      @swipeRight="setImage('previous')"
      @touchstart="startTouchWrapper"
      class="relative z-10 flex lg:block flex-row w-3.2 lg:w-full mt-6 lg:mt-0 transition-400 transition-transform"
      :style="[
        wrapperOffset ? { transform: `translateX(${wrapperOffset})` } : null,
        { width: scrollWrapperWidth },
        { transition: moving ? 'none' : null }
      ]"
    >
      <div
        class="
                flex
                lg:grid lg:grid-cols-2 lg:grid-rows-2
                lg:gap-8 xl:gap-0
            "
      >
        <div
          v-for="(image, index) in images"
          ref="images"
          :key="image.src"
          :class="[
            'flex items-center lg:ml-0',
            'before:empty-content before:pt-full before:inline-block',
            index === 0 ? 'ml-0' : 'ml-8 sm:ml-20 md:ml-24',
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          ]"
        >
          <div
            :class="[
              'inline-flex w-60vw md:w-478px justify-center px-0',
              image.size === 'small' ? 'lg:px-12 xl:px-8' : null,
              'lg:hover:scale-105 lg:scale-none lg:transition-400 lg:transition-transform'
            ]"
          >
            <NuxtLink
              class="inline-block"
              @click="toImage($event, image)"
              :to="`design/${image.design}`"
            >
              <picture>
                <source
                  v-for="src in [image.src, image.fallback]"
                  :key="`design-image-src-${src}`"
                  class="rounded-lg w-full"
                  :class="[
                    'cursor-pointer transition-shadow transition-400',
                    getShadows(image, index)
                  ]"
                  :srcset="src"
                  :type="src.includes('webp') ? 'image/webp' : 'image/jpeg'"
                />
                <img
                  class="rounded-lg w-full"
                  :class="[
                    'cursor-pointer transition-shadow transition-400',
                    getShadows(image, index)
                  ]"
                  :src="image.src"
                />
              </picture>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <blobs class="z-0 absolute top-.3 hidden lg:block w-full h-full" />
  </section>
</template>

<script>
import blobs from "./blobs/blobs";
import sectionTitle from "~/components/ui/sectionTitle";
export default {
  data() {
    return {
      moving: false,
      swiped: false,
      touchStart: "0px",
      wrapperOffset: null,
      scrollWrapperWidth: null,
      wrapperOffsetOrigin: null,
      images: [
        {
          active: true,
          src: "/images/design/logopicker-thumb.webp",
          fallback: "/images/design/logopicker-thumb.jpeg",
          design: "logopicker",
          size: "big",
          type: "light"
        },
        {
          active: false,
          src: "/images/design/adoption-support-alliance-thumb.webp",
          fallback: "/images/design/adoption-support-alliance-thumb.jpeg",
          design: "adoption-support-alliance",
          size: "small"
        },
        {
          active: false,
          src: "/images/design/influence-thumb.webp",
          fallback: "/images/design/influence-thumb.jpeg",
          design: "influence",
          size: "small"
        },
        {
          active: false,
          src: "/images/design/powrful-thumb.webp",
          fallback: "/images/design/powrful-thumb.jpeg",
          design: "powrful",
          size: "big"
        }
      ],
      activeIndex: 0
    };
  },
  components: {
    blobs,
    sectionTitle
  },
  methods: {
    getShadows(item, index) {
      let shadows = ["lg:shadow-lg"];

      if (this.$mq !== "xl") {
        if (this.activeIndex === index) {
          shadows.push("shadow-lg");
        } else {
          shadows.push("shadow-md");
        }
      }

      if (item.type === "light") {
        shadows = shadows.map(shadow => `${shadow}-light`);
      }

      return shadows.join(" ");
    },
    setShadow() {},
    toImage(e, image) {
      if (this.$mq === "xl") {
        return;
      }

      let index = this.images.indexOf(image);
      if (index !== this.activeIndex) {
        e.preventDefault();
      } else {
        return;
      }

      let dir = "next";
      if (index < this.activeIndex) {
        dir = "previous";
      }

      this.setImage(dir);
    },
    splitImages() {
      const arr = [];
      for (let i = 0; i < this.images.length; i += 2) {
        const part = this.images.slice(i, i + 2);
        arr.push(part);
      }

      return arr;
    },
    setImage(dir) {
      this.swiped = true;
      let activeIndex = 0;
      for (let i = 0; i < this.images.length; i++) {
        const _image = this.images[i];
        if (_image.active) {
          if (dir === "previous") {
            activeIndex = i - 1;

            if (!this.images[activeIndex]) {
              activeIndex = this.images.length - 1;
            }
          } else {
            activeIndex = i + 1;

            if (!this.images[activeIndex]) {
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
    startTouchWrapper(e) {
      if (this.$mq === "xl") {
        return;
      }

      this.swiped = false;
      this.touchStart = e.touches[0].clientX;
      this.wrapperOffsetOrigin = this.wrapperOffset;
      e.target.addEventListener("touchmove", this.moveWrapper);
      e.target.addEventListener("touchend", this.endTouchWrapper);
    },
    moveWrapper(e) {
      const touchDistance = e.touches[0].clientX - this.touchStart;
      this.moving = true;
      const wrapperOffset = parseInt(
        this.wrapperOffsetOrigin.replace("px", "")
      );
      this.wrapperOffset = `${wrapperOffset + touchDistance}px`;
    },
    endTouchWrapper(e) {
      this.moving = false;
      e.target.removeEventListener("touchmove", this.moveWrapper);
      e.target.removeEventListener("touchend", this.endTouchWrapper);
      if (!this.swiped) {
        this.wrapperOffset = this.wrapperOffsetOrigin;
      }
    },
    setWrapperWidth() {
      this.scrollWrapperWidth = null;

      this.$nextTick(() => {
        // const screensize = window.innerWidth;
        // const containerWidth = this.$refs.section.parentElement.offsetWidth;
        // const containerOffset = screensize - containerWidth;
        // const imageWidth = (screensize - containerOffset) * .6;

        const images = this.$refs.images;
        let width = 0;
        for (let i = 0; i < images.length; i++) {
          const image = images[i];
          const refStyle = window.getComputedStyle(image);
          const marginLeft = parseInt(refStyle.getPropertyValue("margin-left"));
          width += image.offsetWidth + marginLeft;
        }
        this.scrollWrapperWidth = `${width}px`;

        this.$nextTick(() => {
          this.setWrapperOffset();
        });
      });
    },
    setWrapperOffset() {
      //debugger
      let offset = 0;
      let activeIndex;
      for (let i = 0; i < this.images.length; i++) {
        const _image = this.images[i];
        const imageRef = this.$refs.images[i];
        const refStyle = window.getComputedStyle(imageRef);
        const marginLeft = parseInt(refStyle.getPropertyValue("margin-left"));

        if (_image.active) {
          offset -= marginLeft;
          activeIndex = i;
          break;
        }

        offset -= imageRef.offsetWidth + marginLeft;
      }

      const screensize = window.innerWidth;
      const center =
        (screensize - this.$refs.images[activeIndex].offsetWidth) / 2;

      const containerWidth = this.$refs.section.parentElement.offsetWidth;
      const containerOffset = (screensize - containerWidth) / 2;

      let correction = center - containerOffset;

      this.wrapperOffset = `${offset + correction}px`;
    },
    resizeWrapper() {
      if (this.$mq === "xl") {
        this.moving = false;
        this.swiped = false;
        this.touchStart = "0px";
        this.wrapperOffset = null;
        this.scrollWrapperWidth = null;
        this.wrapperOffsetOrigin = null;
        return;
      }

      this.setWrapperWidth();
    }
  },
  beforeDestroy() {
    //clearInterval(this.interval);
    window.removeEventListener("resize", this.resizeWrapper);
  },
  async mounted() {
    await this.$nextTick();
    this.resizeWrapper();
    window.addEventListener("resize", this.resizeWrapper);
  }
};
</script>

<template>
  <div
    v-if="param"
    class="px-[10px] flex flex-col justify-center items-center min-h-[100vh] pb-[100px] sm:pb-[140px]"
  >
    <div
      v-if="dev"
      class="lg:px-14
        md:px-12 
        sm:px-10
        xs:px-8
        px-6"
    >
      <div
        ref="text"
        class="
            flex flex-col justify-center items-center sticky top-0 z-0 container md:max-w-2xl lg:max-w-4xl
            lg:px-14 md:px-12 px-6
            py-4 sm:py-6 md:py-10 w-full
        "
      >
        <sectionTitle
          type="h1"
          :class="{ 's_in-view': isMounted }"
          :title="dev.title"
        />
        <div
          class="mt-4 md:mt-6 lg:mt-8 font-normal text-lg leading-wider"
          v-html="dev.content"
        ></div>
      </div>
    </div>
    <div
      class="w-full mt-4 relative z-10 rounded-md overflow-hidden flex-grow flex"
      :style="{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        boxShadow: `0px ${shadowTop}px ${shadowBlur}px -12px rgba(0,0,0,${alpha ||
          '0'})`
      }"
    >
      <div
        :class="[
          'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-opacity duration-400',
          showImage ? 'opacity-[0]' : 'opacity-[1]'
        ]"
      >
        <div
          :class="[
            'w-[50px] h-[50px] bg-blue-mid rounded-[3px]',
            showImage ? null : 'animate-bounceRectangle'
          ]"
        ></div>
        <div
          :class="[
            'w-[50px] h-[5px] bg-darker opacity-[0.1] translate-y-[12px] rounded-[50%]',
            showImage ? null : 'animate-bounceShadow'
          ]"
        ></div>
      </div>
      <div
        :class="[
          'duration-400 bg-white',
          showImage
            ? 'opacity-[1] transition-opacity'
            : 'opacity-[0] transition-all'
        ]"
        :style="{ height: `${imageHeight}px` }"
        ref="image"
      >
        <picture>
          <source
            v-for="src in ['jpeg', 'webp']"
            :key="`dev-image-src-${src}`"
            class="w-full"
            :srcset="`/images/dev/${param}-full.${src}`"
            :type="src === 'webp' ? 'image/webp' : 'image/jpeg'"
          />
          <img class="w-full" :src="`/images/dev/${param}-full.jpeg`" />
        </picture>
      </div>
    </div>
    <div
      class="fixed flex bottom-0 z-20 flex-row w-full content-between justify-between sm:px-12 sm:py-12 py-8 px-4"
    >
      <div>
        <NuxtLink to="/#dev">
          <button
            class="
                    relative rounded-full bg-dark text-white font-semibold py-3 px-4
                    transition-bg transition-400 hover:bg-darker flex items-center
                    group shadow-md active:shadow space-x-2
                    sm:text-lg 
                    text-sm px-6 py-2
                "
          >
            <svg
              class="group-hover:-translate-x-2px transition-400 transition-transform"
              width="18"
              viewBox="0 5 100 100"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m4.8477 60.438 35.098 25.34h-0.003906c2.8203 2.1016 6.6836 2.1016 9.5039 0 3.1562-2.5352 4.9414-6.4062 4.8164-10.453v-12.672l35.664 0.003906c0.95312 0.003906 1.8984-0.16797 2.7891-0.50781 4.6836-2.1914 7.5664-7.0039 7.2852-12.164 0.29297-5.1719-2.5938-10-7.2852-12.195-0.89062-0.33984-1.8359-0.51172-2.7891-0.50781h-35.602v-12.672 0.003906c0.16016-4.082-1.625-7.9961-4.8164-10.551-2.8125-2.1211-6.6875-2.1211-9.5 0l-35.098 25.34v0.003906c-3.2188 2.5508-5.0391 6.4727-4.9102 10.578-0.10938 4.0508 1.6836 7.918 4.8477 10.453z"
              />
            </svg>
            <span>Go back</span>
          </button>
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="/#contact">
          <button
            class="
                    rounded-full bg-blue-mid text-white font-semibold py-3 px-4
                    shadow-md active:shadow
                    transition-bg transition-400
                    hover:bg-blue-dark
                    sm:text-lg
                    text-sm px-6 py-2
                "
          >
            <span>Get in touch</span>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import sectionTitle from "~/components/ui/sectionTitle";
export default {
  layout: "showcase",
  components: {
    sectionTitle
  },
  beforeRouteEnter(to, from, next) {
    const routes = ["basic-fit"];

    if (routes.includes(to.params.dev)) {
      next();
    } else {
      next("/404");
    }
  },
  created() {
    if (!this.development[this.param]) {
      this.$router.push({ path: "/404" });
      return;
    }
    this.dev = this.development[this.param];
  },
  async mounted() {
    await this.$nextTick();
    this.isMounted = true;

    this.textHeight = this.$refs.text.getBoundingClientRect().height;
    document.addEventListener("scroll", this.scrolling);

    if (scrollY > this.textHeight) {
      this.scale = this.fullScale;
      this.shadowBlur = this.fullShadowBlur;
      this.shadowTop = this.fullShadowTop;
      this.alpha = this.fullAlpha;
    }

    this.loadImage();
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrolling);
    window.removeEventListener("resize", this.setImageHeight);
    clearTimeout(this.imageTimeout);
  },
  data() {
    return {
      textHeight: null,
      isMounted: false,
      loading: true,
      imageHeight: 200,
      dev: {
        title: null,
        content: null
      },
      development: {
        "basic-fit": {
          title: "Basic Fit",
          content: `
              Basic-Fit stands for unlimited fitness with high-quality fitness equipment in our gyms from TechnoGym and Matrix.
              Whether you're a beginner or a pro, a group exercise animal or a fitness boss, 
              a fan of sweat sessions in the gym or yoga in your living room, 
              it doesn't matter. Whoever you are or however you train, 
              our doors are open for you. Basic-Fit is a fan of yours! Go for it!
          `
        }
      },
      originalScale: 0.9,
      scale: 0.9,
      fullScale: 1,
      originalAlpha: 0.6,
      alpha: 0.75,
      fullAlpha: 0.25,
      originalShadowBlur: 50,
      shadowBlur: 50,
      fullShadowBlur: 10,
      originalShadowTop: 25,
      shadowTop: 25,
      fullShadowTop: 5,
      animating: false,
      imageTimeout: 0,
      resizeImageTimeout: 0,
      showImage: false
    };
  },
  methods: {
    async setImageHeight(resize) {
      const { height } = this.$refs.image
        .querySelector("picture")
        .getBoundingClientRect();

      const scaledHeight =
        (height / (this.scale * 100)) * (this.fullScale * 100);

      this.imageHeight = scaledHeight;
      this.showImage = true;
    },
    loadImage: async function() {
      const src = `/images/dev/${this.param}-full.webp`;
      const fallback = `/images/dev/${this.param}-full.jpeg`;
      await this.$preload.loadImage({ src, fallback });

      await this.$nextTick();
      // let the bouncer bounce =)
      this.imageTimeout = setTimeout(() => {
        this.setImageHeight();
        window.addEventListener("resize", this.setImageHeight);
      }, 1000);
    },
    scrolling(e) {
      if (scrollY > this.textHeight) {
        this.scale = this.fullScale;
        this.alpha = this.fullAlpha;
        return;
      }

      if (!this.animating) {
        this.animating = true;

        requestAnimationFrame(() => {
          //scale
          const scaleDifference = this.fullScale - this.originalScale;
          const scaleStep = scaleDifference / this.textHeight;
          this.scale = this.originalScale + scaleStep * scrollY;

          //shadow
          const alphaDiff = this.fullAlpha - this.originalAlpha;
          const alphaStep = alphaDiff / this.textHeight;
          this.alpha = this.originalAlpha + alphaStep * scrollY;

          const blurDiff = this.fullShadowBlur - this.originalShadowBlur;
          const blurStep = blurDiff / this.textHeight;
          this.shadowBlur = this.originalShadowBlur + blurStep * scrollY;

          const topDiff = this.fullShadowTop - this.originalShadowTop;
          const topStep = topDiff / this.textHeight;
          this.shadowTop = this.originalShadowTop + topStep * scrollY;

          this.animating = false;
        });
      }
    }
  },
  computed: {
    param() {
      return this.$route.params.dev.toLowerCase();
    },
    paramUpperCase() {
      const { param } = this;
      const splitParam = param.split("-");
      const words = splitParam.map(word => {
        return (
          word.substr(0, 1).toUpperCase() +
          word.substr(1, word.length - 1).toLowerCase()
        );
      });
      return words.join(" ");
    }
  },
  validate({ params }) {
    const param = params.dev;
    const list = Object.keys(this.data().dev);
    if (list.indexOf(param) !== -1) {
      return true;
    }

    return true;
  },
  head() {
    return {
      title: `Snoo - ${this.paramUpperCase} showcase`,
      meta: [
        {
          name: "keywords",
          content:
            "Personal, Portfolio, Creative, Design, Development, Nuxt, Vue, CSS, CSS3, HTML, HTML5, JS, Javascript"
        },
        {
          name: "description",
          content: `Hello! My name is Mike de Snoo, but you can call me Snoo. I am a graphic designer & developer. Have a look at my showcase for ${this.paramUpperCase}`
        },
        {
          name: "og:description",
          content: `Hello! My name is Mike de Snoo, but you can call me Snoo. I am a graphic designer & developer. Have a look at my showcase for ${this.paramUpperCase}`
        },
        {
          property: "og:image",
          content: `https://portfolio.logopicker.com/images/${this.param}-thumb.jpg`
        },
        {
          property: "og:url",
          content: `https://portfolio.logopicker.com/design/${this.param}`
        },
        {
          property: "og:title",
          content: `Snoo - Portfolio ${this.paramUpperCase} showcase`
        },
        {
          property: "og:type",
          content: "website"
        }
      ]
    };
  }
};
</script>

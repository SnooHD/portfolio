<template>
  <div class="flex flex-col justify-center items-center" v-if="param">
    <div
      v-if="design"
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
        :title="design.title"
      />
      <div
        class="mt-4 md:mt-6 lg:mt-8 font-normal text-lg leading-wider"
        v-html="design.content"
      ></div>
    </div>
    <div
      class="w-full mt-4 relative z-10 rounded-md overflow-hidden"
      :style="{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        boxShadow: `0px ${shadowTop}px ${shadowBlur}px -12px rgba(0,0,0,${alpha ||
          '0'})`
      }"
    >
      <picture>
        <source
          v-for="src in ['jpeg', 'webp']"
          :key="`design-image-${index}-src-${src}`"
          class="w-full"
          :srcset="`/images/design/${param}-full.${src}`"
          :type="src === 'webp' ? 'image/webp' : 'image/jpeg'"
        />
        <img class="w-full" :src="`/images/design/${param}-full.jpeg`" />
      </picture>
    </div>
    <div
      class="fixed flex bottom-0 z-20 flex-row w-full content-between justify-between sm:px-12 sm:py-12 py-8 px-4"
    >
      <div>
        <NuxtLink to="../#design">
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
        <NuxtLink to="../#contact">
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
  created() {
    this.design = this.designs[this.param];
  },
  async mounted() {
    await this.$nextTick();
    this.isMounted = true;

    if (this.param === "logopicker") {
      this.alpha = 0.35;
      this.originalAlpha = 0.35;
    }

    this.textHeight = this.$refs.text.getBoundingClientRect().height;
    document.addEventListener("scroll", this.scrolling);

    if (scrollY > this.textHeight) {
      this.scale = this.fullScale;
      this.shadowBlur = this.fullShadowBlur;
      this.shadowTop = this.fullShadowTop;
      this.alpha = this.fullAlpha;
    }
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrolling);
  },
  data() {
    return {
      textHeight: null,
      isMounted: false,
      design: {
        title: null,
        content: null
      },
      designs: {
        logopicker: {
          title: "LogoPicker",
          content: `
                        LogoPicker is a logo maker that generates custom logo designs. This tool makes design accessible to everyone.
                        By asking a few questions to the user, we can interpret the answers to provide accurate design ideas.
                        The goal is to empower everyone to embark on a creative journey, without knowledge of advanced graphic editors.
                        Its user friendly UI can be mastered within minutes.<br/>
                        <br/>
                        This is a personal project, which is still ongoing.
                        The frontend design has not been developed yet, but a lot of work was done for the admin interface.
                    `
        },
        "adoption-support-alliance": {
          title: "ASA",
          content: `
                        ASA (Adoption Support Alliance) helps adoptive parents through the unique challenges of creating a new family.
                        The logo designed for this charity is an abstract representation of a family hug (top view).<br/>
                        <br/>
                        The colors used represent the sunrise:<br/>
                        <b class="font-semibold">Blue</b> → Trust, virtue and willpower.<br/>
                        <b class="font-semibold">Yellow</b> → The end of solitary darkness. It's thriving, bright and energetic.<br/>
                        <b class="font-semibold">Green</b> → Our common roots: earth / nature the home we all share..<br/>
                        <br/>
                        I used circular shapes to convey a sense of unity and wholeness.
                        A layer of protection without a beginning or end.
                    `
        },
        powrful: {
          title: "Powrful",
          content: `
                        Powrful is a social media marketing agency that was looking for a mascot.<br class="hidden lg:block"/>
                        Meet Phillip, a mighty T-Rex <b class="font-semibold">Raawwrrg</b> that has everything he could every wish for.
                        Although he has tiny hands and can't reach very far, he has a powerful magnet which allows him to draw everything from everywhere.
                        This makes him very happy.
                    `
        },
        influence: {
          title: "Influence",
          content: `
                        A modern logo for a social media network of influencers.<br class="hidden lg:block"/>
                        The symbol represents the flow of influence between users.
                        The continuity of the colors serves to represent the current of information, gracefully running like a river from one user to the other. 
                        <br/><br/>
                        I used circles based on the <b class="font-semibold">Golden Ratio</b> to structure the design as it denotes a strong message for this brand:
                        <ul class="flex flex-wrap list-disc list-inside mt-4">
                            <li class="w-full xs:w-.5 md:w-1/3 font-medium">Inclusiveness</li>
                            <li class="w-full xs:w-.5 md:w-1/3 font-medium">Interaction</li>
                            <li class="w-full xs:w-.5 md:w-1/3 font-medium">Social circles</li>
                            <li class="w-full xs:w-.5 md:w-1/3 font-medium">Globality</li>
                            <li class="w-full xs:w-.5 md:w-1/3 font-medium">Growth</li>
                        </ul>
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
      animating: false
    };
  },
  methods: {
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
      return this.$route.params.design.toLowerCase();
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
    const param = params.design;
    const list = Object.keys(this.data().designs);
    if (list.indexOf(param) !== -1) {
      return true;
    }

    return true;
  },
  head() {
    return {
      title: `Snoo - ${this.paramUpperCase} design`,
      meta: [
        {
          name: "keywords",
          content:
            "Personal, Portfolio, Creative, Design, Development, Nuxt, Vue, CSS, CSS3, HTML, HTML5, JS, Javascript"
        },
        {
          name: "description",
          content: `Hello! My name is Mike de Snoo, but you can call me Snoo. I am a graphic designer & developer. Have a look at my design for ${this.paramUpperCase}`
        },
        {
          name: "og:description",
          content: `Hello! My name is Mike de Snoo, but you can call me Snoo. I am a graphic designer & developer. Have a look at my design for ${this.paramUpperCase}`
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
          content: `Snoo - Portfolio ${this.paramUpperCase} design`
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

<template>
  <div class="relative">
    <header-block />
    <template v-for="(section, index) in sections">
      <component
        ref="section"
        :is="section"
        :key="`portfolio-section-${index}`"
        class="
          transition-all
          will-change-transform
          transition-400
          opacity-0
          translate-y-40px
          in-view:opacity-100
          in-view:translate-none
        "
      />
    </template>
  </div>
</template>

<script>
import "intersection-observer";
import headerBlock from "~/components/header/header.vue";
import intro from "~/components/intro/intro.vue";
import dev from "~/components/dev/dev.vue";
import design from "~/components/design/design.vue";
import contact from "~/components/contact/contact.vue";

export default {
  components: {
    headerBlock,
    intro,
    dev,
    design,
    contact
  },
  data() {
    return {
      inViewOffset: 50,
      screenHeight: null,
      intersectionData: [],
      animating: false,
      loaded: false,
      fontsLoaded: true,
      sections: ["intro", "dev", "design", "contact"],
      headerImages: [],
      introImages: [
        {
          src: "/images/about/mikedesnoo.png",
          fallback: "/images/about/mikedesnoo.webp"
        }
      ],
      devImages: [
        {
          src: "nativeway.webp",
          fallback: "nativeway.jpg"
        },
        {
          src: "quality-connection.webp",
          fallback: "quality-connection.jpg"
        },
        {
          src: "track-and-trace.webp",
          fallback: "track-and-trace.jpg"
        }
      ],
      designImages: [
        {
          src: "/images/design/logopicker-thumb.webp",
          fallback: "/images/design/logopicker-thumb.jpeg"
        },
        {
          src: "/images/design/adoption-support-alliance-thumb.webp",
          fallback: "/images/design/adoption-support-alliance-thumb.jpeg"
        },
        {
          src: "/images/design/influence-thumb.webp",
          fallback: "/images/design/influence-thumb.jpeg"
        },
        {
          src: "/images/design/powrful-thumb.webp",
          fallback: "/images/design/powrful-thumb.jpeg"
        }
      ],
      contactImages: []
    };
  },
  async mounted() {
    await this.$nextTick();

    if (this.$route.hash) {
      // using 0 for duration takes the default given in nuxt.config.js..
      // so using 1 instead.
      this.$scrollTo(this.$route.hash, 1);
    }

    // preload fonts above the fold
    await this.preloadFonts();

    await this.$nextTick();
    this.init();
  },
  methods: {
    async preloadFonts() {
      const weights = [900, 700, 500];

      for (let i = 0; i < weights.length; i++) {
        const weight = weights[i];
        const font = {
          name: "GalanoGrotesque",
          style: "normal",
          weight
        };

        await this.$preload.loadFont(font);
      }

      this.fontsLoaded = true;

      return;
    },
    init() {
      this.initScroll();
    },
    initScroll() {
      this.screenHeight = window.innerHeight;

      const components = this.$refs.section.map(component => component.$el);
      const animate = Array.from(document.querySelectorAll("[scroll-animate]"));

      const elements = components.concat(animate);
      elements.forEach((element, index) => {
        const observer = new IntersectionObserver(this.isInView, {
          threshold: [0, 1],
          rootMargin: "0px 0px 0px 0px"
        });
        observer.observe(element);
      });
    },
    isInView(entries, observer) {
      entries.forEach((entry, index) => {
        let currentY = entry.boundingClientRect.y;
        let currentRatio = entry.intersectionRatio;
        const isIntersecting = entry.isIntersecting;
        const element = entry.target;

        // Scrolling down/up
        let inView = false;
        if (currentY > 0) {
          if (isIntersecting) {
            // Scrolling down enter
            inView = true;
          } else {
            // Scrolling down leave
          }
        } else if (currentY <= 0) {
          if (isIntersecting) {
            // Scrolling up enter
            inView = true;
          } else {
            // Scrolling up leave
          }
        }

        if (inView) {
          element.classList.add("s_in-view");
        } else if (currentRatio === 0) {
          // only remove for scroll-animate elements
          if (element.hasAttribute("scroll-animate")) {
            element.classList.remove("s_in-view");
          }
        }
      });
    }
  },
  head() {
    return {
      title: "Snoo - Portfolio",
      meta: [
        {
          name: "keywords",
          content:
            "Personal, Portfolio, Creative, Design, Development, Nuxt, Vue, CSS, CSS3, HTML, HTML5, JS, Javascript, TS, Typescript"
        },
        {
          name: "description",
          content:
            "Hello! My name is Mike de Snoo, but you can call me Snoo. I am a graphic designer & developer."
        },
        {
          name: "og:description",
          content:
            "Hello! My name is Mike de Snoo, but you can call me Snoo. I am a graphic designer & developer."
        },
        {
          property: "og:image",
          content: "https://portfolio.logopicker.com/images/snoo.png"
        },
        {
          property: "og:url",
          content: "https://portfolio.logopicker.com/"
        },
        {
          property: "og:title",
          content: "Snoo - Portfolio"
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

<template>
  <div 
    class="relative transition-400 transition-opacity"
    @transitionend.self="init"
    :class="loaded ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none'"
  >
    <header-block />
    <intro />
    <dev />
    <design />
    <contact />
  </div>
</template>

<script>
import 'intersection-observer';
import headerBlock from '~/components/header/header.vue';
import intro from '~/components/intro/intro.vue';
import dev from '~/components/dev/dev.vue';
import design from '~/components/design/design.vue';
import contact from '~/components/contact/contact.vue';

export default {
  components: {
    headerBlock,
    intro,
    dev,
    design,
    contact
  },
  data(){
    return {
      inViewOffset: 50,
      screenHeight: null,
      intersectionData: [],
      animating: false,
      loaded: false,
    }
  },
  async mounted(){
    if(this.$route.hash){
      // using 0 for duration takes the default given in nuxt.config.js..
      // so using 1 instead.
      this.$scrollTo(this.$route.hash, 1);
    }

    await this.$nextTick();
    this.loaded = true;
  },
  methods: {
    init(){
      this.initScroll();
    },
    initScroll(){
      this.screenHeight = window.innerHeight;
      
      const elements = document.querySelectorAll('[scroll-animate]');
      elements.forEach((element, index) => {
          this.intersectionData[index] = {
            previousY: 0,
            previousRatio: 0
          }

          const observer = new IntersectionObserver(this.isInView, {
            threshold: [0, 1],
            rootMargin: '0px 0px 0px 0px'
          });
          observer.observe(element);
      });
      // this.elements = elements.map(element => {
      //   const top = element.getBoundingClientRect().top;
      //   return {
      //     element,
      //     top,
      //     inView: false
      //   }
      // });
    },
    isInView(entries, observer){
      entries.forEach((entry, index) => {
        const currentY = entry.boundingClientRect.y;
        let currentRatio = entry.intersectionRatio;
        const isIntersecting = entry.isIntersecting;
        const element = entry.target;
        const { previousY, previousRatio } = this.intersectionData[index];

        // Scrolling down/up
        let inView = false;
        if (currentY < previousY) {
          if (currentRatio > previousRatio && isIntersecting) {
            // Scrolling down enter
            inView = true;
          } else {
            // Scrolling down leave
          }
        } else if (currentY > previousY && isIntersecting) {
          if (currentRatio > previousRatio) {
            // Scrolling up enter
            inView = true;
          } else {
            // Scrolling up leave
          }
        }

        if(inView){
          element.classList.add('s_in-view');
        }else if(currentRatio === 0){
          element.classList.remove('s_in-view');
        }

        this.intersectionData[index] = {
          previousY: currentY,
          previousRatio: currentRatio
        }

      })
    },
  },
  head(){
    return {
        title: 'Snoo - Portfolio',
      meta: [{
        name: 'keywords',
        content: 'Personal, Portfolio, Creative, Design, Development, Nuxt, Vue, CSS, CSS3, HTML, HTML5, JS, Javascript'
      },{
        name: 'description',
        content: 'Hello! My name is Mike de Snoo, but you can call me Snoo. I am a graphic designer & developer from The Netherlands.'
      },{
        name: 'og:description',
        content: 'Hello! My name is Mike de Snoo, but you can call me Snoo. I am a graphic designer & developer from The Netherlands.'
      },{
        property: 'og:image',
        content: 'https://portfolio.logopicker.com/images/snoo.png'
      },{
        property: 'og:url',
        content: 'https://portfolio.logopicker.com/'
      },{
        property: 'og:title',
        content: 'Snoo - Portfolio'
      },{
        property: 'og:type',
        content: 'website'
      }]
    }
  }
}
</script>

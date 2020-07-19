<template>
  <div class="
    relative
  ">
    <header-block />
    <intro />
    <dev />
    <design />
    <contact />
  </div>
</template>

<script>
import headerBlock from '~/components/header/header.vue';
import intro from '~/components/intro/intro.vue';
import dev from '~/components/dev/dev.vue';
import design from '~/components/design/design.vue';
import contact from '~/components/contact/contact.vue';
import footerBlock from '~/components/footer/footer.vue';

export default {
  components: {
    headerBlock,
    intro,
    dev,
    design,
    contact,
    footerBlock
  },
  mounted(){
    if(location.hash){
      const hash = location.hash;
      this.$scrollTo(hash, 1000, {offset: -120});
    }
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

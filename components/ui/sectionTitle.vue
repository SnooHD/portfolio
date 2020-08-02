<template>
  <component :is="type"
    scroll-animate
    class="
      text-blue-dark
      md:text-5.5xl
      text-4xl
      inline-block
      font-black
      relative
      before:title-bg
      in-view:before:scale-x-100
    "
  >
    <span 
        v-for="(char, index) in title"
        :key="`title-${title}-char-${char}-${index}`"
        :style="{
            transitionDelay: `${(400 / title.length) * index}ms`
        }"
        
        class="
            relative z-10
            inline-block
            transition-transform
            transition-400
            ease-easeOutBack
            in-view-child:-translate-y-.8
        "
    >
        {{ char === ' ' ? '&nbsp;' : char }}
    </span>
  </component>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'h2'
    }
  }
}
</script>
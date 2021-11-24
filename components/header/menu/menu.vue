<template>
  <ul>
    <li v-for="item in items" :key="`menu-item-${item}`">
      <a
        @click.prevent="scrollTo(item)"
        :href="`#${item}`"
        class="
                    relative z-0 group
                "
      >
        <div
          v-if="item !== 'contact'"
          :class="
            `
                cursor-pointer inline-block
                relative z-0 before:menu-item-bg
                hover:before:scale-x-100
                text-shadow hover:text-shadow-lg
                ${inView === item ? 'before:scale-x-100' : ''}
            `
          "
        >
          <div class="relative z-10">
            <span
              v-for="(char, index) in item"
              :key="`menu-${item}-char-${char}-${index}`"
              :style="{
                transitionDelay: `${50 * index}ms`
              }"
              :class="
                `
                    inline-block
                    transition-transform
                    transition-400
                    ease-easeOutBack
                    group-hover:-translate-y-.8
                    ${index === 0 ? 'uppercase' : 'lowercase'}
                    ${inView === item ? '-translate-y-.8' : ''}
                `
              "
            >
              {{ char }}
            </span>
          </div>
        </div>

        <button
          v-else
          class="
                capitalize
                cursor-pointer
                rounded-full
                shadow-md active:shadow
                px-4 py-1
                text-shadow-md
                bg-yellow-mid
                will-change-transform
                transition-all hover:scale-105
                hover:bg-yellow-dark transition-400
            "
        >
          <span>{{ item }}</span>
        </button>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: ["about", "dev", "design", "contact"]
    };
  },
  props: ["inView"],
  methods: {
    scrollTo(hash) {
      this.$router.push({ hash: `#${hash}` });
      this.$scrollTo(`#${hash}`);
    }
  }
};
</script>

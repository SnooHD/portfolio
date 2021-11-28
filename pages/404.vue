<template>
  <div
    class="h-full min-h-screen w-full flex flex-col items-center justify-center space-y-4"
  >
    <h1 class="text-xl font-medium">
      This page does not exist.
    </h1>
    <nuxt-link
      class="text-lg px-4 py-2 font-medium text-white rounded-full active:shadow shadow-md hover:yellow-mid-press bg-yellow-mid"
      to="/"
      >Homepage</nuxt-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: {
        title: "404",
        text: "Page not found"
      }
    };
  },
  props: ["error"],
  components: {}
};
</script>

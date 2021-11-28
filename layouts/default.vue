<template>
  <div
    class="
    overflow-hidden
    lg:px-14
    md:px-12 
    sm:px-10
    xs:px-8
    px-6
    font-galano
    text-gray-blue
    mds_layout
    bg-light
  "
  >
    <!--
      $mq creates jump content due to the default breakpoint used from SSR
      We don't need SSR anyways as this protoflio will be used for static rendering
     -->
    <client-only>
      <nuxt
        style="margin: 0 auto;"
        class="
          py-4
          sm:py-6
          md:py-10
          xl:max-w-1100
          container
          mx-auto
        "
      />
    </client-only>
  </div>
</template>

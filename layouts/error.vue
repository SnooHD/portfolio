<template>
  <div class="page-404">
    <!-- <headerBlock :page="page"/>
    <error404 />
    <footerBlock /> -->
  </div>
</template>

<script>
// import headerBlock from '~/components/header/header.vue';
// import footerBlock from '~/components/footer/footer.vue';
// import error404 from '~/components/404/404.vue';

export default {
    data(){
        return {
            page:{
                title: '404',
                text: 'Page not found'
            }
        }
    },
    props: ['error'],
    components: {
        // headerBlock,
        // footerBlock,
        // error404
    }
}
</script>
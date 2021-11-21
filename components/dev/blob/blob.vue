<template>
<div>
<svg width="100%" viewBox="0 -18 708 583" fill="none" xmlns="http://www.w3.org/2000/svg">
<g class="transition-fill transition-1000">
<use xlink:href="#dev-blob" fill="url(#dev_paint0_linear)" transform="translate(0, -15)" /> 
<use xlink:href="#dev-blob" fill="url(#dev_paint1_radial)" />
<path v-if="$mq === 'xl'" fill="url(#dev_paint0_linear)" transform="translate(3, 4)" d="M464.246 543.892C345.736 475.158 444.709 448.094 512.16 461.614C579.611 475.134 612.463 434.355 667.879 461.614C723.296 488.873 582.757 612.626 464.246 543.892Z" />
<path v-if="$mq === 'xl'" fill="url(#dev_paint1_radial)" d="M458.974 538.553C340.464 469.819 439.437 442.755 506.888 456.275C574.339 469.796 607.19 429.017 662.607 456.275C718.024 483.534 577.484 607.287 458.974 538.553Z" />
</g>
<defs>
<g id="dev-blob">
    <path :d="blob" ref="blob"/>
</g>
<linearGradient id="dev_paint0_linear" x1="400" y1="347" x2="62.5852" y2="81.9101" gradientUnits="userSpaceOnUse">
    <stop stop-color="#2877B2" stop-opacity="0.05"></stop>
    <stop offset="1" stop-color="#2877B2" stop-opacity="0.1"></stop>
</linearGradient>
<radialGradient id="dev_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(448.534 595.438) rotate(65.5948) scale(642.823 408.928)">
    <stop :stop-color="color.secondary"></stop>
    <stop offset="0.5164" :stop-color="color.primary"></stop>
    <stop offset="0.7303" :stop-color="color.primary"></stop>
    <stop offset="0.8877" :stop-color="color.primary"></stop>
    <stop offset="1" :stop-color="color.secondary"></stop>
</radialGradient>
</defs>
</svg>
</div>
</template>

<script>
export default {
    props: ['item', 'overlay'],
    created(){
        this.blob = this.paths[this.item];
        this.color.primary = this.colors[this.item].primary;
        this.color.secondary = this.colors[this.item].secondary;
    },
    data(){
        return {
            color: {
                primary: null,
                secondary: null
            },
            colors: [
            {
                primary: 'rgb(76 83 127)',
                secondary: 'rgb(64 70 114)'
            },{
                primary: 'rgb(97 171 42)',
                secondary: 'rgb(111 145 38)'
            },
            {
                primary: 'rgb(41 105 165)',
                secondary: 'rgb(43 69 132)'
            },
            // {
            //     primary: 'rgb(43 142 75)',
            //     secondary: 'rgb(30 102 53)'
            // }
            ],
            blob: null,
            paths: [
                'M467.332 416.76C345.399 405.565 197.147 603.499 41.2427 475.785C-114.662 348.072 296.085 -242.239 582.84 128.791C869.596 499.82 589.265 427.955 467.332 416.76Z',
                //'M289 477C128.324 612.588 -87.3802 364.931 59.9999 204C207.38 43.0699 616.035 -124.178 710 152C803.964 428.179 449.676 341.412 289 477Z',
                'M595.395 420.719C321.155 416.985 76.141 599.118 17.663 456.405C-40.815 313.694 151.367 121.335 325.638 47.071C499.909 -27.195 869.635 424.451 595.395 420.719Z',
                'M595.509 317.343C384.927 433.235 273.509 540.286 112.136 490.296C-49.237 440.306 54.572 52.178 328.222 11.166C601.873 -29.846 806.667 202.289 595.797 317.762Z'
            ]
        }
    },
    methods: {
        animateBlob(item){
            this.$anime({
                targets: this,
                blob: this.paths[item],
                duration: 400,
                easing: 'easeOutBack'
            });

            this.$anime({
                targets: this.color,
                primary: this.colors[item].primary,
                secondary: this.colors[item].secondary,
                duration: 400,
                easing: 'linear'
            });
        }
    },
    watch: {
        item(item){
            this.animateBlob(item);
        }
    }
}
</script>
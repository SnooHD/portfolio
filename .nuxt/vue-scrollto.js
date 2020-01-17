import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {"duration":1000,"offset":-20,"easing":[0,0,0,1],"onDone":() => {}})

export default function (ctx, inject) {
    inject('scrollTo', VueScrollTo.scrollTo)
}

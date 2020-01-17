import Vue from 'vue'
import VueMq from 'vue-mq'

export default async function () {
  let plugin = VueMq;
  if (process.server) {
    plugin = {
      install(Vue, options) {
        Vue.prototype.$mq = options.defaultBreakpoint
      }
    }
  }

  const moduleOptions = {"defaultBreakpoint":"mobile","breakpoints":{"mobile":640,"tablet":1024,"desktop":null}}
  Vue.use(plugin, moduleOptions)
}

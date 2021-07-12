import Vue from 'nativescript-vue'
import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes.js'

Vue.use(Navigator, { routes })

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('Navigator', { attrs: { defaultRoute: '/login'} }),
}).$start()

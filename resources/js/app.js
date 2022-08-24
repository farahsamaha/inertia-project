import { InertiaProgress } from '@inertiajs/progress'
import Vue from 'vue'
import { InertiaApp, plugin } from '@inertiajs/inertia-vue'
import vuetify from '@/plugins/vuetify'
import GuestLayout from '@/Layouts/GuestLayout'
require('./bootstrap')
InertiaProgress.init({ color: '#4B5563' });
Vue.use(plugin)
const el = document.getElementById('app')
Vue.prototype.route = route
new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => {
                const page = require(`./Pages/${name}`).default
                page.layout = page.layout || GuestLayout
                return page
            },
        }
    }),
    vuetify
}).$mount(el)

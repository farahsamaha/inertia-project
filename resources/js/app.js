import { InertiaProgress } from '@inertiajs/progress'
import Vue from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue'

require('./bootstrap')

InertiaProgress.init({ color: '#4B5563' });
Vue.use(plugin)

const el = document.getElementById('app')

Vue.prototype.route = route
new Vue({
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => require(`./Pages/${name}`).default,
        }
    })
}).$mount(el)


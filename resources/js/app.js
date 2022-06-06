import { InertiaProgress } from '@inertiajs/progress'
import Vue from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue'

require('./bootstrap')

InertiaProgress.init({ color: '#4B5563' });
Vue.use(plugin)

new Vue({
    render: h => h(App, {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name => require(`./Pages/${name}`),
    })
}).$mount('#app')


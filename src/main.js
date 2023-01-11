import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import { store } from './store'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

import './assets/main.css'
import './assets/base.css'

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
})

app.use(router).use(vuetify).use(createStore(store)).mount('#app')

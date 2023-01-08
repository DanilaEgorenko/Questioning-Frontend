import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import { store } from './store'

import './assets/main.css'
import './assets/base.css'

const app = createApp(App)

app.use(router).use(createStore(store)).mount('#app')

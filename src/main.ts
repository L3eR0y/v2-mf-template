import VueRouter from 'vue-router'
import Vuex, { Store } from 'Vuex'
import Vue from 'vue'

// Routes
import router from './routes/index'

//Components and .vue
import App from './App.vue'

//Stores
import UiStore from './store/Ui'
import AuthStore from './store/Auth'

//Styles
import './styles/normalize.scss'
import './styles/app.scss'

//Plugins
import KeycloakPlugin from './plugins/keycloak'



Vue.use(VueRouter)
Vue.use(Vuex)

const store: Store<any> = new Vuex.Store({
  modules: {
    main: UiStore,
    auth: AuthStore
  }
})

Vue.use(KeycloakPlugin, { store })

const app: Vue = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#app')
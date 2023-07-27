import VueRouter from 'vue-router'
import Vuex, { Store } from 'Vuex'
import Vue from 'vue'

// Routes
import router from './routes/index'

//Components and .vue
import App from './App.vue'

//Store
//Store
import Stores from './store/index'

import hostStore from 'hostRemoteEntry/HostStore'

// console.log(hostStore)

//Styles
import './styles/normalize.scss'
import './styles/app.scss'

//Plugins
import KeycloakPlugin from './plugins/keycloak'
import AxiosPlugin from './plugins/axios' 

Vue.use(VueRouter)
Vue.use(Vuex)

const store: Store<any> = new Vuex.Store(hostStore)

Vue.use(KeycloakPlugin, { store })
Vue.use(AxiosPlugin, { store })

const app: Vue = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#app')
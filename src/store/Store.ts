import { Store } from 'Vuex'
import { MainStore } from 'types/store'

const store: Store<MainStore> = new Store({
  state: {
    auth: {} 
  }
})

export default store
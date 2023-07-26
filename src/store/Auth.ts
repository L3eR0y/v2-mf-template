import AuthStore,  { User } from 'types/store/auth'

const store: { [key: string]: any } = {
  namespaced: true,
  state: (): AuthStore => ({
    authenticated: false,
    user: undefined     
  }),
  mutations: {
    SET_AUTENTICATION(state: AuthStore, authenticated: boolean) {
      state.authenticated = authenticated
    },
    SET_USER(state: AuthStore, user: User) {
      state.user = user
    }
  },
  actions: {},
  getters: {
    authenticated(state: AuthStore) {
      return state.authenticated
    },
    user(state: AuthStore) {
      return state.user
    }
  }
}

export default store
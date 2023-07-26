import UiStore from 'types/store/ui'

const store: { [key: string]: any } = {
    state: (): UiStore => ({
        date: new Date()
    }),
    mutations: {
        date(state) {
            state.date = new Date()
        }
    },
    actions: {},
    getters: {}
}

export default store
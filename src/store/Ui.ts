import UiStore from 'types/store/ui'
import { set as Set } from 'vue'

const store: { [key: string]: any } = {
    namespaced: true,
    state: (): UiStore => ({
        tools: {},
        available_services: {},
        fixed_services: {},
        sidebar_active_item: '',
    }),
    mutations: {
        SET_AVAILABLE_SERVICES(state, services) {
            if (Array.isArray(services)) {
              services.forEach((item) => {
                if (item.route) Set(state.available_services, item.route, item)
              })
            }
          },
        
        SET_AVAILABLE_SERVICE(state, service) {
            Set(state.available_services, service.route, service)
        },
    },
    actions: {
        async getAvailableServices({ state, commit }, params = {}) {
            const _self_ = this._vm
            try {
                let result = []
                let available_services = []
        
                result =
                (
                    await _self_.$axios.get(`https://develop-elka-common-services.c4.syndev.ru/common/services/availables`, {
                        headers: {
                            Authorization: this.getters['auth/token']
                        },
                        params: params?.params || {},
                    })
                )?.data?.data || []

                available_services = result.map((service) => {
                    const route_name = `subservices-${service.id.split('.').join('-')}`
                    const tool = state.tools?.[route_name] || {...service}
            
                    return {
                        ...tool,
                        title: service.title,
                        route: route_name
                    }
                })
                
                commit('ui/SET_AVAILABLE_SERVICES', available_services, { root: true })
              return result
            } catch (e) {
              console.error(e.message)
              return []
            }
          },
    },
    getters: {}
}

export default store
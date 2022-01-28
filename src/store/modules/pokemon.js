const state = () => ({
    pokemon: {
      url: '',
    },
})
  
const getters = {
    pokemon: (state) => state.pokemon,
}

const actions = {}

const mutations = {
    setPokemon(state, value) {
        state.pokemon.url = value.url
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
  
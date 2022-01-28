<template>
    <v-container>
        <v-row>
            <v-col cols="3" v-for="pokemon in allPokemons" :key="pokemon.name">
                <poke-card :name="pokemon.name" :url="pokemon.url" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import PokeCard from '../components/PokeCard.vue'
import { api } from '../api'

export default {
    name: 'Home',
    components: {
        PokeCard
    },
    data(){
        return{
            allPokemons: []
        }
    },
    beforeMount() {
        api.get('/pokemon').then(({data}) => {
            this.allPokemons = data.results
        })
    }
}
</script>
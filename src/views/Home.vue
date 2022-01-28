<template>
    <v-container>
        <div class="text-center">
            <h1>Choose your Pokémon!</h1>
        </div>
        <div class="text-right">
            <v-btn color="primary" text @click="goToMyPokemon()">
              My Pokémon
            </v-btn>
        </div>
        <v-row class="mt-4">
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
    },
    methods: {
        goToMyPokemon(){
            if(this.$store.getters['pokemon/pokemon']){
                this.$store.commit('snackbar/showSnackbar', {
                    text: 'Choose a Pokémon!',
                    color: 'error',
                })
            }
        }
    }
}
</script>
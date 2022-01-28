<template>
    <v-container>
        <div class="text-left">
            <v-btn color="primary" text @click="goHome()">
              Back Home
            </v-btn>
        </div>
        <div v-if="!isLoading && pokemon">
            <div class="text-center">
                <h2>{{ pokemon.name }}</h2>
                <small class="caption">Weight: {{ pokemon.weight }} | Height: {{ pokemon.height }}</small>
            </div>
            <v-row class="mt-2">
                <v-col cols="3">
                    <v-img
                        :src="pokemon.sprites.front_default || ''"
                        height="200px"
                    ></v-img> 
                </v-col>
                <v-col cols="3">
                    <v-img
                        :src="pokemon.sprites.back_default || ''"
                        height="200px"
                    ></v-img> 
                </v-col>
                <v-col cols="3">
                    <v-img
                        :src="pokemon.sprites.front_shiny || ''"
                        height="200px"
                    ></v-img> 
                </v-col>
                <v-col cols="3">
                    <v-img
                        :src="pokemon.sprites.back_shiny || ''"
                        height="200px"
                    ></v-img> 
                </v-col>
            </v-row>
            <v-row class="mt-2">
                <h3 class="mt-2">Abilities:</h3>
                <v-chip
                    class="ma-2"
                    color="primary"
                    v-for="ability in pokemon.abilities"
                    :key="ability.slot"
                >
                    {{ ability.ability.name }}
                </v-chip>
            </v-row>
            <v-row class="mt-6">
                <h3 class="mt-2">Moves:</h3>
                <v-chip
                    class="ma-1"
                    color="secondary"
                    v-for="move in pokemon.moves"
                    :key="move.move.name"
                >
                    {{ move.move.name }}
                </v-chip>
            </v-row>
        </div>
    </v-container>
</template>
<script>
import { api } from '../api'

export default {
    name: 'MyPokemon',
    data(){
        return{
            pokemon: {},
            isLoading: false,
        }
    },
    beforeMount() {
        const url = this.$store.getters['pokemon/pokemon'].url
        const [ ,path ] = url.split('v2')
        this.isLoading = true
        api.get(path).then(({ data }) => {
            this.pokemon = data
        }).finally(() => {
            this.isLoading = false
        })
    },
    methods: {
        goHome(){
            this.$router.push('/home')
        }
    }
}
</script>
<template>
    <v-card
        class="mx-auto"
        max-width="344"
        v-if="pokemon && !isLoading"
    >
        <v-img
            :src="pokemon.sprites.front_default || ''"
            height="200px"
        ></v-img> 
        <v-card-title>
            {{ name || ' - ' }}
        </v-card-title>   
        <v-card-subtitle>
            Weight: {{ pokemon.weight }} | Height: {{ pokemon.height }}
        </v-card-subtitle>    
        <v-card-actions>
            <v-btn color="primary" text @click="saveFavorite(url)">
              Choose
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import { api } from '../api'

export default {
    name: 'PokeCard',
    data() {
        return {
            pokemon: {},
            savedPokemons: {},
            isLoading: true,
        }
    },
    props: {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    beforeMount() {
        const [ ,path ] = this.url.split('v2')
        api.get(path).then(({data}) => {
            this.pokemon = data
        }).finally(() => {
            this.isLoading = false
        })
    },
    methods: {
        saveFavorite(url){
            this.$store.commit('pokemon/setPokemon', { url })
            this.$store.commit('snackbar/showSnackbar', {
                text: `You choose: ${this.name}`,
                color: 'success',
            })
        }
    }
}
</script>

<template>
    <v-card
        class="mx-auto"
        max-width="344"
    >
        <v-img
            :src="pokemon.sprites.front_default"
            height="200px"
        ></v-img> 
        <v-card-title>
            {{ name }}
        </v-card-title>   
        <v-card-subtitle>
            Weight: {{ pokemon.weight }} | Height: {{ pokemon.height }}
        </v-card-subtitle>    
        <v-card-actions>
            <v-btn color="primary" text>
              save as favorite
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
            pokemon: {}
        }
    },
    props: {
        name: {
            type: String,
            require: true
        },
        url: {
            type: String,
            require: true
        }
    },
    beforeMount() {
        const [ ,path ] = this.url.split('v2')
        api.get(path).then(({data}) => {
            this.pokemon = data
        })
    },
}
</script>

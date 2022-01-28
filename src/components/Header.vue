<template>
    <v-app-bar
      app
      color="secondary"
      dense
      flat
      dark
      elevation="2"
      class="pa-9"
      height="20px"
    >
      <router-link to="/home" tag="div" class="d-flex">
        <v-img
          :src="require('../assets/logo.png')"
          contain
          cover
          width="45"
          class="mt-n4"
        />
      </router-link>
    </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
}
</script>

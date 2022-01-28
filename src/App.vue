<template>
  <v-app>
    <div class="hold-content">
      <router-view name="header">
        <Header />
      </router-view>
      <v-main>
        <router-view class="mt-16" />
        <v-snackbar
          v-model="snackbar.show"
          :timeout="snackbar.timeout"
          :color="snackbar.color"
          rounded="pill"
        >
          {{ snackbar.text }}
          <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="snackbar.show = false">
              Fechar
            </v-btn>
          </template>
        </v-snackbar>
      </v-main>
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
  computed: {
    snackbar() {
      const sb = { ...this.$store.getters['snackbar/snackbar'] }
      return sb
    },
  },
}
</script>
<style lang="scss" scoped>
/* stylelint-disable declaration-no-important */

.hold-content {
  background-attachment: fixed !important;
  background-color: #f5f5f5;
  background-position: center !important;
  background-size: cover !important;
  height: 100% !important;
}
</style>

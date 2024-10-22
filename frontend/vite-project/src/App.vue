<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <router-view />
        <navbar v-if="shouldShowNavbar" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import navbar from './components/navbar.vue';

export default {
  name: 'App',
  components: {
    navbar,
  },
  computed: {
    shouldShowNavbar() {
      const noNavbarRoutes = ['/login', '/register']; // Routes where navbar should be hidden
      return !noNavbarRoutes.includes(this.$route.path); // Hide navbar for these routes
    },
  },
};
</script>

<style scoped>
  
</style>

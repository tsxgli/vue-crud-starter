<script>
import Navigation from './components/Navigation.vue'
import { useUserSessionStore } from './stores/usersession';

export default {
  name: "App",
  components: {
    Navigation
  },
  setup() {
    const store = useUserSessionStore();
    store.localLogin();
    return {
      store: useUserSessionStore()
    };
  }
};
</script>

<template>
  <navigation />
  <RouterView />
</template>

<style scoped>
</style>

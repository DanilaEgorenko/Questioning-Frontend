<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  computed: {
    isLogin() {
      return this.$store.getters.isLogin
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login')
      this.isLogin = !this.isLogin
    }
  }
}
</script>
<template>
  <v-app>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Главная</RouterLink>
          <RouterLink v-if="isLogin" to="/profile">Мои анкеты</RouterLink>
          <a v-else @click="login">Войти</a>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </v-app>
</template>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}

nav {
  text-align: left;
  font-size: 1rem;
  padding: 1rem 0;
}

nav {
  width: 100%;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: .5rem 1rem;
  text-decoration: none;
  color: #0d6efd;
}

a.active-link {
  color: #fff;
  background-color: #0d6efd;
  border: 0;
  border-radius: 0.25rem;
}

@media print {
  nav {
    display: none;
  }
}
</style>

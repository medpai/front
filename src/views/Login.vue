<template>
  <div class="login">
    <h1>Connexion</h1>
    <form @submit.prevent="loginUser">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="mot_de_passe" type="password" placeholder="Mot de passe" required />
      <button type="submit">Se Connecter</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      mot_de_passe: '',
      errorMessage: ''
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('/api/login', {
          email: this.email,
          mot_de_passe: this.mot_de_passe
        });
        localStorage.setItem('token', response.data.token);
        this.$router.push('/'); // Redirige vers la page d'accueil après une connexion réussie
      } catch (error) {
        this.errorMessage = 'Erreur lors de la connexion.';
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.login {
  padding: 20px;
  text-align: center;
}
.error {
  color: red;
}
</style>

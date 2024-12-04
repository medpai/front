<template>
  <form @submit.prevent="handleLogin">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Mot de passe" required />
    <button type="submit">Se connecter</button>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleLogin() {
      this.errorMessage = ''; // Réinitialiser le message d'erreur
      try {
        const response = await axios.post('/api/login', {
          email: this.email,
          password: this.password
        });
        // Gérer la réponse (par exemple, stocker le token)
        localStorage.setItem('token', response.data.token);
        // Rediriger ou faire d'autres actions après la connexion réussie
      } catch (error) {
        this.errorMessage = error.response.data.message || 'Erreur lors de la connexion';
      }
    }
  }
};
</script>

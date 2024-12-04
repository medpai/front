<template>
  <div>
    <input v-model="searchName" @input="searchUsers" placeholder="Rechercher par nom" />
    <ul>
      <li v-for="user in users" :key="user.id_utilisateur">{{ user.nom }} {{ user.prenom }}</li>
    </ul>
  </div>
</template>

<script>
import { getUsersByName } from '../api/userApi'; // Assurez-vous que le chemin est correct

export default {
  data() {
    return {
      searchName: '',
      users: []
    };
  },
  methods: {
    async searchUsers() {
      if (this.searchName.length > 0) {
        try {
          const response = await getUsersByName(this.searchName);
          this.users = response.data; // Assurez-vous que la structure de la réponse est correcte
        } catch (error) {
          console.error('Erreur lors de la recherche des utilisateurs:', error);
        }
      } else {
        this.users = []; // Réinitialiser la liste si le champ est vide
      }
    }
  }
};
</script>

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>

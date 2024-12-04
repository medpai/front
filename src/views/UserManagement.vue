<template>
    <div class="user-management">
      <h1>Gestion des Utilisateurs</h1>
      
      <form @submit.prevent="addUser">
        <h2>Ajouter un Utilisateur</h2>
        <input v-model="newUser.nom" placeholder="Nom" required />
        <input v-model="newUser.prenom" placeholder="Prénom" required />
        <input v-model="newUser.email" placeholder="Email" required />
        <input v-model="newUser.telephone" placeholder="Téléphone" required />
        <input v-model="newUser.date_embauche" type="date" required />
        <input v-model="newUser.mot_de_passe" type="password" placeholder="Mot de passe" required />
        <button type="submit">Ajouter</button>
      </form>
  
      <h2>Liste des Utilisateurs</h2>
      <ul>
        <li v-for="user in users" :key="user.id_utilisateur">
          {{ user.nom }} {{ user.prenom }} - {{ user.email }}
          <button @click="editUser(user)">Modifier</button>
          <button @click="deleteUser(user.id_utilisateur)">Supprimer</button>
        </li>
      </ul>
  
      <div v-if="editingUser">
        <h2>Modifier l'Utilisateur</h2>
        <form @submit.prevent="updateUser">
          <input v-model="editingUser.nom" placeholder="Nom" required />
          <input v-model="editingUser.prenom" placeholder="Prénom" required />
          <input v-model="editingUser.email" placeholder="Email" required />
          <input v-model="editingUser.telephone" placeholder="Téléphone" required />
          <input v-model="editingUser.date_embauche" type="date" required />
          <input v-model="editingUser.mot_de_passe" type="password" placeholder="Nouveau Mot de passe" />
          <button type="submit">Mettre à jour</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newUser: {
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          date_embauche: '',
          mot_de_passe: ''
        },
        users: [],
        editingUser: null
      };
    },
    methods: {
      async fetchUsers() {
        const response = await axios.get('/api/users');
        this.users = response.data.data;
      },
      async addUser() {
        await axios.post('/api/users', this.newUser);
        this.fetchUsers();
        this.newUser = { nom: '', prenom: '', email: '', telephone: '', date_embauche: '', mot_de_passe: '' };
      },
      editUser(user) {
        this.editingUser = { ...user };
      },
      async updateUser() {
        await axios.put(`/api/users/${this.editingUser.id_utilisateur}`, this.editingUser);
        this.fetchUsers();
        this.editingUser = null;
      },
      async deleteUser(userId) {
        await axios.delete(`/api/users/${userId}`);
        this.fetchUsers();
      }
    },
    mounted() {
      this.fetchUsers();
    }
  };
  </script>
  
  <style scoped>
  .user-management {
    padding: 20px;
  }
  .user-management form {
    margin-bottom: 20px;
  }
  .user-management ul {
    list-style-type: none;
    padding: 0;
  }
  .user-management li {
    margin: 10px 0;
  }
  </style>
  
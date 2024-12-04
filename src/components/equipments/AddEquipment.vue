<template>
    <div class="add-equipment">
      <h2>Ajouter Équipement</h2>
      <form @submit.prevent="submitEquipment">
        <label for="name">Nom</label>
        <input v-model="name" id="name" required />
        
        <label for="type">Type</label>
        <input v-model="type" id="type" required />
        
        <label for="status">Statut</label>
        <input v-model="status" id="status" required />
        
        <button type="submit">Ajouter Équipement</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    data() {
      return {
        name: '',
        type: '',
        status: '',
      };
    },
    methods: {
      async submitEquipment() {
        try {
          await api.post('/equipments', {
            name: this.name,
            type: this.type,
            status: this.status,
          });
          this.$router.push('/equipments');
        } catch (error) {
          console.error('Erreur lors de l\'ajout de l\'équipement', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .add-equipment {
    padding: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  
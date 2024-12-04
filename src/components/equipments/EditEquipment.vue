<template>
    <div class="edit-equipment">
      <h2>Modifier Équipement</h2>
      <form @submit.prevent="submitEdit">
        <label for="name">Nom</label>
        <input v-model="name" id="name" required />
        
        <label for="type">Type</label>
        <input v-model="type" id="type" required />
        
        <label for="status">Statut</label>
        <input v-model="status" id="status" required />
        
        <button type="submit">Modifier Équipement</button>
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
    async mounted() {
      const response = await api.get(`/equipments/${this.$route.params.id}`);
      this.name = response.data.name;
      this.type = response.data.type;
      this.status = response.data.status;
    },
    methods: {
      async submitEdit() {
        try {
          await api.put(`/equipments/${this.$route.params.id}`, {
            name: this.name,
            type: this.type,
            status: this.status,
          });
          this.$router.push('/equipments');
        } catch (error) {
          console.error('Erreur lors de la modification de l\'équipement', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .edit-equipment {
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
  
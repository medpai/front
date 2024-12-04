<template>
    <div class="equipment-list">
      <h2>Gestion des Équipements</h2>
      <button @click="addEquipment">Ajouter un Équipement</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Type</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="equipment in equipments" :key="equipment.id">
            <td>{{ equipment.id }}</td>
            <td>{{ equipment.name }}</td>
            <td>{{ equipment.type }}</td>
            <td>{{ equipment.status }}</td>
            <td>
              <button @click="editEquipment(equipment.id)">Modifier</button>
              <button @click="deleteEquipment(equipment.id)">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
 // import api from '../services/api';
  
  export default {
    data() {
      return {
        equipments: [],
      };
    },
    async mounted() {
      const response = await api.get('/equipments');
      this.equipments = response.data;
    },
    methods: {
      addEquipment() {
        this.$router.push('/add-equipment');
      },
      editEquipment(id) {
        this.$router.push(`/edit-equipment/${id}`);
      },
      async deleteEquipment(id) {
        try {
          await api.delete(`/equipments/${id}`);
          this.equipments = this.equipments.filter(equipment => equipment.id !== id);
        } catch (error) {
          console.error('Erreur lors de la suppression', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .equipment-list {
    padding: 20px;
  }
  button {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
  }
  </style>
  
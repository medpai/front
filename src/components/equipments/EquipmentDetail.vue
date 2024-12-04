<template>
    <div class="equipment-detail">
      <h2>{{ equipment.name }} (ID: {{ equipment.id }})</h2>
      <p>Type: {{ equipment.type }}</p>
      <p>Statut: {{ equipment.status }}</p>
      <p>Numéro de série: {{ equipment.serialNumber }}</p>
      <h3>Historique de Maintenance</h3>
      <ul>
        <li v-for="maintenance in equipment.maintenanceHistory" :key="maintenance.id">
          {{ maintenance.date }} - {{ maintenance.description }}
        </li>
      </ul>
      <button @click="editEquipment">Modifier</button>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    data() {
      return {
        equipment: {},
      };
    },
    async mounted() {
      const response = await api.get(`/equipments/${this.$route.params.id}`);
      this.equipment = response.data;
    },
    methods: {
      editEquipment() {
        this.$router.push(`/edit-equipment/${this.equipment.id}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .equipment-detail {
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
  </style>
  
<template>
  <div class="maintenance-page">
    <h1>Gestion de la Maintenance</h1>

    <!-- Formulaire pour ajouter un élément de maintenance -->
    <form @submit.prevent="addMaintenance">
      <h2>Ajouter un Élement de Maintenance</h2>
      
      <!-- Champs du formulaire -->
      <input v-model="newMaintenance.date_maintenance" type="date" required />
      <textarea v-model="newMaintenance.description_probleme" placeholder="Description du problème" required></textarea>
      <textarea v-model="newMaintenance.action_effectuee" placeholder="Actions effectuées" required></textarea>
      <input v-model="newMaintenance.statut" placeholder="Statut" required />
      <input v-model="newMaintenance.cout" type="number" step="0.01" placeholder="Coût" required />
      <input v-model="newMaintenance.temps_intervention" type="number" placeholder="Temps d'intervention (en minutes)" required />
      <input v-model="newMaintenance.pieces_changees" placeholder="Pièces changées" />
      
      <button type="submit">Ajouter</button>
    </form>

    <!-- Liste des éléments de maintenance disponibles -->
    <h2>Éléments de Maintenance Disponibles</h2>
    <ul>
      <li v-for="maintenance in maintenances" :key="maintenance.id">
        {{ maintenance.date_maintenance }} - {{ maintenance.description_probleme }} - {{ maintenance.statut }}
        <button @click="deleteMaintenance(maintenance.id)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newMaintenance: {
        date_maintenance: '',
        description_probleme: '',
        action_effectuee: '',
        statut: '',
        cout: '',
        temps_intervention: '',
        pieces_changees: ''
      },
      maintenances: []
    };
  },
  methods: {
    // Récupérer tous les éléments de maintenance
    async fetchMaintenances() {
      try {
        const response = await axios.get('/api/maintenances'); // Remplacez par votre endpoint
        this.maintenances = response.data;  // Assurez-vous que la réponse est un tableau directement
      } catch (error) {
        console.error('Erreur lors de la récupération des éléments de maintenance:', error);
      }
    },

    // Ajouter un nouvel élément de maintenance
    async addMaintenance() {
      try {
        await axios.post('/api/maintenances', this.newMaintenance); // Remplacez par votre endpoint
        this.fetchMaintenances();  // Recharger la liste des maintenances
        // Réinitialiser le formulaire après l'ajout
        this.newMaintenance = {
          date_maintenance: '',
          description_probleme: '',
          action_effectuee: '',
          statut: '',
          cout: '',
          temps_intervention: '',
          pieces_changees: ''
        };
      } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'élément de maintenance:', error);
      }
    },

    // Supprimer un élément de maintenance
    async deleteMaintenance(maintenanceId) {
      try {
        await axios.delete(`/api/maintenances/${maintenanceId}`); // Remplacez par votre endpoint
        this.fetchMaintenances();  // Recharger la liste des maintenances
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'élément de maintenance:', error);
      }
    }
  },
  
  // Charger les éléments de maintenance lors du montage du composant
  mounted() {
    this.fetchMaintenances();
  }
};
</script>

<style scoped>
.maintenance-page {
  padding: 20px;
}
.maintenance-page form {
  margin-bottom: 20px;
}
.maintenance-page input, .maintenance-page textarea {
  display: block;
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  max-width: 400px;
}
.maintenance-page button {
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}
.maintenance-page button:hover {
  background-color: #218838;
}
.maintenance-page ul {
  list-style-type: none;
  padding: 0;
}
.maintenance-page li {
  margin: 10px 0;
}
.maintenance-page li button {
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
}
.maintenance-page li button:hover {
  background-color: #c82333;
}
</style>

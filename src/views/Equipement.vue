<template>
  <div class="equipment-page">
    <h1>Liste des Équipements</h1>
    
    <!-- Formulaire pour ajouter un équipement -->
    <form @submit.prevent="addEquipment">
      <h2>Ajouter un Équipement</h2>
      
      <!-- Champs du formulaire -->
      <input v-model="newEquipment.nom" placeholder="Nom de l'équipement" required />
      <input v-model="newEquipment.type" placeholder="Type" required />
      <input v-model="newEquipment.marque" placeholder="Marque" required />
      <input v-model="newEquipment.modele" placeholder="Modèle" required />
      <input v-model="newEquipment.numero_serie" placeholder="Numéro de série" required />
      <input v-model="newEquipment.date_acquisition" type="date" placeholder="Date d'acquisition" required />
      <input v-model="newEquipment.prix_achat" type="number" step="0.01" placeholder="Prix d'achat" required />
      <input v-model="newEquipment.etat" placeholder="État" required />
      <input v-model="newEquipment.localisation" placeholder="Localisation" required />
      <input v-model="newEquipment.statut" placeholder="Statut" required />
      
      <button type="submit">Ajouter</button>
    </form>

    <!-- Liste des équipements disponibles -->
    <h2>Équipements Disponibles</h2>
    <ul>
      <li v-for="equipment in equipments" :key="equipment.id">
        {{ equipment.nom }} - {{ equipment.type }} - {{ equipment.marque }} - {{ equipment.statut }}
        <button @click="deleteEquipment(equipment.id)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newEquipment: {
        nom: '',
        type: '',
        marque: '',
        modele: '',
        numero_serie: '',
        date_acquisition: '',
        prix_achat: '',
        etat: '',
        localisation: '',
        statut: ''
      },
      equipments: []
    };
  },
  methods: {
    // Récupérer tous les équipements
    async fetchEquipments() {
      try {
        const response = await axios.get('/api/equipments');
        this.equipments = response.data;  // Assurez-vous que la réponse est un tableau directement
      } catch (error) {
        console.error('Erreur lors de la récupération des équipements:', error);
      }
    },

    // Ajouter un nouvel équipement
    async addEquipment() {
      try {
        await axios.post('/api/equipments', this.newEquipment);
        this.fetchEquipments();  // Recharger la liste des équipements
        // Réinitialiser le formulaire après l'ajout
        this.newEquipment = {
          nom: '',
          type: '',
          marque: '',
          modele: '',
          numero_serie: '',
          date_acquisition: '',
          prix_achat: '',
          etat: '',
          localisation: '',
          statut: ''
        };
      } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'équipement:', error);
      }
    },

    // Supprimer un équipement
    async deleteEquipment(equipmentId) {
      try {
        await axios.delete(`/api/equipments/${equipmentId}`);
        this.fetchEquipments();  // Recharger la liste des équipements
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'équipement:', error);
      }
    }
  },
  
  // Charger les équipements lors du montage du composant
  mounted() {
    this.fetchEquipments();
  }
};
</script>

<style scoped>
.equipment-page {
  padding: 20px;
}
.equipment-page form {
  margin-bottom: 20px;
}
.equipment-page input {
  display: block;
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  max-width: 400px;
}
.equipment-page button {
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}
.equipment-page button:hover {
  background-color: #218838;
}
.equipment-page ul {
  list-style-type: none;
  padding: 0;
}
.equipment-page li {
  margin: 10px 0;
}
.equipment-page li button {
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
}
.equipment-page li button:hover {
  background-color: #c82333;
}
</style>

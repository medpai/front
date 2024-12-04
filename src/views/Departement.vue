<template>
    <div class="department-page">
      <h1>Gestion des Départements</h1>
  
      <!-- Formulaire pour ajouter un département -->
      <form @submit.prevent="addDepartment">
        <h2>Ajouter un Département</h2>
        
        <!-- Champs du formulaire -->
        <input v-model="newDepartment.nom" placeholder="Nom du département" required />
        <textarea v-model="newDepartment.description" placeholder="Description" ></textarea>
        <input v-model="newDepartment.responsable" placeholder="Responsable" required />
        <input v-model="newDepartment.localisation" placeholder="Localisation" required />
        <input v-model="newDepartment.budget_annuel" type="number" step="0.01" placeholder="Budget annuel" required />
        <input v-model="newDepartment.date_creation" type="date" required />
  
        <button type="submit">Ajouter</button>
      </form>
  
      <!-- Liste des départements disponibles -->
      <h2>Départements Disponibles</h2>
      <ul>
        <li v-for="department in departments" :key="department.id">
          {{ department.nom }} - {{ department.responsable }} - {{ department.localisation }} - Budget : {{ department.budget_annuel }}
          <button @click="deleteDepartment(department.id)">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newDepartment: {
          nom: '',
          description: '',
          responsable: '',
          localisation: '',
          budget_annuel: '',
          date_creation: ''
        },
        departments: []
      };
    },
    methods: {
      // Récupérer tous les départements
      async fetchDepartments() {
        try {
          const response = await axios.get('/api/departments'); // Remplacez par votre endpoint
          this.departments = response.data;  // Assurez-vous que la réponse est un tableau directement
        } catch (error) {
          console.error('Erreur lors de la récupération des départements:', error);
        }
      },
  
      // Ajouter un nouveau département
      async addDepartment() {
        try {
          await axios.post('/api/departments', this.newDepartment); // Remplacez par votre endpoint
          this.fetchDepartments();  // Recharger la liste des départements
          // Réinitialiser le formulaire après l'ajout
          this.newDepartment = {
            nom: '',
            description: '',
            responsable: '',
            localisation: '',
            budget_annuel: '',
            date_creation: ''
          };
        } catch (error) {
          console.error('Erreur lors de l\'ajout du département:', error);
        }
      },
  
      // Supprimer un département
      async deleteDepartment(departmentId) {
        try {
          await axios.delete(`/api/departments/${departmentId}`); // Remplacez par votre endpoint
          this.fetchDepartments();  // Recharger la liste des départements
        } catch (error) {
          console.error('Erreur lors de la suppression du département:', error);
        }
      }
    },
  
    // Charger les départements lors du montage du composant
    mounted() {
      this.fetchDepartments();
    }
  };
  </script>
  
  <style scoped>
  .department-page {
    padding: 20px;
  }
  .department-page form {
    margin-bottom: 20px;
  }
  .department-page input, .department-page textarea {
    display: block;
    margin: 10px 0;
    padding: 8px;
    width: 100%;
    max-width: 400px;
  }
  .department-page button {
    padding: 10px 15px;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
  }
  .department-page button:hover {
    background-color: #218838;
  }
  .department-page ul {
    list-style-type: none;
    padding: 0;
  }
  .department-page li {
    margin: 10px 0;
  }
  .department-page li button {
    background-color: #dc3545;
    color: white;
    border: none;
    cursor: pointer;
  }
  .department-page li button:hover {
    background-color: #c82333;
  }
  </style>
  
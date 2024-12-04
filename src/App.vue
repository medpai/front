<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const equipmentList = ref([]) // Liste des équipements
const newEquipment = ref('') // Nom de l'équipement à ajouter
const errorMessage = ref('') // Message d'erreur

// Fonction pour ajouter un équipement
const addEquipment = () => {
  // Validation : l'équipement ne doit pas être vide et ne doit pas exister déjà dans la liste
  if (!newEquipment.value) {
    errorMessage.value = "Le nom de l'équipement ne peut pas être vide."
  } else if (equipmentList.value.includes(newEquipment.value)) {
    errorMessage.value = "Cet équipement est déjà dans la liste."
  } else {
    equipmentList.value.push(newEquipment.value)
    newEquipment.value = '' // Réinitialiser le champ
    errorMessage.value = '' // Réinitialiser le message d'erreur
  }
}

// Fonction pour supprimer un équipement
const removeEquipment = (index) => {
  equipmentList.value.splice(index, 1)
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h1>Suivi d'équipement informatique</h1>

      <nav>
        <RouterLink to="/" class="nav-link">Accueil</RouterLink>
        <RouterLink to="/about" class="nav-link">À propos</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <section>
      <h2>Liste des équipements</h2>
      <ul>
        <li v-for="(equipment, index) in equipmentList" :key="index">
          {{ equipment }}
          <button @click="removeEquipment(index)" class="btn-remove">Supprimer</button>
        </li>
      </ul>
    </section>

    <section>
      <h2>Ajouter un nouvel équipement</h2>
      <input v-model="newEquipment" placeholder="Nom de l'équipement" />
      <button @click="addEquipment">Ajouter</button>

      <!-- Affichage des messages d'erreur -->
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </section>
  </main>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: #f8f9fa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 10px;
}

.wrapper {
  text-align: center;
}

nav {
  width: 100%;
  font-size: 14px;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #007bff;
  font-weight: bold;
}

nav a.router-link-exact-active:hover {
  background-color: #e9ecef;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-left: 1px solid var(--color-border);
  transition: background-color 0.3s;
}

nav a:first-of-type {
  border: 0;
}

main {
  padding: 2rem;
}

h2 {
  margin-top: 2rem;
}

input {
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 1rem;
}

.btn-remove {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
}

.btn-remove:hover {
  background-color: #c0392b;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<template>
  <div class="home">
    <header class="header">
      <nav class="navbar">
        <router-link to="/login" class="nav-link">Se Connecter</router-link>
      </nav>
    </header>

    <div class="hero">
      <h1>Suivi du Matériel Informatique</h1>
      <p class="hero-text">Gérez, suivez et optimisez vos équipements informatiques facilement.</p>
    </div>

    <div class="sections">
      <div class="section">
        <h2>Optimisez vos Équipements</h2>
        <p>Visualisez l'état de vos équipements, gérez leur maintenance et suivez leur historique.</p>
        <router-link to="/equipments" class="section-link">Voir les équipements</router-link>
      </div>
      <div class="section">
        <h2>Gestion des Utilisateurs</h2>
        <p>Ajoutez, modifiez et gérez les utilisateurs de votre système.</p>
        <router-link to="/user-management" class="section-link">Gérer les utilisateurs</router-link>
      </div>
      <div class="section">
        <h2>Maintenance Simplifiée</h2>
        <p>Suivez et gérez toutes les actions de maintenance de vos équipements.</p>
        <router-link to="/maintenance" class="section-link">Voir la maintenance</router-link>
      </div>
      <div class="section">
        <h2>Départements</h2>
        <p>Gérez et suivez les différents départements de votre organisation.</p>
        <router-link to="/departments" class="section-link">Voir les départements</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.home {
  font-family: 'Arial', sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #34495e;
  padding: 15px 0;
  color: white;
}

.navbar {
  display: flex;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #1abc9c;
}

.hero {
  text-align: center;
  flex: 1;
  background: linear-gradient(135deg, #6dd5ed, #2193b0);
  color: white;
  padding: 60px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.hero-text {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.sections {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin: 40px 20px;
}

.section {
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.section:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.section h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.section p {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 20px;
}

.section-link {
  padding: 12px 20px;
  background-color: #3498db;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.3s, transform 0.3s;
}

.section-link:hover {
  background-color: #2980b9;
  transform: translateY(-4px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  h1 {
    font-size: 2.8rem;
  }

  .hero-text {
    font-size: 1.3rem;
  }

  .sections {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 20px;
  }

  h1 {
    font-size: 2.2rem;
  }

  .hero-text {
    font-size: 1.2rem;
  }

  .section h2 {
    font-size: 1.5rem;
  }

  .section-link {
    font-size: 1rem;
  }

  .sections {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8rem;
  }

  .hero-text {
    font-size: 1rem;
  }

  .section h2 {
    font-size: 1.4rem;
  }

  .section-link {
    font-size: 0.95rem;
  }
}
</style>

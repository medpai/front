<template>
  <div class="not-found">
    <h2>Page non trouvée</h2>
    <p>Désolé, la page que vous cherchez n'existe pas.</p>
    <router-link to="/">Retour à la page d'accueil</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 20px;
}
</style>
  
// Importation des fichiers CSS
import './assets/main.css' // Fichier CSS principal de l'application
import 'bootstrap/dist/css/bootstrap.css' // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.js' // Bootstrap JS avec bundle (inclut Popper.js)

// Importation des modules Vue
import { createApp } from 'vue'
import { createPinia } from 'pinia' // Pinia pour la gestion d'état
import router from './router' // Vue Router pour la gestion de la navigation

// Importation du composant principal de l'application
import App from '../src/views/Home.vue'

// Création de l'instance Vue
const app = createApp(App)

// Ajout des plugins à l'application Vue
app.use(createPinia()) // Utilisation de Pinia
app.use(router) // Utilisation de Vue Router

// Montage de l'application Vue sur l'élément avec id 'app'
app.mount('#app')

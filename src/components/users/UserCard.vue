<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const nom = ref('');
        const prenom = ref('');
        const email = ref('');
        const telephone = ref('');
        const date_embauche = ref('');
        const mot_de_passe = ref('');
        const message = ref('');

        const addUser = async () => {
            try {
                const response = await axios.post('/api/users', {
                    nom: nom.value,
                    prenom: prenom.value,
                    email: email.value,
                    telephone: telephone.value,
                    date_embauche: date_embauche.value,
                    mot_de_passe: mot_de_passe.value
                });
                message.value = response.data.message;
            } catch (error) {
                message.value = error.response.data.message || 'Erreur lors de l\'ajout de l\'utilisateur';
            }
        };

        return {
            nom,
            prenom,
            email,
            telephone,
            date_embauche,
            mot_de_passe,
            message,
            addUser
        };
    }
};
</script>

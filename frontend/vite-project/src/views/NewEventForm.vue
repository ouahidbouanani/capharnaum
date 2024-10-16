<template>
    <navbar></navbar>

    <div class="container center-form">
        <h2 class="text-center">Créer un nouvel événement</h2>

        <form @submit.prevent="createEvent">
            <div class="mb-3">
                <label for="label" class="form-label">Nom de l'événement</label>
                <input type="text" class="form-control" id="label" v-model="label" required>
            </div>

            <div class="mb-3">
                <label for="category" class="form-label">Catégorie</label>
                <input type="text" class="form-control" id="category" v-model="category" required>
            </div>

            <div class="mb-3">
                <label for="date" class="form-label">Date</label>
                <input type="date" class="form-control" id="date" v-model="date" required>
            </div>

            <div class="mb-3">
                <label for="time" class="form-label">Horaire</label>
                <input type="text" class="form-control" id="time" v-model="time" required>
            </div>

            <div class="mb-3">
                <label for="place" class="form-label">Lieu</label>
                <input type="text" class="form-control" id="place" v-model="place" required>
            </div>

            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary btn-create-event">Créer</button>
            </div>
        </form>

        <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>

        <!-- Snackbar pour les notifications -->
        <v-snackbar v-model="snackbarVisible" :timeout="3000" location="bottom right">
            Événement créé avec succès !
        </v-snackbar>
    </div>
</template>

<script>

import navbar from "../components/navbar.vue";
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'NewEventForm',
    components: {
        navbar
    },
    setup() {
        const label = ref('');
        const category = ref('');
        const date = ref('');
        const time = ref('');
        const place = ref('');
        const errorMessage = ref('');
        const snackbarVisible = ref(false);
        const router = useRouter();

        const createEvent = () => {
            axios.post('http://localhost:5001/api/events/add', {
                label: label.value,
                category: category.value,
                owner: JSON.parse(localStorage.getItem('user')).prenom + " " + JSON.parse(localStorage.getItem('user')).nom,
                date: date.value,
                time: time.value,
                place: place.value,
                image: 'https://sgu.ovh/matt/capharnaum/event.jpg'
            })
            .then((response) => {
                if (response.status === 200 || response.status === 201) {
                    snackbarVisible.value = true; // Afficher la snackbar
                    setTimeout(() => {
                        router.push('/home'); // Rediriger après 3 secondes
                    }, 3000);
                } else {
                    errorMessage.value = "Erreur lors de la création de l'événement.";
                }
            })
            .catch((error) => {
                errorMessage.value = error.response?.data || "Erreur lors de la création de l'événement.";
            });
        };

        return {
            label,
            category,
            date,
            time,
            place,
            errorMessage,
            snackbarVisible,
            createEvent
        };
    }
}
</script>

<style scoped>
    .center-form {
        max-width: 80%;
        margin: 0 auto;
        padding-top: 25px;
    }

    h2 {
        margin-bottom: 25px;
    }

    .btn-create-event {
        margin-top: 25px;
    }
</style>
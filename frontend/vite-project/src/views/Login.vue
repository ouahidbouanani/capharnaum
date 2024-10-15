<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'Login',
    setup() {
        const email = ref('');
        const password = ref('');
        const errorMessage = ref('');
        const router = useRouter();

        const login = () => {
            axios.post('http://localhost:5001/api/user/login', {
                email: email.value,
                password: password.value
            })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('username', JSON.parse(response.data.user).prenom);
                    router.push('/home');
                } else if (response.status === 201) {
                    errorMessage.value = response.data;
                }
            })
            .catch((error) => {
                errorMessage.value = error.response?.data || "Erreur lors de la connexion.";
            });
        };

        return {
            email,
            password,
            errorMessage,
            login
        };
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Capharnaum</a>
        </div>
    </nav>

    <div class="container center-form">
        <h2 class="text-center">Connexion</h2>

        <!-- Affichage du message d'erreur -->
        

        <form @submit.prevent="login">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Connexion</button>
            </div>
        </form>
        <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>

        <router-link to="/register">
            <p class="text-center mt-3">
                Vous n'avez pas de compte ? Inscrivez-vous ici
            </p>
        </router-link>
    </div>
</template>

<style scoped>
    .center-form {
        max-width: 400px;
        margin: 0 auto;
        padding-top: 100px;
    }
</style>
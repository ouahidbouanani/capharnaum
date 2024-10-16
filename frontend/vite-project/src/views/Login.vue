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
                    localStorage.setItem('user', response.data.user);
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
    <div id="logo">
        <img src="../../public/favicon.png" alt="Capharnaüm Logo">
    </div>

    <div class="container center-form">
        <h2 class="text-center">Connexion</h2>

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
        max-width: 80%;
        margin: 0 auto;
    }

    h2 {
        margin-bottom: 25px;
    }

    .btn-primary {
        margin-top: 100px;
    }

    div#logo {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
    }

    img {
        width: 50px;
        margin: auto;
    }
</style>
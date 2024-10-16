<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'Register',
    setup() {
        const prenom = ref('');
        const nom = ref('');
        const email = ref('');
        const password = ref('');
        const errorMessage = ref('');
        const router = useRouter();

        const register = async () => {
            try {
                const response = await axios.post('http://localhost:5001/api/user/register', {
                    prenom: prenom.value,
                    nom: nom.value,
                    email: email.value,
                    password: password.value
                });
                
                if (response.status === 201) {
                    router.push('/login');
                }
            } catch (error) {
                errorMessage.value = error.response?.data?.error || "Une erreur s'est produite.";
            }
        };

        return {
            prenom,
            nom,
            email,
            password,
            errorMessage,
            register
        };
    }
}
</script>

<template>
    <div id="logo">
        <img src="../../public/favicon.png" alt="Capharnaüm Logo">
    </div>

    <div class="container center-form">
        <h2 class="text-center">Inscription</h2>

        <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>

        <form @submit.prevent="register">
            <div class="mb-3">
                <label for="prenom" class="form-label">Prénom</label>
                <input type="text" class="form-control" id="prenom" v-model="prenom" required>
            </div>
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control" id="nom" v-model="nom" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Inscription</button>
            </div>
        </form>

        <router-link to="/login" class="d-grid gap-2 back-to-login btn btn-secondary">
            Retour à la Connexion
        </router-link>
    </div>
</template>

<style scoped>
.center-form {
    max-width: 80%;
    margin: 0 auto;
}

.btn-primary {
    margin-top: 20px;
}

.back-to-login {
    margin-top: 10px;
    background-color: #60a6a0;
    border: 0;
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
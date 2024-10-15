<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Capharnaum</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <router-link @click="logout" to="/login" class="btn btn-primary">
                Logout
                </router-link>
            </li>
            </ul>
        </div>
        </div>
    </nav>

    <div class="container mt-5 text-center">
        <h1>Bienvenue {{username}}</h1>
    </div>

    <v-container class="mt-5">
        <v-row>
            <v-col v-for="(event, index) in events" :key="index" cols="12" md="6">
                <v-card hover class="mx-auto event-card" max-width="500" elevation="8">
                    <v-img class="event-image" :src="event.image" alt="Event image"></v-img>
                
                    <v-card-title>{{ event.nom }}</v-card-title>
                    <v-card-subtitle>{{ event.discipline }}</v-card-subtitle>
                
                    <v-card-text>
                        <p><strong>Horaires:</strong> {{ event.horaires }}</p>
                        <p><strong>Lieu:</strong> {{ event.lieu }}</p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn variant="tonal">S'inscrire</v-btn>
                        <v-btn variant="tonal" >Envoyer un message</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            username: '',
            events: [
                {
                    nom: 'event1_nom',
                    discipline: 'event1_discipline',
                    horaires: 'event1_horaires',
                    lieu: 'event1_lieu',
                    image: 'https://sgu.ovh/matt/capharnaum/event.png'
                },
                {
                    nom: 'event2_nom',
                    discipline: 'event2_discipline',
                    horaires: 'event2_horaires',
                    lieu: 'event2_lieu',
                    image: 'https://sgu.ovh/matt/capharnaum/event.png'
                },
                {
                    nom: 'event3_nom',
                    discipline: 'event3_discipline',
                    horaires: 'event3_horaires',
                    lieu: 'event3_lieu',
                    image: 'https://sgu.ovh/matt/capharnaum/event.png'
                },
                {
                    nom: 'event4_nom',
                    discipline: 'event4_discipline',
                    horaires: 'event4_horaires',
                    lieu: 'event4_lieu',
                    image: 'https://sgu.ovh/matt/capharnaum/event.png'
                },
                {
                    nom: 'event5_nom',
                    discipline: 'event5_discipline',
                    horaires: 'event5_horaires',
                    lieu: 'event5_lieu',
                    image: 'https://sgu.ovh/matt/capharnaum/event.png'
                },
                {
                    nom: 'event6_nom',
                    discipline: 'event6_discipline',
                    horaires: 'event6_horaires',
                    lieu: 'event6_lieu',
                    image: 'https://sgu.ovh/matt/capharnaum/event.png'
                },
                {
                    nom: 'event7_nom',
                    discipline: 'event7_discipline',
                    horaires: 'event7_horaires',
                    lieu: 'event7_lieu',
                    image: 'https://sgu.ovh/matt/capharnaum/event.png'
                },
                {
                    nom: 'event8_nom',
                    discipline: 'event8_discipline',
                    horaires: 'event8_horaires',
                    lieu: 'event8_lieu',
                    image: 'https://sgu.ovh/matt/capharnaum/event.png'
                },
                {
                    nom: 'event9_nom',
                    discipline: 'event9_discipline',
                    horaires: 'event9_horaires',
                    lieu: 'event9_lieu',
                    image: 'https://sgu.ovh/matt/capharnaum/event.png'
                },
            ]
        };
    },
    mounted() {
        this.username = localStorage.getItem('username') || 'Utilisateur';
    },
    methods: {
        logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
.center-form {
    max-width: 400px;
    margin: 0 auto;
    padding-top: 100px;
}
.back-to-login {
    margin-top: 20px;
}

.event-image {
    height: 10%;
}

.v-card-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.v-card-actions button {
    background-color: #353C86;
    color: white;
}
</style>  
<script>
    export default {
        name: 'Home',
        data() {
            return {
                username: ''
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
</template>

<style scoped>
  .center-form {
      max-width: 400px;
      margin: 0 auto;
      padding-top: 100px;
  }
  .back-to-login {
      margin-top: 20px;
  }
</style>

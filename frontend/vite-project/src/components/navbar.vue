<template>
    <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
        <div class="container-fluid">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <router-link @click="logout" to="/login">
                        <v-icon color="black">mdi-logout</v-icon>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    methods: {
        logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
#logo {
    height: 100%;
}
</style>
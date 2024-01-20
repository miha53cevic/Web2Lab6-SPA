<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { useAuthStore } from './stores/authStore';
const router = useRouter();

const getClass = (route) => {
    return (route === router.currentRoute.value.name) ? 'currentRoute' : '';
};

const state = useAuthStore();

</script>

<template>
    <header class="shadow">
        <div id="logo">
            <img src="/favicon.svg" width="64px" />
            <h2>Poll Manager</h2>
        </div>
        <nav>
            <RouterLink :class="getClass('home')" to="/">Home</RouterLink>
            <RouterLink :class="getClass('create-poll')" to="/create-poll">Create poll</RouterLink>
            <RouterLink :class="getClass('list')" to="/list">List polls</RouterLink>
        </nav>
        <div v-if="state.isAuthenticated">
            Greetings and salutations, {{ state.username }}
        </div>
        <div v-else>
            <RouterLink :class="getClass('login')" to="/login">Login</RouterLink>
        </div>
    </header>
    <RouterView />
</template>

<style scoped>
header {
    background-color: var(--primary);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;;
}

header #logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

nav {
    display: flex;
    gap: 1rem;
    flex: 1;
}

a {
    text-decoration: none;
    color: #515151;
    background-color: var(--dark-primary);
    padding: 0.5rem;
    border-radius: 0.25rem;
}

a:hover {
    background-color: var(--light-primary);
}

a.currentRoute {
    background-color: var(--secondary);
}
</style>
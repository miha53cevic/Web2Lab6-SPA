<script>
import { mapState, mapActions } from 'pinia';
import { useAuthStore } from '../stores/authStore';
export default {
    data() {
        return {
            username: "",
        };
    },
    computed: {
        ...mapState(useAuthStore, ['landingUrl'])
    },
    methods: {
        ...mapActions(useAuthStore, ['setUsername']),
        login() {
            this.setUsername(this.username);
            this.$router.push({ path: this.landingUrl });
        }
    }
};
</script>

<template>
    <main-container>
        <form @submit.prevent="login">
            <div>
                <label>Username</label>
                <input v-model.trim="username" type="text" placeholder="BeastMaster64" />
            </div>
            <br/>
            <button type="submit">Login</button>
        </form>
    </main-container>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
}

form div {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
}

form div label {
    flex: 1
}
</style>

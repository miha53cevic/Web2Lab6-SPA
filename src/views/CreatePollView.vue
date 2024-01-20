<script>
import { useAuthStore } from '@/stores/authStore';
import { mapState } from 'pinia';
import fireapp from '../lib/fireapp';
import { addDoc, collection } from 'firebase/firestore';

export default {
    data() {
        return {
            title: "",
            option1: "",
            option2: "",
            option3: "",
            error: "",
        }
    },
    computed: {
        ...mapState(useAuthStore, ['username']),
    },
    methods: {
        async createPoll() {
            this.error = "";
            const newPoll = {
                title: this.title,
                option1: this.option1,
                option2: this.option2,
                option3: this.option3,
                creator: this.username,
                votes: [],
            };

            try {
                const res = await addDoc(collection(fireapp.firestore, 'polls'), newPoll);
                this.$router.push({ path: `/poll/${res.id}` });
            } catch(err) {
                console.error(err);
                this.error = JSON.stringify(err);
            }         
        }
    }
};
</script>

<template>
    <main-container>
        <form @submit.prevent="createPoll">
            <div>
                <label>Poll Title</label>
                <input v-model="title" type="text" placeholder="Which is superior?" />
            </div>
            <div>
                <label>Poll Option 1</label>
                <input v-model="option1" type="text" placeholder="Cats" />
            </div>
            <div>
                <label>Poll Option 2</label>
                <input v-model="option2" type="text" placeholder="Dogs" />
            </div>
            <div>
                <label>Poll Option 3</label>
                <input v-model="option3" type="text" placeholder="Hamsters" />
            </div>
            <br/>
            <button type="submit">Create poll</button>
            <p>{{ error }}</p>
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

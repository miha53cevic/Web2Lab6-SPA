<script>
import { usePollStore } from '@/stores/pollStore';
import { mapState, mapActions } from 'pinia';

export default {
    props: ['id'],
    emits: ['onPollVote'],
    data() {
        return {
            poll: null,
        };
    },
    computed: {
        ...mapState(usePollStore, ['getPoll', 'getPolls']),
    },
    methods: {
        ...mapActions(usePollStore, ['fetchPolls']),
        numberOfVotes(option) {
            if (!this.poll) return 0;
            const selectedOption = `option${option}`;
            const filter = this.poll.votes.filter(vote => vote.value === selectedOption);
            return filter.length;
        },
        vote(option) {
            const vote = { value: `option${option}`, time: Date.now() };
            this.$emit('onPollVote', this.id, vote);
            // local update first
            this.poll.votes.push(vote);
        }
    },
    async mounted() {
        await this.fetchPolls();
        this.poll = this.getPoll(this.id) ?? null;
    }
}
</script>

<template>
    <div v-if="this.poll === null">
        <p>Traženi poll ne postoji!</p>
    </div>
    <div v-else>
        <div id="info">
            <h2>{{ poll.title }}</h2>
            <p>Creator: {{ poll.creator }}</p>
        </div>
        <br/>
        <form @submit.prevent="">
            <div>
                <label>{{ poll.option1 }}</label>
                <b>{{ numberOfVotes(1) }}</b>
                <button @click.prevent="vote(1)">Vote</button>
            </div>
            <div>
                <label>{{ poll.option2 }}</label>
                <b>{{ numberOfVotes(2) }}</b>
                <button @click.prevent="vote(2)">Vote</button>
            </div>
            <div>
                <label>{{ poll.option3 }}</label>
                <b>{{ numberOfVotes(3) }}</b>
                <button @click.prevent="vote(3)">Vote</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
#progress {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

form {
    display: flex;
    justify-content: space-around;
}

form div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
}
</style>
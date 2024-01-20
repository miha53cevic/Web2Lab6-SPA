<script>
import PollContainer from '@/components/pollContainer.vue';
import { usePollStore } from '@/stores/pollStore';
import { mapActions, mapState } from 'pinia';

export default {
    components: {
        'pollContainer': PollContainer,
    },
    data() {
        return {
            refreshIntervalId: -1,
        }
    },
    computed: {
        ...mapState(usePollStore, ['getPolls']),
    },
    methods: {
        ...mapActions(usePollStore, ['refreshPolls', 'fetchPolls']),
    },
    async mounted() {
        // Initial load
        await this.fetchPolls();
        // Auto refresh data every 60 seconds
        this.refreshIntervalId = setInterval(async () => {
            await this.refreshPolls();
        }, 60 * 1000);
    },
    beforeUnmount() {
        // Clear refresh interval
        clearInterval(this.refreshIntervalId);
    }
};
</script>

<template>
    <main-container>
        <poll-container v-for="poll in this.getPolls" :key="poll.id" :id="poll.id" :title="poll.title"
            :creator="poll.creator" :voteCount="poll.votes.length" />
    </main-container>
</template>

<style scoped>
main {
    gap: 1rem;
    display: flex;
    flex-direction: column;
}
</style>

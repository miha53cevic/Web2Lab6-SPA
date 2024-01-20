<script>
import PollDisplay from '@/components/pollDisplay.vue';
import { usePollStore } from '@/stores/pollStore';
import { mapActions } from 'pinia';

export default {
    components: {
        'pollDisplay': PollDisplay
    },
    methods: {
        async onPollVote(id, vote) {
            await this.pollVote(id, vote);
        },
        ...mapActions(usePollStore, ['pollVote']),
    }
}
</script>

<template>
    <main-container>
        <poll-display
            :key="$route.params.id"
            :id="$route.params.id"
            @onPollVote="onPollVote"
        />
    </main-container>
</template>
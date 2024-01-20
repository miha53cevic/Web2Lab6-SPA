<script>
import { usePollStore } from '@/stores/pollStore';
import { mapState, mapActions } from 'pinia';

export default {
    computed: {
        ...mapState(usePollStore, ['getPolls']),
    },
    methods: {
        ...mapActions(usePollStore, ['fetchPolls'])
    },
    async mounted() {
        await this.fetchPolls();
    }
};
</script>

<template>
    <main-container>
        <h1>Polling made easy</h1>
        <p>Creating and sharing polls should be an easy process for everyone</p>
        <br/>
        <h4>Brought to you by the good folks at redacted</h4>
        <br/>
        <br/>
        <div class="pollCount">
            <h3>Currently active polls:</h3>
            <p>{{ getPolls.length }}</p>
        </div>
    </main-container>
</template>

<style scoped>

.pollCount {
    text-align: center;
}

.pollCount p {
    font-size: 128px;
}
</style>

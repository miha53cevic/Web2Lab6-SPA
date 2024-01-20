<script>
export default {
    props: ['id', 'title', 'creator', 'voteCount'],
    methods: {
        openPoll() {
            this.$router.push({ path: `/poll/${this.id}` });
        }
    }
}
</script>

<template>
    <section @click.prevent="openPoll">
        <div>
            <p>Poll title: <b>{{ this.title }}</b></p>
            <p>Creator: <b>{{ this.creator }}</b></p>
        </div>
        <p>Vote Count: <b>{{ this.voteCount }}</b></p>
    </section>
</template>

<style scoped>
section {
    display: flex;
    gap: 1rem;
    background-color: var(--primary);
    padding: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    align-items: center;
}

section:hover {
    background-color: var(--light-primary);
}

section div {
    flex: 1;
}
</style>
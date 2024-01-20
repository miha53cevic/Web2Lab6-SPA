<template>
    <main-container>
        <h1>404 Not Found</h1>
        <p>There is no "{{ $route.params.catchAll }}" found</p>
    </main-container>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
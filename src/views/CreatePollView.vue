<script>
export default {
    data() {
        return {
            data: "Create Poll View",
        }
    }
};
</script>

<template>
    <main-container>
        <form>
            <div>
                <label>Poll Title</label>
                <input type="text" placeholder="Which is superior?" />
            </div>
            <div>
                <label>Poll Option 1</label>
                <input type="text" placeholder="Cats" />
            </div>
            <div>
                <label>Poll Option 2</label>
                <input type="text" placeholder="Dogs" />
            </div>
            <div>
                <label>Poll Option 3</label>
                <input type="text" placeholder="Hamsters" />
            </div>
            <br/>
            <button type="submit">Create poll</button>
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

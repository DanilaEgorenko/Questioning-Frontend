<script>
export default {
    computed: {
        myQuestions() {
            return this.$store.getters.getQuestionByProfile('Dan')
        }
    },
    mounted() {
        this.$store.dispatch('loadQuestions')
    }
}
</script>
<template>
    <h1>Мои анкеты</h1>
    <div class="container">
        <div class="list-group" v-for="(q, i) in myQuestions" :key="i">
            <RouterLink :to="'/question/' + q.id">
                <div class="flex-title">
                    <p>{{ q.title }}</p>
                    <p>{{ q.author }}</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<style scoped>
.container {
    margin: 20px 5%;
}

.list-group {
    display: flex;
    flex-direction: column;
}

.list-group a {
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    margin: 10px 0;
    color: #212529;
    text-decoration: none;
    transition: .3s;
}

.list-group a:hover {
    background-color: rgba(0, 0, 0, .1);
}

.flex-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-title>*:last-child {
    opacity: 0.7;
}
</style>
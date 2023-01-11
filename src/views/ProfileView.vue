<script>
export default {
    computed: {
        myQuestions() {
            return this.$store.getters.getQuestionByProfile('Dan')
        }
    },
    mounted() {
        this.$store.dispatch('loadQuestions')
        if (!this.$store.getters.isLogin) this.$router.push('/')
    },
    methods: {
        logout() {
            this.$store.dispatch('login')
            this.$router.push('/')
        }
    }
}
</script>
<template>
    <div class="d-flex flex-title-page">
        <h1>Мои анкеты</h1>
        <!-- <button @click="logout">Выйти</button> -->
        <v-btn :rounded="5" color="primary" @click="logout">
            Выйти
        </v-btn>
    </div>
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

.flex-title-page {
    align-items: center;
    justify-content: space-between;
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
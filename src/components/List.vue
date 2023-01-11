<script>
export default {
    data() {
        return {
            questions: [],
            loading: true
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        load() {
            this.$store.dispatch('loadQuestions')
                .then(() => {
                    this.questions = this.$store.getters.getQuestions()
                    this.$emit('load', this.questions)
                })
                .finally(() => this.loading = false)
        },
        update() {
            this.load()
            alert('Обновилось')
        },
        setData(data) {
            this.questions = data
        }
    }
}
</script>
<template>
    <div class="container">
        <div v-if="questions.length" class="list-group" v-for="(q, i) in questions" :key="i">
            <RouterLink :to="'/question/' + q.id">
                <div class="flex-title">
                    <img :src="q.preview" alt="preview">
                    <p>{{ q.title }}</p>
                    <p>{{ q.author }}</p>
                </div>
            </RouterLink>
        </div>
        <div v-else>По вашему запросу ничего не найдено :(</div>
    </div>
</template>
<style scoped>
.container {
    margin: 20px 5%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 20px;
    text-align: center;
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
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 500px;
    justify-content: space-around;
}

.flex-title>img {
    width: 280px;
    height: 400px;
    object-fit: cover;
    border-radius: 0.25rem;
}

.flex-title>*:last-child {
    opacity: 0.7;
}
</style>
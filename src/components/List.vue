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
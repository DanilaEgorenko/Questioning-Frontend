<script>
import Search from '../components/Search.vue'
import SortSelect from '../components/SortSelect.vue'
import Filter from '../components/Filter.vue'
export default {
    components: {
        Search,
        SortSelect,
        Filter
    },
    data() {
        return {
            questions: [],
            searchInput: '',
            loading: true
        }
    },
    mounted() {
        this.$store.dispatch('loadQuestions')
            .then(() => {
                this.questions = this.$store.getters.getQuestions()
            })
            .finally(() => this.loading = false)
    },
    methods: {
        handleSearch(e) {
            this.searchInput = e.target.value.trim()
            this.questions = this.$store.getters.getQuestions(e.target.value.trim().toLowerCase())
        },
        handleSort(e) {
            this.questions = this.$store.getters.getSorted(e.target.value, this.questions, this.searchInput)
        },
        handleFilter(e) {
            this.questions = this.$store.getters.getFiltered(e.target.checked, this.questions, this.searchInput)
        },
        handleUpdate() {
            this.$store.dispatch('loadQuestions')
                .then(() => {
                    this.questions = this.$store.getters.getQuestions()
                    alert('Обновилось')
                })
                .finally(() => this.loading = false)
        }
    }
}
</script>
<template>
    <h1>Анкеты</h1>
    <div class="d-flex settings">
        <Search @input="handleSearch" v-model="searchInput" />
        <SortSelect @change="handleSort" />
        <Filter @change="handleFilter" />
        <button @click="handleUpdate">Обновить</button>
    </div>
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

.settings {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px 5%;
}
</style>
<script>
import Search from '../components/Search.vue'
import SortSelect from '../components/SortSelect.vue'
import Filter from '../components/Filter.vue'
import List from '../components/List.vue'
export default {
    components: {
        Search,
        SortSelect,
        Filter,
        List
    },
    data() {
        return {
            questions: [],
            searchInput: '',
        }
    },
    methods: {
        handleSearch(e) {
            this.searchInput = e.target.value.trim()
            this.$refs.list.setData(this.$store.getters.getQuestions(e.target.value.trim().toLowerCase()))
        },
        handleSort(e) {
            this.$refs.list.setData(this.$store.getters.getSorted(e.target.value, this.questions, this.searchInput))
        },
        handleFilter(e) {
            this.$refs.list.setData(this.$store.getters.getFiltered(e.target.checked, this.questions, this.searchInput))
        },
        onLoad(data) {
            this.questions = data
        },
        updateQuestions() {
            this.$refs.list.update()
        }
    }
}
</script>
<template>
    <h1>Анкеты</h1>
    <p>Перейдите на любую понравившуюся вам анкету, пройдите тестирование и оставьте свой отзыв!</p>
    <div class="d-flex settings">
        <Search @input="handleSearch" v-model="searchInput" />
        <SortSelect @change="handleSort" />
        <Filter @change="handleFilter" />
        <!-- <button @click="updateQuestions">Обновить</button> -->
        <v-btn :rounded="5" color="primary" @click="updateQuestions">
            Обновить
        </v-btn>
    </div>
    <List @load="onLoad" ref="list" />
</template>
<style scoped>
.settings {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px calc(5% - 20px);
}

@media (min-width: 1024px) {
    .settings>* {
        margin: 0 20px;
    }
}

@media (max-width: 1024px) {
    .settings>* {
        margin: 10px;
    }
}

@media print {

    h1,
    .settings {
        display: none;
    }
}
</style>
<script>
import Block from '../components/Block.vue'
export default {
    components: {
        Block
    },
    mounted() {
        this.$store.dispatch('loadQuestions')
    },
    computed: {
        q() {
            this.$store.dispatch('loadQuestions')
            return this.$store.getters.getQuestionById(this.$route.params.id)
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
};
</script>

<template>
    <div class="d-flex ma-3 ml-0">
        <button class="back" @click="back">Назад</button>
        <h1 class="mx-3">{{ q.title }}</h1>
    </div>
    <div class="flex-box-preview-info d-flex">
        <img :src="q.preview" />
        <div class="flex-info d-flex">
            <div class="created_at">{{ 'Созд.: ' + q.created_at }}</div>
            <div v-if="q.edited_at" class="edited_at">{{ 'Ред.: ' + q.edited_at }}</div>
            <p>Автор: {{ q.author }}</p>
        </div>
    </div>
    <div class="questions">
        <form action="#">
            <div class="row" v-for="(qu, i) in q.questions" :key="i">
                <Block :qu="qu" />
            </div>
            <v-btn color="success">
                Отправить
            </v-btn>
        </form>
    </div>
</template>
<style scoped>
button {
    background-color: #0d6efd;
    color: white;
    padding: 5px;
    border-radius: 5px;
    height: 45px;
}

img {
    width: 80%;
}

.flex-info {
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.flex-box-preview-info {
    justify-content: space-around;
}

.v-selection-control .v-label {
    margin: 5px;
}

.v-selection-control__input input {
    opacity: 1 !important;
}
</style>
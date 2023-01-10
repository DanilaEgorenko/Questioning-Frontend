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
    <div class="flex-box">
        <div class="d-flex flex-title">
            <button class="back" @click="back">Назад</button>
            <h1 class="title">{{ q.title }}</h1>
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
                <div class="block" v-for="(qu, i) in q.questions" :key="i">
                    <Block :qu="qu" />
                </div>
                <button>Отправить</button>
            </form>
        </div>
    </div>
</template>
<style scoped>
img {
    width: 80%;
}

.title {
    margin-left: 10px;
}

.block {
    margin: 15px 0;
}

.flex-info {
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.flex-box-preview-info {
    justify-content: space-between;
}

.flex-box {
    margin: 0 auto;
    width: 80%;
}

.flex-title {
    align-items: center;
}
</style>
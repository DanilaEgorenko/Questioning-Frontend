<script>
import Block from '../components/Block.vue'
import Review from '../components/Review.vue'
export default {
    components: {
        Block,
        Review
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
            <!-- <button class="back" @click="back">Назад</button> -->
            <v-btn class="back" :rounded="5" color="primary" @click="back">
                Назад
            </v-btn>
            <h1 class="title">{{ q.title }}</h1>
        </div>
        <div class="flex-box-preview-info d-flex">
            <img :src="q.preview" />
            <div class="flex-info d-flex">
                <p>👁️ {{ q.views }}</p>
                <div class="created_at">👨‍💻{{ q.created_at }}</div>
                <div v-if="q.edited_at" class="edited_at">✍️{{ q.edited_at }}</div>
                <p>👤 {{ q.author }}</p>
            </div>
        </div>
        <div class="questions">
            <form action="#">
                <section class="block" v-for="(qu, i) in q.questions" :key="i">
                    <Block :qu="qu" />
                </section>
                <v-btn :rounded="5" color="primary">
                    Отправить
                </v-btn>
            </form>
        </div>
        <Review :id="this.$route.params.id" />
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

@media (max-width: 1024px) {
    .flex-title {
        flex-wrap: wrap;
    }

    .flex-title>* {
        margin: 10px;
    }

    .flex-box-preview-info {
        flex-direction: column;
    }

    .flex-box-preview-info>* {
        margin: 10px 0;
    }

    img {
        width: 100%;
    }
}
</style>
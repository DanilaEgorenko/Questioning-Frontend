<script>
export default {
    computed: {
        q() {
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
    <button class="back" @click="back">Назад</button>
    <div class="created_at">{{ q.created_at }}</div>
    <div v-if="edited_at" class="edited_at">{{ q.edited_at }}</div>
    <img :src="q.preview" />
    <h1>{{ q.title }}</h1>
    <p>Автор: {{ q.author }}</p>
    <div class="questions">
        <form action="#">
            <div class="row" v-for="(qu, i) in q.questions" :key="i">
                <div class="block">
                    <hr>
                    <h3>{{ qu.title }}</h3>
                    <div class="answers">

                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
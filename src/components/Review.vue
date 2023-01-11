<script>
export default {
    props: ['id'],
    data() {
        return {
            isSent: this.$store.getters.isReviewed(this.$route.params.id),
            isLoading: false
        }
    },
    methods: {
        async sendReview() {
            const value = this.$refs.reviewText.value
            this.isLoading = true
            const response = await fetch("https://eoxzymhrjbxkkre.m.pipedream.net", {
                method: "POST",
                body: value
            })
            if (!response.ok) {
                console.error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`)
                return
            }
            this.isLoading = false
            this.isSent = true
            this.$store.dispatch("addReview", {
                id: this.id,
                reviewText: this.$refs.reviewText.value
            });
            return await response.text()
        }
    }
};
</script>
<template>
    <div class="review">
        <div v-if="isLoading" class="status">Загрузка...</div>
        <div v-if="isSent" class="status">Спасибо 🥰</div>
        <form v-else action="">
            <!-- <textarea name="review" id="review" cols="30" rows="3" placeholder="Понравился опрос? Напишите отзыв"
                ref="reviewText"></textarea> -->
            <v-textarea label="Оставьте отзыв" auto-grow variant="outlined" rows="3" row-height="25" shaped
                ref="reviewText"></v-textarea>
            <!-- <button @click.prevent="sendReview">Отправить отзыв</button> -->
            <v-btn :rounded="5" color="primary" @click="sendReview">
                Отправить отзыв
            </v-btn>
        </form>
    </div>
</template>
<style scoped>
.review {
    position: fixed;
    bottom: 20px;
    right: 20px;
    max-width: 300px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

textarea {
    font-size: 1rem;
    padding: 5px;
}

.status {
    font-size: 2rem;
}

@media (max-width: 1023px) {
    .review {
        display: none;
    }
}
</style>
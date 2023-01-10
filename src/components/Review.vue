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
            const response = await fetch("https://eoxzymhrjbxkkre.m.pipedream.net", {
                method: "POST",
                body: this.$refs.reviewText.value
            })
            this.isLoading = true
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
        <form v-if="!isLoading && !isSent" action="">
            <textarea name="review" id="review" cols="30" rows="3" placeholder="Понравился опрос? Напишите отзыв"
                ref="reviewText"></textarea>
            <button @click.prevent="sendReview">Отправить отзыв</button>
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
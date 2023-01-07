<template>
    <h1>Анкеты</h1>
    <div class="container">
        <div class="list-group">
            <a href="#">Question</a>
        </div>
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
    color: #212529;
    text-decoration: none;
}
</style>
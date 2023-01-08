<script>
export default {
    props: ['qu']
}
</script>
<template>
    <div class="block">
        <hr>
        <h3>{{ qu.title }}</h3>
        <v-container class="px-0 answers" fluid>
            <v-radio-group v-model="radioGroup">
                <v-radio v-for="(a, i) in qu.vars" :key="i" :label="a"></v-radio>
            </v-radio-group>
        </v-container>
    </div>
</template>
<style scoped>
hr {
    margin: 10px 0;
}
</style>
<script>
export default {
    props: ['qu']
}
</script>
<template>
    <div class="block">
        <h3>{{ qu.title }}</h3>
        <v-container class="px-0 answers" fluid>
            <v-radio-group>
                <v-radio v-for="(a, i) in qu.vars" :key="i" :label="a" :value="a"></v-radio>
            </v-radio-group>
        </v-container>
    </div>
</template>
<style scoped>
.block:first-child {
    margin-top: 30px;
}

.v-selection-control__input input {
    opacity: 1 !important;
}

.v-selection-control .v-label {
    margin-left: 10px;
}
</style>
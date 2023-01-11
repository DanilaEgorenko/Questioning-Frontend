<script>
export default {
    props: ['qu']
}
</script>
<template>
    <h3>{{ qu.title }}</h3>
    <!-- <fieldset :id="qu.title"> -->
    <!-- <div class="answer" v-for="(a, i) in qu.vars" :key="i">
            <label><input type="radio" :name="qu.title" :value="qu.title + ' ' + a" />{{ a }}</label>
        </div> -->
    <v-radio-group v-for="(a, i) in qu.vars" :key="i" v-model="radio">
        <v-radio :label="a" :value="qu.title + ' ' + a"></v-radio>
    </v-radio-group>
    <!-- </fieldset> -->
</template>
<style scoped>
fieldset {
    border: 0;
}

.answer {
    margin: 5px 0;
}

input[type="radio"] {
    margin-right: 5px;
}

.v-selection-control__input input {
    opacity: 1 !important;
}

.v-selection-control .v-label {
    margin-left: 10px;
}
</style>
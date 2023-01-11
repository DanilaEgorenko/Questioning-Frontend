<script>
export default {
    data() {
        return {
            selected: 'default',
            items: [
                {
                    name: 'По-умолчанию',
                    value: 'default'
                },
                {
                    name: 'А → Я',
                    value: 'A'
                },
                {
                    name: 'Я → А',
                    value: 'Z'
                }
            ]
        }
    }
}
</script>
<template>
    <select>
        <option value='default'>По-умолчанию</option>
        <option value='A'>А → Я</option>
        <option value='Z'>Я → А</option>
    </select>
    <!-- <v-select @click="handleSort" v-model="selected" :items="items" item-title="name" item-value="value"></v-select> -->
</template>
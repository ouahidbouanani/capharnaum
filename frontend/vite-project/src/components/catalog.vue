<template>
    <div>
        <SearchInput v-model="searchVal" />
    </div>
</template>

<script>
import { ref } from 'vue';
import SearchInput from 'vue-search-input';
import 'vue-search-input/dist/styles.css';

export default {
    name: 'catalog',
    components: {
        SearchInput
    },
    setup() {
        let searchVal = ref('');
        return { searchVal };
    }
};
</script>

<style scoped>

.search-input-wrapper {
    width: 90%;
    margin: auto;
    margin-top: 20px;
}

</style>
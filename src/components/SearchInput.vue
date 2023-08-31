<script lang="ts">
import { defineComponent } from 'vue';
import SearchInput from 'vue-search-input';
import { useMainStore } from '../store/main';
import '../styles/components/SearchInput.css';

export default defineComponent({
  components: {
    SearchInput,
  },
  setup() {
    const mainStore = useMainStore();

    const updateSearchInput = (event: any) => {
      mainStore.setSearchInput(event.target.value);
    };

    const handleSubmit = () => {
      mainStore.handleSubmit();
    };

    return {
      searchInput: mainStore.searchInput,
      updateSearchInput,
      handleSubmit,
    };
  },
});
</script>

<template>
  <div class="search-container">
    <SearchInput
      v-model="searchInput"
      @input="updateSearchInput"
      placeholder="Busque por uma cidade (ex: Pato Branco, PR)"
      style="width: 100%"
    />
    <button type="submit" class="button-submit" @click="handleSubmit">Procurar</button>
  </div>
</template>

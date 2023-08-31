<script lang="ts">
import { useMainStore } from '@/store/main';
import { computed, onMounted } from 'vue';
import 'vue-search-input/dist/styles.css';
import InfoDay from '../components/InfoDay.vue';
import InfoItem from "../components/InfoItem.vue";
import SearchInput from '../components/SearchInput.vue';
import '../styles/pages/HomeView.css';

export default {
  name: 'HomeView',
  components: {
    InfoDay,
    InfoItem,
    SearchInput
  },
  setup() {
    const mainStore = useMainStore();

    onMounted(async () => {
      if (!navigator.geolocation) return;

      const handleUserLocation = async (position: GeolocationPosition) => {
        const lat: number = position.coords.latitude;
        const long: number = position.coords.longitude;
        
        mainStore.handleUserLocation(lat, long);
      };

      navigator.geolocation.getCurrentPosition(handleUserLocation);
    });
    
    const day = computed(() => mainStore.forecastData.day);
    const weather = computed(() => mainStore.forecastData.weather);
    const temperature = computed(() => mainStore.forecastData.temperature);
    const imageLink = computed(() => new URL(`../assets/Icons/${mainStore.forecastData.imageHref}`, import.meta.url).href);
    const humidity = computed(() => mainStore.forecastData.humidity);
    const pressure = computed(() => mainStore.forecastData.pressure);
    const windSpeed = computed(() => mainStore.forecastData.windSpeed);
    const cityName = computed(() => mainStore.cityName);
    const loading = computed(() => mainStore.loading);
    
    return {
      day,
      weather,
      imageLink,
      temperature,
      humidity,
      pressure,
      windSpeed,
      cityName,
      loading,
    };
  }
};
</script>

<template>
  <main>
    <SearchInput />
    <div class="container">
      <div class="weather-highlight">
        <h2>Clima atual em <b>{{ cityName }}</b>:</h2>
        <div class="skeleton" :style="{ visibility: loading ? 'visible' : 'hidden' }">
          <div class="highlight-info" :style="{ visibility: loading ? 'hidden' : 'visible' }">
            <InfoItem
              :temperature="temperature"
              :weather="weather"
              :imageHref="imageLink"
            />
           </div>
        </div>
      </div>
      <div class="week-forecast" :style="{ visibility: loading ? 'hidden' : 'visible' }">
        <h2>Detalhes :</h2>
        <div class="day-forecast">
          <InfoDay
            :humidity="humidity"
            :pressure="pressure"
            :windSpeed="windSpeed"
          />
        </div>
      </div>
    </div>
  </main>
</template>
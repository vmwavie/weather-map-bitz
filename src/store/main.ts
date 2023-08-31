import { fetchCityName, fetchDay, fetchDayByCoordinates } from '@/services/api';
import { fetchImageIcon } from '@/utils/images/ImageMap';
import { defineStore } from 'pinia';

export const useMainStore = defineStore("main", {
  state: () => ({
		loading: false,
    searchInput: '',
		cityName: 'Localização atual',
		forecastData: {
			day: '',
			weather: '',
			temperature: 0,
			humidity: 0,
			pressure: 0,
      windSpeed: '',
			imageHref: '',
		}
  }),
  actions: {
    setSearchInput(event: string) {
			this.searchInput = event;
    },
		async handleSubmit() {
			this.loading = true;
			this.cityName = '';
			if (this.searchInput.length <= 0) return;
			const inputValue = this.searchInput.split(',');
			const city = inputValue[0].trim();
			const state = inputValue[1].trim();
			
			const data = await fetchDay(city, state);
			const cityName = await fetchCityName(data.lat, data.lon);
			
			const imgHref = await fetchImageIcon(data.current.weather[0].id);
			if(!imgHref) return this.forecastData.imageHref = '';
			
			this.forecastData.weather = data.current.weather[0].description;
			this.forecastData.pressure = data.current.pressure;
			this.forecastData.humidity = data.current.humidity;
			this.forecastData.windSpeed = (data.current.wind_speed * 3.36).toFixed(2); 
			this.forecastData.temperature = data.current.temp;
			this.forecastData.imageHref = imgHref;
			this.cityName = cityName[0].name;
			this.loading = false;
		},
		async handleUserLocation(lat: number, long: number) {
			this.loading = true;
			const data = await fetchDayByCoordinates(lat, long);
			const cityName = await fetchCityName(data.lat, data.lon);
			
			const imgHref = await fetchImageIcon(data.current.weather[0].id);
			if(!imgHref) return this.forecastData.imageHref = '';
			
			this.forecastData.weather = data.current.weather[0].description;
			this.forecastData.pressure = data.current.pressure;
			this.forecastData.humidity = data.current.humidity;
			this.forecastData.windSpeed = (data.current.wind_speed * 3.36).toFixed(2); 
			this.forecastData.temperature = data.current.temp;
			this.forecastData.imageHref = imgHref;
			this.cityName = cityName[0].name;
			this.loading = false;
		},
  },
});

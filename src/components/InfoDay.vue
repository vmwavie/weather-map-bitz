<script setup lang="ts">
  import "../styles/components/InfoDay.css";
	
	defineProps<{
		humidity: number;
		pressure: number;
		windSpeed: string;
	}>()
</script>

<template>
	<div class="day">
		<p>Umidade</p>
		<img src="/src/assets/Icons/humidity.png" alt="humidity">
		<p>{{humidity}} %</p>
	</div>
	<div class="day">
		<p>Pressão</p>
		<img src="/src/assets/Icons/pressure.png" alt="pressure">
		<p>{{pressure}} hPa</p>
	</div>
	<div class="day">
		<p>Vento</p>
		<img src="/src/assets/Icons/wind.png" alt="wind">
		<p>{{windSpeed}} km/hr</p>
	</div>
</template>

<script setup lang="ts">
 import '../styles/components/InfoItem.css';
 
	defineProps<{
		temperature: number;
		imageHref: string;
		weather: string;
	}>()
</script>

<template>
	<div class="info-item">
			<img :src="imageHref">
			<p><span class="temperature">{{temperature}}°</span> - <span class="weather">{{weather}}</span></p>
	</div>
</template>
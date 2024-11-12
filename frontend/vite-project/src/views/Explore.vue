<template>
    <div class="map-wrap">
        <div class="map" ref="mapContainer"></div>
    </div>
</template>

<script>
import { Map, MapStyle, config } from '@maptiler/sdk';
import { ref, onMounted, onUnmounted } from 'vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';

export default {
    name: 'Explore',
    setup() {
        const mapContainer = ref(null);
        const map = ref(null);

        onMounted(() => {
            config.apiKey = '3vtmF9l2ovq2muHn9ogR';

            const getUserLocation = () => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const { latitude, longitude } = position.coords;
                            map.value = new Map({
                                container: mapContainer.value,
                                style: MapStyle.BASIC,
                                center: [longitude, latitude],
                                zoom: 14,
                            });
                        },
                        (error) => {
                            console.error("Erreur de géolocalisation : ", error);
                            map.value = new Map({
                                container: mapContainer.value,
                                style: MapStyle.BASIC,
                                center: [4.8357, 45.7640], // Coordonnées par défaut (Lyon)
                                zoom: 14
                            });
                        }
                    );
                } else {
                    console.error("La géolocalisation n'est pas supportée par ce navigateur.");
                    map.value = new Map({
                        container: mapContainer.value,
                        style: MapStyle.BASIC,
                        center: [4.8357, 45.7640], // Coordonnées par défaut (Lyon)
                        zoom: 14
                    });
                }
            };

            // getUserLocation();

            map.value = new Map({
                container: mapContainer.value,
                style: MapStyle.STREETS,
                geolocate: true
            });
        });

        onUnmounted(() => {
            map.value?.remove();
        });

        return {
            mapContainer
        };
    }
};
</script>

<style scoped>

.map-wrap {
  position: relative;
  width: 100%;
  height: 100vh;
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}

</style>
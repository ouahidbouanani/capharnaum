<template>
    <div class="map-wrap">
        <div class="map" ref="mapContainer"></div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { config, Map, MapStyle, Marker } from '@maptiler/sdk';
import { geocoding } from '@maptiler/client';
import '@maptiler/sdk/dist/maptiler-sdk.css';

export default {
    name: 'map',
    props: {
        activities: {
            type: Array,
            required: true
        }
    },
    setup(props) {
        const mapContainer = ref(null);
        const map = ref(null);

        const addMarker = (coord) => {
            const marker = new Marker({ color: "#FF0000" })
                .setLngLat([coord[0], coord[1]])
                .on("click", () => {
                    console.log("MARKER CLICKED!");
                    map.value.setCenter([coord[0], coord[1]]);
                })
                .addTo(map.value);

            console.log("MARKER JUST CREATED:");
            console.log(marker.getElement());
        };

        watch(() => props.activities, (activities) => {
            if (activities && activities.length > 0) {
                activities.forEach((activity) => {
                    console.log(activity);
                    (async () => {
                        try {
                            const result = await geocoding.forward(activity.location);
                            console.log(result);
                            const coord = result.features[0]?.center;
                            console.log(coord);
                            if (coord && coord.length === 2) {
                                addMarker(coord);
                            }
                        } catch (error) {
                            console.error('Erreur de géocodage :', error);
                        }
                    })();
                });
            }
        });

        onMounted(async () => {
            config.apiKey = '3vtmF9l2ovq2muHn9ogR';

            map.value = new Map({
                container: mapContainer.value,
                style: MapStyle.STREETS,
                geolocate: true,
                navigationControl: false
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
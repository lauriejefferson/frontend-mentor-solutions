<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import locationIcon from './images/icon-location.svg'

const apiKey = import.meta.env.VITE_API_KEY;
const showModal = ref(false);
const ipAddress = ref(null);
const ip = ref(null)
const location = ref(null);
const timezone = ref(null);
const isp = ref(null) 
const lat = ref(null)
const lon = ref(null)
const center = [38.8104, -76.9982]
const mapDiv = ref(null)
const iconLocation = L.icon({
    iconUrl: locationIcon,
    iconSize: [64, 64],
    iconAnchor: [22,22]
})
function setupLeafletMap() {
    mapDiv.value = L.map("mapContainer").setView(center, 13);
    L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            maxZoom: 19

        }
    ).addTo(mapDiv.value);
}


onMounted(() => {
    setupLeafletMap();
});

async function getGeolocation(){
    showModal.value = true;
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress.value}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    ip.value = data.ip
    location.value = `${data.location.city}, ${data.location.region}`
    timezone.value = data.location.timezone
    isp.value = data.isp
    lat.value = data.location.lat
    lon.value = data.location.lng

    L.marker([lat.value, lon.value], {icon: iconLocation}).addTo(mapDiv.value)
    mapDiv.value.setView([lat.value, lon.value])
    mapDiv.value.setZoom(20)
}


</script>

<template>
    <div class="container">
        <header>
            <h1 class="main-title">IP Address Tracker</h1>
            <form @submit.prevent="getGeolocation()">
                <input type="text" v-model="ipAddress">
                <button><img src="./images/icon-arrow.svg" alt="arrow"></button>
            </form>
        </header>    
         <div class="modal" v-show="showModal">
                <div class="ip-address">
                    <h3 class="title">Ip Address</h3>
                    <p class="text">{{ ip }}</p>
                </div>
                <div class="location">
                    <h3 class="title">Location</h3>
                    <p class="text">{{ location }}</p>
                </div>
                <div class="timezone">
                    <h3 class="title">Timezone</h3>
                    <p class="text">{{ timezone }}</p>
                </div>
                <div class="isp">
                    <h3 class="title">isp</h3>
                    <p class="text">{{ isp }}</p>
                </div>
              </div>
              <div id="mapContainer"></div>
        </div>
</template>

<style scoped>

.container {
    height: 100vh;
    width: 100%;
}

header {
    background-image: url('./images/pattern-bg-mobile.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    background-position: center;
    position: relative;
    height: 25vh;
}
form {
    display: flex;
    justify-content: center;
    position: relative;
    margin: 1em 0;
}

input {
    width: 80%;
    padding: 0.8em 1.8em;
    border: none;
    border-radius: 10px;
}

button {
    cursor: pointer;
    position: absolute;
    inset: 0 24px 0 auto;
    padding: 1em 1.25em;
    background-color: var(--black);
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

#mapContainer {
    display: block;
    width: 100%;
    height: 100vh;
}


.modal {
    background-color: var(--anti-flash-white);
    margin: 2em;
    width: 18.5em;
    height: 350px;
    padding: 1.5em 5em;
    position: absolute;
    inset: 8em 0.5em ;
    z-index: 1000;
    border: none;
    border-radius: 20px;
}
</style>

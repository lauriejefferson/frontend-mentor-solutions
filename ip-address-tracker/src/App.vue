<script setup>
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

const center = [38.8937, -77.0971]
const mapDiv = ref(null)
const iconLocation = L.icon({
    iconUrl: locationIcon,
    iconSize: [50, 64],
    iconAnchor: [22, 22]
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

async function getUserIp() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json()
    ipAddress.value = data.ip;
    await getGeolocation();

}

onMounted(() => {
    setupLeafletMap();
    getUserIp();
});


async function getGeolocation() {
    showModal.value = true;
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress.value}`
    const response = await fetch(url)
    const data = await response.json()
    ip.value = data.ip
    location.value = `${data.location.city}, ${data.location.region}`
    timezone.value = data.location.timezone
    isp.value = data.isp
    lat.value = data.location.lat
    lon.value = data.location.lng

    L.marker([lat.value, lon.value], { icon: iconLocation }).addTo(mapDiv.value)
    mapDiv.value.setView([lat.value, lon.value])
    mapDiv.value.setZoom(20)
}


</script>

<template>
    <div class="container">
        <header>
            <h1 class="main-title">IP Address Tracker</h1>
            <form @submit.prevent="getGeolocation()">
                <div class="form-control">
                    <input type="text" v-model="ipAddress">
                    <button><img src="./images/icon-arrow.svg" alt="arrow"></button>
                </div>
            </form>
        </header>
        <div class="modal" v-show="showModal">
            <div class="modal__section ip-address">
                <h3 class="title">Ip Address</h3>
                <p class="text">{{ ip }}</p>
            </div>
            <div class="modal__section location">
                <h3 class="title">Location</h3>
                <p class="text">{{ location }}</p>
            </div>
            <div class="modal__section timezone">
                <h3 class="title">Timezone</h3>
                <p class="text">UTC {{ timezone }}</p>
            </div>
            <div class="modal__section isp">
                <h3 class="title">isp</h3>
                <p class="text">{{ isp }}</p>
            </div>
        </div>
        <div id="mapContainer"></div>
    </div>
</template>

<style scoped>
header {
    background-image: url('./images/pattern-bg-mobile.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    background-position: center;
    position: relative;
    height: 35vh;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 1em 0;
}

.form-control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 1em;
}

input[type="text"] {
    width: 100%;
    padding: 0.7em 1.8em;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    outline: none;
}

input:focus {
    cursor: pointer;
}

button {
    cursor: pointer;
    padding: 1.12em 1.25em;
    background-color: var(--black);
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

button:hover {
    background-color: var(--very-dark-gray);
}

#mapContainer {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100vh;
    max-width: 1440px;
}

.modal {
    position: absolute;
    inset: 10em 5em;
    background-color: var(--anti-flash-white);
    max-width: 1100px;
    width: 100%;
    margin: 4em 5em;
    padding: 1em 2.5em 2.5em;
    z-index: 1000;
    border: none;
    border-radius: 20px;
}

.modal .modal__section {
    margin-bottom: 0.5em;
}

@media (min-width: 375px) {
    .modal {
        display: grid;
        grid-template-columns: 1fr;
        inset: 10em 1em;
        width: 70%;
        height: 450px;
    }
}

@media (min-width: 1000px) {
    .modal {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 100px;
        height: 160px;
        inset: 10em 5em;
    }

    .modal .modal__section {
        border-right: 1px solid var(--dark-gray);
        padding-inline: 0.5em;
    }

    .modal div:last-child {
        border-right: none;
    }

    .title {
        text-align: left;
    }

    .text {
        text-align: left;
    }
}
</style>

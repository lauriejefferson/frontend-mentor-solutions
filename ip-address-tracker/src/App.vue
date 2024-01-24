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


async function getGeolocation(){
    showModal.value = true;
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress.value}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(ipAddress.value)
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
                <div class="form-control">
                <input type="text" v-model="ipAddress">
                <button><img src="./images/icon-arrow.svg" alt="arrow"></button>
                </div>
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
                    <p class="text">UTC {{ timezone }}</p>
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
    width: 80%;
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
    display: block;
    width: 100%;
    height: 100vh;
}
.modal {
    align-items: center;
    background-color: var(--anti-flash-white);
    margin: 2em 0;
    width: 80%;
    height: 40vh;
    padding: 1.8em 2.5em;
    position: absolute;
    inset: 9em 4em ;
    z-index: 1000;
    border: none;
    border-radius: 20px;
}

.modal div {
    margin-bottom: 0.5em;
}

@media (min-width: 1000px) {
    .modal {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr 1fr;
        gap: 1em;
        height: 25vh;
        width: 90%;
        padding: 2em;
        inset: 10em 5em;
    }

    .modal div{
        display: grid;
        grid-template-rows: subgrid;
        align-items: baseline;
        grid-row: span 2;
        border-right: 1px solid var(--dark-gray);
        padding-right: 1em;
    }

    .modal div:last-child {
        border-right: none;
    }

    .title {
        text-align: left;
    }
    .text {
        font-size: 1.3rem;
        font-weight: var(--fw-500);
        text-align: left;
    }
}
</style>

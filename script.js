const locationInput = document.getElementById('location-input');
const button = document.getElementById('button');

const locationDisplay = document.getElementById('location');
const time = document.getElementById('time');
const temp = document.getElementById('temp');

async function getData (cityName) {
    const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=7f3687654e76413daf6185040241006&q=${cityName}&aqi=no`
    );
    return await promise.json();
}

button.addEventListener('click', async () => {
  const val = locationInput.value;
  const response = await getData(val);
  
  locationDisplay.innerText = `${response.location.name} ${response.location.region} ${response.location.country}`;
  time.innerText = `${response.location.localtime}`;
  temp.innerText = `${response.current.temp_c}C || ${response.current.temp_f}F`;

})



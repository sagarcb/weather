

const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const city = document.getElementById('city-name').value;
    getWeatherInformation(city);
});



function getWeatherInformation(city) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=8b3e2aea0842c9572dcb1279d0ce3cc8')
        .then(res => res.json())
        .then(data => {
            showResult(data);
            console.log(data);
        })
        .catch(error => console.log(error));
}

function showResult(data) {
    const cityName = document.getElementById('city');
    const icon = document.getElementById('icon');
    const weatherDesc = document.getElementById('weatherDesc');
    const temp = document.getElementById('temperature');

    if (data.name !== undefined){
    cityName.innerText = data.name;
    icon.setAttribute('src','https://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png')
    weatherDesc.innerText = data.weather[0].main;
    temp.innerText = (parseInt(data.main.temp) - 273.15).toFixed(2) + '°C';
    }else{
        cityName.innerText = data.name;
        icon.setAttribute('src','');
        weatherDesc.innerText = '';
        temp.innerText = '';
    }
}


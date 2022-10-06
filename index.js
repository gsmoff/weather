let article = document.querySelector('.articles');

fetch('http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then((res) => res.json())
    .then((data) => {
        article.innerHTML = /*html*/
            `<div class="article">
            <h2>Вас приветствует ${data.name}</h2>
                <p class="">Температура за бортом ${data.main.temp}</p>
                <p class="">Атмосферное давление  ${data.main.pressure} мм рт. ст.</p>
                <p class="">${data.weather.description}</p>
                <p class="">Влажность ${data.main.humidity}%</p>
                <p class="">Скорость ветра ${data.wind.speed} км/ч</p>
                <p class="">Направление ветра ${data.wind.deg}°</p>
                <img class ="" src="https://openweathermap.org/img/w/${data.weather.icon}.png"/>
            </div>`;
        ;
    })

    // < img class ="" src = "https://openweathermap.org/img/w/10d.png" /> а так работает
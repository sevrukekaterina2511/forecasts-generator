const forecastButton = document.querySelector('.forecast-btn');
const container = document.querySelector(".forecasts");
const currentForecast = document.querySelector('.current-forecast');
const forecastItem = document.querySelector('#forecast-item');
forecastButton.addEventListener('click', function() {

    function generateRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const number = generateRandomInt(1, 4);
    let prediction = 'Всё будет хорошо!';
    switch (number) {
        case 1:
            prediction = 'Сегодня тебя ждёт приятный сюрприз!';
            break;
        case 2:
            prediction = 'Совсем скоро ты начнёшь путешестовать!';
            break;
    };

    currentForecast.querySelector('h1').textContent = prediction;

    const percentage = Math.floor(Math.random() * 100) + "%";
    currentForecast.querySelector('p').textContent = percentage;
    const firstForecast = makeForecastByTemplate(prediction, percentage);
    container.append(firstForecast);

});

function makeForecastByTemplate(header, percentage) {
    const forecast = forecastItem.content.cloneNode(true);
    forecast.querySelector('h3').textContent = header;
    forecast.querySelector('p').textContent = percentage;

    return forecast;
};


/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
// начальные значения
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

// обработчик нажатия на кнопку Start
document.getElementById('start').addEventListener('click', function() {
    timer = setInterval(function() {
        // увеличиваем счетчики
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        // форматируем вывод
        let displaySeconds = (seconds < 10 ? '0' : '') + seconds;
        let displayMinutes = (minutes < 10 ? '0' : '') + minutes;
        let displayHours = (hours < 10 ? '0' : '') + hours;
        // выводим результат
        document.getElementById('timer').innerHTML = displayHours + ':' + displayMinutes + ':' + displaySeconds;
    }, 1000);
});

// обработчик нажатия на кнопку Stop
document.getElementById('stop').addEventListener('click', function() {
    clearInterval(timer);
});

// обработчик нажатия на кнопку Reset
document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = '00:00:00';
});
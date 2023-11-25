// При проверке работоспособности подключить скрипт в index.html
const button = document.querySelector('.button');

button.addEventListener('click', (e) =>{
    e.preventDefault();
    alert(`
    Размеры монитора.
    Ширина ${window.screen.width}
    Высота ${window.screen.height}`);
    alert(`
    Размеры экрана с учетом полосы прокрутки.
    Ширина экрана: ${window.innerWidth}
    Высота экрана: ${window.innerHeight}`);
    alert(`
    Размеры экрана без учета полосы прокрутки.
    Ширина экрана: ${document.documentElement.clientWidth}
    Высота экрана: ${document.documentElement.clientHeight}`);
});

// Проверяем, поддерживает ли браузер Fullscreen API
if (document.documentElement.requestFullscreen) {
    // Элемент, который мы хотим показать в полноэкранном режиме
    var elem = document.documentElement;

    // Запрашиваем полноэкранный режим
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // для Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // для Chrome, Safari и Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // для Internet Explorer
        elem.msRequestFullscreen();
    }
}

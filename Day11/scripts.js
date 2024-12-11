function turnOnOff(event) {
    event.target.classList.toggle('cls-1');
    event.target.classList.toggle('cls-3');
}

document.querySelectorAll('.cls-3').forEach(function (lightBulb) {
    lightBulb.addEventListener('click', turnOnOff);
});

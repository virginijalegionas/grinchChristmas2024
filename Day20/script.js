let count = 0;
onGnomeMouseDown = function (event) {
    let shiftX = event.clientX - event.target.getBoundingClientRect().left;
    let shiftY = event.clientY - event.target.getBoundingClientRect().top;

    event.target.style.position = 'absolute';
    event.target.style.zIndex = 1000;
    document.body.append(event.target);
    moveAt(event.pageX, event.pageY);

    // moves the gnome
    function moveAt(pageX, pageY) {
        event.target.style.left = pageX - shiftX + 'px';
        event.target.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    // wait until mouse is moved and move gnome
    document.addEventListener('mousemove', onMouseMove);

    // waits untill mouse is released and align gnome into the row
    event.target.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        event.target.clientHeight
        event.target.style.top = 505 - event.target.clientHeight + 'px';
        event.target.style.left = 50 + (115 * count) + 'px';
        count += 1
        event.target.onmouseup = null;
    };
};
// need to set false. if not set after releasing mouse it gnome still be moving
ondragstart = function () {
    return false;
};
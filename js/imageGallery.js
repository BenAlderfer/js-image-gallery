var images;
var index = 0;

//save image array and show first image
function setup(array) {
    images = array;
    setImage();
}

//go back to previous picture and show
function prev() {
    index--;

    //if past 0, go to end
    if (index < 0) {
        index = images.length - 1;
    }

    setImage();
}

//advance to next picture and show
function next() {
    index++;

    //if past end, go to 0
    if (index >= images.length) {
        index = 0;
    }

    setImage();
}

//show image at current index
function setImage() {
    document.getElementById('image').src = images[index];
}

//detect keypress and change picture
document.onkeydown = function (e) {
    e = e || window.event;
    switch(e.keyCode) {
        case 37:    //left
            prev(); break;

        case 39:    //right
            next(); break;

        case 65:    //a
            prev(); break;

        case 68:   //d
            next(); break;
    }
};
var btnContainerWidth;
var btnWidth;
var btnWidthGroup;
var btnHeight;
var imageHeight;
var marginSide;
var marginSideGroup;
var marginTop;

var btnLeft = document.getElementById('btn-left');
var btnLeft2 = document.getElementById('btn-left2');
var btnRightGroup = document.getElementById('btn-right-group');

//rearrange buttons
function rearrange() {
    //calculate side margins
    btnContainerWidth = document.getElementById('btn-right-parent').offsetWidth;
    btnWidth = btnLeft.offsetWidth + 10;    //10 for padding
    btnWidthGroup = btnRightGroup.offsetWidth;
    marginSide = (btnContainerWidth - btnWidth) / 2;
    marginSideGroup = (btnContainerWidth - btnWidth) / 2;

    //calculate top/bottom margin
    imageHeight = document.getElementById('image-parent').offsetHeight;
    btnHeight = btnLeft.offsetHeight;
    marginTop = (imageHeight - btnHeight) / 2;

    //apply margins
    btnLeft.style.marginLeft = marginSide.toString() + "px";
    btnLeft.style.marginRight = marginSide.toString() + "px";

    //only do top/bottom margin on desktop, adjust which back button shows
    if (window.innerWidth >= 600) {
        btnLeft.style.display = "inline-block";
        btnLeft2.style.display = "none";

        btnLeft.style.marginTop = marginTop.toString() + "px";
        btnLeft.style.marginBottom = marginTop.toString() + "px";
        btnRightGroup.style.marginTop = marginTop.toString() + "px";
        btnRightGroup.style.marginBottom = marginTop.toString() + "px";
    } else {
        btnLeft.style.display = "none";
        btnLeft2.style.display = "inline-block";

        //need to add left button margin
        marginSideGroup = (btnContainerWidth - (btnWidth * 3)) / 2;
    }

    btnRightGroup.style.marginLeft = marginSideGroup.toString() + "px";
    btnRightGroup.style.marginRight = marginSideGroup.toString() + "px";
}

window.onload = function() {
    rearrange();
};

window.onresize = function(event) {
    rearrange();
};
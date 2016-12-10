# JS Image Gallery
Simple JS only image gallery with key navigation.

It has built in navigation using the left and right arrow keys and 'a' and 'd'.

To get started:

1) Copy 'js/imageGallery.js' to your project

2) Include the script in the page 

<script src="js/imageGallery.js"></script>

3) Make the <img> somewhere and set its id to "image"

4) Create an internal script to feed the array of image locations to imageGallery.js 

<script>
    setup(["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"]);
</script>

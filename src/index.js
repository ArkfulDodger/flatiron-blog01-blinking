// reference to image in DOM
const tuba = document.getElementById('tuba');

// reference to individual sprite paths
const idle = "./images/tuba-idle.png";
const curl1 = "./images/tuba-curl-1.png";
const curl2 = "./images/tuba-curl-2.png";
const yawn1 = "./images/tuba-yawn-1.png";
const yawn2 = "./images/tuba-yawn-2.png";
const yawn3 = "./images/tuba-yawn-3.png";

// changes DOM image to specified image path
const updateSprite = imgPath => tuba.setAttribute('src', imgPath);



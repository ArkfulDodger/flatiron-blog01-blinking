// reference to image in DOM
const tuba = document.getElementById('tuba');

// reference to individual sprite paths
const idle = "./images/tuba-idle.png";
const curl1 = "./images/tuba-curl-1.png";
const curl2 = "./images/tuba-curl-2.png";
const yawn1 = "./images/tuba-yawn-1.png";
const yawn2 = "./images/tuba-yawn-2.png";
const yawn3 = "./images/tuba-yawn-3.png";

// reference to frame sequences and animations
const curlAnim = [idle, curl1, curl2, curl1, idle];

// animation variables
const updateInterval = 0.15;

// changes DOM image to specified image path
const updateImage = (imgElement, newImgPath) => imgElement.setAttribute('src', newImgPath);

// play the given animation
function runAnimation(image, animation) {
    let frame = 0;
    stepAnimation();
    const anim = setInterval(stepAnimation, updateInterval * 1000);

    function stepAnimation() {
        updateImage(image, animation[frame]);
        ++frame >= animation.length ? clearInterval(anim): null;
    }
}

runAnimation(tuba, curlAnim);
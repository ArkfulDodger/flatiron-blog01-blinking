// reference to image in DOM
const tuba = document.getElementById('tuba');

// reference to individual sprite paths
const idle = "./images/tuba-idle.png";
const curl1 = "./images/tuba-curl-1.png";
const curl2 = "./images/tuba-curl-2.png";
const yawn1 = "./images/tuba-yawn-1.png";
const yawn2 = "./images/tuba-yawn-2.png";
const yawn3 = "./images/tuba-yawn-3.png";

// reference to animation sequences
const curlAnim = [
    {
        sprite: idle,
        duration: 120,
    },
    {
        sprite: curl1,
        duration: 120
    },
    {
        sprite: curl2,
        duration: 300
    },
    {
        sprite: curl1,
        duration: 120
    },
    {
        sprite: idle,
        duration: 120
    }
]
const yawnAnim = [
    {
        sprite: idle,
        duration: 75,
    },
    {
        sprite: yawn1,
        duration: 75
    },
    {
        sprite: yawn2,
        duration: 75
    },
    {
        sprite: yawn3,
        duration: 1500
    },
    {
        sprite: yawn2,
        duration: 75
    },
    {
        sprite: yawn1,
        duration: 75
    },
    {
        sprite: idle,
        duration: 75
    }
]

// behavior and animation variables
let behaviorIntervalMin = 1;
let behaviorIntervalMax = 4;
let yawnIntervalMin = 2;
let yawnIntervalMax = 4;
let nextYawnAt = 5;
let curlCounter = 1;

// changes DOM image to specified image path
const updateImage = (imgElement, newImgPath) => imgElement.setAttribute('src', newImgPath);

// play the given animation
function runAnimation(image, animation, endBehavior) {
    let i = 0;
    stepAnimation();

    function stepAnimation() {
        updateImage(image, animation[i].sprite);
        i < animation.length - 1 ? setTimeout(stepAnimation, animation[i++].duration): endBehavior() || null;
    }
}

function getNextAnimation() {
    if (curlCounter > nextYawnAt) {
        curlCounter = 1;
        setNextYawnInterval();
        return yawnAnim;
    } else {
        curlCounter++;
        return curlAnim;
    }
}

function getNextBehaviorInterval() {
    let interval = (Math.random() * (behaviorIntervalMax - behaviorIntervalMin)) + behaviorIntervalMin;
    console.log('time to next animation: ' + interval);
    return interval;
}

function setNextYawnInterval() {
    nextYawnAt = Math.floor(Math.random() * (yawnIntervalMax - yawnIntervalMin + 1)) + yawnIntervalMin;
    console.log('curls to next yawn: ' + nextYawnAt);
}

function runIdleBehavior() {
    let nextAnimation = getNextAnimation();
    let interval = getNextBehaviorInterval();

    setTimeout(() => runAnimation(tuba, nextAnimation, runIdleBehavior), interval * 1000);
}

// initialize first yawn interval
setNextYawnInterval();
// run behavior
runIdleBehavior();
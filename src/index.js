//#region Global Variables

// image element in DOM
const tuba = document.getElementById('tuba');

// individual sprite paths
const idle = "./images/tuba-idle.png";
const curl1 = "./images/tuba-curl-1.png";
const curl2 = "./images/tuba-curl-2.png";
const yawn1 = "./images/tuba-yawn-1.png";
const yawn2 = "./images/tuba-yawn-2.png";
const yawn3 = "./images/tuba-yawn-3.png";

// animation arrays
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

// behavior controls
let behaviorIntervalMin = 1;
let behaviorIntervalMax = 4;
let yawnIntervalMin = 2;
let yawnIntervalMax = 4;
let nextYawnAt = 5;
let curlCounter = 1;


//#endregion


//#region Helper Functions

// changes DOM image to specified image path
const updateImage = (imgElement, newImgPath) => imgElement.setAttribute('src', newImgPath);

// play the given animation
const runAnimation = (image, animation, endBehavior) => {
    let i = 0;

    const stepAnimation = () => {
        updateImage(image, animation[i].sprite);
        i < animation.length - 1 ? setTimeout(stepAnimation, animation[i++].duration): endBehavior() || null;
    }
    
    stepAnimation();
}

// get next animation to play
const getNextAnimation = () => {
    if (curlCounter > nextYawnAt) {
        curlCounter = 1;
        setNextYawnInterval();
        return yawnAnim;
    } else {
        curlCounter++;
        return curlAnim;
    }
}

// get interval until next behavior will be played/selected
const getNextBehaviorInterval = () => {
    let interval = (Math.random() * (behaviorIntervalMax - behaviorIntervalMin)) + behaviorIntervalMin;
    console.log('time to next animation: ' + interval);
    return interval * 1000;
}

// set how many tail curls will pass until the next yawn animation
const setNextYawnInterval = () => {
    nextYawnAt = Math.floor(Math.random() * (yawnIntervalMax - yawnIntervalMin + 1)) + yawnIntervalMin;
}

// call next animation after the determined interval
const runIdleBehavior = () => {
    setTimeout(() => runAnimation(tuba, getNextAnimation(), runIdleBehavior), getNextBehaviorInterval());
}

const init = () => {
    // initialize first yawn interval
    setNextYawnInterval();
    // run idle behavior
    runIdleBehavior();
}

//#endregion


//#region Code to Run on Page Load

init();

//#endregion
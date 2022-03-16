//#region Animation Variables and Functions

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
const swishFrames = [
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
const yawnFrames = [
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

// changes DOM image to specified image path
const updateImage = (imgElement, newImgPath) => imgElement.setAttribute('src', newImgPath);

// animate the given DOM image using the given frames array
const animate = (domImage, frames) => {
    console.log('animate called');
    let i = 0;

    const stepAnimation = () => {
        if (i < frames.length) {
            updateImage(domImage, frames[i].sprite);
            setTimeout(stepAnimation, frames[i].duration);
            i++;
        }
    };

    stepAnimation();
}

function animateSwish() {
    animate(tuba, swishFrames);
}

function animateYawn() {
    animate(tuba, yawnFrames);
}

//#endregion

//#region Behavioral Code Used in Blog

// code governing getting the behavior interval (in milliseconds)
const behaviorIntMin = 2
const behaviorIntMax = 4

function getRandomBehaviorInterval() {
    let intervalSeconds = (Math.random() * (behaviorIntMax - behaviorIntMin)) + behaviorIntMin;
    return intervalSeconds * 1000;
}

// code governing getting the yawn interval (in loops)
const yawnIntMin = 2
const yawnIntMax = 5

function getRandomYawnInterval() {
    return Math.floor(Math.random() * (yawnIntMax - yawnIntMin + 1)) + yawnIntMin;
}

// code to call animations
let count = 1
let yawnInterval = getRandomYawnInterval()

function runAnimation () {
    console.log(count);
    console.log(yawnInterval);

    if (count < yawnInterval) {
        count++
        animateSwish()
    } else {
        count = 1
        yawnInterval = getRandomYawnInterval()
        animateYawn()
    }

    let behaviorInterval = getRandomBehaviorInterval()
    console.log(behaviorInterval);

    setTimeout( runAnimation, behaviorInterval)
}

// invoking our final function
runAnimation();

//#endregion
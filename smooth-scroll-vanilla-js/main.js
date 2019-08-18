const smoothScroll = (target, duration) => {
    const element = document.querySelector(target);
    const elementPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    let startTime = null;


    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
}


const ease = (t, b, c, d) => {
    t /= d/2;
    if (t<1) return c /2 * t * t + b;
    t--;
    return -c /2 * (t * (t -2) - 1) + b;
}

document.querySelector(".btn1").addEventListener("click", () => smoothScroll(".section2", 1000));
document.querySelector(".btn2").addEventListener("click", () => smoothScroll(".section1", 2000));
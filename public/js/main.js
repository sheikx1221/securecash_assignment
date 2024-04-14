function changeBody(index) {
    const bodyText = document.getElementById("carousal-body");
    switch (index) {
        case 0:
            bodyText.innerText = `Exclusive event management services in the town.
            Get your event booked with us now!`;
            break;
        case 1:
            bodyText.innerText = `Our cafes are designed sophisticatedly to meet your expectations.
            Get in touch to know more!`;
            break;
        case 2:
            bodyText.innerText = `We have the greatest collections of wine bar across the country.
            Connect now to know more!`
            break;
    }
}

changeBody(0);

document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    function showSlide(index) {
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }


    function nextSlide() {
        if (currentIndex < carouselItems.length - 1) currentIndex++;
        else currentIndex = 0;
        showSlide(currentIndex);
        changeBody(currentIndex);
    }

    function prevSlide() {
        if (currentIndex > 0) currentIndex--;
        else currentIndex = carouselItems.length - 1;
        showSlide(currentIndex);
        changeBody(currentIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});


function animateCount(element) {
    const endValue = parseInt(element.getAttribute('data-count'), 10);
    let startValue = 0;
    const duration = 5000;
    const interval = 10;
    const increment = endValue / (duration / interval);
    
    const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
            startValue = endValue;
            clearInterval(timer);
        }
        element.textContent = Math.round(startValue) + "+";
    }, interval);
}

function onElementVisible(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const elements = document.getElementsByClassName('section-b-count');
            [...elements].forEach((element) => {
                animateCount(element);
            });

            observer.unobserve(entry.target);
        }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver(onElementVisible, options);
const targetElement = document.getElementById('section-b');

if (targetElement) {
    observer.observe(targetElement);
}
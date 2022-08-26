// slider

function sliderMain() {

    const prev = document.querySelector('.homepage_slider_prev');
    const next = document.querySelector('.homepage_slider_next');
    const slides = document.querySelectorAll('.homepage_slider_item');
    const dots = document.querySelectorAll('.homepage_slider_dot');
    let index = 0;

    const activeSlide = n => {
        for(slide of slides) {
            slide.classList.remove('active');
        }
        slides[n].classList.add('active');
    }

    const activeDot = n => {
        for(dot of dots) {
            dot.classList.remove('active');
        }
        dots[n].classList.add('active');
    }

    const nextSlide = () => {
        if (index == slides.length - 1) {
            index = 0;
            activeSlide(index);
            activeDot(index);
        } else {
            index++;
            activeSlide(index);
            activeDot(index);
        }
    }

    const prevSlide = () => {
        if (index == 0) {
            index = slides.length - 1;
            activeSlide(index);
            activeDot(index);
        } else {
            index--;
            activeSlide(index);
            activeDot(index);
        }
    }

    dots.forEach ((item, indexDot) => {
        item.addEventListener('click', () => {
            index = indexDot;
            activeSlide(index);
            activeDot(index);
        })
    });

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    setInterval(nextSlide, 3500);
}

sliderMain();



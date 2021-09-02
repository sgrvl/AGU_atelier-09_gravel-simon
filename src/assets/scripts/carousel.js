import { DURATION, DELAY, EASING, NEXT, PREV } from './constants';
import anime from 'animejs/lib/anime.es';
import { textAnim } from './text';

const slideControl = () => {
    const slides = document.querySelectorAll('.slide');
    let activeSlide = 0;

    const nextSlide = () => {
        let nextSlide = activeSlide + 1;

        if (activeSlide === slides.length - 1) {
            nextSlide = 0;
        }

        slides[nextSlide].setAttribute('id', 'active');
        slides[activeSlide].removeAttribute('id');

        textAnim('next');

        // place la prochaine image du bon côté (droite)
        anime.set(slides[nextSlide], {
            translateX: '100vw',
        });

        // place l'image de droite dans le viewport
        anime({
            targets: slides[nextSlide],
            translateX: 0,
            duration: DURATION,
            delay: DELAY,
            easing: EASING,
        });

        // envoi l'image à gauche
        anime({
            targets: slides[activeSlide],
            translateX: '-100vw',
            duration: DURATION,
            delay: DELAY,
            easing: EASING,
        });

        activeSlide = nextSlide;
    };

    const prevSlide = () => {
        let prevSlide = activeSlide - 1;

        if (activeSlide === 0) {
            prevSlide = slides.length - 1;
        }

        slides[prevSlide].setAttribute('id', 'active');
        slides[activeSlide].removeAttribute('id');

        textAnim();

        // place la prochaine image du bon côté (gauche)
        anime.set(slides[prevSlide], {
            translateX: '-100vw',
        });

        // place l'image de gauche dans le viewport
        anime({
            targets: slides[prevSlide],
            translateX: 0,
            duration: DURATION,
            delay: DELAY,
            easing: EASING,
        });

        // envoi l'image à droite
        anime({
            targets: slides[activeSlide],
            translateX: '100vw',
            duration: DURATION,
            delay: DELAY,
            easing: EASING,
        });

        activeSlide = prevSlide;
    };

    NEXT.addEventListener('click', () => nextSlide());
    PREV.addEventListener('click', () => prevSlide());

    // détecte si les flèches sont utilisées, simule un click sur le bouton approprié.
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') NEXT.click();
        if (e.key === 'ArrowLeft') PREV.click();
    });
};
slideControl();

/*
TODO : 
    Animation du texte []
    Button styling [x]
    favicon [x]
    header [x]
*/

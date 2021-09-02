import { DURATION, DELAY, EASING, NEXT, PREV } from './constants';
import anime from 'animejs/lib/anime.es';

export const textAnim = (direction) => {
    const title = document.querySelector('#active h2');
    const desc = document.querySelector('#active p');

    if (direction === 'next') {
        anime.set([title, desc], {
            translateX: '100vw',
            opacity: 0,
        });
    } else {
        anime.set([title, desc], {
            translateX: '-100vw',
            opacity: 0,
        });
    }

    anime({
        targets: title,
        translateX: 0,
        opacity: 1,
        duration: DURATION * 2,
        easing: EASING,
    });

    anime({
        targets: desc,
        translateX: 0,
        opacity: 1,
        duration: DURATION * 2 + DELAY,
        easing: EASING,
    });
};

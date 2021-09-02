import { DURATION, DELAY, EASING, NEXT, PREV } from './constants';
import anime from 'animejs/lib/anime.es';

const coverAnim = () => {
    const coverLeft = document.querySelector('.carousel_cover-left');
    const coverRight = document.querySelector('.carousel_cover-right');
    const coverTop = document.querySelector('.carousel_cover-top');
    const coverBottom = document.querySelector('.carousel_cover-bottom');

    const targetsX = [coverLeft, coverRight];
    const targetsY = [coverTop, coverBottom];

    // change le scaleX/Y des différents côtés du cover
    const anim = (target) => {
        anime({
            targets: target,
            duration: DURATION,
            scaleX: target === targetsX ? [0, 1] : 1,
            scaleY: target === targetsY ? [0, 1] : 1,
            easing: EASING,
            complete: () => {
                anime({
                    targets: target,
                    duration: DELAY,
                    delay: DELAY,
                    scaleX: target === targetsX ? [1, 0] : 1,
                    scaleY: target === targetsY ? [1, 0] : 1,
                    easing: 'easeOutQuad',
                });
            },
        });
    };

    NEXT.addEventListener('click', () => {
        anim(targetsX);
        anim(targetsY);
    });

    PREV.addEventListener('click', () => {
        anim(targetsX);
        anim(targetsY);
    });
};
coverAnim();

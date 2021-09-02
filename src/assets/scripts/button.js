import { DURATION, DELAY, EASING, NEXT, PREV } from './constants';

// disable les boutons du carousel le temps que l'animation termine
const disableButton = (e) => {
    NEXT.disabled = true;
    PREV.disabled = true;
    setTimeout(() => {
        NEXT.disabled = false;
        PREV.disabled = false;
    }, DURATION + DELAY * 2);
};

NEXT.addEventListener('click', (e) => disableButton(e));
PREV.addEventListener('click', (e) => disableButton(e));

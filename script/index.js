import { initNavigation } from './modules/navigation.js';
import { initEmailModal } from './modules/emailModal.js';
import { initAOS } from './modules/aos.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initEmailModal();
    initAOS();
});
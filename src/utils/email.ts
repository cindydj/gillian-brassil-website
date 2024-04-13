import { GILLIAN_EMAIL } from '../data/contact';

export function generateEmailLink() {
    // Create the mailto link
    var mailtoLink = document.createElement('a');
    mailtoLink.href = 'mailto:' + GILLIAN_EMAIL;
    mailtoLink.textContent = GILLIAN_EMAIL;
}

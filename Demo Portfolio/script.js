// Typing Effect
const typingText = ['Vikram', 'a Developer'];
let i = 0;
let j = 0;
let currentText = '';
let isDeleting = false;
let typingSpeed = 200;

function type() {
    if (isDeleting) {
        currentText = typingText[i].substring(0, j--);
    } else {
        currentText = typingText[i].substring(0, j++);
    }

    document.getElementById('typing').textContent = currentText;

    if (!isDeleting && j === typingText[i].length) {
        isDeleting = true;
        typingSpeed = 100;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % typingText.length;
        typingSpeed = 200;
    }

    setTimeout(type, typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});

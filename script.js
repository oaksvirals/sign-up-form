const password = document.querySelector('.password');
const passwordConfirm = document.querySelector('.confirm-password');
const submitButton = document.querySelector('.frm-btn');

passwordConfirm.addEventListener('input', () => {
    passMatch();
});

password.addEventListener('input', () => {
    passMatch();
});

function passMatch() {
    const notMatchText = document.querySelector('.password-catch');
    if (passwordConfirm.value !== password.value || password.value !== passwordConfirm.value) {
        passwordConfirm.classList.add('error');
        password.classList.add('error');
        notMatchText.classList.add('passmatch');
    } else if (passwordConfirm.value === password.value || password.value === passwordConfirm.value) {
        passwordConfirm.classList.remove('error');
        password.classList.remove('error');
        notMatchText.classList.remove('passmatch');
    };
};
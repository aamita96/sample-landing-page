const onSignup = document.querySelector('.btn-signup');
const userSubs = document.querySelector('.user-subscription');

onSignup.addEventListener('click', () => {
    const thankYou_message_para = document.createElement('p');
    thankYou_message_para.classList.add('success-notification');
    thankYou_message_para.textContent = 'Thank you!';

    userSubs.appendChild(thankYou_message_para);

    setTimeout(() => userSubs.removeChild(thankYou_message_para), 4000);

})
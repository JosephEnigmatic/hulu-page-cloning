const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');
const body = document.querySelector('body')

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', offModal);

function openModal() {
    modal.style.display = 'block'
    body.style.overflowY = 'hidden'
}

function closeModal() {
    modal.style.display = 'none'
    body.style.overflowY = 'auto'
}

function offModal(e) {
    if(e.target == modal){
        closeModal()
    }
}
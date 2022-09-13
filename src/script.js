'use strict'

const showModals = document.getElementsByClassName('show-modals')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')

for (let i = 0; i < showModals.length; i++) 
    showModals[i].addEventListener('click', () => {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    } 
)

const closeModalBtn = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

closeModal.addEventListener('click', closeModalBtn)
overlay.addEventListener('click', closeModalBtn)

document.addEventListener('keydown', function (e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalBtn()
    }
})
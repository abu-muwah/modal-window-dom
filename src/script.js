'use strict'

const showModals = document.getElementsByClassName('show-modals')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')

for (let i = 0; i < showModals.length; i++) 
    showModals[i].addEventListener('click', () => {
        console.log('Button Clicked')
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


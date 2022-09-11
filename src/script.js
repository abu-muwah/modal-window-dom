'use strict'

const showModals = document.getElementsByClassName('show-modals')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')

for (let i = 0; i < showModals.length; i++) 
    showModals[i].addEventListener('click', () => {
        console.log('Button Clicked')
        modal.classList.remove('hidden')
    } 
)

closeModal.addEventListener('click', function () {
    modal.classList.add('hidden')    
})


const modal = () => {
    const moreBtn = document.querySelector('.more')
    const modal = document.querySelector('.modal')
    const modalCloseBtn = modal.querySelector('.modal__close')
    const overlay = document.querySelector('.overlay')

    moreBtn.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.add('hidden')
    })

    overlay.addEventListener('click', () => {
        modal.classList.add('hidden')
    })
}

modal()
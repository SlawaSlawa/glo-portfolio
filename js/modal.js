const modal = () => {
    const moreBtns = document.querySelectorAll('.more')
    const modal = document.querySelector('.modal')
    const modalCloseBtn = modal.querySelector('.modal__close')
    const overlay = document.querySelector('.overlay')

    moreBtns.forEach(moreBtn => {
        moreBtn.addEventListener('click', () => {
            modal.classList.remove('hidden')
        })
    })

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.toggle('hidden')
    })

    overlay.addEventListener('click', () => {
        modal.classList.toggle('hidden')
    })
}

modal()
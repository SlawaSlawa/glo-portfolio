const scroll = () => {
    const links = document.querySelectorAll('.menu-list__link')
    const btn = document.querySelector('.main__button')
    const headerScrollBtn = document.querySelector('.main__scroll')

    const allLinks = [...links, btn, headerScrollBtn]

    allLinks.forEach(link => {
        link.addEventListener('click', evt => {
            evt.preventDefault()
            const id = link.getAttribute('href').substring(1)
            const section = document.getElementById(id)

            if (section) {
                seamless.scrollIntoView(section, {
                    block: 'start',
                    behavior: 'smooth',
                    inline: 'center'
                })
            }
        })
    })
}

scroll()
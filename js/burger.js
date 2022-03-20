const burger = () => {
    const burgerBtn = document.querySelector('.humburger-menu')
    const navMenu = document.querySelector('.menu')
    const menuLinks = document.querySelectorAll('.menu-list__item')

    burgerBtn.addEventListener('click', () => {
        navMenu.classList.add('menu-active')
    })

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('menu-active')
        })
    })

    document.addEventListener('click', (evt) => {
        if (!(evt.target.closest('.menu') || evt.target.closest('.humburger-menu'))) {
            navMenu.classList.remove('menu-active')
        }
    })
}

burger()
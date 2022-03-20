const accordeon = () => {
    const featureList = document.querySelector('.feature-list')
    const featureLinks = featureList.querySelectorAll('.feature__link')

    featureLinks.forEach(btn => {
        btn.addEventListener('click', () => {
            featureLinks.forEach(button => {
                button.classList.remove('feature__link_active')
                button.nextElementSibling.classList.add('hidden')
            })
            btn.classList.toggle('feature__link_active')
            btn.nextElementSibling.classList.toggle('hidden')
        })
    })

}

accordeon()

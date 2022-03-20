const tabs = () => {
    const tabBtns = document.querySelectorAll('.design-list__item')
    const tabContents = document.querySelectorAll('.design__descr')
    const tabImages = document.querySelectorAll('.design-images')
    const tabImagesMain = document.querySelectorAll('.feature__img')
    const tabTitles = document.querySelectorAll('.design__title')
    const documentTitle = document.querySelector('title')

    const changeContent = (content, data) => {
        content.forEach(elem => {
            if (data === elem.dataset.tabsField) {
                elem.classList.remove('hidden')
            } else {
                elem.classList.add('hidden')
            }
        })
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', (evt) => {
            const target = evt.target
            console.log(btn.textContent)
            tabBtns.forEach(tabBtn => {
                if (tabBtn === btn) {
                    tabBtn.classList.add('design-list__item_active')
                } else {
                    tabBtn.classList.remove('design-list__item_active')
                }
            })

            tabTitles.forEach(title => {
                if (title.closest('.hidden')) {
                    title.classList.remove('hidden')
                    documentTitle.textContent = title.textContent
                } else {
                    title.classList.add('hidden')
                }
            })

            changeContent(tabContents, target.dataset.tabsHandler)
            changeContent(tabImages, target.dataset.tabsHandler)
            changeContent(tabImagesMain, target.dataset.tabsHandler)
        })
    })
}

tabs()
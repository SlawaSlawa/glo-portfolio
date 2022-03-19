const tabs = () => {
    const tabBtns = document.querySelectorAll('.design-list__item')
    const tabContents = document.querySelectorAll('.design__descr')
    const tabImages = document.querySelectorAll('.design-images')

    const changeContent = (content, data) => {
        console.log(content, data);
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

            tabBtns.forEach(tabBtn => {
                if (tabBtn === btn) {
                    tabBtn.classList.add('design-list__item_active')
                } else {
                    tabBtn.classList.remove('design-list__item_active')
                }
            })

            changeContent(tabContents, target.dataset.tabsHandler)
            changeContent(tabImages, target.dataset.tabsHandler)
        })
    })
}

tabs()
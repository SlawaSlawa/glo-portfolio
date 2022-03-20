const timer = () => {
    const timerBlock = document.querySelector('.timer__time')
    const dateDeadline = new Date('31 march 2022')
    const dateDeadlineUnix = dateDeadline.getTime()

    const changeTimer = () => {
        const date = new Date()
        const dateUnix = date.getTime()
        const timeRemaining = (dateDeadlineUnix - dateUnix) / 1000

        const days = Math.floor(timeRemaining / 60 / 60 / 24)
        const hours = Math.floor((timeRemaining / 60 / 60) % 24)
        const minutes = Math.floor((timeRemaining / 60) % 60)
        const seconds = Math.floor(timeRemaining % 60)

        const formatDays = days < 10 ? '0' + days : days
        const formatHourse = hours < 10 ? '0' + hours : hours
        const formatMinutes = minutes < 10 ? '0' + minutes : minutes
        const formatSeconds = seconds < 10 ? '0' + seconds : seconds

        timerBlock.textContent = `${formatDays}:${formatHourse}:${formatMinutes}:${formatSeconds}`
    }

    setInterval(changeTimer, 500)

}

timer()
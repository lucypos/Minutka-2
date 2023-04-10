
const spusteni = (event) => {
    event.preventDefault()
    let time = Number(document.querySelector('.time-input').value)

    const vteriny = document.querySelector('.alarm__seconds')
    const alarm = document.querySelector('.alarm')

const odpocet = () => {
    if (time > 0) {
            time -=1
            vteriny.textContent = String(time)
    }
    if (time <= 0) {
            clearInterval(casovac)
            alarm.classList.add('.alarm--ring')
            document.querySelector('audio').play()
    }
}
const casovac = setInterval(odpocet,1000)
}
const formular = document.querySelector('.controls')
formular.addEventListener('submit', spusteni)

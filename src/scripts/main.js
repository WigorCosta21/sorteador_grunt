document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#form-raffle-raw').addEventListener('submit', (event) => {
    event.preventDefault()
    let maxNumber = document.querySelector('#max-number').value
    maxNumber = Number(maxNumber)

    let randomNumber = Math.random() * maxNumber
    randomNumber = Math.floor(randomNumber + 1)

    document.querySelector('#result-value').innerText = randomNumber

    document.querySelector('.result').style.display = 'block'
  })
})
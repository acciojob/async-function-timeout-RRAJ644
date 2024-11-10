document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.querySelector('#text')
  const delayInput = document.querySelector('#delay')
  const button = document.querySelector('#btn')
  const output = document.querySelector('#output')

  button.addEventListener('click', async (e) => {
  const text = textInput?.value
  const delay = parseInt(delayInput?.value, 10)

    e.preventDefault()

    if (isNaN(delay)) return

    await new Promise((resolve) => setTimeout(resolve, delay))

    output.innerHTML = `<span>${text}</span>`
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const TOKEN = '${{8463842853:AAFk1nxuCfqshKQ0O-ZHmg_YpIMFiageon0}}'
  const CHAT_ID = '-1002563248907'
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
  
  function clearInputs(inputs) {
    inputs.forEach((input) => input.value = '')
  }

  document.getElementById('telegramForm').addEventListener('submit', function (event) {
    event.preventDefault()
    const date = new Date().toLocaleString()

    const textMessage = `
      <b>заявка с сайта | ${date}</b>\n
      <b>отправитель: </b>${this.user_name.value}
      <b>tg: </b><i>${this.user_tg.value}</i>
      <b>товар: </b><i>${this.user_cart.value}</i>
      <b>сообщение: </b><i>${this.user_text.value}</i>
    `

    fetch(URI_API, {
      method: 'POST',
      headers: { 'content-type': 'application/json', },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: textMessage
      }),
    })
      .then(() => alert('Заявка отправлена!'))
      .catch(e => console.error(e))
      .finally(() => clearInputs(this.querySelectorAll('input, select, textarea')))
  })
})

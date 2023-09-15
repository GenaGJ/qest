const userName = document.getElementById('userName');
const userHello = document.getElementById('userHello');
const logOut = document.getElementById('logOut');
const sendId = document.querySelectorAll('#sendId');

if (userName) {
  userName.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { user } = e.target;
    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: user.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      window.location.assign('/questions');
    } else {
      console.log('Error');
    }
  });
}

if (sendId) {
  sendId.forEach((el) => {
    el.addEventListener('submit', async (e) => {
      e.preventDefault();
      const { idcard, trueanswer } = e.target.dataset;
      const answer = e.target.answer.value;
      if (answer !== trueanswer) {
        el.innerHTML = `<div>Ответ не верный! Верный ответ: ${trueanswer}</div>`;
      } else {
        el.innerHTML = '<div>Ответ верный!</div>';
      }
    });
  });
}

logOut.addEventListener('click', () => {
  userHello.style.display = 'none';
  userHello.textContent = '';
});

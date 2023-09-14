const userName = document.getElementById('userName');
const userHello = document.getElementById('userHello');
const logOut = document.getElementById('logOut');

if (userName) {
  userName.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { name } = e.target;

    const res = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      userHello.style.display = 'block';
      userHello.textContent = `Hello, ${name.value}!`;
    }
  });
}

logOut.addEventListener('click', () => {
  userHello.style.display = 'none';
  userHello.textContent = '';
});

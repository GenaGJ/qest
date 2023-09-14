const userName = document.getElementById('userName');
const userHello = document.getElementById('userHello');
const logOut = document.getElementById('logOut');

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
    console.log(data.message);
    if (data.message === 'ok') {
      userHello.style.display = 'block';
      userHello.textContent = `Hello, ${user.value}!`;
    } else {
      console.log('Error');
    }
  });
}

logOut.addEventListener('click', () => {
  userHello.style.display = 'none';
  userHello.textContent = '';
});

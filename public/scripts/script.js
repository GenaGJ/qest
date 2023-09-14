const userName = document.getElementById('userName');
const userHello = document.getElementById('userHello');
const logOut = document.getElementById('logOut');
const updateCards = document.getElementById('updateCards');

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
      userHello.style.display = 'block';
      userHello.textContent = `Hello, ${user.value}!`;
    } else {
      console.log('Error');
    }
  });
}
//взял
if (updateCards) {
  updateCards.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, type, img, discribe, price } = e.target;
    const { idupdate } = e.target.dataset;

    const res = await fetch(`/api/animals/${idupdate}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        type: type.value,
        img: img.value,
        discribe: discribe.value,
        price: price.value,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.data && data.data[0] > 0) {
      window.location.assign('/animals');
    } else {
      console.log('Oshibka');
    }
  });
}
logOut.addEventListener('click', () => {
  userHello.style.display = 'none';
  userHello.textContent = '';
});

const url = 'https://api.adviceslip.com/advice';
const adviceNum = document.querySelector('.advice__number');
const adviceText = document.querySelector('.advice__text');
const btn = document.querySelector('button');

adviceNum.innerHTML = 'Advice #117';
adviceText.innerHTML =
  "It is easy to sit up and take notice, what's difficult is getting up and taking action.";

let result = '';
async function getAdvice() {
  try {
    const response = await fetch(url, { 'Content-Type': 'application/json' });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

btn.addEventListener('click', async (e) => {
  e.preventDefault();
  result = await getAdvice();
  adviceNum.innerHTML = `Advice #${result.slip.id}`;
  adviceText.innerHTML = `${result.slip.advice}`;
});

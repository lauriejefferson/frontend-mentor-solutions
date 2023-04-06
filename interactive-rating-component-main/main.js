const submit = document.querySelector('.submit');
const btns = document.querySelectorAll('.score');
const rating = document.querySelector('.rating');
const result = document.querySelector('.result');
const thankyou = document.querySelector('.thankyou');

const getScore = () => {
    let score = null;

    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            score = e.target.textContent;
        });
    });

   submit.addEventListener('click', (e) => {
        e.preventDefault();
        rating.classList.add('hidden');
        thankyou.classList.remove('hidden');
        result.textContent = `You selected ${score} out of 5`
        console.log(score);
    }); 
}


getScore();
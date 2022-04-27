const submit = document.getElementById('submit');
const ranking = document.getElementById('result');
const first = document.getElementById('first');
const second = document.getElementById('second');
submit.addEventListener('click', () => {
    const radio = document.getElementsByName('rating');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            first.style.display = 'none';
            second.style.display = 'block';
            ranking.innerHTML = 'You has selected ' + radio[i].value + ' out of 5';
        }
    }
})
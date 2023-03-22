let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let reset = document.getElementById('reset')
let show = document.getElementById('show-number');

increment.addEventListener("click", function () {
    let current = parseInt(show.innerText);
    show.innerText = current + 1;
})
decrement.addEventListener("click", function () {
    let current = parseInt(show.innerText);
    show.innerText = current - 1;
})
reset.addEventListener("click", function () {
    show.innerText = 0;
})

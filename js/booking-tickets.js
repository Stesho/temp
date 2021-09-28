let overlay = document.querySelector('.booking-tickets-overlay');
let open = document.querySelector('.buy-tickets__buy-now');
let close = document.querySelector('.booking-tickets__close');
let form = document.querySelector('.booking-tickets');

overlay.addEventListener('click', (event) => {
    if(event.target.className === 'booking-tickets-overlay') {
        closeMove();
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 600);
    }
})

open.addEventListener('click', () => {
    overlay.style.display = 'flex';
    openMove();
});

close.addEventListener('click', () => {
    closeMove();
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 600);
});

function openMove() {
    let moveStep = 0;
    let opacity = 0;
    let timer = setInterval(() => {
        form.style.left = moveStep + 'px';
        form.style.opacity = opacity;
        moveStep += 20;
        opacity += 0.5;
        console.log(form.style.left);
        if(moveStep >= 240) {
            clearInterval(timer);
            return;
        }
    }, 50);
}

function closeMove() {
    let moveStep = 0;
    let opacity = 0;
    let timer = setInterval(() => {
        form.style.left = moveStep + 'px';
        form.style.opacity = opacity;
        moveStep -= 20;
        opacity -= 0.5;
        console.log(form.style.left);
        if(moveStep <= 0) {
            clearInterval(timer);
            return;
        }
    }, 50);
}

//count buttons===================================================
let basicMinus = document.querySelector('#buy-tickets__basic-minus');
let basicCount = document.querySelector('#basic-count');
let basicPlus = document.querySelector('#buy-tickets__basic-plus');

let seniorMinus = document.querySelector('#buy-tickets__senior-minus');
let seniorCount = document.querySelector('#senior-count');
let seniorPlus = document.querySelector('#buy-tickets__senior-plus');

basicPlus.addEventListener('click', () => {
    if(basicCount.innerHTML < 20) {
        basicCount.innerHTML = +basicCount.innerHTML + 1;
    }
});
basicMinus.addEventListener('click', () => {
    console.log(basicCount.innerHTML);
    if(basicCount.innerHTML > 0) {
        basicCount.innerHTML -= 1;
    }
});

seniorPlus.addEventListener('click', () => {
    if(seniorCount.innerHTML < 20) {
        seniorCount.innerHTML = +seniorCount.innerHTML + 1;
    }
});
seniorMinus.addEventListener('click', () => {
    if(seniorCount.innerHTML > 0) {
        seniorCount.innerHTML -= 1;
    }
});
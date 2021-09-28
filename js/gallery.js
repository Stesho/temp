function shuffle() {
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let pictures = document.querySelectorAll('.art-gallery__picture');
    arr.sort(() => Math.random() - 0.5);
    console.log('len = ' + pictures.length);
    for(let i = 0; i < pictures.length; i++) {
        console.log(arr[i]);
        pictures[i].src = `./assets/img/gallery/galery${arr[i]}.jpg`;
    }
}

window.addEventListener('load', () => {
    shuffle();
})

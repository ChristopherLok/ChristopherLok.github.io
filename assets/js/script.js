// JavaScript source code

window.addEventListener('scroll', () => {
    let scrollAmount = window.scrollY;
    document.querySelector('.gear1').style.transform = `rotate(${scrollAmount}deg)`;
    document.querySelector('.gear2').style.transform = `rotate(${scrollAmount}deg)`;
    document.querySelector('.gear3').style.transform = `rotate(${scrollAmount}deg)`;

});
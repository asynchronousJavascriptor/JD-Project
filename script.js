

let circle = document.querySelector('#c1');
let circle1 = document.querySelector('#c2');
let circle2 = document.querySelector('#c3');
let circle3 = document.querySelector('#c4');


window.addEventListener('mousemove', function (details) {
    let xValue = details.clientX;
    let yValue = details.clientY;

    setTimeout(function () {
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
        circle1.style.top = `${yValue}px`;
        circle1.style.left = `${xValue}px`;

        circle2.style.top = `${yValue}px`;
        circle2.style.left = `${xValue}px`;

        circle3.style.top = `${yValue}px`;
        circle3.style.left = `${xValue}px`;








    }, 50);



    
});

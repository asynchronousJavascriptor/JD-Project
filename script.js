// 1) I need to get the current position of the mouse every
// time it moves ( x axis, y axis)

// 2) I need to set those x and y values to the circular div

// ==================

// every time mouse moves we should get notified = mouseMove listener
// every time listener gets notified, we need to get the values
// for x and y axis, and then update it to the circle

let circle = document.querySelector('#circle');

window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;
    setTimeout(function(){
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 50);
});

let t1 = gsap.timeline();
t1.from('#wrapper',{
    x:40,
    opacity:0,
    duration:1,
    ease:'expo.inOut'
})
.from('#box',{
    x:40,
    duration:.6,
    opacity:0,
    ease:'expo.easeinOut',
}) 
.from('#textField', {
    x:40,
    duration:.7,
    opacity:0,
    ease:'expo.easeinOut',
})
.from('#textField h4', {
    y:40,
    duration:.7,
    opacity:0,
    ease:'expo.easeinOut',
})
.to('#box .line',{
    width:'90px',
    duration:1,
    ease:'expo.inOut',
}) 
let warpper = document.querySelector('#wrapper');
let expand = document.querySelector('#expand');
let svg = document.querySelector('#svg');
expand.addEventListener('click',function(){
    t1.reverse();
    setTimeout(function(){
     svg.style.display = 'initial';   
    },2700)
    
})
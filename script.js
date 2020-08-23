// 1) I need to get the current position of the mouse every
// time it moves ( x axis, y axis)

// 2) I need to set those x and y values to the circular div

// ==================

// every time mouse moves we should get notified = mouseMove listener
// every time listener gets notified, we need to get the values
// for x and y axis, and then update it to the circle

let circle = document.querySelector('#circle');
var t=new TimelineMax();
let arrow = document.querySelector('#arrow')
t.fromTo('#card2',3,{
    x:150,
    opacity:0,
    ease:Expo.easeInOut
},{
    opacity:1,
    x:0,
    ease:Expo.easeInOut
}).fromTo('#card1',3,{
    x:150,
    opacity:0,
    ease:Expo.easeInOut
},{
    x:-50,
    opacity:1,
    ease:Expo.easeInOut
},'0.5').fromTo('p',1,{
    y:10,
    opacity:0,
    ease:Expo.easeInOut
},{
    y:0,
    opacity:1,
    ease:Expo.easeInOut
})

arrow.addEventListener('click',function(){
    t.reverse(0)
})


window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;

    setTimeout(function(){
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 50);
});

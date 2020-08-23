// 1) I need to get the current position of the mouse every
// time it moves ( x axis, y axis)

// 2) I need to set those x and y values to the circular div

// ==================

// every time mouse moves we should get notified = mouseMove listener
// every time listener gets notified, we need to get the values
// for x and y axis, and then update it to the circle

let circle = document.querySelector('#circle');

let widthmore = window.addEventListener('click',function(){
 setTimeout(function(){
     circle.style.border = "3px solid white";
 },50)   

})

window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;

    setTimeout(function(){
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 50);
});

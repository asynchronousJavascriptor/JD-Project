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



var next = document.querySelector("#circle1");
var t1 = new TimelineMax();

    t1.fromTo('#welcome', 3, {
            opacity: 0,
            ease: Expo.easeInOut
        }, {
            
            opacity: 1,
            ease: Expo.easeInOut

        }

    ).fromTo('#wait',2,{
        opacity:0,
        ease:Expo.easeInOut
    },{
        opacity:1,
        ease:Expo.easeInOut
    }).fromTo('#wait',2,{
        opacity:1,
        ease:Expo.easeInOut
    },{
        opacity:0,
        ease:Expo.easeInOut
    }).fromTo('#wait',2,{
        opacity:0,
        ease:Expo.easeInOut
    },{
        opacity:1,
        ease:Expo.easeInOut
    }).fromTo('#wait',2,{
        opacity:1,
        ease:Expo.easeInOut
    },{
        opacity:0,
        ease:Expo.easeInOut
    }).fromTo('#welcome', 3, {
        opacity: 0,
        ease: Expo.easeInOut
    }, {
        
      display:"none",
        ease: Expo.easeInOut

    }

).fromTo('#jd', 2, {
    display: "none",
    opacity:0,
    ease: Expo.easeInOut
}, {
    opacity:1,
    display: "initial",
    ease: Expo.easeInOut

}

).fromTo('#row', 1, {
    opacity:0,
    width:"0",
    ease: Expo.easeInOut
}, {
    opacity:1,
    width:"60%",
    display: "initial",
    ease: Expo.easeInOut

}

)
.fromTo('#slidecircle', 2, {
    opacity:0,
    width:"0",
    ease: Expo.easeInOut
}, {
    width:"100%",
    opacity:1,
    ease: Expo.easeInOut

}

)


next.addEventListener('click',function(){
   t1.fromTo('#slidecircle', 2, {
    opacity:1,
    width:"100%",
    ease: Expo.easeInOut
}, {
    width:"0%",
    opacity:0,
    ease: Expo.easeInOut

}

).fromTo('#row', 1, {

    opacity:1,
    width:"60%",
    display: "initial",
    ease: Expo.easeInOut
    
}, {
    opacity:0,
    width:"0",
    ease: Expo.easeInOut

}

).fromTo('#jd', 2, {
    opacity:1,
    display: "initial",
    ease: Expo.easeInOut


 
}, {
    display: "none",
    opacity:0,
    ease: Expo.easeInOut
}

).fromTo('#svg', 2, {
    opacity:0,
    ease: Expo.easeInOut

}, {
   
    opacity:1,
    ease: Expo.easeInOut
}

)})

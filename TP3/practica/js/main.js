"use strict"
let avgHour
let avgMin
let avgSeg

function clock() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let seg = time.getSeconds();
    
    if (hour >= 12) {
     	let avgHour = hour / 12 * 360;
    }  else {
    	let avgHour = hour / 24 * 360;
    }

    avgHour += min / 60 * 30;
    avgMin = min / 60 * 360;
    avgSeg = seg / 60 * 360;

    document.getElementById("hour").style.transform = "rotate("+ avgHour +"deg)";
    document.getElementById("min").style.transform = "rotate("+ avgMin +"deg)";
    document.getElementById("seg").style.transform = "rotate("+ avgSeg +"deg)";
}


setInterval(clock, 1000);
let rect = document.getElementById("rect")




rect.onmousedown = myDownClick

function myDownClick() {
    changeColor(rect)
    changeScale(rect)
    changePosition(rect)

    
}
function changeScale(ball){
    for (let i = 0; i < 2; i++) {
        let width = Math.floor((Math.random() * 200) + 10);
        let height = Math.floor((Math.random() * 200) + 10);
        rect.style.width = width + "px"
        rect.style.height = height + "px"
    }
}
function changePosition(ball){
    for (let i = 0; i < 2; i++) {
        let top = Math.floor((Math.random() * 200) + 10);
        let left = Math.floor((Math.random() * 200) + 10);
        rect.style.top = top + "px"
        rect.style.left = left + "px"
    }
}


// function chanScale() {
//     let scale = ""
//     for (let i = 0; i < 2; i++) {
//         let sub = Math.floor(Math.random() * 256).toString(16)
//         color += (sub.length == 1 ? "0" + sub : sub)
        
//     }

// }

function getSetStyle(option) {
    switch(option) {
        case 0:
          let setStyle = [[backgroundColor, "#333333"], [width, "8rem"], [heigth, "8rem"]];
          return setStyle;
        case 1:
          alert ("Bananan");
          break;
      }
}


function changeColor(ball){
        let color = "";
     for(let i = 0; i < 3; i++) {
         let sub = Math.floor(Math.random() * 256).toString(16)
         color += (sub.length == 1 ? "0" + sub : sub)
     }     
     rect.style.backgroundColor = "#" + color
    
    //     let sub = Math.floor(Math.random() * 256).toString(8)
    //     color += (sub.length == 1 ? "0" + sub : sub)

        // let setStylus = getSetStyle(color);
        // console.log(setStylus);
    // for (let i = 0; i < setStylus.length; i) {
        
    //     console.log(setStylus);
    // }       
        
    
}

/**
 
 function get_random_color() 
 {
     var color = "";
     for(var i = 0; i < 3; i++) {
         var sub = Math.floor(Math.random() * 256).toString(16)
         color += (sub.length == 1 ? "0" + sub : sub)
     }
     return "#" + color
 }

 */
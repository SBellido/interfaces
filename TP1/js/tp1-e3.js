//3 ( Pintar una región rectangular de un color utilizando la estructura de ImageData.

"use strict";

let canvas_3 = document.getElementById("miCanvas_Ej-3");
let ctx_3 = canvas_3.getContext("2d");
let width_3 = canvas_3.width;
let height_3 = canvas_3.height;
let imageData_3 = ctx_3.createImageData(width_3, height_3);

let x_3 = 0;
let y_3 = 0;
let r_3;
let g_3;
let b_3;
let a_3;

drawRect(imageData_3, x_3, y_3, r_3, g_3, b_3, a_3);
ctx_3.putImageData (imageData_3, x_3, y_3) * 4;

function drawRect(imageData_3, x_3, y_3, r_3, g_3, b_3, a_3) {
    for (let w = 0; w < width_3; w ++) { 
        for (let h = 0; h < height_3; h ++) {
            setPixel (imageData_3, w, h, r_3, g_3, b_3, a_3);  
        }
    }
}

function setPixel (imageData_3, x_3, y_3, r_3, g_3, b_3, a_3) {
    let index_3 = (x_3 + y_3 * imageData_3.height) * 4;
    imageData_3.data[index_3 + 0] = 20;
    imageData_3.data[index_3 + 1] = 150;
    imageData_3.data[index_3 + 2] = 210;
    imageData_3.data[index_3 + 3] = 150;
} 




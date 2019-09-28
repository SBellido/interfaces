"use strict";

let canvas_4 = document.getElementById( "miCanvas_Ej-4" );
let ctx_4 = canvas_4.getContext( "2d" );
let width_4 = canvas_4.width;
let height_4 = canvas_4.height;
let imageData_4 = ctx_4.createImageData( width_4, height_4 );

let x_4 = 0;
let y_4 = 0;
let r_4;
let g_4;
let b_4;
let a_4 = 255;

drawRect( imageData_4, a_4 );
ctx_4.putImageData( imageData_4, x_4, y_4 ) * 4;


function drawRect( imageData_4, a_4 ) {
    for ( let w = 0; w < width_4; w ++ ) { 
        for ( let h = 0; h < height_4; h ++ ) {
            let color_4 = h * 255 / ( height_4 - 1 );
            setPixel( imageData_4, w, h, color_4, color_4, color_4, a_4 );  
        }
    }
}

function setPixel( imageData_4, x_4, y_4, r_4, g_4, b_4, a_4 ) {
    let index_4 = ( x_4 + y_4 * imageData_4.height ) * 4;
    imageData_4.data[index_4 + 0] = r_4;
    imageData_4.data[index_4 + 1] = g_4;
    imageData_4.data[index_4 + 2] = b_4;
    imageData_4.data[index_4 + 3] = a_4;
} 

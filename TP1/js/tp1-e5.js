// 5 ( Pintar un rectángulo en pantalla, utilizando un gradiente que vaya 
// de negro a amarillo en la primera mitad del ancho del rectángulo, y de amarillo a rojo, 
// en la segunda mitad. Por otro lado, en Y el degrade se mantiene constante.

"use strict";

let canvas_5 = document.getElementById ( "miCanvas_Ej-5" )
let ctx = canvas_5.getContext ( "2d" )
let width = canvas_5.width
let height = canvas_5.height
let imageData = ctx.createImageData ( width, height )

let x = 0
let y = 0
let r
let g
let b
let a = 255

gradient_Black_Yellow_Red ( imageData, b, a )
ctx.putImageData ( imageData, x, y ) * 4

function gradient_Black_Yellow_Red ( imageData, b, a ) {
    for ( let h = 0; h < height; h ++ ) {
        for ( let w = 0; w <= width / 2; w ++ ) {
            let color = upColor ( w, width )
            setPixel ( imageData, w, h, color, color, b, a )              
        }
        let middle = width / 2
        for ( let w = width / 2; w <= width ; w ++ ) {
            let color = upColor ( middle, width )
            setPixel ( imageData, w, h, 255, color, b, a ) 
            middle --            
        } 
    } 
}

function upColor ( middle, width ) {
    let c = middle * 255 / ( width / 2 ) 
    return c
}

function setPixel ( imageData, x, y, r, g, b, a ) {
    let index = ( x + y * imageData.height ) * 4
    imageData.data[index + 0] = r
    imageData.data[index + 1] = g
    imageData.data[index + 2] = b
    imageData.data[index + 3] = a
} 


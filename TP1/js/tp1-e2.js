//2 ( Pintar una región rectangular de un color utilizando el Contexto de HTML5.

let canvas_2 = document.getElementById("miCanvas_Ej-2")
let ctx_2 = canvas_2.getContext("2d")
let width_2 = canvas_2.width
let height_2 = canvas_2.height

ctx_2.beginPath(); // empieza a dibujar
ctx_2.fillStyle = 'rgba(10,100,40,0.8)'
ctx_2.fillRect(0, 0, width_2, height_2)
ctx_2.stroke(); // termina de dibujar


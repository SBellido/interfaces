let canvas_6 = document.getElementById("miCanvas_Ej-6")
let ctx_6 = canvas_6.getContext("2d")
let width_6 = canvas_6.width
let height_6 = canvas_6.height
let imageData_6 = ctx_6.createImageData ( width_6, height_6 )

let picture = new Image()
picture.src = "images/wom.jpg"
// picture.crossOrigin = null

picture.onload = function() {
    CallDrawImageMethod ( this )
}

function CallDrawImageMethod ( picture ) {
    ctx_6.drawImage ( picture, 0, 0 )
}

// prueba.onclick = function() { alert("Funciona onclick") }

buttonColour.onclick = function() { colourVersion ( picture ) }

buttonGrayScale.onclick = function() { grayVersion ( picture ) }

function colourVersion ( picture ) {
    picture.src = "images/wom.jpg"
    picture.crossOrigin = null

    picture.onload = function() {
        CallDrawImageMethod ( this )
    }
}

function grayVersion() {
    picture.src = "images/wom.jpg"
    picture.onload = function() {
        ctx_6.drawImage(picture, 0, 0)
        imageData = ctx_6.getImageData ( 0, 0, this.width, this.height )
        for ( var h = 0; h < height; h ++ ) {
            for ( var w = 0; w < width; w ++ ) {
                setPixel ( imageData, h, w, 255 )
            }
        }
        ctx_6.putImageData ( imageData, 0, 0 )
    }
}

function setPixel ( imageData, x, y, a ) {
    let indice_6 = ( x + y * imageData.width ) * 4
    imageData.data[indice_6 + 3] = a
    let r = getRed ( imageData, x, y )
    let g = getGreen( imageData, x, y )
    let b = getBlue ( imageData, x, y )
    let averaGray = generateAverageGray ( r, g, b )
    imageData.data[indice_6 + 0] = averaGray
    imageData.data[indice_6 + 1] = averaGray
    imageData.data[indice_6 + 2] = averaGray
}

function generateAverageGray ( r, g, b ) {
    let gray = ( r + g + b ) / 3
    return gray
}

function getRed ( imagedata, x, y ) {
    ind = ( x + y * imagedata.width ) * 4
    return imagedata.data[ind + 0]
}

function getGreen ( imagedata, x, y ) {
    ind = ( x + y * imagedata.width ) * 4
    return imagedata.data[ind + 1]
}

function getBlue ( imagedata, x, y ) {
    ind = ( x + y * imagedata.width ) * 4
    return imagedata.data[ind + 2]
}
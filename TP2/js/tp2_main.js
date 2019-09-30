let canvas_TP2 = document.getElementById("myCanvas_TP2")
let ctx_TP2 = canvas_TP2.getContext("2d")
let width_TP2 = canvas_TP2.width
let height_TP2 = canvas_TP2.height

ctx_TP2.fillStyle = '#FFFFFF'
let center
let figureClosed
let fig = new Figura(center,figureClosed)
let figures = []
let figureDetected = false
let vertexDetected = false
let start_Y
let start_X


function clear() {
    ctx_TP2.clearRect(0, 0, width_TP2, height_TP2);
}

function getMousePos(canvas_TP2, evt) {
    let ClientRect = canvas_TP2.getBoundingClientRect()
    return {
        x: Math.round(evt.clientX - ClientRect.left - 10),
        y: Math.round(evt.clientY - ClientRect.top - 10)
    }
}

function overTheVertex(x,y) { 
    let dragOk = false
    if(figures.length != 0) { 
        for (let i = 0; i < figures.length; i++) {
            if(figures[i].iterateVertex(x,y)) {
                dragOk = true
                
                console.log("Figura en el indice: " + i);               
                return dragOk                   
            }
        }
    }
    return dragOk
}

function overTheCenter(x,y) { 
    console.log('Cantidad de figuras: ' + (figures.length +1))    
        for (let i = 0; i < figures.length; i++) {
            if (figures[i].isCenterFigure(x,y)) {  
                fig = figures[i]            
                console.log("Figura del índice "+i);
                return fig      
            }
        }
        return fig

}
canvas_TP2.addEventListener ("mousemove", function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    let mousePos = getMousePos (canvas_TP2, evt)
    let x = mousePos.x
    let y = mousePos.y
    distanceX = x - start_Y
    distanceY = y - start_X
    // fig.dragFigure(distanceX, distanceY)

});


canvas_TP2.addEventListener ("mousedown", function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    let mousePos = getMousePos (canvas_TP2, evt)
    let message = "Las coordenadas del clic son X=" + mousePos.x +", Y="+ mousePos.y
    console.log(message)
    let x = mousePos.x
    let y = mousePos.y
    if(figures.length < 1){
        fig.addNode(x, y) // Crear nuevo nodo 
    } else {
        for (let i = 0; i < figures.length; i++) {        
            if (overTheVertex(x,y)) { 
                console.log("es un vertice");       
            } else if (figures[i].isCenterFigure(x,y)) {  
                fig = figures[i]            
                console.log("Figura del índice "+i + fig.getCenter());
                figureDetected = true
                console.log("mueva un centro");         
            } else {
                fig.addNode(x, y) // Crear nuevo nodo 
            }
        }   
    }
    start_X = x
    start_Y = y
    reDraw();
}, false);


buttonCloseFigure.onclick = function() { 
        fig.createFigure()
        if(fig.close) {
            figures.push(fig)  
            fig = new Figura()
            reDraw()
        }
}

function reDraw() {     //borrar todo
    clear();
    for (let i = 0; i < figures.length; i++) {
        figures[i].draw(ctx_TP2)
    }
    fig.draw(ctx_TP2)   
}


buttonCleanCanvas.onclick = function() { 
    clear()  
}

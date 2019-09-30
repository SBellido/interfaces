class Figura {
    constructor() {
        this.vertices = []
        this.center = undefined
        this.close = false
       // this.moveFigure()     
    }

    // dragFigure(distanceX, distanceY) {
    //     for (let i = 0; i < vertices.length; i++) {
    //         const vertex = vertices[i];
    //         let finalX = vertex.get_ejeX + distanceX
    //         vertex.set_ejeX(finalX)
    //         let finalY = vertex.get_ejeY + distanceY
    //         vertex.set_ejeY(finalY)
    //     }
    // }

    getPolygonCentroid() { 
        let centroid = { x: 0, y: 0 } 
        for ( let i = 0; i < this.vertices.length; i ++ ) { 
            let point = this.vertices[i]
            centroid.x += point.x
            centroid.y += point.y
        } 
        centroid.x /= this.vertices.length
        centroid.y /= this.vertices.length
        centroid = new Vertex(centroid.x, centroid.y, 3.5, '#008f39')        
        return centroid 
    } 

    iterateVertex(x,y){
        for(let j = 0; j < this.vertices.length; j ++){
            if (this.matchMouseVertex(x,y, this.vertices[j])) {               
                console.log('Índice del vértice: ' + j)   
                return this.vertices[j]
            }           
        }
        return false  
    }

    isVertexFigure(x,y){
        if(this.close) {
            for (let i = 0; i < this.vertices.length; i++) {
                const element = this.vertices[i];
                if(this.matchMouseVertex(x,y, this.vertices[i])){
                    console.log("es un vértice")
                }
                return true;
            }
        }  
        return false
    }

    isCenterFigure(x,y){
        if(this.close && this.matchMouseVertex(x,y, this.center)) {
            console.log("es el centro")
            return true;
        }
        return false
    }
     /*    
        for (let i = 0; i < this.vertices.length ; i++) {
            const vertice = this.vertices[i];
           if(this.match(x,y,vertice))
           {
            console.log("es un vertice")
               return true
           }
        } */

    getFigureEmpty(){
        return this.vertices.length == 0;
    }

    matchMouseVertex(x,y, vertex){ 
        if ( 20 > Math.abs(vertex.get_ejeX() - x) ) {
            if ( 20 > Math.abs(vertex.get_ejeY() - y) ) {
                return vertex
            }
        }
    }
    
    pushNode(vertex) {
        this.vertices.push(vertex)      
    }
    
    addNode(x,y){
        let vertex = new Vertex(x, y, 5, '#cb3234')     
        this.pushNode(vertex)               
        return vertex 
    }

    drawLineClose(ctx) {    
        for (let i = 0; i < this.vertices.length; i++) {
            if(this.vertices[i] != undefined) {
                if(this.vertices[i + 1] == undefined) {
                    let first = this.vertices[0]           
                    let last = this.vertices[this.vertices.length - 1]
                    ctx.beginPath()
                    ctx.strokeStyle = '#FF0'
                    ctx.lineWidth = 2
                    ctx.moveTo(first.x, first.y)
                    ctx.lineTo(last.x, last.y)
                    ctx.stroke()
                    ctx.closePath()
                }
            }
            this.vertices[i].drawCircle(ctx);
            this.vertices[0].drawCircle(ctx);
        }
    }

    drawLine(ctx) {
        for(let i = 0; i < this.vertices.length; i++){
            let vertex = this.vertices[i]
            let vertexNext = this.vertices[i + 1]
            if(vertexNext != undefined) {
                ctx.beginPath()
                ctx.strokeStyle = '#FF0'
                ctx.lineWidth = 2
                ctx.moveTo(vertex.x, vertex.y)
                ctx.lineTo(vertexNext.x,vertexNext.y)
                ctx.stroke()
                ctx.closePath()
            } else {
                return vertex
            }         
        }
    }


    createFigure() {
        const minSides = 1
        let last = this.vertices.length - 1
        if ( last > minSides ) {   
            this.center = this.getPolygonCentroid() 
            this.setFigureClosed(true)
        } else { alert( "Se necesitan al menos tres puntos para cerrar la figura" ) }   
    }

    draw(ctx_TP2){
        this.drawLine(ctx_TP2)
        for (let i = 0; i < this.vertices.length; i++) {
            this.vertices[i].drawCircle(ctx_TP2)   
        }
        if(this.close){
            this.drawLineClose(ctx_TP2)
            this.center.drawCircle(ctx_TP2)    
        }
    }
    drawing() {

    } 
    
    setFigureClosed(close){
        this.close = close
    }
    
    getFigureClosed(){
        return this.close;
    }

    getCenter(){
        return this.center;
    }

    discardIndex(ctx) {
        for (let i = 0; i < this.vertices.length; i++) {
            this.vertices[i] = null  
        }
        ctx.clearRect(0, 0, canvas_TP2.width, canvas_TP2.height);
        ctx.lineWidth = 10
        ctx.strokeStyle = '#6c4c75'
        ctx.strokeRect(0, 0, canvas_TP2.width, canvas_TP2.height)        
    }



}
/*
    call(){
        alert('YEAH!')
    }
    moveFigure(){
        this.center.addEventListener('click', this.call().bind(this) )
    }
    */

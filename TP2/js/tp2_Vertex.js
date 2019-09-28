class Vertex {
    constructor(x, y, radio, colour) {
        this.x = x
        this.y = y
        this.radio = radio
        this.colour = colour
    }

    drawCircle(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radio, 0,Math.PI*2,true)
        ctx.fillStyle = this.colour
        ctx.fill()
        ctx.closePath()
    }

    matchMouseVertex(x,y) { 
        if( 20 > Math.abs(get_ejeX() - x) ) {
            if( 20 > Math.abs(get_ejeY() - y) ) {
                return vertice
            }
        }
    }
    getVertex(){
        if(this && this.matchMouseVertex(MouseX,mouseY, this)) {
            console.log("es un vertice")
            return true;
        }
    }

    getRadio(){
        return this.radio
    }    
    get_ejeX(){
     return this.x   
    }
    get_ejeY(){
        return this.y   
    }
    set_ejeX(x){
     this.x = x  
    }

    set_ejeY(y){
        this.y = y 
    }
} 
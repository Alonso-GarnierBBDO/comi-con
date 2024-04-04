class CanvasDraw {

    rands : number[] = [];
    orbital : number;
    x: number;
    y: number;
    yOrigin: number;
    speed: number;
    rotation: number;
    startRotation: number
    id: number;
    stars : CanvasDraw[] = [];
    color: string;
    hoverPos: number;
    expansePos: number;
    prevR: number;
    prevX: number;
    prevY: number;
    collapseBonus: number;
    expanse: boolean;
    context: CanvasRenderingContext2D;

    constructor(
        maxorbit : number, 
        centerx : number, 
        centery : number, 
        expanse : boolean, 
        context: CanvasRenderingContext2D,
        id: number
        ){

        this.rands.push( Math.random() * (maxorbit/2) + 1 );
        this.rands.push(Math.random() * (maxorbit/2) + maxorbit);

        this.orbital = (this.rands.reduce( (p : number, c : number) => {
            return p + c;
        }, 0) / this.rands.length);

        this.x = centerx;
        this.y = centery + this.orbital;

        this.yOrigin = centery + this.orbital;

        this.speed = ( Math.floor( Math.random() * 2.5 ) + 1.5 ) * Math.PI / 180;
		this.rotation = 0; 
		this.startRotation = ( Math.floor( Math.random() * 360 ) + 1 ) * Math.PI / 180;

        this.id = id;

        this.collapseBonus = this.orbital - (maxorbit * 0.7);
		if(this.collapseBonus < 0){
			this.collapseBonus = 0;
		}

        this.stars.push(this);

        this.color = 'rgba(255, 255, 255,'+ (1 - ((this.orbital) / 255)) +')';

        this.hoverPos = centery + ( maxorbit / 2 ) + this.collapseBonus;
		this.expansePos = centery + (this.id%100)*-10 + (Math.floor(Math.random() * 20) + 1);


		this.prevR = this.startRotation;
		this.prevX = this.x;
		this.prevY = this.y;

        this.expanse = expanse;

        this.context = context;


    }

    getStarts(){
        return this.stars;
    }

    rotate(cx : number, cy : number, x : number, y : number, angle: number){

        const radians = angle;
		const cos = Math.cos(radians);
        const sin = Math.sin(radians);
		const  nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
        const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
		return [nx, ny];

    }

    draw(centerx : number, centery: number, currentTime : number, collapse: boolean){

        if(!this.expanse){
            
            this.rotation = this.startRotation + (currentTime * this.speed);

            if(!collapse){

                if(this.y > this.yOrigin){
                    this.y -= 2.5;
                }

                if(this.y < this.yOrigin-4){
					this.y += (this.yOrigin - this.y) / 10;
				}

            } else { 

				if(this.y > this.hoverPos){
					this.y-= (this.hoverPos - this.y) / -5;
				}

				if(this.y < this.hoverPos-4){
					this.y+= 2.5;
				}
			}

        } else {

			this.rotation = this.startRotation + ( currentTime * (this.speed / 2) );

			if( this.y > this.expansePos ){
				this.y -= Math.floor(this.expansePos - this.y) / -140;
			}

		}

        this.context.save();
        this.context.fillStyle = this.color;
        this.context.strokeStyle = this.color;
        this.context.beginPath();

        const oldPos = this.rotate(centerx, centery, this.prevX, this.prevY, -this.prevR);

        this.context.moveTo(oldPos[0], oldPos[1]);
		this.context.translate(centerx, centery);
		this.context.rotate(this.rotation);
		this.context.translate(-centerx, -centery);
		this.context.lineTo(this.x,this.y );
		this.context.stroke();
		this.context.restore();

        this.prevR = this.rotation;
		this.prevX = this.x;
		this.prevY = this.y;

    }

}

export default CanvasDraw;
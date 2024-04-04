/**
 * Ejecutamos el swirl "Remolino"
 */

import newCanva from "./canva/newCanva.ts";
import { canvaReturn } from "../types/index.ts";
import CanvasDraw from "./canva/draw.ts";


let ejecutar : boolean = false; // Validamo que el canva se ejecute una sola vez

let cw: number;
let ch: number;
let maxorbit: number;
let centery: number;
let centerx: number;
let startTime : number;
let currentTime : number;
let collapse : boolean;
let expanse : boolean;
const stars : CanvasDraw[] = [];



const swirlsCanvas = (fatherElement : HTMLElement) => {


    if(!ejecutar){

        // Definimos los tamaños
        cw = fatherElement.offsetWidth;
        ch = fatherElement.offsetHeight;
        maxorbit = 255;
        centery = ch / 2;
        centerx = cw / 2;
        startTime = new Date().getTime();
        currentTime = 0;
        collapse = false;
        expanse = false;

        const canvas : canvaReturn = newCanva(cw, ch);
        const context : CanvasRenderingContext2D = canvas.context;

        // Incrustamos el canva
        fatherElement.appendChild(canvas.canvaTag);

        const setDPI = (canvas : HTMLCanvasElement, dpi: number) => {

            if (!canvas.style.width){
                canvas.style.width = canvas.width + 'px';
            }
			
            if (!canvas.style.height){
                canvas.style.height = canvas.height + 'px';
            }
            
            const scaleFactor : number = dpi / 96;

            canvas.width = Math.ceil(canvas.width * scaleFactor);
            canvas.height = Math.ceil(canvas.height * scaleFactor);

            const ctx : CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
            ctx.scale(scaleFactor, scaleFactor);

        }

        setDPI(canvas.canvaTag, 192);

        const loop = () => {

            context.clearRect(0, 0, cw, ch)

            const now = new Date().getTime();

            currentTime = (now - startTime) / 50;

            context.fillStyle = 'rgba(34,13,25,0)';
            

            for(let i = 0; i < stars.length; i++){
                stars[i].draw(centerx, centery, currentTime, collapse);
            }

            window.requestAnimationFrame(loop); 

        }

        const init = () => {

            context.fillRect(0, 0, cw, ch);

            for(let i = 0; i < 2500; i++){
                stars.push(new CanvasDraw(maxorbit, centerx, centery, expanse, context, i));
            }

            loop();

        }

        init();

        ejecutar = true;
    }

}

export default swirlsCanvas;
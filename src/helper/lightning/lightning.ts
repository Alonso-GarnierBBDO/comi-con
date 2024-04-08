let ejecutado = false;

type Bolt = {
    canvas: HTMLCanvasElement;
    duration: number;
};

const Ligtning = (canva : HTMLCanvasElement) => {

    if(!ejecutado){

        let 
            flashOpacity : number, 
            height : number, 
            lastFrame : number, 
            tick, 
            width : number;

        const canvas = canva;
        const context = canva.getContext('2d');

        width = 0.0;
        height = 0.0;
        const scale = 1.0;

        const fps = 45.0;
        lastFrame = (new Date()).getTime();
        flashOpacity = 0.0;


        const boltFlashDuration = 0.25;
        const boltFadeDuration = 0.5;
        const totalBoltDuration = boltFlashDuration + boltFadeDuration;

        const bolts : Bolt[] = [];


        const setCanvasSize : () => number = () => {
            let bolt, j, len;
            canvas.setAttribute("width", `${window.innerWidth}`);
            canvas.setAttribute("height", `${window.innerHeight}`);
            for (j = 0, len = bolts.length; j < len; j++) {
              bolt = bolts[j];
              bolt.canvas.width = window.innerWidth;
              bolt.canvas.height = window.innerHeight;
            }
            width = Math.ceil(window.innerWidth / scale);
            return height = Math.ceil(window.innerHeight / scale);
        };


        const launchBolt = function(x : number, y : number, length : number, direction : number) : (x: number, y: number, length: number, direction: number, boltContext: number) => number {

            // Set the flash opacity.
            flashOpacity = 0.15 + Math.random() * 0.2;
            
            // Create the bolt canvas.
            const boltCanvas = document.createElement("canvas");
            boltCanvas.width = window.innerWidth;
            boltCanvas.height = window.innerHeight;
            const boltContext : CanvasRenderingContext2D = boltCanvas.getContext("2d") as CanvasRenderingContext2D;
            boltContext.scale(scale, scale);
            
            // Add the bolt to the list.
            bolts.push({
              canvas: boltCanvas,
              duration: 0.0
            });
            
            // Launch it!!
            return recursiveLaunchBolt(x, y, length, direction, boltContext);
          };
            

        const recursiveLaunchBolt = function(x : number, y : number, length : number, direction : number, boltContext: number) : (x: number, y: number, length: number, direction: number, boltContext: number) => number {
            let boltInterval;

            const originalDirection = direction;
            
            // We draw the bolt incrementally to get a nice animated effect.
            return boltInterval = setInterval((function() {
              let alpha, i, x1, y1;
              if (length <= 0) {
                clearInterval(boltInterval);
                return;
              }
              i = 0;
              while (i++ < Math.floor(45 / scale) && length > 0) {
                x1 = Math.floor(x);
                y1 = Math.floor(y);
                x += Math.cos(direction);
                y -= Math.sin(direction);
                length--;
                if (x1 !== Math.floor(x) || y1 !== Math.floor(y)) {
                  alpha = Math.min(1.0, length / 350.0);
                  boltContext.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                  boltContext.fillRect(x1, y1, 1.0, 1.0);
                  direction = originalDirection + (-Math.PI / 8.0 + Math.random() * (Math.PI / 4.0));
                  if (Math.random() > 0.98) {
                    recursiveLaunchBolt(x1, y1, length * (0.3 + Math.random() * 0.4), originalDirection + (-Math.PI / 6.0 + Math.random() * (Math.PI / 3.0)), boltContext);
                  } else if (Math.random() > 0.95) {
                    recursiveLaunchBolt(x1, y1, length, originalDirection + (-Math.PI / 6.0 + Math.random() * (Math.PI / 3.0)), boltContext);
                    length = 0;
                  }
                }
              }
              return void 0;
            }), 10);
          };



          tick = function() {
            let bolt, elapsed, frame, i, j, len, length, x, y;
            // Keep track of the frame time.
            frame = (new Date()).getTime();
            elapsed = (frame - lastFrame) / 1000.0;
            lastFrame = frame;
            
            // Clear the canvas.
            context.clearRect(0.0, 0.0, window.innerWidth, window.innerHeight);
            
            // Fire a bolt every once in a while.
            if (Math.random() > 0.98) {
              x = Math.floor(-10.0 + Math.random() * (width + 20.0));
              y = Math.floor(5.0 + Math.random() * (height / 3.0));
              length = Math.floor(height / 2.0 + Math.random() * (height / 3.0));
              launchBolt(x, y, length, Math.PI * 3.0 / 2.0);
            }
            
            // Draw the flash.
            if (flashOpacity > 0.0) {
              //context.fillStyle = `rgba(255, 255, 255, ${flashOpacity})`;
              //context.fillRect(0.0, 0.0, window.innerWidth, window.innerHeight);
              //flashOpacity = Math.max(0.0, flashOpacity - 2.0 * elapsed);
            }
        
            // Draw each bolt.
            for (i = j = 0, len = bolts.length; j < len; i = ++j) {
              bolt = bolts[i];
              bolt.duration += elapsed;
              if (bolt.duration >= totalBoltDuration) {
                bolts.splice(i, 1);
                i--;
                return;
              }
              context.globalAlpha = Math.max(0.0, Math.min(1.0, (totalBoltDuration - bolt.duration) / boltFadeDuration));
              context.drawImage(bolt.canvas, 0.0, 0.0);
            }
            return void 0;
        };


        window.addEventListener("resize", setCanvasSize);

        setCanvasSize();

        setInterval(tick, 1000.0 / fps);



        ejecutado = true;

    }

}

export default Ligtning;
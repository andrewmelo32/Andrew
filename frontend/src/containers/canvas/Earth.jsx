import React, {useLayoutEffect, useState, useRef} from 'react';
import './earth.css';



// Menu will need a new prop for asteroid information
function Earth({ earthMenuVisible }) {

    console.log( 'Inside Earth Screen' );
    const [ canvasDimensions, setCanvasDimensions ] = useState({ width: 0, height: 0 });
    const canvasRef = useRef( null );

    useLayoutEffect( () => {
        
        const canvas = canvasRef.current;
    
        const context2 = canvas.getContext( '2d' );
    
        const resizeCanvas = () => {
          
          canvas.width = window.innerWidth * 0.78;
          canvas.height = window.innerHeight * 0.79;

          // calculate the radius based on the size of the canvas
          const earthRadius = Math.min( canvas.width, canvas.height ) * 0.3;
          const venusRadius = Math.min( canvas.width, canvas.height ) * 0.26;
    
          context2.fillStyle = 'black';
          context2.fillRect( 0, 0, canvas.width, canvas.height );
    
          setCanvasDimensions( {width: canvas.width, height: canvas.height} );
          
          // need to call functions to draw the Earth and Venus inside of resizeCanvas function so that
          // whenever the canvas is resized the Earth and Venus don't disapear
          drawEarth( earthRadius );
          drawVenus( venusRadius );
          
        } // end resizeCanvas function

        // function to draw the earth
        const drawEarth = ( radius ) => {
            const x = canvas.width / 2;
            const y = canvas.height / 2;
            context2.beginPath();
            context2.moveTo( x, y );
            context2.arc( x, y, radius, 0, Math.PI * 2 );
            context2.fillStyle = '#0076FF';
            context2.fill();
            context2.closePath();
        } // end drawEarth function

        const drawVenus = ( radius ) => {
            context2.beginPath();
            context2.moveTo( -100, canvas.height / 2 );
            context2.arc( -100, canvas.height / 2, radius, 3 * Math.PI, Math.PI / 2 );
            context2.fillStyle = '#C57F00';
            context2.fill();
            context2.closePath();
        } // end drawVenus function

        resizeCanvas();

        // listener to handle resizing of screen
        window.addEventListener( 'resize', resizeCanvas );
            return () => {
            window.removeEventListener( 'resize', resizeCanvas );
        };

    }, []);

    return (
        <div className = 'frontend__containers__earth' style = {canvasDimensions}>
            <canvas ref={canvasRef} className="earth-canvas" />
        </div>
      );
} // end Earth function

export default Earth;
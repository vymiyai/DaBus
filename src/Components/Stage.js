"use strict";

// stage component which will handle all graphical complexity.
var Stage = function()
{
    // accepted operations that this component can perform.
    this.operations             = ["add"];
    
    // instantiate the stage.
    this.stage                  = new createjs.Stage( "STAGE" );
    this.stage.canvas.width     = window.innerWidth; 
    this.stage.canvas.height    = window.innerHeight;
    
    // adds a displayObject into the stage.
    this.add = function( args )
    {
        alert( "ADD!" );
        
        //this.stage.addChild( args.displayObject );
        return true;
    };
};
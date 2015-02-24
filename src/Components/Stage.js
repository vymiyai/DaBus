"use strict";

// stage component which will handle all graphical complexity.
var Stage = function()
{
    // accepted operations that this component can perform.
    this.operations             = ["addShape"];
    
    // reference to the ESB.
    this.ESB                    = null;
    
    // setter for the Enterprise Service Bus reference.
    this.setESB = function( esb )
    {
        this.ESB = esb;
    };
    
    // instantiate the stage. STAGE is the ID of the HTML canvas element.
    this.stage                  = new createjs.Stage( "STAGE" );
    this.stage.canvas.width     = window.innerWidth; 
    this.stage.canvas.height    = window.innerHeight;
    
    // adds a displayObject into the stage.
    this.addShape = function( args )
    {
        this.stage.addChild( args.displayObject );
        this.stage.update();
    };
};
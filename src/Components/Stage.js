"use strict";

// stage component which will handle all graphical complexity.
var Stage = function()
{
    // accepted operations that this component can perform.
    this.operations             = [ "addShape", "clearScreen" ];
    
    // reference to the ESB.
    this.ESB                    = null;
    
    // setter for the Enterprise Service Bus reference.
    this.setESB = function( esb )
    {
        this.ESB = esb;
    };
    
    // instantiate the stage. STAGE is the ID of the HTML canvas element.
    var stage               = new createjs.Stage( "STAGE" );
    
    // set stage dimensions.
    stage.canvas.width      = window.innerWidth; 
    stage.canvas.height     = window.innerHeight;
    
    // set desired FPS.
    createjs.Ticker.setFPS( 30 );

    // update canvas a each tick.
    var tick = function( evt )
    {
        stage.update( evt );
    };
    createjs.Ticker.addEventListener( "tick", tick );

    // enable touch events.
    createjs.Touch.enable( stage );

    // to get onMouseOver & onMouseOut events, we need to enable them on the stage.
    stage.enableMouseOver();
    
    this.stage  = stage;
    
    // adds a displayObject into the stage.
    this.addShape = function( args )
    {
        this.stage.addChild( args.displayObject );
        this.stage.update();
    };
    
    // erases all display objects on stage.
    this.clearScreen = function( args )
    {
        this.stage.removeAllChildren();
    };
    
};
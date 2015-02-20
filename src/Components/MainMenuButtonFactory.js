"use strict";

// helper component used to instantiate buttons for the main menu.
// entry point for the main menu button creation pipeline.
var MainMenuButtonFactory = function()
{
    // constants.
    var STROKE_COLOR    = "black";
    var FILL_COLOR      = "gray";
    var LABEL_COLOR     = "white";
    var WIDTH           = 500;
    var HEIGHT          = 200;
    
    // accepted operations that this component can perform.
    this.operations         = [ "addMainMenuButton" ];
    
    // reference to the ESB.
    this.ESB                    = null;    
    
    // instantiates a base main menu button.
    this.addMainMenuButton   = function( args )
    {
        // retrieve the text label if the button.
        var text = args.label;
        
        // instantiate the container.
        var container       = new createjs.Container();
        
        // instantiate the button.
        var button          = new createjs.Shape();
        button.name         = text;
        button.graphics.beginStroke( STROKE_COLOR )
            .beginFill( FILL_COLOR )
            .drawRect( -WIDTH/2, -HEIGHT/2, WIDTH, HEIGHT );
    
        container.addChild( button );
        
        // instantiate the label.
        var label           = new createjs.Text( text );
        label.color         = LABEL_COLOR;
        label.x             = -label.getMeasuredWidth()/2;
        label.y             = -label.getMeasuredHeight()/2;
        
        container.addChild( label );
        
        //this.ESB.request( "setMainMenuButtonPositioning", { "label":text, "displayObject":container } );
        this.ESB.request( "addShape", { displayObject:container } )
    };
    
    // setter for the Enterprise Service Bus reference.
    this.setESB = function( esb )
    {
        this.ESB = esb;
    };
};
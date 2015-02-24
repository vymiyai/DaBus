"use strict";

// helper component used to position buttons for the main menu.
var MainMenuButtonPositioner = function()
{
    // values.
    this.positions                  = {};
    this.positions[ "NEW GAME" ]    = { x: window.innerWidth/2, y: window.innerHeight/2 - 50 };
    this.positions[ "LOAD GAME" ]   = { x: window.innerWidth/2, y: window.innerHeight/2 };
    this.positions[ "QUIT" ]        = { x: window.innerWidth/2, y: window.innerHeight/2 + 50};
    
    // accepted operations that this component can perform.
    this.operations         = [ "positionMainMenuButton" ];
    
    // reference to the ESB.
    this.ESB                    = null;    
    
    // positions a main menu button to its assigned coordinates.
    this.positionMainMenuButton = function( args )
    {
        var label   = args.label;
        var button  = args.displayObject;
        
        if( typeof this.positions[ label ] === "undefined" )
        {
            throw "No positioning data is available for the main menu button " + label;
        }
        else
        {
            button.x   = this.positions[ label ].x;
            button.y   = this.positions[ label ].y;
            
            // pass button to next component.
            this.ESB.request( "addMainMenuButtonListener", { "label":label, "displayObject":button } );
        }
    };
    
    // setter for the Enterprise Service Bus reference.
    this.setESB = function( esb )
    {
        this.ESB = esb;
    };
};
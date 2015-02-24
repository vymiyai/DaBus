"use strict";

// helper component used to add listeners for buttons in the main menu.
var MainMenuButtonListener = function( game )
{
    // listeners.
    this.listeners                  = {};
    this.listeners[ "NEW GAME" ]    = function( evt, data ){ alert( "NEW GAME!" ); };
    this.listeners[ "LOAD GAME" ]   = function( evt, data ){ alert( "LOAD GAME!" ); };
    this.listeners[ "QUIT" ]        = function( evt, data ){ this.game.setState( new Quit() ); this.game.run(); };
    
    // accepted operations that this component can perform.
    this.operations         = [ "addMainMenuButtonListener" ];
    
    // reference to the ESB.
    this.ESB                = null;    
    
    // reference to the game object.
    this.game               = game;
    
    // adds a click listener to the button based on its label.
    this.addMainMenuButtonListener = function( args )
    {
        var label   = args.label;
        var button  = args.displayObject;
        
        if( typeof this.listeners[ label ] === "undefined" )
        {
            throw "No listener is available for the main menu button " + label;
        }
        else
        {
            // set the event listener to the button.
            button.on( "click", this.listeners[ label ], this, false );
            
            // pass button to next component.
            this.ESB.request( "addShape", { "label":label, "displayObject":button } );
        }
    };
    
    // setter for the Enterprise Service Bus reference.
    this.setESB = function( esb )
    {
        this.ESB = esb;
    };
};
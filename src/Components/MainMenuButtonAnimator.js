"use strict";

// helper component used to define animations for buttons in the main menu.
var MainMenuButtonAnimator = function()
{
    // accepted operations that this component can perform.
    this.operations         = [ "animateMainMenuButton" ];
    
    // reference to the ESB.
    this.ESB                    = null;
    
    // setter for the Enterprise Service Bus reference.
    this.setESB = function( esb )
    {
        this.ESB = esb;
    };
    
    // positions a main menu button to its assigned coordinates.
    this.animateMainMenuButton = function( args )
    {
        var label   = args.label;
        var button  = args.displayObject;
        
        // add listener only after the animation has ended.
        button.alpha    = 0;
        createjs.Tween.get( button )
            .to( { alpha:1 }, 500, createjs.Ease.linear )
            .call( function(){ this.ESB.request( "addMainMenuButtonListener", { "label":label, "displayObject":button } ); }, null, this );
        
        // pass button to next component.
        this.ESB.request( "addShape", { "label":label, "displayObject":button } );
    };
};
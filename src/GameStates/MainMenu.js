"use strict";

// the state class responsible for setting up the main menu.
var MainMenu = function()
{
    // the name of this state.
    this.name       = "MAIN MENU";
    
    // getter for this state's name.
    this.getName    = function()
    {
        return this.name;
    };
    
    // setter for a new state.
    this.setState   = function( state )
    {
        this.state  = state;
    };
    
    // shows the main menu.
    this.run        = function( game )
    {
        alert( "MAIN MENU" );
        game.setState( new Quit() );
    };
};
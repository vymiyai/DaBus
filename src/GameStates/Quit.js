"use strict";

// the state class responsible for disallocating everything before the game closes.
var Quit = function()
{
    // the name of this state.
    this.name       = "QUIT";
    
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
    
    // the method called when the state is dismissed.
    this.dismiss    = function()
    {
        
    };
    
    // shows the main menu.
    this.run        = function( game )
    {
        game.request( "clearScreen", {} );
    };
};
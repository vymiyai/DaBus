"use strict";

// the state class responsible for setting up everything before the game can actually start.
var StartUp = function()
{
    // the name of this state.
    this.name       = "START UP";
    
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
    
    // makes all necessary initializations for the game before transcending to the menu state.
    this.run        = function( game )
    {
        alert( "START UP" );
        game.register( new Stage() );
        game.register( new MainMenuButtonFactory() );
        game.register( new MainMenuButtonPositioner() );
        game.setState( new MainMenu() );
    };
};
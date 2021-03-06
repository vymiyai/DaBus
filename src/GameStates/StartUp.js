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
    
    // the method called when the state is dismissed.
    this.dismiss    = function()
    {
        
    };
    
    // makes all necessary initializations for the game before transcending to the menu state.
    this.run        = function( game )
    {
        game.register( new Stage() );
        game.register( new Flagger() );
        game.register( new MainMenuButtonFactory() );
        game.register( new MainMenuButtonPositioner() );
        game.register( new MainMenuButtonListener( game ) );
        game.register( new MainMenuButtonAnimator() );
        game.runState( new MainMenu() );
    };
};
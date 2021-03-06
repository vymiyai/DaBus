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
    
    // the method called when the state is dismissed.
    this.dismiss    = function()
    {
        
    };
    
    // shows the main menu.
    this.run        = function( game )
    {
        game.request( "off", { flag:"mainMenu" } );
        game.request( "addMainMenuButton", {  label:"NEW GAME" } );
        game.request( "addMainMenuButton", {  label:"LOAD GAME" } );
        game.request( "addMainMenuButton", {  label:"QUIT" } );
        game.request( "on", { flag:"mainMenu" } )
    };
};
"use strict";

// empty state object.
var End = function()
{
    // the name of this state.
    this.name       = "END";
    
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
    {};
};
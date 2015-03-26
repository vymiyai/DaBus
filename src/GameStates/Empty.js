"use strict";

// an empty state.
var Empty = function()
{
    // the name of this state.
    this.name       = "EMPTY";
    
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
    
    // do nothing when dismissed.
    this.dismiss    = function()
    {
        
    };
    
    // do nothing.
    this.run        = function( game )
    {
        
    };
};
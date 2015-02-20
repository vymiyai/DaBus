"use strict";

// the top-most class responsible of keeping track of the game states.
var Game = function()
{
    // the name of the current state.
    this.stateName  = "START UP";
    
    // the instance of the current state.
    this.state  =   new StartUp();
    
    // contains an instance of a service bus.
    this.ESB    =   new EnterpriseServiceBus();
    
    // setter for a new state.
    this.setState   = function( state )
    {
        this.state      = state;
        this.stateName  = state.getName();
    };
    
    // getter for the current state.
    this.getState   = function()
    {
        return this.state;
    };
    
    // runs the script defined in the current state.
    this.run        = function()
    {
        this.state.run( this );
    };
};
"use strict";

// the top-most class responsible of keeping track of the game states.
var Game = function()
{
    // the name of the current state.
    this.stateName  = "START UP";
    
    // the instance of the current state.
    this.state  =  new Empty();
    
    // contains an instance of a service bus.
    this.ESB    =   new EnterpriseServiceBus();
    
    // convenience method that delegates the registration of a component into the ESB.
    this.register   = function( component )
    {
        this.ESB.register( component );
    };
    
    // convenience method that delegates the escalation of a request.
    this.request    = function( operation, args )
    {
        return this.ESB.request( operation, args );
    };
    
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
    
    // runs the script defined in the current state after dismissing the brevious state.
    this.runState   = function( state )
    {
        this.state.dismiss();
        this.setState( state );
        this.state.run( this );
    };
};
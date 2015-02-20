"use strict";

// the proof of concept class for decoupling, the Enterprise Service Bus of the game...
var EnterpriseServiceBus = function()
{
    // this attribute should be a hash table that will store all the registered components.
    this.components                 = {};
    
    // adds the component to the array of components.
    this.register                   =   function( command, component )
    {
        this.components[ command ]  =   component;
    };
    
    // dispatches the execution of a command to the responsible component.
    this.request        = function( command, args )
    {
        this.components[ command ].execute( args );
    };
    
};
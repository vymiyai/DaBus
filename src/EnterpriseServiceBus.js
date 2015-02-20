"use strict";

// the proof of concept class for decoupling, the Enterprise Service Bus of the game...
var EnterpriseServiceBus = function()
{
    // this attribute should be a hash table that will store all the registered components.
    this.components                 = {};
    
    // adds the component to the array of components.
    this.register                   =   function( component )
    {
        // for each operation in the component, register the component by executable operation.
        for( var index in component.operations )
        {
            var operation = component.operations[ index ];
            
            if( typeof this.components[ operation ] === 'undefined' )
                this.components[ operation ] = component;
            else
                throw "An existing component already deals with this operation!";
        }
        
        // set ESB reference for chaining.
        this.components[ operation ].setESB( this );
    };
    
    // dispatches the execution of an operation to the responsible component.
    this.request        = function( operation, args )
    {
        // retrieve the component that performs the requested operation.
        var component   = this.components[ operation ];
        
        // check if there is a component responsible to perform the operation.
        if( typeof component === 'undefined' )
        {
            throw "There is no component assigned to execute operation:" + operation;
        }
        else
        {
            // call the operation with the given arguments.                         // TODO USAR RETORNO...
            var result      = component[ operation ]( args );
        }
        
        return result;
    };
    
};
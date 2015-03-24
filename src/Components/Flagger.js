"use strict";

// helper component used to manage flags (notably, for click listeners).
var Flagger = function()
{
    // flags.
    this.flags  = { "mainMenu": true };
    
    // accepted operations that this component can perform.
    this.operations         = [ "on", "off", "get" ];
    
    // reference to the ESB.
    this.ESB                = null;
    
    // setter for the Enterprise Service Bus reference.
    this.setESB = function( esb )
    {
        this.ESB = esb;
    };
    
    // turns the flag true.
    this.on = function( args )
    {
        try 
        {
            var flag = args.flag;
            this.flags[ flag ] = true;
        } 
        catch (e) 
        {
            throw "The flag '" + flag + "' is not defined in the Flagger component."
        }

    };
    
    // turns the flag off.
    this.off = function( args )
    {
        try 
        {
            var flag = args.flag;
            this.flags[ flag ] = false;
        } 
        catch (e) 
        {
            throw "The flag '" + flag + "' is not defined in the Flagger component."
        }
    };
    
    // returns the flag value.
    this.get = function( args )
    {
        try 
        {
            var flag = args.flag;
            return this.flags[ flag ];
        } 
        catch (e) 
        {
            throw "The flag '" + flag + "' is not defined in the Flagger component."
        }
    };
    
};
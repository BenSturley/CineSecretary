// 
// db.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastore/engine/dev/src/db.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  6 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # Self-developed datastore
// # 

const fn = function( { datastore = null } = {} ) {

    const insertHandler = doc => {
        if ( doc === undefined ) {
            throw new ReferenceError( 'No document supplied to save to datastore!' );
        }
        if ( !( typeof doc === 'object' && doc !== null ) ) {
            throw new TypeError( 'Object to save must be an object!' );
        }
        
        // convert doc to JSON
        const json = JSON.stringify( doc );
    
        const context = require('../../../../tests/framework/TestingContext');
        context.messenger.info(json);

    };
    
    return {
        insert:     insertHandler
    }
};

module.exports = fn;

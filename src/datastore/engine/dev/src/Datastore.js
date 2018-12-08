// 
// db.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastore/engine/dev/src/db.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  6 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # Plans for self-developed datastore
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const fn = function( { datastore = null } = {} ) {

    const insertHandler = doc => {
        if ( doc === undefined ) {
            throw new ReferenceError( '' );
        }
        
        

    };
    
    return {
        insert:     insertHandler
    }
};

module.exports = fn;

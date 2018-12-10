// 
// init.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastore/engine/dev/src/init.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   6 December 2018
//  10 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
// 
const init = ( context ) => {
    
    context.messenger.message('Requiring reference to Datastore...');
    const Datastore = require('./Datastore');
    const db = new Datastore();
    
    // define and insert non-object
    const nonObj = 345;
    try {
        db.insert( nonObj );
    }
    catch (err) {
        context.messenger.error( err, `Tried to insert: ${nonObj}` );
    }

    // define and insert document object
    const doc = { 
        id: 1, 
        name: 'Ben', 
        email: 'bensturley@gmail.com' 
        };
    try {
        db.insert( doc );
        context.messenger.info('Insert appeared to work.');
    }
    catch (err) {
        context.messenger.error( err );
    }

    //Datastore.remove( { id: 1, name: 'Ben', email: 'bensturley@gmail.com'} );
};

module.exports = init;
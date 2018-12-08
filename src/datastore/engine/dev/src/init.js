// 
// init.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastore/engine/dev/src/init.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  6 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
// 
const init = ( context ) => {
    
    console.log('Requiring reference to Datastore...');
    const Datastore = require('./Datastore');
    const db = new Datastore();
    
    const doc = 
    { 
        id: 1, 
        name: 'Ben', 
        email: 'bensturley@gmail.com' 
    };
    db.insert( doc );

    //Datastore.remove( { id: 1, name: 'Ben', email: 'bensturley@gmail.com'} );
};

module.exports = init;
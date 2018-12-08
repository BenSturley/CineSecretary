// 
// nedb-test-0.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/nedb-test-0.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  4 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const testerFn = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('Test requires TestingContext.');
    }

    // set up context data
    context.current_test_name = 'NeDB Test 0 (pre-test)';
    context.is_current_test_started = true;

    // var Datastore = require('nedb');  
    // const dirname = 'c:/Users/Owner/dev/CineSecretary/CineSecretary/src/datastore/_test-store.db';
    // var db = new Datastore({ filename: dirname });

    // db.loadDatabase(function(err) {
    //     console.log()
    // });

    var Datastore = require('nedb');  
    var users = new Datastore();

    var scott = {  
        name: 'Scott',
        twitter: '@ScottWRobinson'
    };

    users.insert(scott, 
        function(err, doc) { 
            console.log('Inserted', doc.name, 'with ID', doc._id);
        });

    context.is_current_test_completed = true;

};

module.exports = {
    run_test:       testerFn,
    test_name:      'NeDB pre-test',
    is_async:       false,
    enabled:        false,
};
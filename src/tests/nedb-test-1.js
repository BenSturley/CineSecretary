// 
// nedb-test-1.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/nedb-test-1.js
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
    context.current_test_name = 'NeDB Test 1';
    context.is_current_test_started = true;
    
    // todo: fix this!
    const dbfiledir = 'c:/Users/Owner/dev/CineSecretary/CineSecretary/src/Datastore/_test-store.db';
    context.messenger.message(`__dirname: ${__dirname}`);
    context.messenger.message(`__dirname: ${dbfiledir}`);

    




    
    // set up context data
    context.is_current_test_completed = true;

};

module.exports = {
    run_test:   testerFn,
    test_name:  'NeDB Test 1',
    is_async:   false,
    enabled:    false,
};
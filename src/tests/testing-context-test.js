//
// testing-context-test.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/testing-context-test.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  4 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 
const testerFn = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('Test requires TestingContext.');
    }
    
    context.current_test_name = 'Testing Context Test';
    context.is_current_test_started = true;
 
    context.messenger.info('Creating %cinfo!', 'font-weight: bold; color: green;');
    context.messenger.message('Created message!');
    context.messenger.error('%cCreated error!', 
        'color:red; font-weight: bold;');
    
    context.is_current_test_completed = true;
};

module.exports = {
    run_test:   testerFn,
    test_name:  'Testing Context Test',
    is_async:   false,
    enabled:    false,
};
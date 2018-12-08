// 
// console-test.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/console-test.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  4 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const tester = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('Test requires TestingContext.');
    }
    
    context.current_test_name = 'Console Test';
    context.is_current_test_started = true;

    console.log('Console Test: %cThis should be styled.', 
        'color: green; '
        + 'font-weight: bold; '
        + 'text-decoration: underline'
        );

    context.is_current_test_completed = true;

};

module.exports = {
    run_test:   tester, 
    test_name:  'Console Test',
    is_async:   false,
    enabled:    false,
};
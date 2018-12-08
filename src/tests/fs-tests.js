// 
// fs-tests.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/fs-tests.js
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
    context.current_test_name = 'FS Test';
    context.is_current_test_started = true;
    
    const fs = require('fs');
    const path = require('path');
    
    const filePath = path.join( __dirname, 'assets', 'fs-test-file.txt' );
    context.messenger.message(`filePath: ${filePath}`);
    
    
    context.is_current_test_completed = true;

};

module.exports = {
    run_test:   testerFn,
    test_name:  'FS Tests',
    is_async:   false,
    enabled:    true,   
};
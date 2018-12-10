// 
// fs-tests-delete.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/fs-tests-delete.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  10 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const deleter = ( context ) => {

    if ( context === undefined ) {
       throw new ReferenceError('Test requires TestingContext.');
    }
    context.current_test_name = 'FS Read Test';
    context.is_current_test_started = true;
    
    const fs = require('fs');

    // delete file
    try {
        fs.unlinkSync( filePath );
        context.messenger.info(`File deleted: "${filePath}"`);
    } 
    catch (err) {
        context.messenger.error(err, `Error deleting file: "${filePath}"`);
    }

    context.is_current_test_completed = true;

};

module.exporst = {
    run_test:       deleter,
    test_name:      'FS Delete Tests', 
    is_async:       false,
    is_enabled:     false,
};
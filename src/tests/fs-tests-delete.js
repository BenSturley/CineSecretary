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
    context.current_test_name = 'FS Delete Test';
    context.is_current_test_started = true;
    
    const fs = require('fs');

    // get file path
    const filePath = 'C:\\Users\\Owner\\dev\\CineSecretary\\CineSecretary\\src\\tests\\assets\\fs-test-file-delete.txt';

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

module.exports = {
    run_test:       deleter,
    test_name:      'FS Delete Tests', 
    is_async:       false,
    enabled:     true,
};
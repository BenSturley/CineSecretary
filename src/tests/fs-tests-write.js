// 
// fs-tests-write.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/fs-tests-write.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  8 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const testerFn = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('Test requires TestingContext.');
    }
    context.current_test_name = 'FS Write Test';
    context.is_current_test_started = true;
    
    const pathStore = require('./assets/getDataStoreFilePath');
    const filePath = pathStore.getFilePath();
    context.messenger.message(`filePath: ${filePath}`);
    
    // get constants
    const globals = require('./assets/getDataStoreContants');

    // get fs ref
    const fs = require('fs');

    // check if file exists
    let fileExists = fs.existsSync( filePath );
    context.messenger.info( `File exists: ${fileExists}` );
    
    if ( !fileExists ) {
        
        // create the file
        context.messenger.message( 'Creating header content...' );
        const headerData = new Uint8Array(
            Buffer.from( globals.NEW_DATASTORE_FILE_HEADER_CONTENT )
            );

        context.messenger.message( 'Writing header content...' );
        fs.writeFileSync(filePath, headerData, (err) => {
            if (err) {
                context.messenger.error( err, 
                    `Error writing header to new datastore file at: "${filePath}"` 
                    );
            }
        });
    }

    // re-check if file exists
    fileExists = fs.existsSync( filePath );
    context.messenger.info( `File exists: ${fileExists}` );

    // get content to insert
    const writeContent =fs.readFileSync(
        'C:\\Users\\Owner\\dev\\CineSecretary\\CineSecretary\\src\\tests\\assets\\test-write-data.txt' 
        , );
    
    if ( fileExists ) {

        // open this file and write the content
        try {
            fs.appendFileSync( filePath, writeContent );
            context.messenger.info( 'Data successfully written.' );
        }
        catch (err) {
            context.messenger.error( err, `Error writing to: "${filePath}"` );
        }
    }

    context.is_current_test_completed = true;

};

module.exports = {
    run_test:   testerFn,
    test_name:  'FS Write Tests',
    is_async:   false,
    enabled:    true,
};
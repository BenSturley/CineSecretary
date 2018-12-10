// 
// fs-tests-read.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/fs-tests-read.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  8 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const testerFn = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError( 'Test requires TestingContext.' );
    }
    context.current_test_name = 'FS Read Test';
    context.is_current_test_started = true;

    // get constants
    const globals = require('./assets/getDataStoreContants');
    
    // get file path
    const pathStore = require('./assets/getDataStoreFilePath');
    const filePath = pathStore.getFilePath();
    
    // get fs ref
    const fs = require('fs');

    // check if file exists
    let fileExists = fs.existsSync( filePath );
    context.messenger.info( `FILE EXISTS: ${fileExists}` );
    
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

    // create content to insert
    const fileContent = [];
    
    if ( fileExists ) {

        // open this file and grab its content
        const stream = fs.createReadStream( filePath );

        stream.on('readable', () => {
            let chunk;
            while (null !== (chunk = stream.read())) {
                fileContent.push(chunk);
                console.log( `Received ${chunk.length} bytes of data.` );
                context.messenger.message( `fileContent.length: ${fileContent.length}` );
            }
          });
          

        stream.on( 'end', () => {
            fileContent.push( globals.DATASTORE_FILE_DATA_END_MARKER );
            stream.close();
            context.messenger.info( 'Stream closed.' );
        });
    }

    context.is_current_test_completed = true;

};

module.exports = {
    run_test:   testerFn,
    test_name:  'FS Read Tests',
    is_async:   false,
    enabled:    false,
};
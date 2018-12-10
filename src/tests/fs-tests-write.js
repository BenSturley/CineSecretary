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
    
    const path = require('path');
    const filePath = path.join( __dirname, 'assets', 'fs-test-file.txt' );
    context.messenger.message(`filePath: ${filePath}`);
    
    // get fs ref
    const fs = require('fs');
    
    // check if file exists
    let fileExists = fs.existsSync( filePath );
    context.messenger.info( `File exists: ${fileExists}` );
    
    if ( !fileExists ) {
        
        // create the file
        context.messenger.message( 'Creating header content...' );
        const headerData = new Uint8Array(
            Buffer.from(NEW_DATASTORE_FILE_HEADER_CONTENT)
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
                console.log(`Received ${chunk.length} bytes of data.`);
                context.messenger.message( `fileContent.length: ${fileContent.length}` );
            }
          });
          

        stream.on( 'end', () => {
            // fileContent.push('[[data-ends]]');
            fileContent.push( DATASTORE_FILE_DATA_END_MARKER );
            stream.close();
            context.messenger.info( 'Stream closed.' );

            fileContent.forEach(f  => {
                context.messenger.message( f );
                });
        });

    }

    context.is_current_test_completed = true;

};

module.exports = {
    run_test:   testerFn,
    test_name:  'FS Write Tests',
    is_async:   false,
    enabled:    false,
};
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
    
    const path = require('path');
    const filePath = path.join( __dirname, 'assets', 'fs-test-file.txt' );
    context.messenger.message(`filePath: ${filePath}`);
    
    // get fs ref
    const fs = require('fs');
    
    // check if file exists
    const fileExists = fs.existsSync( filePath );
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
            fileContent.push('[[data-ends]]');
            stream.close();
            context.messenger.info( 'Stream closed.' );
        });

        fileContent.forEach(f  => {
            context.messenger.info( f );
            });

    }
    else {
        context.messenger.error( 'File does not exist.' );
    }

    context.is_current_test_completed = true;

};

module.exports = {
    run_test:   testerFn,
    test_name:  'FS Tests',
    is_async:   false,
    enabled:    true,   
};
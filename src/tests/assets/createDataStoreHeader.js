// 
// fs-tests-common.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/assets/createDataStoreHeader.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  9 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const createDataStoreHeader = function( filePath ) {

    // get common constants
    const constants = require('./fs-tests-common');
    const fs = require('fs');
    
    // create the file
    const context = require('./framework/TestingContext');
    context.messenger.message( 'Creating header content...' );
    const headerData = new Uint8Array(
        Buffer.from(constants.NEW_DATASTORE_FILE_HEADER_CONTENT)
        );

    context.messenger.message( 'Writing header content...' );
    fs.writeFileSync(filePath, headerData, (err) => {
        if (err) {
            context.messenger.error( err, 
                `Error writing header to new datastore file at: "${filePath}"` 
                );
        }
    });
};

module.exports.createDataStoreHeader = createDataStoreHeader;
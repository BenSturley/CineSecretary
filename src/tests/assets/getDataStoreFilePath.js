//
// getDataStoreFilePath.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/getDataStoreFilePath.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  10 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const getFileStorePath = function() {

    const getPathHandler = () => {
        const path = require('path');
        const filePath = 
            path.join( 
                __dirname, 
                //'assets', 
                'fs-test-file.txt' 
                );
        return filePath;
    };

    return {
        getFilePath:    getPathHandler
    }
};

module.exports = getFileStorePath();

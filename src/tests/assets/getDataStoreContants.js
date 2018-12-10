// 
// getDataStoreContants.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/assets/getDataStoreContants.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  9 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const getDataStoreContants = function() {
    
    const globals = require('../../_globals');
    const app_name = globals.APP_NAME;
    const NEW_DATASTORE_FILE_HEADER_CONTENT = `## ${app_name} DATASTORE FILE ##`;
    const DATASTORE_FILE_DATA_END_MARKER = `## DATA RECORD ENDS ##`;
    
    return {        
        NEW_DATASTORE_FILE_HEADER_CONTENT:      NEW_DATASTORE_FILE_HEADER_CONTENT,
        DATASTORE_FILE_DATA_END_MARKER:         DATASTORE_FILE_DATA_END_MARKER,
        app_name:                               app_name
    };
};

module.exports = getDataStoreContants();

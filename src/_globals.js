// 
// _globals.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/_globals.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  6 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
// 

const globals = function() {

    return {
        APP_NAME:               'cinesecretary',
        APP_NAME_FRIENDLY:      'CineSecretary',

        TESTS_RUN_TESTS:        true,
        TESTS_RUN_DB_DEV:       true,

        DATASTORE_GLOBALS:  {
            NEW_DATASTORE_FILE_HEADER_CONTENT:      `## ${globals.APP_NAME} DATASTORE FILE ##`,
            DATASTORE_FILE_DATA_END_MARKER:         `## DATA RECORD ENDS ##`
        }
    };
};

module.exports = globals();

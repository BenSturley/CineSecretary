// 
// app.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/app.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  6 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
// 


const run_stuff = true;
if ( run_stuff ) {

    // 
    // run tests
    // 
    const globals = require('./_globals');
    if ( globals.TESTS_RUN_TESTS ) {
        const tests = require('./tests/__all-tests');
        tests.run_tests();
    }

    //
    // everything else!
    // 
    if ( globals.TESTS_RUN_DB_DEV ) {
        const appFn = () => {
            const msgr = require('./msgr');
            msgr.info('Welcome to CineSecretary v1.0 (.0a)');
            msgr.info(' -- launching db development...');
            
            const db_init = require('./datastore/engine/dev/src/init');
            const context = require('./tests/framework/TestingContext');
            db_init(context);
        };
        appFn();
    }

}





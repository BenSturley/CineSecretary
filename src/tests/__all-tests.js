// 
// __all-tests.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/__all-tests.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  4 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 
const testerFn = () => {
    
    // find files in test diretory
    const fs = require('fs');
    const files = fs.readdirSync(__dirname);

    // filter out non-test files
    const testFiles = [];
    files.forEach(
        f => {
            if ( f.toLowerCase().endsWith('.js' ) ) {
                if (!(__filename.toLowerCase().endsWith(f.toLowerCase()))) {
                    const filename = `./${f}`;
                    testFiles.push(filename);
                }
            }
        }
    );

    // set up testing context
    const context = require('./framework/TestingContext');

    // flag to output anything if test is disabled
    const outputIfDisabled = false;

    // run the tests
    console.log('** STARTING TESTS **');
    console.log(('=').repeat(40));
    testFiles.forEach(
        f => {
            // console.log(`Loading test (${f})...`)
            const test = require(f);
            if ( test.enabled ) {
                console.log(`Loading test (${f})...`)
                console.log(`Running test: ${test.test_name}`)
                test.run_test( context );
                console.log(`Completed test: ${test.test_name}`);
                console.log(('=').repeat(40));
            }
            else {
                if ( outputIfDisabled ) {
                    console.log(`Test disabled: ${test.test_name}`)
                    console.log(('=').repeat(40));
                }
            }
        }
    );
    console.log('** COMPLETED TESTS **');

};

module.exports = {
    run_tests:  testerFn
};
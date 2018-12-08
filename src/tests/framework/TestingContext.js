//
// TestingContext.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/framework/TestingContext.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  4 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 
let testingContextFactory = () => {
        
    // create messenger
    const messenger = require('./messenger');

    // create data fields
    const current_test_name         = '(no current test';
    const is_current_test_started   = false;
    const is_current_test_completed = false;

    this._messenger                 = messenger;
    this._current_test_name         = current_test_name;
    this._is_current_test_started   = is_current_test_started;
    this._is_current_test_completed = is_current_test_completed;

    return {
        messenger:                  this._messenger,
        current_test_name:          this.current_test_name,
        is_current_test_started:    this._is_current_test_started,
        is_current_test_completed:  this._is_current_test_completed
    };
};

module.exports = testingContextFactory();
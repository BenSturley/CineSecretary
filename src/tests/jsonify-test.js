// 
// jsonify-test.js
// ~/tests/jsonify-test.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  6 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
// 

const testerFn = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('Test requires TestingContext.');
    }
    context.current_test_name = 'JSONify Test';
    context.is_current_test_started = true;


    // create object for json-ification
    const obj = { 
        name:       'Ben Sturley',
        email:      'bensturley@gmail.com',
        telephone:  '+44(0)7500 396 166'
    };
    
    // insepect object pre-jsonify
    context.messenger.inspect(obj);

    // draw a seperator
    context.messenger.line('~~');

    // convert to json
    const json = JSON.stringify( obj );

    // insepect object post-jsonify
    context.messenger.inspect( json );

    // all done
    context.is_current_test_completed = true;

};

module.exports = {
    run_test:   testerFn,
    test_name:  'JSONify Tests',
    is_async:   false,
    enabled:    false,   
};

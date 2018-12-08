// 
// messenger.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/framework/messenger.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  4 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const messengerFn = () => {
    
    //
    // create EventsEmitter
    const events = require('events');
    const eventsEmitter = new events.EventEmitter();
    
    //
    // create message event handler
    const messageHandler = ( msg ) => {
        console.log(`TestingContext info: ${msg}`);
    };
    eventsEmitter.on('message', messageHandler);

    //
    // create info event handler
    const infoHandler = ( msg, styles ) => {
 
        let isStyles = false;

        const m = 'TestingContext message: ' + `${msg}`;
        console.info('~'.repeat( m.length ));
        if ( isStyles ) {
            console.info( m, styles );
        } else {
            console.info( m );
        }
        console.info('~'.repeat(m.length));
    };
    eventsEmitter.on('info', infoHandler);

    //
    // create error event handler
    const errorHandler = ( err, msg ) => {
        if ( msg === undefined ) {
            console.error( `TestingContext: Error: %c${err}`, 'font-weight: bold' );
        }
        else {
            console.error( 
                `TestingContext: Error: %c${err} %c(${msg})`, 
                'font-weight: bold; text-decoration: none;', 
                'color: red; text-decoration: underline;' 
                );
        }
    }
    eventsEmitter.on('error', errorHandler);

    //
    // create line event handler
    const lineHandler = ( char, len ) => {
        if ( char === undefined ) {
            char = '~';
        }
        if ( len === undefined ) {
            len = 40;
        }
        const logmsg = `${char.repeat(len)}`;
        console.log(logmsg);
    }
    eventsEmitter.on('line', lineHandler);

    //
    // create inspect event handler
    const inspectHandler = ( obj ) => {
        const util = require('util');
        const logmsg = util.inspect( obj, { depth: Infinity } );
        console.log(logmsg);
    };
    eventsEmitter.on('inspect', inspectHandler);
    

    //
    // create return object (singleton)
    return {
        line:       ( char, len ) => {
                        eventsEmitter.emit('line', char, len);
                    },
        message:    msg => { 
                        eventsEmitter.emit('message', msg); 
                    },
        info:       msg => { 
                        eventsEmitter.emit('info', msg); 
                    },
        error:      (err, msg) => { 
                        eventsEmitter.emit('error', err, msg);
                    },
        inspect:    obj => {
                        eventsEmitter.emit('inspect', obj);
                    }
        };
    };


module.exports = messengerFn();
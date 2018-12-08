// 
// cinetitle-test.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/cinetitle-test.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  4 December 2018
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

    context.current_test_name = 'CineTitle Class Test';
    context.is_current_test_started = true;

    //
    // default constructor test
    context.messenger.info('Testing default constructor');

    const CineTitleClass = require('../engine/CineTitle');
    let cineTitle = new CineTitleClass();

    context.messenger.message(cineTitle.getTitle());
    context.messenger.message(cineTitle.getIsFilm());
    context.messenger.message(cineTitle.getSeason());
    context.messenger.message(cineTitle.getEpisode());
    context.messenger.message(cineTitle.getElapsedTime());

    //
    // non-default constructor test
    context.messenger.info('Testing non-default constructor');

    cineTitle = new CineTitleClass(
      {
          title:        'Haunting of Hill House',
          isFilm:       false,
          season:       'S01', 
          episode:      'E05', 
          elapsedTime:  new Date(2018, 11, 3, 0, 46, 34)
      }  
    );

    context.messenger.message(cineTitle.getTitle());
    context.messenger.message(cineTitle.getIsFilm());
    context.messenger.message(cineTitle.getSeason());
    context.messenger.message(cineTitle.getEpisode());
    context.messenger.message(cineTitle.getElapsedTime());

    context.is_current_test_completed = true;

};

module.exports = {
    run_test:   testerFn,
    test_name:  'CineTitle Class Test',
    is_async:   false,
    enabled:    false,
}
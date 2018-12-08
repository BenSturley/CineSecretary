//
// CineTitle.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/engine/CineTitle.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  3 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// # 
// # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let CineTitleFactory = (function() {

    // privates property backing store
    const _privates = {};
    const privates = new WeakMap();

    // public class
    return class CineTitle {
        constructor ( 
            {
                title       = '(no title)', 
                isFilm      = false, 
                season      = 'S01', 
                episode     = 'E01', 
                elapsedTime = new Date()
            } = {}
        ) 
            {
                _privates.title         = title;
                _privates.isFilm        = isFilm;
                _privates.season        = season;
                _privates.episode       = episode;
                _privates.elapsedTime   = elapsedTime;
            }
    
        //
        // title
        getTitle() { return _privates.title; }
        setTitle(title) { _privates.title = title; }

        //
        // isFilm
        getIsFilm() { return _privates.isFilm; }
        setIsFilm(isFilm) { _privates.isFilm = isFilm; }

        //
        // season
        getSeason() { return _privates.season; }
        setSeason(season) { _privates.season = season; }

        //
        // episode
        getEpisode() { return _privates.episode; }
        setEpisode(episode) { _privates.episode = episode; }

        //
        // elapsedTime
        getElapsedTime() { return _privates.elapsedTime; }
        setElapsedTime(elapsedTime) { _privates.elapsedTime = elapsedTime; }
        
    }
})();

module.exports = CineTitleFactory;
import {getMatches, getSavedMatches, getLeague} from './api.js';



export const loadPage = (page) => {
    if (page === "home") {
        getMatches(page);
    } else if (page === "saved") {
        getSavedMatches();
    } else if (page === 'league') {
        getLeague();
    }
}
import './service-worker.js';
import './manifest.json';
import './js/aos.js';
import './js/materialize.min.js';
import './js/idb.js';
import './js/db.js';
import './js/api.js';
import './js/nav.js';
import {loadPage} from './js/nav.js'
import './css/materialize.min.css';
import './css/aos.css';
import AOS from './js/aos.js';
import './css/style.css';

$(document).ready(function () {
    AOS.init();
    $('.dropdown-trigger').dropdown();

    $('.saved-page').on('click', () => {
        loadPage('saved');
    });

    let page = window.location.hash.substr(1);
    let url = window.location.href;
    if (page  === '' && !(url.includes('league'))) page = "home";
    else if (url.includes('league')) page = "league"

    loadPage(page);

});
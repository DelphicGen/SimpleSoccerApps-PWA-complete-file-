import {saveAllForLater, saveForLater, getAll, deleteAllMatches, deleteMatch} from './db.js';

    let API_KEY = 'e833e925a81440ffaa6dc7d77fae9976';
    let baseUrl = 'https://api.football-data.org/v2';

    export const getMatches = (page) => {
        let allMatches;
        if ('caches' in window) {
            // caches.match(`pages/landing-page.html`)
            // .then(response => {
            //     return response.text();
            // })
            // .then(data => {
            //     $('.landing-page').html(data);
            // })

            caches.match(`${baseUrl}/matches`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                allMatches = data;
                let matchHTML = `
                    <h2>Upcoming Match(es)</h2>
                    <a class="save-all-btn btn-small green">
                        <i class="large material-icons">save</i>
                        Save All
                    </a>
                    <i class="material-icons prefix icon icon-1 fast">sports_soccer</i>
                    <i class="material-icons prefix icon icon-2">sports_soccer</i>
                    <i class="material-icons prefix icon icon-3 slow">sports_soccer</i>
                    <i class="material-icons prefix icon icon-4 very-slow">sports_soccer</i>
                `;
                data.matches.forEach(match => {
                    matchHTML += `
                        <div data-aos="flip-down" data-aos-duration="500">
                            <div class="col l12 center-align">
                                <h5>
                                    ${match.utcDate}
                                    <i class="material-icons prefix">sports_soccer</i>
                                </h5>
                            </div>
                            <div class="match row valign-wrapper">
                                <a class="save-btn btn-small" id="${match.id}">
                                    <i class="large material-icons">save</i>
                                </a>
                                <div class="col s4 left-align">
                                    <h5>${match.homeTeam.name}</h5>
                                </div>
                                <div class="col s4 center-align">
                                    <h6>vs</h6>
                                </div>
                                <div class="col s4 right-align">
                                    <h5>${match.awayTeam.name}</h5>
                                </div>
                            </div>
                        </div>
                    `
                })
                $('.landing-page').html(matchHTML);
            })
        } 

            // fetch(`pages/landing-page.html`)
            //     .then(response => {
            //         return response.text();
            //     })
            //     .then(data => {
            //         console.log(data);
            //         $('.landing-page').html(data);
            //     })
            fetch(`${baseUrl}/matches`, {
                headers: {
                    'X-Auth-Token': API_KEY
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                allMatches = data;
                let matchHTML = `
                    <h2>
                        Upcoming Match(es)
                    </h2>

                    <a class="save-all-btn btn-small green">
                        <i class="large material-icons">save</i>
                        Save All
                    </a>
                    <i class="material-icons prefix icon icon-1 fast">sports_soccer</i>
                    <i class="material-icons prefix icon icon-2">sports_soccer</i>
                    <i class="material-icons prefix icon icon-3 slow">sports_soccer</i>
                    <i class="material-icons prefix icon icon-4 very-slow">sports_soccer</i>
                `;
                data.matches.forEach(match => {
                    matchHTML += `
                        <div data-aos="flip-down" data-aos-duration="500">
                            <div class="col l12 center-align">
                                <h5>
                                    ${match.utcDate}
                                    <i class="material-icons prefix">sports_soccer</i>
                                </h5>
                            </div>
                            <div class="match row valign-wrapper">
                                <a class="save-btn btn-small" id="${match.id}">
                                    <i class="large material-icons">save</i>
                                </a>
                                <div class="col s4 left-align">
                                    <h5>${match.homeTeam.name}</h5>
                                </div>
                                <div class="col s4 center-align">
                                    <h6>vs</h6>
                                </div>
                                <div class="col s4 right-align">
                                    <h5>${match.awayTeam.name}</h5>
                                </div>
                            </div>
                        </div>
                    `
                });



                $('.landing-page').html(matchHTML);
                $('.save-all-btn').on('click', (e) => {
                    e.preventDefault();
                    saveAllForLater(allMatches);
                })

                allMatches.matches.forEach(match => {
                    $(`#${match.id}`).on('click', (e) => {
                        e.preventDefault();
                        console.log($(`#${match.id}`).attr('id'));
                        saveForLater(match)
                    })
                })
            })
    }

    export const getLeague = () => {
        let urlParams = new URLSearchParams(window.location.search);
        let idParam = urlParams.get("id");

        if ('caches' in window) {
            caches.match(`${baseUrl}/competitions/${idParam}/standings`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                let standingsHTML = `
                        <tr>
                            <th>R</th>
                            <th>Team</th>
                            <th>P</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Pts</th>
                        </tr>
                    `
                    data.standings[0].table.forEach(standing => {
                        standingsHTML += `
                            <tr>
                                <th>${standing.position}</th>
                                <th>
                                    <img class="crest" src="${standing.team.crestUrl}" alt="${standing.team.name}'s crest" />
                                    ${standing.team.name}
                                </th>
                                <th>${standing.playedGames}</th>
                                <th>${standing.won}</th>
                                <th>${standing.draw}</th>
                                <th>${standing.lost}</th>
                                <th>${standing.goalsFor}</th>
                                <th>${standing.goalsAgainst}</th>
                                <th>${standing.goalDifference}</th>
                                <th>${standing.points}</th>
                            </tr>
                        `
                    })

                    $('.standings').html(standingsHTML);
            })
        }
            fetch(`${baseUrl}/competitions/${idParam}/standings`, {
                headers: {
                    'X-Auth-Token': API_KEY
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    let standingsHTML = `
                        <tr>
                            <th>R</th>
                            <th>Team</th>
                            <th>P</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Pts</th>
                        </tr>
                    `
                    data.standings[0].table.forEach(standing => {
                        standingsHTML += `
                            <tr>
                                <th>${standing.position}</th>
                                <th>
                                    <img class="crest" src="${standing.team.crestUrl}" alt="${standing.team.name}'s crest" />
                                    ${standing.team.name}
                                </th>
                                <th>${standing.playedGames}</th>
                                <th>${standing.won}</th>
                                <th>${standing.draw}</th>
                                <th>${standing.lost}</th>
                                <th>${standing.goalsFor}</th>
                                <th>${standing.goalsAgainst}</th>
                                <th>${standing.goalDifference}</th>
                                <th>${standing.points}</th>
                            </tr>
                        `
                    })
                    $('.btn-save').on('click', (event) => {
                        console.log()
                    })
                    $('.standings').html(standingsHTML);

                })
    }

    export const getSavedMatches = () => {
        let allMatches;
        getAll()
            .then(matches => {
                allMatches = matches;
                let matchHTML = `
                    <h2>Upcoming Match(es)</h2>
                    <a class="delete-all-btn btn-small red">
                        <i class="large material-icons">delete</i>
                        Delete All
                    </a>
                    <i class="material-icons prefix icon icon-1 fast">sports_soccer</i>
                    <i class="material-icons prefix icon icon-2">sports_soccer</i>
                    <i class="material-icons prefix icon icon-3 slow">sports_soccer</i>
                    <i class="material-icons prefix icon icon-4 very-slow">sports_soccer</i>
                `;
                matches.forEach(match => {
                    matchHTML += `
                        <div data-aos="flip-down" data-aos-duration="500">
                            <div class="col l12 center-align">
                                <h5>
                                    ${match.utcDate}
                                    <i class="material-icons prefix">sports_soccer</i>
                                </h5>
                            </div>
                            <div class="match row valign-wrapper">
                                <a class="delete-btn btn-small" id="${match.id}">
                                    <i class="large material-icons">delete</i>
                                </a>
                                <div class="col s4 left-align">
                                    <h5>${match.homeTeam.name}</h5>
                                </div>
                                <div class="col s4 center-align">
                                    <h6>vs</h6>
                                </div>
                                <div class="col s4 right-align">
                                    <h5>${match.awayTeam.name}</h5>
                                </div>
                            </div>
                        </div>
                    `
                })
                $('.landing-page').html(matchHTML);
                $('.delete-all-btn').on('click', () => {
                    deleteAllMatches(allMatches);
                    window.location.href = '/'
                })

                console.log(allMatches);
                allMatches.forEach(match => {
                    $(`#${match.id}`).on('click', () => {
                        console.log($(`#${match.id}`).attr('id'));
                        deleteMatch(match.id)
                        window.location.href = '/#saved'
                    })
                })
            })
    }
    
// Connector execution

function login() {

    let hashCode = s =>
        s.split("").reduce((a, b) => {
            a = (a << 5) - a + b.charCodeAt(0);
            return a & a;
        }, 0);

    let rawUser, rawPass = "";
    let user, pass = 0;
    const formData = new FormData(document.getElementById("login-form"));
    rawUser = formData.get('usernameInput');
    rawPass = formData.get('passwordInput');

    user = hashCode(rawUser);
    pass = hashCode(rawPass);

    document.getElementById('login-form').style.visibility = 'hidden';
    document.getElementById('submitButton').style.visibility = 'visible';

    // if (user === 64702 && pass === -1625136477) {
    //     window.alert("Login successful! Welcome " + rawUser + ".")
    //     // continue with connector
    //     document.getElementById('login-form').style.visibility = 'hidden';
    //     document.getElementById('submitButton').style.visibility = 'visible';
    // } else if (user === 64702 && pass != -1625136477) {
    //     window.alert("Incorrect password! Try again.")
    //     // retry login
    // } else {
    //     window.alert("User not found! Try again.")
    //     // retry login
    // }

    return false;
}

function titleCase(str) {
    str = str.replaceAll('_',' ');
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

(function () {

    let myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {

        let fixtures_cols = [{
            id: "id",
            alias: "Fixture ID",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "matchNumber",
            alias: "Match Number",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "tournament",
            alias: "Tournament Name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "stage_id",
            alias: "Stage ID",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "stage_name",
            alias: "Stage Name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "stage_mode",
            alias: "Stage Mode",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "division_id",
            alias: "Sub Stage ID",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "division_name",
            alias: "Sub Stage Name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "group_id",
            alias: "Group ID",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "group_name",
            alias: "Group Name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "date",
            alias: "Fixture Date",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "time",
            alias: "Fixture Time",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "venue_id",
            alias: "Venue ID",
            dataType: tableau.dataTypeEnum.int
        },
        // }, {
        //     id: "venue_name",
        //     alias: "Venue Name",
        //     dataType: tableau.dataTypeEnum.string
        // }, {
        //     id: "venue_city",
        //     alias: "Venue City / Town",
        //     dataType: tableau.dataTypeEnum.string
        // }, {
        //     id: "venue_timezone",
        //     alias: "Venue Timezone",
        //     dataType: tableau.dataTypeEnum.string
        // }, {
        //     id: "venue_region",
        //     alias: "Venue Region",
        //     dataType: tableau.dataTypeEnum.string
        // }, {
           {
            id: "team_a_id",
            alias: "Team A ID",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "team_a_shortname",
            alias: "Team A Shortname",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "team_a_name",
            alias: "Team A Name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "team_a_country",
            alias: "Team A Country",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "team_a_region",
            alias: "Team A Region",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "team_b_id",
            alias: "Team B ID",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "team_b_shortname",
            alias: "Team B Shortname",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "team_b_name",
            alias: "Team B Name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "team_b_country",
            alias: "Team B Country",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "team_b_region",
            alias: "Team B Region",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "events_matchVoided",
            alias: "Fixture Voided Status",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "events_gameFinished",
            alias: "Match Completion Status",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "events_eventsPublished",
            alias: "Events Published Status",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "goals_team_a_HT",
            alias: "Team A First Half Score",
            columnRole: "metric",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "goals_team_a_FT",
            alias: "Team A Full Time Score",
            columnRole: "metric",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "goals_team_a_ETHT",
            alias: "Team A First Half (ET) Score",
            columnRole: "metric",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "goals_team_a_ETFT",
            alias: "Team A Full Time (ET) Score",
            columnRole: "metric",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "goals_team_a_PS",
            alias: "Team A Penalty Shootout Score",
            columnRole: "metric",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "goals_team_b_HT",
            alias: "Team B First Half Score",
            columnRole: "metric",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "goals_team_b_FT",
            alias: "Team B Full Time Score",
            columnRole: "metric",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "goals_team_b_ETHT",
            alias: "Team B First Half (ET) Score",
            columnRole: "metric",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "goals_team_b_ETFT",
            alias: "Team B Full Time (ET) Score",
            columnRole: "metric",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "goals_team_b_PS",
            alias: "Team B Penalty Shootout Score",
            columnRole: "metric",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "attendance",
            alias: "Spectator Attendance",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "pitch",
            alias: "Pitch Condition",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "weather",
            alias: "Weather Condition",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "temperature",
            alias: "Temperature",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "remarks",
            alias: "Additional Remarks",
            dataType: tableau.dataTypeEnum.string
        }];

        let venue_cols = [
            {
                id: "match_ID",
                alias: "Match ID",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "venue_id",
                alias: "Venue ID",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "venue_name",
                alias: "Venue Name",
                dataType: tableau.dataTypeEnum.string
            }, {
                id: "venue_city",
                alias: "Venue City / Town",
                dataType: tableau.dataTypeEnum.string
            }, {
                id: "venue_timezone",
                alias: "Venue Timezone",
                dataType: tableau.dataTypeEnum.string
            }, {
                id: "venue_region",
                alias: "Venue Region",
                dataType: tableau.dataTypeEnum.string
            }, {
                id: "attendance",
                alias: "Spectator Attendance",
                dataType: tableau.dataTypeEnum.int
            }
        ];

        let goals_cols = [
            {
                id: "match_ID",
                alias: "Match ID",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "team",
                alias: "Scoring Team",
                dataType: tableau.dataTypeEnum.string
            }, {
                id: "team_ID",
                alias: "Scoring Team ID",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "time",
                alias: "Goal Time",
                dataType: tableau.dataTypeEnum.string
            }, {
                id: "player_ID",
                alias: "Scoring Player ID",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "type",
                alias: "Goal Type",
                dataType: tableau.dataTypeEnum.string
            }, {
                id: "remarks",
                alias: "Additional Remarks",
                dataType: tableau.dataTypeEnum.string
            }
        ];

        let subs_cols = [
            {
                id: "match_ID",
                alias: "Match ID",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "team",
                alias: "Substituting Team",
                dataType: tableau.dataTypeEnum.string
            }, {
                id: "team_ID",
                alias: "Substituting Team ID",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "in_out",
                alias: "Substituting In/Out",
                dataType: tableau.dataTypeEnum.string
            }, {
                id: "time",
                alias: "Substitution Time",
                dataType: tableau.dataTypeEnum.string
            }, {
                id: "player_ID",
                alias: "Substituted Player ID",
                dataType: tableau.dataTypeEnum.int
            }
        ];

        let fixturesTable = {
            id: "fixtures",
            alias: "Fixtures Data",
            columns: fixtures_cols
        };

        let venuesTable = {
            id: "venues",
            alias: "Venues Data",
            columns: venue_cols
        };

        let goalsTable = {
            id: "goals",
            alias: "Goals Data",
            columns: goals_cols
        };

        let subsTable = {
            id: "subs",
            alias: "Substitutions Data",
            columns: subs_cols
        };

        schemaCallback([fixturesTable, venuesTable, goalsTable, subsTable]);

    };

    myConnector.getData = function (table, doneCallback) {

        let tables = ["fixtures","venues"]
        let TOURNAMENTS = [766,770,772,775,778] // list of all tournaments
        let MATCH_DICT = { // dictionary of tournaments and their respective matches
            "tournament":[],
            "matches":[]
        }

        const APIURL = 'http://atlas.afc-link.com/api/';
        const APIKEY = 'PRlcO0rlwRItriglQine0apitRePe0REfRaDrE9rexIpUGi7raviZiyahuBR';
        const DB_TYPE = '1';
        const SERVICE = ['venues', 'standings-table', 'fixtures', 'spectators'];
        const q = 'match_events';

        let apiCall_fixtures = "";

        if (table.tableInfo.id === "fixtures") {

            for (let t = 0; t < TOURNAMENTS.length; t++) {

                let TOURNAMENT = TOURNAMENTS[t];
                let matches = [];

                apiCall_fixtures =
                    APIURL + SERVICE[2] +
                    '?key=' + APIKEY +
                    '&service=' + SERVICE[2] +
                    '&type_id=' + DB_TYPE +
                    '&event_id=' + TOURNAMENT;

                $.getJSON(apiCall_fixtures, function (fixtures) {

                    let tableData = [];

                    tableau.log("Fixtures API call being made...");

                    let fixture = fixtures.ITEMS;

                    for (let i = 0, len = fixture.length; i < len; i++) {
                        matches.push(fixture[i].ID);
                    }

                    MATCH_DICT["tournament"].push(TOURNAMENT);
                    MATCH_DICT["matches"].push(matches);

                    let apiCall_matchEvents =
                        APIURL + SERVICE[2] +
                        '?key=' + APIKEY +
                        '&service=' + SERVICE[2] +
                        '&type_id=' + DB_TYPE +
                        '&event_id=' + TOURNAMENT +
                        '&needle=' + matches.join(',') +
                        '&q=' + q;

                    $.getJSON(apiCall_matchEvents, function (matchEvents) {
                        let keys = Object.keys(matchEvents);
                        keys.pop();

                        for (let i = 0, len = fixture.length; i < len; i++) {
                            tableData.push({
                                "id": fixture[i].ID,
                                "matchNumber": fixture[i].MATCH_NUMBER,
                                "tournament": fixture[i].TOURNAMENT,
                                "stage_id": fixture[i].STAGE.ID,
                                "stage_name": fixture[i].STAGE.NAME,
                                "stage_mode": fixture[i].STAGE.MODE,
                                "division_id": fixture[i].DIVISION.ID,
                                "division_name": fixture[i].DIVISION.NAME,
                                "group_id": fixture[i].GROUP.ID,
                                "group_name": fixture[i].GROUP.NAME,
                                "date": fixture[i].TIME.DATE,
                                "time": fixture[i].TIME.TIME,
                                "venue_id": fixture[i].VENUE.ID,
                                // "venue_name": fixture[i].VENUE.NAME,
                                // "venue_city": fixture[i].VENUE.CITY,
                                // "venue_timezone": fixture[i].VENUE.TIMEZONE,
                                // "venue_region": fixture[i].VENUE.REGION,
                                "attendance": fixture[i].ATTENDANCE,
                                "team_a_id": fixture[i].TEAMS.TEAM_A.ID,
                                "team_a_shortname": fixture[i].TEAMS.TEAM_A.SHORTNAME,
                                "team_a_name": fixture[i].TEAMS.TEAM_A.NAME,
                                "team_a_country": fixture[i].TEAMS.TEAM_A.COUNTRY,
                                "team_a_region": fixture[i].TEAMS.TEAM_A.REGION,
                                "team_b_id": fixture[i].TEAMS.TEAM_B.ID,
                                "team_b_shortname": fixture[i].TEAMS.TEAM_B.SHORTNAME,
                                "team_b_name": fixture[i].TEAMS.TEAM_B.NAME,
                                "team_b_country": fixture[i].TEAMS.TEAM_B.COUNTRY,
                                "team_b_region": fixture[i].TEAMS.TEAM_B.REGION,
                                "events_matchVoided": fixture[i].EVENTS.MATCH_VOIDED,
                                "events_gameFinished": fixture[i].EVENTS.GAME_FINISHED,
                                "events_eventsPublished": fixture[i].EVENTS.EVENTS_PUBLISHED,
                                "goals_team_a_HT": fixture[i].EVENTS.GOALS.TEAM_A.FIRST_HALF_SCORE,
                                "goals_team_a_FT": fixture[i].EVENTS.GOALS.TEAM_A.FINAL_SCORE,
                                "goals_team_a_ETHT": fixture[i].EVENTS.GOALS.TEAM_A.THIRD_HALF_SCORE,
                                "goals_team_a_ETFT": fixture[i].EVENTS.GOALS.TEAM_A.EXTRA_TIME_SCORE,
                                "goals_team_a_PS": fixture[i].EVENTS.GOALS.TEAM_A.PENALTY_SHOOTOUT_SCORE,
                                "goals_team_b_HT": fixture[i].EVENTS.GOALS.TEAM_B.FIRST_HALF_SCORE,
                                "goals_team_b_FT": fixture[i].EVENTS.GOALS.TEAM_B.FINAL_SCORE,
                                "goals_team_b_ETHT": fixture[i].EVENTS.GOALS.TEAM_B.THIRD_HALF_SCORE,
                                "goals_team_b_ETFT": fixture[i].EVENTS.GOALS.TEAM_B.EXTRA_TIME_SCORE,
                                "goals_team_b_PS": fixture[i].EVENTS.GOALS.TEAM_B.PENALTY_SHOOTOUT_SCORE,
                                "pitch": matchEvents[keys[i]].PITCH_CONDITION,
                                "weather": matchEvents[keys[i]].WEATHER,
                                "temperature": matchEvents[keys[i]].TEMPERATURE,
                                "remarks": fixture[i].REMARKS.DESCRIPTION
                            })
                        }

                        let row_index = 0;
                        let size = 100;

                        //table.appendRows(tableData);

                        while (row_index < tableData.length){
                            table.appendRows(tableData.slice(row_index, size + row_index));
                            row_index += size;
                            tableau.reportProgress("Getting row: " + row_index);
                        }

                        doneCallback();

                    });

                });

            }

        } else if (table.tableInfo.id === "venues") {

            for (let t = 0; t < TOURNAMENTS.length; t++) {

                let TOURNAMENT = TOURNAMENTS[t];

                apiCall_fixtures =
                    APIURL + SERVICE[2] +
                    '?key=' + APIKEY +
                    '&service=' + SERVICE[2] +
                    '&type_id=' + DB_TYPE +
                    '&event_id=' + TOURNAMENT;

                $.getJSON(apiCall_fixtures, function (fixtures) {

                    let tableData = [];

                    tableau.log("Fixtures API call being made...");

                    let fixture = fixtures.ITEMS;

                    for (let i = 0, len = fixture.length; i < len; i++) {
                        tableData.push({
                            "match_id": fixture[i].ID,
                            "venue_id": fixture[i].VENUE.ID,
                            "venue_name": fixture[i].VENUE.NAME,
                            "venue_city": fixture[i].VENUE.CITY,
                            "venue_timezone": fixture[i].VENUE.TIMEZONE,
                            "venue_region": fixture[i].VENUE.REGION,
                            "attendance": fixture[i].ATTENDANCE
                        })
                    }

                    let row_index = 0;
                    let size = 100;

                    //table.appendRows(tableData);

                    while (row_index < tableData.length){
                        table.appendRows(tableData.slice(row_index, size + row_index));
                        row_index += size;
                        tableau.reportProgress("Getting row: " + row_index);
                    }

                    doneCallback();

                });

            }

        } else if (table.tableInfo.id === "goals") {

            for (let t = 0; t < TOURNAMENTS.length; t++) {

                let TOURNAMENT = TOURNAMENTS[t];
                let matches = [];

                apiCall_fixtures =
                    APIURL + SERVICE[2] +
                    '?key=' + APIKEY +
                    '&service=' + SERVICE[2] +
                    '&type_id=' + DB_TYPE +
                    '&event_id=' + TOURNAMENT;

                $.getJSON(apiCall_fixtures, function (fixtures) {

                    let tableData = [];

                    tableau.log("Fixtures API call being made...");

                    let fixture = fixtures.ITEMS;

                    for (let i = 0, len = fixture.length; i < len; i++) {
                        matches.push(fixture[i].ID);
                    }

                    // MATCH_DICT["tournament"].push(TOURNAMENT);
                    // MATCH_DICT["matches"].push(matches);

                    let apiCall_matchEvents =
                        APIURL + SERVICE[2] +
                        '?key=' + APIKEY +
                        '&service=' + SERVICE[2] +
                        '&type_id=' + DB_TYPE +
                        '&event_id=' + TOURNAMENT +
                        '&needle=' + matches.join(',') +
                        '&q=' + q;

                    $.getJSON(apiCall_matchEvents, function (matchEvents) {
                        let keys = Object.keys(matchEvents);
                        keys.pop();

                        for (let i = 0, len = fixture.length; i < len; i++) {
                            let match_id = fixture[i].ID;

                            let goalKeys = Object.keys(matchEvents[keys[i]]["EVENTS"]["GOAL_DETAILS"]["TEAM_A"]);

                            for (let k = 0; k < goalKeys.length; k++) {
                                let key = goalKeys[k];

                                let len_A = matchEvents[keys[i]]["EVENTS"]["GOAL_DETAILS"]["TEAM_A"][key].length
                                let len_B = matchEvents[keys[i]]["EVENTS"]["GOAL_DETAILS"]["TEAM_B"][key].length

                                let type = titleCase(key);
                                let remarks = "-";
                                let time = "";
                                let player_id = "";

                                if (len_A) {
                                    let team = "A";
                                    let team_id = fixture[i].TEAMS.TEAM_A.ID;

                                    for (let l = 0; l < len_A; l++) {
                                        if (key === "PENALTY_SHOOTOUT") {
                                            let penaltyKey = Object.keys(matchEvents[keys[i]]["EVENTS"]["GOAL_DETAILS"]["TEAM_A"][key][l]);
                                            remarks = titleCase(penaltyKey[0]);
                                            time = "PS";
                                            player_id = matchEvents[keys[i]]["EVENTS"]["GOAL_DETAILS"]["TEAM_A"][key][l][penaltyKey]["PLAYERID"];
                                        } else {
                                            time = matchEvents[keys[i]]["EVENTS"]["GOAL_DETAILS"]["TEAM_A"][key][l]["TIME"];
                                            player_id = matchEvents[keys[i]]["EVENTS"]["GOAL_DETAILS"]["TEAM_A"][key][l]["PLAYERID"];
                                        }

                                        tableData.push({
                                            "match_ID": match_id,
                                            "team": team,
                                            "team_ID": team_id,
                                            "type": type,
                                            "time": time,
                                            "player_ID": player_id,
                                            "remarks": remarks
                                        })
                                    }
                                } else if (len_B) {
                                    let team = "B";
                                    let team_id = fixture[i].TEAMS.TEAM_B.ID;

                                    for (let l = 0; l < len_B; l++) {
                                        if (key === "PENALTY_SHOOTOUT") {
                                            let penaltyKey = Object.keys(matchEvents[keys[i]]["EVENTS"]["GOAL_DETAILS"]["TEAM_B"][key][l]);
                                            remarks = titleCase(penaltyKey[0]);
                                            time = "PS";
                                            player_id = matchEvents[keys[i]]["EVENTS"]["GOAL_DETAILS"]["TEAM_B"][key][l][penaltyKey]["PLAYERID"];
                                        } else {
                                            time = matchEvents[keys[i]]["EVENTS"]["GOAL_DETAILS"]["TEAM_B"][key][l]["TIME"];
                                            player_id = matchEvents[keys[i]]["EVENTS"]["GOAL_DETAILS"]["TEAM_B"][key][l]["PLAYERID"];
                                        }

                                        tableData.push({
                                            "match_ID": match_id,
                                            "team": team,
                                            "team_ID": team_id,
                                            "type": type,
                                            "time": time,
                                            "player_ID": player_id,
                                            "remarks": remarks
                                        })
                                    }
                                }
                            }
                        }

                        let row_index = 0;
                        let size = 100;

                        //table.appendRows(tableData);

                        while (row_index < tableData.length){
                            table.appendRows(tableData.slice(row_index, size + row_index));
                            row_index += size;
                            tableau.reportProgress("Getting row: " + row_index);
                        }

                        doneCallback();

                    });

                });

            }

        } else if (table.tableInfo.id === "subs") {

            for (let t = 0; t < TOURNAMENTS.length; t++) {

                let TOURNAMENT = TOURNAMENTS[t];
                let matches = [];

                apiCall_fixtures =
                    APIURL + SERVICE[2] +
                    '?key=' + APIKEY +
                    '&service=' + SERVICE[2] +
                    '&type_id=' + DB_TYPE +
                    '&event_id=' + TOURNAMENT;

                $.getJSON(apiCall_fixtures, function (fixtures) {

                    let tableData = [];

                    tableau.log("Fixtures API call being made...");

                    let fixture = fixtures.ITEMS;

                    for (let i = 0, len = fixture.length; i < len; i++) {
                        matches.push(fixture[i].ID);
                    }

                    // MATCH_DICT["tournament"].push(TOURNAMENT);
                    // MATCH_DICT["matches"].push(matches);

                    let apiCall_matchEvents =
                        APIURL + SERVICE[2] +
                        '?key=' + APIKEY +
                        '&service=' + SERVICE[2] +
                        '&type_id=' + DB_TYPE +
                        '&event_id=' + TOURNAMENT +
                        '&needle=' + matches.join(',') +
                        '&q=' + q;

                    $.getJSON(apiCall_matchEvents, function (matchEvents) {
                        let keys = Object.keys(matchEvents);
                        keys.pop();

                        for (let i = 0, len = fixture.length; i < len; i++) {
                            let match_id = fixture[i].ID;
                        }

                        let row_index = 0;
                        let size = 100;

                        //table.appendRows(tableData);

                        while (row_index < tableData.length){
                            table.appendRows(tableData.slice(row_index, size + row_index));
                            row_index += size;
                            tableau.reportProgress("Getting row: " + row_index);
                        }

                        doneCallback();

                    });

                });

            }

        }

    };

    tableau.registerConnector(myConnector);

    $(document).ready(function () {
        $("#submitButton").click(function () {
            tableau.connectionName = "AFC Tableau Web Data Connector";
            tableau.submit();
        });
    });

})();
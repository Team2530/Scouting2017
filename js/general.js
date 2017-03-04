function General(team, teamName ,scoutName,matchNumber,event, robotPlay,robotRank) {
    this.team = team;
    this.teamName = teamName;
    this.scoutName = scoutName;
    this.matchNumber =matchNumber;
    this.event = event;
    this.robotPlay = robotPlay;
    this.robotRank = robotRank;
    this.save = function () {
        updateGeneral(this);
    }
}

var insertGeneralStatement = "INSERT INTO general (team_num, team_name, scout_name, match_num, event, " +
    "robot_play, cur_robo_rank) VALUES (?,?,?,?,?,?,?)";

function insertGeneral(general) {
    database.transaction(function (tx) {
        tx.executeSql(insertGeneralStatement, [general.team, general.teamName, general.scoutName,general.matchNumber,general.event,
            general.robotPlay, general.robotRank]);
    });
}


var updateGen = "UPDATE general SET team_name = ?, event = ?, robot_play = ?, cur_robo_rank = ? where team_num = ?" +
    " and scout_name = ? and match_num = ? ";


function updateGeneral(general){


    database.transaction(function (tx) {
        tx.executeSql(updateGen, [ general.teamName,
            general.event, general.robotPlay, general.robotRank,general.team,general.scoutName,general.matchNumber],
            function (tx, results) {
                console.log(results);
        }, function (err) {
                console.log(err);
        });
    });
}
function General(team, teamName ,scoutName,matchNumber,event, robotPlay,robotRank, currTeamId) {
    this.team = team;
    this.teamName = teamName;
    this.scoutName = scoutName;
    this.matchNumber =matchNumber;
    this.event = event;
    this.robotPlay = robotPlay;
    this.robotRank = robotRank;
    this.save = function () {
        if(this.currTeamId != null){
            updateGeneral(this);
        }
        else{
           this.currTeamId = insertGeneral(this);
        }
    };
    this.currTeamId = currTeamId;
}

var insertGeneralStatement = "INSERT INTO general (team_num, team_name, scout_name, match_num, event, " +
    "robot_play, cur_robo_rank) VALUES (?,?,?,?,?,?,?)";
function insertGeneral(general) {
    database.transaction(function (tx) {
        tx.executeSql(insertGeneralStatement, [general.team, general.teamName, general.scoutName,general.matchNumber,general.event,
            general.robotPlay, general.robotRank]);
    });
    return getMaxIndex("general");
}

var updateGeneralStatement = "UPDATE general SET team_num = ?, team_name = ?, scout_name = ?, match_num = ?, event = ?," +
    " robot_play = ?, cur_robo_rank = ? WHERE id = ? "



function updateGeneral(general){
    database.transaction(function (tx) {
        tx.executeSql(updateGeneralStatement, [general.team, general.teamName,general.scoutName,general.matchNumber,
            general.event, general.robotPlay, general.robotRank, general.currTeamId]);
    });
}
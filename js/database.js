var databseOptions = {
    fileName: "sqlite_scouting",
    version: "1.0",
    displayName: "SQLIte Scouting",
    maxSize: 1024
};

var database = openDatabase(databseOptions.fileName,
    databseOptions.version, databseOptions.displayName, databseOptions.maxSize);


var insertAutoStatement = "INSERT INTO general (team_num,  match_num,  " +
    "high_score, low_score, gear_del, move, penalty, cross_bl) VALUES (?,?,?,?,?,?,?,?)";

var insertTeleopStatement = "INSERT INTO general (team_num,  match_num,  " +
    "high_score, low_score, floor_col, hopper_col, human_load, gears_del, pickup, pickup_hu, dropped_gear, rope," +
    " penalties) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

var insertCommentStatement = "INSERT INTO general (team_num,  match_num,  " +
    "comments) VALUES (?,?,?)";

function createGeneralTable() {
    var createGeneralStatement = "CREATE TABLE general IF NOT EXISTS(id INTEGER PRIMARY KEY AUTOINCREMENT," +
        "team_num TEXT, team_name TEXT, scout_name TEXT, match_num TEXT, event TEXT, " +
        "robot_play TEXT, cur_robo_rank TEXT)";


    database.transaction(function(tx){
        tx.executeSql(createGeneralStatement);
    }, function (error) {
     console.log(error);
 }, function () {
     console.log("Created general ok");
 });
}

function createAutoTable() {
    var createAutoStatement =  "CREATE TABLE auto IF NOT EXISTS(id INTEGER PRIMARY KEY AUTOINCREMENT," +
        "team_num TEXT, match_num TEXT, high_score TEXT, low_score TEXT, " +
        "gear_del TEXT, move TEXT, penalty TEXT, cross_bl TEXT )";

    database.transaction(function(tx){
        tx.executeSql(createAutoStatement);
    }, function (error) {
        console.log(error);
    }, function () {
        console.log("Created general ok");
    });
}

function createTeleopTable() {
    var createTeleopStatement = "CREATE TABLE tele_op IF NOT EXISTS(id INTEGER PRIMARY KEY AUTOINCREMENT," +
        "team_num TEXT, match_num TEXT, high_score TEXT, low_score TEXT, floor_col TEXT, " +
        "hopper_col TEXT, human_load TEXT, gears_del TEXT, pickup TEXT, pickup_hu TEXT, " +
        "dropped_gear INTEGER, rope TEXT, penalties TEXT)";
    database.transaction(function(tx){
        tx.executeSql(createTeleopStatement);
    }, function (error) {
        console.log(error);
    }, function () {
        console.log("Created general ok");
    });
}

function createCommentsTable() {
    var createCommentsStatement = "CREATE TABLE comments IF NOT EXISTS(id INTEGER PRIMARY KEY AUTOINCREMENT," +
        "team_num TEXT, match_num TEXT, comments NONE)";

    database.transaction(function(tx){
        tx.executeSql(createCommentsStatement);
    }, function (error) {
        console.log(error);
    }, function () {
        console.log("Created general ok");
    });
}

function insertGeneral() {
    var insertGeneralStatement = "INSERT INTO general (team_num, team_name, scout_name, match_num, event, " +
        "robot_play, cur_robo_rank) VALUES (?,?,?,?,?,?,?)";

    var teamNum = "0";
    var teamName = "";
    var scoutName = "";
    var matchNum = "0";
    var event = "";
    var robotPlay = "Yes";
    var robotRank = "0";

    database.transaction(function (tx) {
       tx.executeSql(insertGeneralStatement, [teamNum, teamName, scoutName, matchNum, event, robotPlay, robotRank]);
    });
}

//This function is to update a key value pair in the specified table
function updateTable(table, key, value,  id) {
    var updateStatement = "UPDATE "+ table+" SET " + key + " = " + value+ "WHERE id = " + id;
    database.transaction(function (tx) {
        tx.executeSql(updateStatement);
    });
}

function updateTeamNum(id) {
    var teamNum =  $('#teamnumber').val();
    updateTable("general", "team_num",teamNum, id);
    updateTable("auto", "team_num", teamNum, id);
    updateTable("tele_op", "team_num", teamNum, id);
    updateTable("comments", "team_num",teamNum, id);
}

function updateTeamName(id) {
    updateTable("general", "team_name",$('#teamname').val(), id);
}

function updateScoutName() {
    updateTable("general", "scout_name", $('#scoutname').val(), id);
}


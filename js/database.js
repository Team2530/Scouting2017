var databseOptions = {
    fileName: "sqlite_scouting",
    version: "1.0",
    displayName: "SQLIte Scouting",
    maxSize: 1024
};

var database = openDatabase(databseOptions.fileName,
    databseOptions.version, databseOptions.displayName, databseOptions.maxSize);



var insertTeleopStatement = "INSERT INTO general (team_num,  match_num,  " +
    "high_score, low_score, floor_col, hopper_col, human_load, gears_del, pickup, pickup_hu, dropped_gear, rope," +
    " penalties) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

var insertCommentStatement = "INSERT INTO general (team_num,  match_num,  " +
    "comments) VALUES (?,?,?)";

function createGeneralTable() {
    var createGeneralStatement = "CREATE TABLE IF NOT EXISTS general (id INTEGER PRIMARY KEY AUTOINCREMENT," +
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
    var createAutoStatement =  "CREATE TABLE IF NOT EXISTS auto (id INTEGER PRIMARY KEY AUTOINCREMENT," +
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
    var createTeleopStatement = "CREATE TABLE IF NOT EXISTS tele_op (id INTEGER PRIMARY KEY AUTOINCREMENT," +
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
    var createCommentsStatement = "CREATE TABLE IF NOT EXISTS comment(id INTEGER PRIMARY KEY AUTOINCREMENT," +
        "team_num TEXT, match_num TEXT, comments NONE)";

    database.transaction(function(tx){
        tx.executeSql(createCommentsStatement);
    }, function (error) {
        console.log(error);
    }, function () {
        console.log("Created general ok");
    });
}

function insertGeneral(scoutname, matchnum, teamnum) {
    var insertGeneralStatement = "INSERT INTO general (team_num, team_name, scout_name, match_num, event, " +
        "robot_play, cur_robo_rank) VALUES (?,?,?,?,?,?,?)";

    var teamNum = teamnum;
    var teamName = "";
    var scoutName = scoutname;
    var matchNum = matchnum;
    var event = "";
    var robotPlay = "Yes";
    var robotRank = "0";
    var dataset = null;
    database.transaction(function (tx) {
       tx.executeSql(insertGeneralStatement, [teamNum, teamName, scoutName, matchNum, event, robotPlay, robotRank]);
        tx.executeSql("SELECT last_insert_rowid()", [], function (tx, result) {
            dataset = result;
        });
    });


    database.transaction(function (tx) {

    });
    return dataset;
}

//This function is to update a key value pair in the specified table
function updateTable(table, key, value,  id) {
    var updateStatement = "UPDATE "+ table+" SET " + key + " = " + value+ " WHERE id = " + id;
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

function updateScoutName(id) {
    updateTable("general", "scout_name", $('#scoutname').val(), id);
}

function updateMatchNum(id) {
    var num = $('#matchnumber').val();
    updateTable("general", "match_num",num, id);
    updateTable("auto", "match_num", num, id);
    updateTable("tele_op", "match_num", num, id);
    updateTable("comments", "match_num",num, id);
}

var pk = -1;
function selectPK(match, scout, team, table) {
    var select = "SELECT id from " + table+ " where match_num = '" +match + "' and  scout_name = '" +scout +
            "' and team_num = '" + team + "'";

    database.transaction(function (tx) {
         tx.executeSql(select, [], function (tx, results) {
             setPk(results.rows[0].id);
        });
    });
}

function setPk(a) {
    pk=a;
}
function getPk() {
    return pk;

}

function saveGeneral() {

    var teamNum = $('#teamnumber').val();
    var teamName = $('#teamname').val();
    var scoutName = $('#scoutname').val();
    var matchNum = $('#matchnumber').val();
    var event = $('#event option:selected').text();
    var robotPlay = $('#robotPlay option:selected').text();
    var robotRank = $('#currentrobotranking').val();
    selectPK(matchNum, scoutName, teamNum, 'general');
    var id = getPk();
    updateTable('general', 'team_num', teamNum, id);
    updateTable('general', 'team_name', teamName, id);
    updateTable('general', 'scout_name', scoutName, id);
    updateTable('general', 'match_num', matchNum, id);
    updateTable('general', 'event', event, id);
    updateTable('general', 'robot_play', robotPlay, id);
    updateTable('general', 'cur_robo_rank', robotRank, id);
}
var insertAutoStatement = "INSERT INTO general (team_num,  match_num,  " +
    "high_score, low_score, gear_del, move, penalty, cross_bl) VALUES (?,?,?,?,?,?,?,?)";

function saveAuto() {
    var teamNum=$('#teamnumber').val();
    var matchNum = $('#matchnumber').val();
    var highScore = $('#highHits').val();
    var lowSore = $('#lowhits').val();
    var gearDel = $('#geardelivery').val();

}

var databseOptions = {
    fileName: "sqlite_scouting",
    version: "1.0",
    displayName: "SQLIte Scouting",
    maxSize: 1024
};

var database = openDatabase(databseOptions.fileName,
    databseOptions.version, databseOptions.displayName, databseOptions.maxSize);







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
        console.log("Created auto ok");
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
        console.log("Created Teleop ok");
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
        console.log("Created comments ok");
    });
}

function insertGeneral(scoutname, matchnum, teamnum) {


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

var pk;

function getMaxIndex(table) {
    var selectStatement = "select MAX(id) as max_id from " + table;

    database.transaction(function (tx) {
        tx.executeSql(selectStatement, [],function (tx, results) {
            pk = results.rows.item(0).max_id;
        });
    });
}







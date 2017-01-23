var databseOptions = {
    fileName: "sqlite_scouting",
    version: "1.0",
    displayName: "SQLIte Scouting",
    maxSize: 1024
};

var database = openDatabase(databseOptions.fileName,
    databseOptions.version, databseOptions.displayName, databseOptions.maxSize);

var createGeneralStatement = "CREATE TABLE general IF NOT EXISTS(id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "team_num INTEGER, team_name TEXT, scout_name TEXT, match_num INTEGER, event TEXT, " +
    "robot_play TEXT, cur_robo_rank INTEGER)";

var createAutoStatement =  "CREATE TABLE auto IF NOT EXISTS(id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "team_num INTEGER, match_num INTEGER, high_score INTEGER, low_score INTEGER, " +
    "gear_del TEXT, move TEXT, penalty TEXT, cross_bl TEXT )";

var createTeleopStatement = "CREATE TABLE tele_op IF NOT EXISTS(id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "team_num INTEGER, match_num INTGER, high_score INTEGER, low_score INTEGER, floor_col TEXT, " +
    "hopper_col TEXT, human_load TEXT, gears_del INTEGER, pickup TEXT, pickup_hu TEXT, " +
    "dropped_gear INTEGER, rope TEXT, penalties INTEGER)";

var createCommentsStatement = "CREATE TABLE comments IF NOT EXISTS(id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "team_num INTEGER, match_num INTEGER, comments NONE)";

var insertGeneralStatement = "INSERT INTO general (team_num, team_name, scout_name, match_num, event, " +
    "robot_play, cur_robo_rank) VALUES (?,?,?,?,?,?,?)";

var insertAutoStatement = "INSERT INTO general (team_num,  match_num,  " +
    "high_score, low_score, gear_del, move, penalty, cross_bl) VALUES (?,?,?,?,?,?,?,?)";

var insertTeleopStatement = "INSERT INTO general (team_num,  match_num,  " +
    "high_score, low_score, floor_col, hopper_col, human_load, gears_del, pickup, pickup_hu, dropped_gear, rope," +
    " penalties) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

var insertCommentStatement = "INSERT INTO general (team_num,  match_num,  " +
    "comments) VALUES (?,?,?)";

function createGeneralTable() {
 database.transaction(function(tx){
        tx.executeSql(createGeneralStatement);
    }, function (error) {
     console.log(error);
 }, function () {
     console.log("Created general ok");
 });
}

function createAutoTable() {
    database.transaction(function(tx){
        tx.executeSql(createAutoStatement);
    }, function (error) {
        console.log(error);
    }, function () {
        console.log("Created general ok");
    });
}

function createTeleopTable() {
    database.transaction(function(tx){
        tx.executeSql(createTeleopStatement);
    }, function (error) {
        console.log(error);
    }, function () {
        console.log("Created general ok");
    });
}

function createCommentsTable() {
    database.transaction(function(tx){
        tx.executeSql(createCommentsStatement);
    }, function (error) {
        console.log(error);
    }, function () {
        console.log("Created general ok");
    });
}
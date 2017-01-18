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
    "hopper_col TEXT, human_load TEXT, gears_del INTEGER, pickuo TEXT, pickup_hu TEXT, " +
    "dropped_gear INTEGER, rope TEXT, penalties INTEGER)";

var createCommentsTable = "CREATE TABLE comments IF NOT EXISTS(id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "team_num INTEGER, match_num INTEGER, comments NONE)";
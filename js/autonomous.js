function Autonomous(teamNum, matchNum, highScore, lowScore, gearDel, move, penalty, crossbl) {
    this.teamNum = teamNum;
    this.matchNum = matchNum;
    this.highScore = highScore;
    this.lowScore = lowScore;
    this.gearDel = gearDel;
    this.move = move;
    this.penalty = penalty;
    this.crossbl = crossbl;
    this.save = function () {
        updateAuto(this);
    };
}

var insertAutoStatement = "INSERT INTO auto (team_num,  match_num,  " +
    "high_score, low_score, gear_del, move, penalty, cross_bl) VALUES (?,?,?,?,?,?,?,?)";

function insertAuto(auto) {
    database.transaction(function (tx) {
        tx.executeSql(insertAutoStatement, [auto.teamNum, auto.matchNum, auto.highScore, auto.lowScore, auto.gearDel,
            auto.move, auto.penalty, auto.crossbl] );
    });
}

var updateAutoStatement = "UPDATE auto SET high_score = ?, low_score = ?, gear_del = ?, " +
    "move = ?, penalty = ?, cross_bl = ? WHERE team_num = ? and match_num = ?";

function updateAuto(auto) {
    database.transaction(function (tx) {
        tx.executeSql(updateAutoStatement, [ auto.highScore, auto.lowScore, auto.gearDel,
        auto.move, auto.penalty, auto.crossbl, auto.teamNum, auto.matchNum], function (tx, results) {
            console.log(results);
        }, function (err) {
            console.log(err);
        });
    });
}
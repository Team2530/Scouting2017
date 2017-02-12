function Autonomous(teamNum, matchNum, highScore, lowScore, gearDel, move, penalty, crossbl, currAutoId) {
    this.teamNum = teamNum;
    this.matchNum = matchNum;
    this.highScore = highScore;
    this.lowScore = lowScore;
    this.gearDel = gearDel;
    this.move = move;
    this.penalty = penalty;
    this.crossbl = crossbl;
    this.save = function () {
        if(this.currAutoId != null){
            updateAuto(this);
        }
        else{
            this.currAutoId = insertAuto(this);
        }
    };
    this.currAutoId = currAutoId;
}

var insertAutoStatement = "INSERT INTO auto (team_num,  match_num,  " +
    "high_score, low_score, gear_del, move, penalty, cross_bl) VALUES (?,?,?,?,?,?,?,?)";

function insertAuto(auto) {
    database.transaction(function (tx) {
        tx.executeSql(insertAutoStatement, [auto.teamNum, auto.matchNum, auto.highScore, auto.lowScore, auto.gearDel,
            auto.move, auto.penalty, auto.crossbl] )
    });
    return getMaxIndex("auto");
}

var updateAutoStatement = "UPDATE auto SET team_num = ?, match_num = ?, high_score = ?, low_score = ?, gear_del = ?, " +
    "move = ?, penalty = ?, cross_bl = ? WHERE id = ?";

function updateAuto(auto) {
    database.transaction(function (tx) {
        tx.executeSql(updateAutoStatement, [auto.teamNum, auto.matchNum, auto.highScore, auto.lowScore, auto.gearDel,
        auto.move, auto.penalty, auto.crossbl, auto.currAutoId]);
    });
}
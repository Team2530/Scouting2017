function Teleop(teamNum, matchNum, highScore, lowScore, floorCol, hopperCol, humanLoad, gearsDel, pickup, pickupHu,
droppedGear, rope, penalties, currTeleId) {
    this.teamNum = teamNum;
    this.matchNum = matchNum;
    this.highScore = highScore;
    this.lowScore = lowScore;
    this.floorCol = floorCol;
    this.hopperCol = hopperCol;
    this.humanLoad = humanLoad;
    this.gearsDel = gearsDel;
    this.pickup = pickup;
    this.pickupHu = pickupHu;
    this.droppedGear = droppedGear;
    this.rope = rope;
    this.penalties = penalties;
    this.save = function () {
        if(this.currTeleId != null){
            updateTele(this);
        }
        else{
            this.currTeleId = insertTele(this);
        }
    };
    this.currTeleId = currTeleId;
}

var insertTeleopStatement = "INSERT INTO tele_op (team_num,  match_num,  " +
    "high_score, low_score, floor_col, hopper_col, human_load, gears_del, pickup, pickup_hu, dropped_gear, rope," +
    " penalties) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
function insertTele(tele) {

    database.transaction(function (tx) {
        tx.executeSql(insertTeleopStatement, [tele.teamNum, tele.matchNum, tele.highScore, tele.lowScore, tele.floorCol,
            tele.hopperCol, tele.humanLoad, tele.gearsDel, tele.pickup, tele.pickupHu, tele.droppedGear, tele.rope,
        tele.penalties] );
    });
    return getMaxIndex("tele_op");
}

var updateAutoStatement = "UPDATE tele_op SET team_num = ?, match_num = ?, high_score = ?, low_score = ?,  " +
    "floor_col = ?, hopper_col = ?, human_load = ?, gears_del = ?, " +
    "pickup = ?, pickup_hu = ?, dropped_gear = ?, rope = ?, penalties = ? WHERE id = ?";

function updateTele(tele) {
    database.transaction(function (tx) {
        tx.executeSql(updateAutoStatement, [tele.teamNum, tele.matchNum, tele.highScore, tele.lowScore, tele.floorCol,
            tele.hopperCol, tele.humanLoad, tele.gearsDel, tele.pickup, tele.pickupHu, tele.droppedGear, tele.rope,
            tele.penalties, tele.currTeleId]);
    });
}
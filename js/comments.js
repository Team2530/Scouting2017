function Comments(teamNum, matchNum, comments, currCommId) {
    this.teamNum = teamNum;
    this.matchNum = matchNum;
    this.comments = comments;
    this.currCommId = currCommId;
    this.save = function () {
        if(this.currCommId != null){
            updateComm(this);
        }
        else{
            this.currCommId = insertComm(this);
        }
    };
}


var insertCommentStatement = "INSERT INTO comment (team_num,  match_num,  " +
    "comments) VALUES (?,?,?)";

function insertComm(comm) {
    database.transaction(function (tx) {
        tx.executeSql(insertCommentStatement, [comm.teamNum, comm.matchNum, comm.comments]);
    });
    return getMaxIndex("auto");
}

var updateCommentStatement = "UPDATE comment SET team_num = ?, match_num = ?, comments = ? WHERE id = ?";

function updateComm(comm){
    database.transaction(function (tx) {
        tx.executeSql(updateCommentStatement, [comm.teamNum, comm.matchNum, comm.comments, comm.currCommId])
    })
}
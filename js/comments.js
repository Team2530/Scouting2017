function Comments(teamNum, matchNum, comments) {
    this.teamNum = teamNum;
    this.matchNum = matchNum;
    this.comments = comments;
    this.save = function () {
        updateComm(this);
    };
}


var insertCommentStatement = "INSERT INTO comment (team_num,  match_num,  " +
    "comments) VALUES (?,?,?)";

function insertComm(comm) {
    database.transaction(function (tx) {
        tx.executeSql(insertCommentStatement, [comm.teamNum, comm.matchNum, comm.comments]);
    });
}

var updateCommentStatement = "UPDATE comment SET comments = ? WHERE team_num = ? and " +
    "match_num = ?";

function updateComm(comm){
    database.transaction(function (tx) {
        tx.executeSql(updateCommentStatement, [ comm.comments, comm.teamNum, comm.matchNum],
        function (tx, results) {
            console.log(results);
        }, function (err) {
               console.log(err);
            });
    });
}
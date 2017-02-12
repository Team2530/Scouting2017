var scoutname;
var matchNumer ;
var team;
var match;
$(document).ready(function () {
    createGeneralTable();
    createCommentsTable();
    createAutoTable();
    createTeleopTable();


    $('#start').on("click", function () {
        scoutname =$('#scoutname').val();
        matchNumer = $('#matchnumber').val();
        team = $('#teamnumber').val();

        //if(matchAlreadyExists()){
            //throwModal;
        //}else{
        match = new Team(
            new General(team, "", scoutname, matchNumer, "", "", "", null),
            new Autonomous(team, matchNumer, "", "", "", "", "", "", null),
            new Teleop(team, matchNumer, "", "", "", "", "", "", "", "", "", "", "", null),
            new Comments(team, matchNumer, "", null)
        );


        $('#newmatch-modal').modal('hide');
    });
    $('#saveGeneral').on('click',function () {
        match.general.save();
    });
    $('#saveAuto').on('click', function () {
        match.auto.save();
    });
    $('#saveTeleop').on('click',function () {
        match.teleop.save();
    });
    $('#saveComments').on('click', function () {
        match.comments.save();
    });
});


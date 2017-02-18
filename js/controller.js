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
        match.save();
        $('#newmatch-modal').modal('hide');
    });
    $('#saveGeneral').on('click',function () {
        match.general.teamName = $("#teamname").val();
        match.general.event = $("#event option:selected").text();
        match.general.robotRank = $("#currentrobotranking").val();
        match.general.robotPlay = $("#robotPlay option:selected").text();
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


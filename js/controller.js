$(document).ready(function () {
    createGeneralTable();
    createCommentsTable();
    createAutoTable();
    createTeleopTable();

    var scoutname;
    var matchNumer ;
    var team;
    $('#start').on("click", function () {
        scoutname =$('#scoutname').val();
        matchNumer = $('#matchnumber').val();
        team = $('#teamnumber').val();
        $('#newmatch-modal').modal('hide');
        insertGeneral( scoutname,matchNumer, team);
    });

    $('#teamname').on('blur', function () {
        updateTeamName(selectPK(matchNumer,scoutname,team,"general"));
    });

});


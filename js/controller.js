$(document).ready(function () {
    createGeneralTable();
    createCommentsTable();
    createAutoTable();
    createTeleopTable();

    $('#start').on("click", function () {
        $('#newmatch-modal').modal('hide');
        var id = insertGeneral();
        updateScoutName(id);
        updateTeamNum(id);
        updateMatchNum(id);
    });

});


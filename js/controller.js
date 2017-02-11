var scoutname;
var matchNumer ;
var team;
$(document).ready(function () {
    createGeneralTable();
    createCommentsTable();
    createAutoTable();
    createTeleopTable();


    $('#start').on("click", function () {
        scoutname =$('#scoutname').val();
        matchNumer = $('#matchnumber').val();
        team = $('#teamnumber').val();
        $('#newmatch-modal').modal('hide');
    });
    $('#saveGeneral').on('click',function () {
        saveGeneral();
    })
});


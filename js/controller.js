$(document).ready(function () {
    createGeneralTable();
    createCommentsTable();
    createAutoTable();
    createTeleopTable();

    $('#start').on("click", function () {
        $('#newmatch-modal').modal('hide');
    });

});


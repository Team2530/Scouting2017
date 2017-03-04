function Team(general, auto, teleop, comments){
    this.general = general;
    this.auto = auto;
    this.teleop = teleop;
    this.comments = comments;
    this.save = function () {
        insertGeneral(this.general);
        insertAuto(this.auto);
        insertTele(this.teleop);
        insertComm(this.comments);
    }
}
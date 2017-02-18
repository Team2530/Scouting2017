function Team(general, auto, teleop, comments){
    this.general = general;
    this.auto = auto;
    this.teleop = teleop;
    this.comments = comments;
    this.save = function () {
        this.general.save();
        this.auto.save();
        this.teleop.save();
        this.comments.save();
    }
}
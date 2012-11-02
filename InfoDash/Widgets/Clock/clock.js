var InfoDash;
(function (InfoDash) {
    var ClockViewModel = (function () {
        function ClockViewModel() {
            this.date = ko.observable();
            this.time = ko.observable();
            setInterval(this.startTime.bind(this), 500);
        }
        ClockViewModel.prototype.formatTime = function (i) {
            if(i < 10) {
                return "0" + i;
            } else {
                return i.toString();
            }
        };
        ClockViewModel.prototype.startTime = function () {
            var today = new Date();
            var h = this.formatTime(today.getHours());
            var m = this.formatTime(today.getMinutes());
            var s = this.formatTime(today.getSeconds());
            this.time(h + ":" + m + ":" + s);
            this.date(today.toDateString());
        };
        return ClockViewModel;
    })();
    InfoDash.ClockViewModel = ClockViewModel;    
})(InfoDash || (InfoDash = {}));


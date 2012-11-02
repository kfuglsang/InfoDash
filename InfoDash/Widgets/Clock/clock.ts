declare var ko;

module InfoDash {
    export class ClockViewModel {
        constructor () {
            setInterval(this.startTime.bind(this), 500);
        }

        public date = ko.observable();
        public time = ko.observable();

        private formatTime(i: number): string {
            if (i < 10)
                return "0" + i;
            else
                return i.toString();
        }

        startTime() {
            var today = new Date();

            var h = this.formatTime(today.getHours());
            var m = this.formatTime(today.getMinutes());
            var s = this.formatTime(today.getSeconds());

            this.time(h + ":" + m + ":" + s);
            this.date(today.toDateString());
        }
    }
}
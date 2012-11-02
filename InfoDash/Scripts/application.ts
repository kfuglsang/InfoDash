///<reference path="jquery.d.ts" />

declare var ko;

module InfoDash {
    class AppViewModel {

    }

    class App {
        constructor () {
            $(".gridster ul").gridster({
                widget_margins: [10, 10],
                widget_base_dimensions: [370, 340]
            });

            var widgets = $("[data-row^=]");

            // TODO: Find a better way to do this
            var clocks = $("[data-view='Clock']");
            $(clocks).each(function (i, clock) {
               $(clock).attr("data-bind", "template: 'widget-clock'");
               $(clock).addClass("widget");
               $(clock).addClass("widget-clock");
            });

            ko.applyBindings(new InfoDash.ClockViewModel(), clocks[0]);
        }
    }

    $(() => {
        new App();
    });
}
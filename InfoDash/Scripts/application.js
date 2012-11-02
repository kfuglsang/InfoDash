var InfoDash;
(function (InfoDash) {
    var AppViewModel = (function () {
        function AppViewModel() { }
        return AppViewModel;
    })();    
    var App = (function () {
        function App() {
            $(".gridster ul").gridster({
                widget_margins: [
                    10, 
                    10
                ],
                widget_base_dimensions: [
                    370, 
                    340
                ]
            });
            var widgets = $("[data-row^=]");
            var clocks = $("[data-view='Clock']");
            $(clocks).each(function (i, clock) {
                $(clock).attr("data-bind", "template: 'widget-clock'");
                $(clock).addClass("widget");
                $(clock).addClass("widget-clock");
            });
            ko.applyBindings(new InfoDash.ClockViewModel(), clocks[0]);
        }
        return App;
    })();    
    $(function () {
        new App();
    });
})(InfoDash || (InfoDash = {}));


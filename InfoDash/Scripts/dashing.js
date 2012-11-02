//window.Dashing = (function (_super) {

//    __extends(Dashing, _super);

//    function Dashing() {
//        return Dashing.__super__.constructor.apply(this, arguments);
//    }

//    Dashing.root(function () { });

//    return Dashing;

//})(Batman.App);

//Dashing.params = Batman.URI.paramsFromQuery(window.location.search.slice(1));

//Dashing.Widget = (function (_super) {

//    __extends(Widget, _super);

//    function Widget() {
//        this.onData = __bind(this.onData, this);

//        this.receiveData = __bind(this.receiveData, this);

//        var type, _base, _name;
//        this.constructor.prototype.source = Batman.Filters.underscore(this.constructor.name);
//        Widget.__super__.constructor.apply(this, arguments);
//        this.mixin($(this.node).data());
//        (_base = Dashing.widgets)[_name = this.id] || (_base[_name] = []);
//        Dashing.widgets[this.id].push(this);
//        this.mixin(Dashing.lastEvents[this.id]);
//        type = Batman.Filters.dashize(this.view);
//        $(this.node).addClass("widget widget-" + type + " " + this.id);
//    }

//    Widget.accessor('updatedAtMessage', function () {
//        var timestamp, updatedAt;
//        if (updatedAt = this.get('updatedAt')) {
//            timestamp = updatedAt.toString().match(/\d*:\d*/)[0];
//            return "Last updated at " + timestamp;
//        }
//    });

//    Widget.prototype.on('ready', function () {
//        return Dashing.Widget.fire('ready');
//    });

//    Widget.prototype.receiveData = function (data) {
//        this.mixin(data);
//        return this.onData(data);
//    };

//    Widget.prototype.onData = function (data) { };

//    return Widget;

//})(Batman.View);

//Dashing.AnimatedValue = {
//    get: Batman.Property.defaultAccessor.get,
//    set: function (k, to) {
//        var num, num_interval, timer, up,
//          _this = this;
//        if (!(to != null) || isNaN(to)) {
//            return this[k] = to;
//        } else {
//            timer = "interval_" + k;
//            num = !isNaN(this[k]) && (this[k] != null) ? this[k] : 0;
//            if (!(this[timer] || num === to)) {
//                to = parseFloat(to);
//                num = parseFloat(num);
//                up = to > num;
//                num_interval = Math.abs(num - to) / 90;
//                this[timer] = setInterval(function () {
//                    num = up ? Math.ceil(num + num_interval) : Math.floor(num - num_interval);
//                    if ((up && num > to) || (!up && num < to)) {
//                        num = to;
//                        clearInterval(_this[timer]);
//                        _this[timer] = null;
//                        delete _this[timer];
//                    }
//                    _this[k] = num;
//                    return _this.set(k, to);
//                });
//            }
//            return this[k] = num;
//        }
//    }
//};

//Dashing.widgets = widgets = {};

//Dashing.lastEvents = lastEvents = {};

//Dashing.debugMode = false;

///*
//source = new EventSource('/events');

//source.addEventListener('open', function (e) {
//    return console.log("Connection opened");
//});

//source.addEventListener('error', function (e) {
//    console.log("Connection error");
//    if (e.readyState === EventSource.CLOSED) {
//        return console.log("Connection closed");
//    }
//});

//source.addEventListener('message', function (e) {
//    var data, widget, _i, _len, _ref, _ref1, _results;
//    data = JSON.parse(e.data);
//    if (Dashing.debugMode) {
//        console.log("Received data for " + data.id, data);
//    }
//    lastEvents[data.id] = data;
//    if (((_ref = widgets[data.id]) != null ? _ref.length : void 0) > 0) {
//        _ref1 = widgets[data.id];
//        _results = [];
//        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
//            widget = _ref1[_i];
//            _results.push(widget.receiveData(data));
//        }
//        return _results;
//    }
//});
//*/

//$(document).ready(function () {
//    return Dashing.run();
//});
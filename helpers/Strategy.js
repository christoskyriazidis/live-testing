const Helpers = function () {
    this.sportName = ""
}

Helpers.prototype = {
    setStrategy: function (sportName) {
        this.sportName = sportName
    },
    calculate: function (package) {
        return this.sportName.calculate(package);
    }
}

var UPS = function () {
    this.calculate = function (package) {

        return "$45.95";
    }
};


var Fedex = function () {
    this.calculate = function (package) {
        // calculations...
        return "$43.20";
    }
};

var package = { from: "76712", to: "10012", weigth: "lkg" };

const _UPS = new UPS();
const _Fedex = new Fedex();
const _Helpers = new Helpers();


_Helpers.setStrategy(_UPS);
console.log('upds strategy: ' + _Helpers.calculate(package));
_Helpers.setStrategy(_Fedex);
console.log('upds strategy: ' + _Helpers.calculate(package));



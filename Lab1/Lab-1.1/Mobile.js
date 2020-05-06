"use strict";
exports.__esModule = true;
var BasicPhone_1 = require("./BasicPhone");
var SmartPhone_1 = require("./SmartPhone");
var Mobile = /** @class */ (function () {
    function Mobile() {
    }
    Mobile.prototype.printMobileDetail = function (id, name, cost, type) {
        this.MobileId = id;
        this.MobileName = name;
        this.MobileCost = cost;
        this.MobileType = type;
        if (type == "BasicPhone") {
            console.log(this.MobileId + " " + this.MobileName + " " + this.MobileCost + " " + BasicPhone_1.Basic.printType());
        }
        else {
            console.log(this.MobileId + " " + this.MobileName + " " + this.MobileCost + " " + SmartPhone_1.Smart.printType());
        }
    };
    return Mobile;
}());
exports.Mobile = Mobile;

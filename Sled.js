"use strict";
exports.__esModule = true;
exports.Sled = void 0;
var Bag_1 = require("./Bag");
var BagType_1 = require("./BagType");
var Sled = /** @class */ (function () {
    function Sled(santa) {
        this.bags = [];
        this.santa = santa;
    }
    Sled.prototype.addBag = function (bag) {
        this.bags.push(bag);
    };
    Sled.prototype.addPresentAndNewBagIfNeeded = function (present) {
        var bagsLength = this.bags.length;
        var success = false;
        if (bagsLength > 0) {
            success = this.bags[bagsLength - 1].addPresent(present);
        }
        if (!success || bagsLength === 0) {
            var bag = new Bag_1.Bag(10, BagType_1.BagType.Canvas);
            bag.addPresent(present);
            this.bags.push(bag);
        }
    };
    Sled.prototype.print = function () {
        console.log(this.santa.name);
        this.bags.forEach(function (bag) {
            bag.print();
        });
    };
    return Sled;
}());
exports.Sled = Sled;

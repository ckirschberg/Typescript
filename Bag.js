"use strict";
//https://www.typescriptlang.org/docs/handbook/2/classes.html
exports.__esModule = true;
exports.Bag = void 0;
var BagType_1 = require("./BagType");
var PresentType_1 = require("./PresentType");
var Bag = /** @class */ (function () {
    function Bag(maxWeight, bagType) {
        this.presents = [];
        this.maxWeight = maxWeight;
        this.bagType = bagType;
    }
    Bag.prototype.print = function () {
        // console.log("array", this.presents);
        console.log("This bag has a max weight of " + this.maxWeight
            + " and is of type " + this.bagType);
        this.presents.forEach(function (present) { return present.print(); });
    };
    Bag.prototype.addPresent = function (present) {
        if (present.getPresentType() === PresentType_1.PresentType.Soft && this.bagType === BagType_1.BagType.Paper) {
            return false;
        }
        if (this.totalWeight() + present.weight <= this.maxWeight) {
            this.presents.push(present);
            return true;
        }
        return false;
    };
    Bag.prototype.totalWeight = function () {
        var sum = 0;
        this.presents.forEach(function (element) {
            sum += element.weight;
        });
        return sum;
    };
    return Bag;
}());
exports.Bag = Bag;

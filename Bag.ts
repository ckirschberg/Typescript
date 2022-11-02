//https://www.typescriptlang.org/docs/handbook/2/classes.html

import { BagType } from "./BagType";
import { Present } from "./Present";
import { PresentType } from "./PresentType";

export class Bag {
    maxWeight: number;
    bagType: BagType;
    presents: Present[] = [];

    constructor(maxWeight: number, bagType: BagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
    }

    print(): void {
        console.log("This bag has a max weight of " + this.maxWeight 
            + " and is of type " + this.bagType);
        this.presents.forEach(present => present.print());
    }

    addPresent(present: Present): boolean {
        if (present.getPresentType() === PresentType.Soft && this.bagType === BagType.Paper) {
            return false;
        }

        if (this.totalWeight() + present.weight <= this.maxWeight) {
            this.presents.push(present);
            return true;
        }
        return false;
    }

    totalWeight(): number {
        let sum = 0;
        this.presents.forEach(element => {
            sum += element.weight;
        });
        return sum;
    }
}
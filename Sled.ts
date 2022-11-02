import { Bag } from "./Bag";
import { BagType } from "./BagType";
import { Present } from "./Present";
import { Santa } from "./Santa";

export class Sled {
    santa: Santa;
    bags: Bag[] = [];

    constructor(santa: Santa) {
        this.santa = santa;
    }

    addBag(bag: Bag) {
        this.bags.push(bag);
    }

    addPresentAndNewBagIfNeeded(present: Present) {
        const bagsLength = this.bags.length;
        let success = false;
        if (bagsLength > 0) {
            success = this.bags[bagsLength-1].addPresent(present);
        }
        if (!success || bagsLength === 0) {
            const bag = new Bag(10, BagType.Canvas);
            bag.addPresent(present);
            this.bags.push(bag);
        }
    }

    print(): void {
        console.log(this.santa.name);
        
        this.bags.forEach(bag => {
            bag.print();
        });
    }
}
import { Bag } from "./Bag";
import { BagType } from "./BagType";
import { Present } from "./Present";
import { PresentType } from "./PresentType";
import { Santa } from "./Santa";
import { Sled } from "./Sled";

const santa1 = new Santa("Santa 1", 128);
const sled1 = new Sled(santa1);
const bag1 = new Bag(25, BagType.Paper);

const present1 = new Present("yellow present", 8, PresentType.Hard);
const present2 = new Present("red present", 3, PresentType.Soft);

bag1.addPresent(present1);
bag1.addPresent(present2);

sled1.addBag(bag1);
sled1.addPresentAndNewBagIfNeeded(present2);

sled1.print();
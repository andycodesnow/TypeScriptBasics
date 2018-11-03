import {Person} from "./classes";
import * as _ from "lodash";

let aPerson : Person = new Person("Aniruddh", "Roy");

console.log(aPerson.getFullName());

var array = [1, 2, 3, 4, 5];
console.log(_.reverse(array));

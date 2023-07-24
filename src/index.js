import fruits from "./foods";
import {choice,remove} from './helpers';

const chosen_fruit = choice(fruits);
console.log(`I'd like one ${chosen_fruit}, please!`);
console.log(`Here you go: ${chosen_fruit}`);
console.log(`Delicious! May I have another?`);
remove(fruits,chosen_fruit);
console.log(`I'm sorry, we're all out! We have ${fruits}`)
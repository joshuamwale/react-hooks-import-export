import React from "react";
import whoseHouse from "./houses/whoseHouse";

function Hogwarts() {
  whoseHouse(); // => "HAGRID'S HOUSE!"

  return <h1>Welcome to Hogwarts!</h1>;
}

import Hufflepuff from "./houses/Hufflepuff";

function Hogwarts() {
  return (
    <div>
      <Hufflepuff />
    </div>
  );
}

import { colors, gryffMascot } from "./houses/Gryffindor";

console.log(colors);
// => 'Scarlet and Gold'

gryffMascot();
// => 'The Lion'


export default Hogwarts;
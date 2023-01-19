let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota", "New Jersey", "North Carolina"];

let singleNames = states.filter(element=> element.includes("Dakota"));
console.log(singleNames);

let altSingleNames = states.filter(element => element.match(/\w+/g).length===2);
console.log(altSingleNames);
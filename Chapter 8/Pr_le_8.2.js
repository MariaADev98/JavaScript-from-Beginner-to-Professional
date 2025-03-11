let name = [
  "Raurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Raurence",
  "Mike",
  "Raurence",
  "Mike",
  "Raurence",
  "Mike",
];
let name2 = name.filter((value, index, aray) => {
  console.log(value, index, aray.indexOf(value));
});
console.log(name2);

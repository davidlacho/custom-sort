const list = [];

sortNumbers = () => `The numbers in the list are: ${list.sort((a, b) => a - b).join(', ')}`;

addNumberToList = (num) => {
  list.push(num);
  console.log(`${num} has been added to the list`);
}

getNumbers = (() => sortNumbers)();


module.exports.addNumberToList = addNumberToList;
module.exports.getNumbers = getNumbers;

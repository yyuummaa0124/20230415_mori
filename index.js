const array = [2, 4, 7, 5, 4, 3, 8];

const filterArray = array.filter(function(ele, i){
  return array.indexOf(ele) === i;
})

console.log(filterArray);


function isLeapYear(year) {
    return (year%4 == 0) && (year%100 != 0) || (year%400 == 0);
}

console.log(isLeapYear(2020));
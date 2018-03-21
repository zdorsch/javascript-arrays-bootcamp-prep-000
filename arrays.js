var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',

];


 var sisters = ["gabby","Drew","Julie","Dannielle","lauren"];
 var myself = "Zach";

function addElementToBeginningOfArray(sisters,myself){
  const family=  [`${myself}`,...sisters];
  return family;
}

var dogs = ["Rudy", "Jack"];
var cats = "Tootsie";

function destructivelyAddElementToBeginningOfArray(dogs,cats){
  dogs.unshift(`${cats}`);
  return dogs;
}

function addElementToEndOfArray(sisters,myself){
  const family=  [...sisters,`${myself}`];
  return family;
}
  
  var games = ["poker","tetris"];
  var sport = "golf";
  
  function destructivelyAddElementToEndOfArray(games,sport){
    games.push(`${sport}`)
    return games;
    }
    
    var days = ["Monday","Tuesday","Wednesday","Thursday"];
    var index = 3
    
    function accessElementInArray(days,index){
      return (days[`${index}`])
    }
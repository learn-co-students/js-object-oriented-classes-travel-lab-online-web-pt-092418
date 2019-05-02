function Driver(name, dateString){
  this.name = name; 
  this.startDate = new Date(dateString);
};

function Route( startPoint, endPoint) {
  this.startPoint= startPoint;
  this.endPoint = endPoint;
}


Driver.prototype.yearsExperienceFromBeginningOf = function(year){
  const yearNum = parseInt(year, 10)
  return yearNum - this.startDate.getFullYear();
};

const eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

Route.prototype.blocksTravelled = function () {
  const vertTravelled = Math.abs(parseInt(this.startPoint.vertical, 10) - parseInt(this.endPoint.vertical, 10));
  const startIdx = eastWest.indexOf(this.startPoint.horizontal);
  const endIdx = eastWest.indexOf(this.endPoint.horizontal);
  const horzTravelled = Math.abs(startIdx - endIdx);
  return vertTravelled + horzTravelled;
}

Route.prototype.estimatedTime = function(time) {
  let d = new Date(time);
  let n = d.getHours();
  if (n > 8 || n > 18) {
    let timeTraveled = blocksTravelled * 2;
    return timeTravelled
  }
  else 
    let timeTraveled = blocksTravelled * 3
    return timeTraveled
  
};

  
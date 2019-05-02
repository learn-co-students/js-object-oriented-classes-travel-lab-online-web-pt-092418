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

Route.prototype.estimatedTime = function(isPeakHours) {
  const blocks = this.blocksTravelled();
  if (isPeakHours) {
    return blocks / 2;
  }
  else {
    return blocks /3
  }
  
};

  

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    let endDate = year
    return endDate - this.startDate.getFullYear()
  }
}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let northSouth = this.endingLocation.vertical - this.beginningLocation.vertical
    let avenueBlocks = eastWest.indexOf(this.endingLocation.horizontal) -eastWest.indexOf(this.beginningLocation.horizontal)
    return northSouth + avenueBlocks
  }

  estimatedTime(hourType) {
    if (hourType == true) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}

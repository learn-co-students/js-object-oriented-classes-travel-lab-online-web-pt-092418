class Driver {
  constructor(name, day) {
    this.name = name;
    this.startDate = new Date(day.split(",").join(""));;
  };
  yearsExperienceFromBeginningOf (year) {
    return Number(year) - this.startDate.getFullYear()
  }
}


class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled () {
    const eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    let vBlock = this.endingLocation.vertical - this.beginningLocation.vertical;
    let hblock = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    return vBlock + hblock
  };

  estimatedTime(time) {
    if (time)
      return this.blocksTravelled() / 2;
    else
      return this.blocksTravelled() / 3;
  }
}




var birthdayDateForYear = function(person, year) {
  return new Date(year, person.birthday.monthnum - 1, person.birthday.daynum);
};
var birthdayDateWithoutYear = function(person) {
  var birthDate = birthdayDateForYear(person, 2015);
//  console.log(person.first + birthDate + person.birthday.daynum);
  return birthDate;
};
var dateBorn = function(person) {
  return new Date(person.birthday.year, person.birthday.monthnum - 1, person.birthday.daynum);
};

var today = new Date();
today.setHours(0,0,0,0);

var nextBirthdayWithYear = function(person) {
  var curYear = today.getFullYear();
  var nextYear = curYear + 1;
  var birthdayThisYear = birthdayDateForYear(person, curYear);
  var birthdayNextYear = birthdayDateForYear(person, nextYear);
  var nextBirthday = birthdayThisYear;
  if (nextBirthday < today) {
    nextBirthday = birthdayNextYear;
  }
  return nextBirthday;
};

var sortByTimeUntilBirthday = function(personA, personB) {
  var nextBirthdayA = nextBirthdayWithYear(personA);
  var nextBirthdayB = nextBirthdayWithYear(personB);
  if (nextBirthdayA < nextBirthdayB) {
    return -1;
  } else if (nextBirthdayB < nextBirthdayA) {
    return 1;
  } else {
    return 0;
  }
};

var age = function(person) {
  return today - dateBorn(person);
};

var birthdayFmt = function(person, fmt) {
    var birthDate = birthdayDateWithoutYear(person);
   // return "ht";
    return moment(birthDate).format(fmt);
};

var birthdayInlineStr = function(person, fmt) {
  if (person.birthday === undefined) {
    return "";
  }
  return "(b. " + birthdayFmt(persion, fmt) + ")";
};









var app = angular.module('YourKidsAddressesApp', [
  ,'ngSanitize']);

app.filter('isAddressOwner', function () {
  return function (people) {
    if (people) {
      return people.filter(function (person) {
        return (person.hasOwnProperty('owner') && person.owner === true);
      });
    } else {
      console.warn("variable 'people' not present");
      return null;
    }
  };
});

app.factory('peopleData', ['$http', '$q', function($http, $q){
  var data = [];
  var loaded = false;
  var service={};

  var getData = function() {
    return data;
  };

  service.fetchData = function() {
    var dataDefer = $q.defer();
    if (loaded === true) {
      dataDefer.resolve(getData());
    } else {
      $http.get('people.json').success(function(dataResponse) {
        data = dataResponse;
        loaded = true;
        console.log("peopleData fetched");
        dataDefer.resolve(getData());
      });
     }
     return dataDefer.promise;
  };

  return service;
}]);



app.controller('BirthdayController', ['$scope', 'peopleData', function($scope, peopleData) {
  peopleData.fetchData().then(function(data) {
    $scope.people = data; //orderBy($scope.birthdayDate);
    $scope.birthdayFmt = birthdayFmt;
    $scope.birthdayInlineStr = birthdayInlineStr;
    $scope.birthdayDateWithoutYear = birthdayDateWithoutYear;
    //		$scope.birthdayDateWithoutYear = birthdayDateWithoutYear;
  });
}]);


app.controller('CalendarController', ['$scope', 'peopleData', function($scope, peopleData) {
  var peopleByUpcomingBirthday = Array();
  $scope.birthdayFmt = birthdayFmt;
  $scope.birthdayInlineStr = birthdayInlineStr;

  peopleData.fetchData().then(function(data) {
    peopleByUpcomingBirthday = angular.copy(data);//people.slice(0);
    peopleByUpcomingBirthday.sort(sortByTimeUntilBirthday);
  });

  $scope.nPeopleByUpcomingBirthday = function(numPeople) {
    return peopleByUpcomingBirthday.slice(0, numPeople);
    //return people;
  };
  $scope.anyToShow = function() {
    return (peopleByUpcomingBirthday.length > 0);
  };
}]);

function enoughAddressInfoForGoogle(address) {
  return (address.hasOwnProperty('street') && address.hasOwnProperty('city') && address.hasOwnProperty('state') && address.hasOwnProperty('zip'));
}

app.controller('AddressController', ['$scope', 'peopleData', function($scope, peopleData) {
  $scope.birthdayFmt = birthdayFmt;
  $scope.birthdayInlineStr = birthdayInlineStr;
  peopleData.fetchData().then(function(data) {
    $scope.people = data;
  });

  function streetStr(streetArr, joinStr) {
    return streetArr.join(joinStr);
  }
  function googleMapsURL(address) {
    var url = "#";
    if (enoughAddressInfoForGoogle(address)) {
      var joinedStreetStr = streetStr(address.street, " ");
      var addressStr = encodeURIComponent(joinedStreetStr + address.city + " " + address.state + " " + address.zip);
      url = "http://maps.google.com/maps?f=q&hl=en&geocode=&time=&date=&ttype=&q=" + addressStr + "&ie=UTF8&z=16&iwloc=addr&om=1";
    }
    return url;
  }
  $scope.googleMapsURL = googleMapsURL;

  function photoURL(person) {
    return person.photos;
  }
  $scope.photoURL = photoURL;

  function needsClearfixForPeriod(index, period) {
    return (index % period === 0);
  }
  $scope.needsClearfixForPeriod = needsClearfixForPeriod;

  $scope.age = function(person) {
    return age(person);
  };

  function findSpouse(person) {
    var spouse = _.find($scope.people, function(candidate) {
      return candidate.hasOwnProperty('spouse_of') &&
      (candidate.spouse_of === person.id);
    });
    return spouse;
  }
  function spouseStr(person) {
    var str = "";
    var spouse = findSpouse(person);
    if (spouse !== undefined && spouse !== null) {
      // console.log("spouse.last = " + spouse.last + "; trused = " + $sce.trustAsHtml(spouse.last));
      str = " and " + spouse.first + " " + spouse.last;
      if (!!spouse.birthday) {
        str += " " + birthdayInlineStr(spouse, "MMM D");
      }
    }
    return str;
  }
  $scope.spouseStr = spouseStr;

  $scope.children = {};
  function findChildren(person) {
    var children = _.filter($scope.people, function(candidate) { return candidate.hasOwnProperty('child_of') && candidate.child_of === person.id; });
    $scope.children[person.id] = children;
    return children;
  }
  $scope.childrenOf = function(person) {
    if ($scope.children.hasOwnProperty(person.id)) {
      return $scope.children[person.id];
    } else {
      return findChildren(person);
    }
};
}]);

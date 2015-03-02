
  var people = [
    {"first": "Alex"
      ,"last": "Wheeler"
      ,"birthday": {"monthnum": 7, "daynum": 4}
     }
    ,{"first": "Sarah"
      ,"last": "Wheeler"
      ,"birthday": {"monthnum": 8, "daynum": 28}
     }
    ,{"first": "Rebekah"
      ,"last": "Wheeler"
      ,"birthday": {"monthnum": 11, "daynum": 3}
     }
    ,{"first": "Jonathan"
      ,"last": "Erickson"
      ,"birthday": {"monthnum": 8, "daynum": 7}
     }
    ,{"first": "Alejandra"
      ,"last": "Velez"
      ,"birthday": {"monthnum": 10, "daynum": 13}
     }
    ,{"first": "Ben"
      ,"last": "Wheeler"
      ,"birthday": {"monthnum": 7, "daynum": 31}
     }
    ,{"first": "Carmen"
      ,"last": "Wheeler"
      ,"birthday": {"monthnum": 6, "daynum": 3}
     }
    ,{"first": "Nina"
      ,"last": "Wheeler"
      ,"birthday": {"monthnum": 8, "daynum": 19}
     }
    ,{"first": "Jennifer"
      ,"last": "Jaff&eacute;"
      ,"birthday": {"monthnum": 4, "daynum": 18}
     }
    ,{"first": "Toby"
      ,"last": "Jaff&eacute;"
      ,"birthday": {"monthnum": 5, "daynum": 10}
     }
    ,{"first": "Sam"
      ,"last": "Jaff&eacute;"
      ,"birthday": {"monthnum": 9, "daynum": 26}
     }
    ,{"first": "Mariam"
      ,"last": "Gates"
      ,"birthday": {"monthnum": 10, "daynum": 10}
     }
    ,{"first": "Jasmine"
      ,"last": "Gates"
      ,"birthday": {"monthnum": 5, "daynum": 11}
     }
    ,{"first": "Dylan"
      ,"last": "Gates"
      ,"birthday": {"monthnum": 5, "daynum": 19}
     }
    ,{"first": "Elizabeth"
      ,"last": "Zackheim"
      ,"birthday": {"monthnum": 9, "daynum": 1}
     }
    ,{"first": "Gordon"
      ,"last": "Wheeler"
      ,"birthday": {"monthnum": 4, "daynum": 10}
     }
    ,{"first": "Jon"
      ,"last": "Korn"
      ,"birthday": {"monthnum": 8, "daynum": 20}
     }
    ,{"first": "Ben"
      ,"last": "G"
      ,"birthday": {"monthnum": 1, "daynum": 2}
     }
    ,{"first": "Kate"
      ,"last": "Cortesi"
      ,"birthday": {"monthnum": 2, "daynum": 2}
     }
    ,{"first": "Hugo"
      ,"last": "Jaff&eacute;"
      ,"birthday": {"monthnum": 11, "daynum": 19}
     }
    ,{"first": "Rolf"
      ,"last": "Gates"
      ,"birthday": {"monthnum": 2, "daynum": 3}
     }
    ,{"first": "Adrian"
      ,"last": "Zackheim"
      ,"birthday": {"monthnum": 9, "daynum": 19}
     }
    ,{"first": "Nancy"
      ,"last": "Lunney-Wheeler"
      ,"birthday": {"monthnum": 6, "daynum": 25}
     }
  ];




var birthdayDateForYear = function(person, year) {
  return new Date(year, person.birthday.monthnum - 1, person.birthday.daynum);
};
var birthdayDateWithoutYear = function(person) {
  var birthDate = birthdayDateForYear(person, 2015);
  console.log(person.first + birthDate + person.birthday.daynum);
  return birthDate;
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

var  birthdayFmt = function(person, fmt) {
    var birthDate = birthdayDateWithoutYear(person);
   // return "ht";
    return moment(birthDate).format(fmt);
  };

var app = angular.module('YourKidsAddressesApp', [
  'YourKidsAddressesApp.controllers'
  ,'ngSanitize']);

var controllers = angular.module('YourKidsAddressesApp.controllers', []);

controllers.controller('BirthdayController', ['$scope', function($scope) {
  $scope.people = people; //orderBy($scope.birthdayDate);
$scope.birthdayFmt = birthdayFmt;
//  $scope.birthdayDateWithoutYear = birthdayDateWithoutYear;
  
//		$scope.birthdayDateWithoutYear = birthdayDateWithoutYear;
}]);


controllers.controller('CalendarController', ['$scope', function($scope) {
    $scope.people = people;
    $scope.nPeopleByUpcomingBirthday = function(numPeople) {
  $scope.birthdayFmt = birthdayFmt;
   var peopleByUpcomingBirthday = people.slice(0); // copy
      peopleByUpcomingBirthday.sort(sortByTimeUntilBirthday);
      return peopleByUpcomingBirthday.slice(0, numPeople);
//return people;
    };
  $scope.anyToShow = true;

  }]);




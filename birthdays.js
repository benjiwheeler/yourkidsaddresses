
  var people = [
    {"first": "Alex"
      ,"last": "Wheeler"
      ,"owner": true
     ,"address": {
       "street1": "28 Raymond St."
       ,"city": "Allston"
       ,"state": "MA"
       ,"zip": "02134"
     }
     ,"phone": "(617) 686-4896"
      ,"birthday": {"monthnum": 7, "daynum": 4, "year": 1985}
     }

    ,{"first": "Jack"
      ,"last": "Wheeler"
      ,"owner": true
      ,"phone": "503-329-5257"
      ,"birthday": {"monthnum": 5, "daynum": 27, "year": 1975}
      ,"address": {
	"street1": "1234 Romany Rd"
	,"city": "Kansas City"
	,"state": "MO"
	,"zip": "64113"
      }
     }

    ,{"first": "Erika"
      ,"last": "Kauffman Wheeler"
      ,"spouse_of": {"first": "Jack", "last": "Wheeler"}
      ,"phone": "816-305-6271"
      ,"birthday": {"monthnum": 6, "daynum": 16, "year": 1975}
     }

    ,{"first": "Sarah"
      ,"last": "Wheeler"
      ,"owner": true
      ,"address": {
	"street1": "487 43rd Street #1"
	,"city": "Oakland"
	,"state": "CA"
	,"zip": "94609"

      }
      ,"phone": "(909) 456-9096"
      ,"birthday": {"monthnum": 8, "daynum": 28, "year": 1983}
     }

    ,{"first": "Rebekah"
      ,"last": "Wheeler"
      ,"owner": true
      ,"address": {
	"street1": "60 Winfield Street"
	,"city": "San Francisco"
	,"state": "CA"
	,"zip": "94110"
      }
      ,"phone": "(617) 959-9798"
      ,"birthday": {"monthnum": 11, "daynum": 3, "year": 1981}
     }

    ,{"first": "Jonathan"
      ,"last": "Erickson"
      ,"owner": true
      ,"address": {
	"street1": "940 Via Camino #5"
	,"city": "Wilmington"
	,"state": "CA"
	,"zip": "90744"
      }
      ,"phone": "(310) 350-7514"
      ,"birthday": {"monthnum": 8, "daynum": 7, "year": 1980}
     }

    ,{"first": "Alejandra"
      ,"last": "Velez"
      ,"spouse_of": {"first": "Jonathan", "last": "Erickson"}
      ,"birthday": {"monthnum": 10, "daynum": 13, "year": 1980}
     }

    ,{"first": "Ben"
      ,"last": "Wheeler"
      ,"owner": true
      ,"address": {
	"street1": "483 Putnam Ave., Garden Entrance"
	,"city": "Brooklyn"
	,"state": "NY"
	,"zip": "11221"
      }
      ,"phone": "(917) 254-1578, (646) 651-2046"
      ,"birthday": {"monthnum": 7, "daynum": 31, "year": 1979}
     }

    ,{"first": "Carmen"
      ,"last": "Wheeler"
      ,"birthday": {"monthnum": 6, "daynum": 3, "year": 2009}
     }

    ,{"first": "Nina"
      ,"last": "Wheeler"
      ,"birthday": {"monthnum": 8, "daynum": 19, "year": 2011}
     }

    ,{"first": "Jennifer"
      ,"last": "Jaff&eacute;"
      ,"owner": true
      ,"address": {
	"street1": "1503 Escalona Drive"
	,"city": "Santa Cruz"
	,"state": "CA"
	,"zip": "95060"
      }
      ,"phone": "(831) 466-0974 (home), (917) 859-4667 (cell)"
      ,"birthday": {"monthnum": 4, "daynum": 18, "year": 1972}
     }

    ,{"first": "Toby"
      ,"last": "Jaff&eacute;"
      ,"birthday": {"monthnum": 5, "daynum": 10, "year": 2009}
     }

    ,{"first": "Sam"
      ,"last": "Jaff&eacute;"
      ,"birthday": {"monthnum": 9, "daynum": 26, "year": 2012}
     }

    ,{"first": "Mariam"
      ,"last": "Gates"
      ,"owner": true
      ,"address": {
	"street1": "122 Echo St"
	,"city": "Santa Cruz"
	,"state": "CA"
	,"zip": "95060"
      }
      ,"phone": "(617) 271-7106, (831) 454-8895"
      ,"birthday": {"monthnum": 10, "daynum": 10, "year": 1971}
     }

    ,{"first": "Jasmine"
      ,"last": "Gates"
      ,"birthday": {"monthnum": 5, "daynum": 11, "year": 2003}
     }

    ,{"first": "Dylan"
      ,"last": "Gates"
      ,"birthday": {"monthnum": 5, "daynum": 19, "year": 2006}
     }

    ,{"first": "Elizabeth"
      ,"last": "Zackheim"
      ,"owner": true
      ,"address": {
	"street1": "185 West End Avenue, Apt 26H"
	,"city": "New York"
	,"state": "NY"
	,"zip": "10023"
      }
      ,"phone": "(917) 407-1342, (212) 366-2659"
      ,"birthday": {"monthnum": 9, "daynum": 1, "year": 1969}
     }

    ,{"first": "Gordon"
      ,"last": "Wheeler"
      ,"owner": true
      ,"address": {
	"street1": "127 Abby Ct."
	,"city": "Santa Cruz"
	,"state": "CA"
	,"zip": "95062-1425"
      }
      ,"phone": "(831) 426-6099 (home)"
      ,"birthday": {"monthnum": 4, "daynum": 10, "year": 1944}
     }

    ,{"first": "Jon"
      ,"last": "Korn"
      ,"spouse_of": {"first": "Sarah", "last": "Wheeler"}
      ,"birthday": {"monthnum": 8, "daynum": 20, "year": 1980}
     }

    ,{"first": "Ben"
      ,"last": "G"
      ,"spouse_of": {"first": "Rebekah", "last": "Wheeler"}
      ,"birthday": {"monthnum": 1, "daynum": 2, "year": 1980}
     }

    ,{"first": "Kate"
      ,"last": "Cortesi"
      ,"spouse_of": {"first": "Ben", "last": "Wheeler"}
      ,"birthday": {"monthnum": 2, "daynum": 2, "year": 1979}
     }

    ,{"first": "Hugo"
      ,"last": "Jaff&eacute;"
      ,"spouse_of": {"first": "Jennifer", "last": "Jaff&eacute;"}
      ,"birthday": {"monthnum": 11, "daynum": 19, "year": 1972}
     }

    ,{"first": "Rolf"
      ,"last": "Gates"
      ,"spouse_of": {"first": "Mariam", "last": "Wheeler"}
      ,"birthday": {"monthnum": 2, "daynum": 3, "year": 1966}
     }

    ,{"first": "Adrian"
      ,"last": "Zackheim"
      ,"spouse_of": {"first": "Elizabeth", "last": "Zackheim"}
      ,"birthday": {"monthnum": 9, "daynum": 19, "year": 1962}
     }

    ,{"first": "Nancy"
      ,"last": "Lunney-Wheeler"
      ,"spouse_of": {"first": "Gordon", "last": "Wheeler"}
      ,"birthday": {"monthnum": 6, "daynum": 25, "year": 1943}
     }
  ];




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

var  birthdayFmt = function(person, fmt) {
    var birthDate = birthdayDateWithoutYear(person);
   // return "ht";
    return moment(birthDate).format(fmt);
  };

var app = angular.module('YourKidsAddressesApp', [
  ,'ngSanitize']);

app.filter('isAddressOwner', function () {
  return function (people) {
    return people.filter(function (person) {
      return (person.hasOwnProperty('owner') && person.owner === true);
    });
  };
});


app.controller('BirthdayController', ['$scope', function($scope) {
  $scope.people = people; //orderBy($scope.birthdayDate);
  $scope.birthdayFmt = birthdayFmt;
  $scope.birthdayDateWithoutYear = birthdayDateWithoutYear;
  //		$scope.birthdayDateWithoutYear = birthdayDateWithoutYear;
}]);


app.controller('CalendarController', ['$scope', function($scope) {
  var peopleByUpcomingBirthday = Array();
  $scope.birthdayFmt = birthdayFmt;

  function updatePeople(peopleArr) {
    peopleByUpcomingBirthday = angular.copy(peopleArr);//people.slice(0); 
    peopleByUpcomingBirthday.sort(sortByTimeUntilBirthday);
  }
  updatePeople(people);

  $scope.nPeopleByUpcomingBirthday = function(numPeople) {
    return peopleByUpcomingBirthday.slice(0, numPeople);
    //return people;
  };
  $scope.anyToShow = function() { 
    return (peopleByUpcomingBirthday.length > 0); 
  };
}]);

function enoughAddressInfoForGoogle(person) {
  return (person.hasOwnProperty('address') && person.address.hasOwnProperty('street1') && person.address.hasOwnProperty('city') && person.address.hasOwnProperty('state') && person.address.hasOwnProperty('zip'));
} 

app.controller('AddressController', ['$scope', function($scope) {
  $scope.birthdayFmt = birthdayFmt;
  $scope.people = people;
  function googleMapsURL(person) {
    var url = "#"; 
    if (enoughAddressInfoForGoogle(person)) {
      var street2Str = person.address['street2'] ? person.address['street2'] : "";
      var addressStr = encodeURIComponent(person.address.street1 + " " + person.address.city + " " + person.address.state + " " + person.address.zip);
      url = "http://maps.google.com/maps?f=q&hl=en&geocode=&time=&date=&ttype=&q=" + addressStr + "&ie=UTF8&z=16&iwloc=addr&om=1";
    }
    return url;
  }
  $scope.googleMapsURL = googleMapsURL;

  function needsClearfixForPeriod(index, period) {
    return (index % period === 0);
  }
  $scope.needsClearfixForPeriod = needsClearfixForPeriod;

  $scope.age = function(person) {
    return age(person);
  };

  function findSpouse(person) {
    var spouse = _.find(people, function(candidate) { return candidate.hasOwnProperty('spouse_of') && candidate.spouse_of.first === person.first && candidate.spouse_of.last === person.last });
    return spouse;
  }
  function spouseStr(person) {
    var str = "";
    var spouse = findSpouse(person);
    if (spouse !== undefined && spouse !== null) {
      // console.log("spouse.last = " + spouse.last + "; trused = " + $sce.trustAsHtml(spouse.last));
      str = " and " + spouse.first + " " + spouse.last + " (b. " + $scope.birthdayFmt(spouse, "MMM D") + ")";
    }
    return str;
  }
  $scope.spouseStr = spouseStr;
}]);


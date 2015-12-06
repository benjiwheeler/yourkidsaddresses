
  var people = [
    {"id": "AlexWheeler"
     ,"first": "Alex"
      ,"last": "Wheeler"
      ,"owner": true
     ,"address": [{
       "street": ["28 Raymond St."]
       ,"city": "Allston"
       ,"state": "MA"
       ,"zip": "02134"
     }]
     ,"phone": "(617) 686-4896"
      ,"birthday": {"monthnum": 7, "daynum": 4, "year": 1985}
     }

    ,{"id": "JackWheeler"
      ,"first": "Jack"
      ,"last": "Wheeler"
      ,"owner": true
      ,"phone": "503-329-5257"
      ,"birthday": {"monthnum": 5, "daynum": 27, "year": 1975}
      ,"address": [{
	"street": ["1234 Romany Rd"]
	,"city": "Kansas City"
	,"state": "MO"
	,"zip": "64113"
      }]
     }

    ,{"id": "ErikaKauffmanWheeler"
      ,"first": "Erika"
      ,"last": "Kauffman Wheeler"
      ,"spouse_of": "JackWheeler"
      ,"phone": "816-305-6271"
      ,"birthday": {"monthnum": 6, "daynum": 16, "year": 1975}
     }

    ,{"id": "SarahWheeler"
      ,"first": "Sarah"
      ,"last": "Wheeler"
      ,"owner": true
      ,"address": [{
	"street": ["487 43rd Street #1"]
	,"city": "Oakland"
	,"state": "CA"
	,"zip": "94609"

      }]
      ,"phone": "(909) 456-9096"
      ,"birthday": {"monthnum": 8, "daynum": 28, "year": 1983}
     }

    ,{"id": "RebekahWheeler"
      ,"first": "Rebekah"
      ,"last": "Wheeler"
      ,"owner": true
      ,"address": [{
	"street": ["4210 Robinia Place"]
	,"city": "Davis"
	,"state": "CA"
	,"zip": "95618"
      }]
      ,"phone": "(617) 959-9798"
      ,"birthday": {"monthnum": 11, "daynum": 3, "year": 1981}
     }

    ,{"id": "JonathanErickson"
      ,"first": "Jonathan"
      ,"last": "Erickson"
      ,"owner": true
      ,"address": [{
	"street": ["940 Via Camino #5"]
	,"city": "Wilmington"
	,"state": "CA"
	,"zip": "90744"
      }]
      ,"phone": "(310) 350-7514"
      ,"birthday": {"monthnum": 8, "daynum": 7, "year": 1980}
     }

    ,{"id": "AlejandraVelez"
      ,"first": "Alejandra"
      ,"last": "Velez"
      ,"spouse_of": "JonathanErickson"
      ,"birthday": {"monthnum": 10, "daynum": 13, "year": 1980}
     }

    ,{"id": "BenWheeler"
      ,"first": "Ben"
      ,"last": "Wheeler"
      ,"owner": true
      ,"address": [{
        "description": "Home", 
	"street": ["483 Putnam Ave."]
	,"city": "Brooklyn"
	,"state": "NY"
	,"zip": "11221"
      }
      ,{
        "description": "Work", 
	"street": ["c/o GreenDesk"
	  ,"68 Jay St. Suite 201"
	  ,"South Annex 16"]
	,"city": "Brooklyn"
	,"state": "NY"
	,"zip": "11201"
      }]
      ,"phone": "(917) 254-1578, (646) 651-2046"
      ,"birthday": {"monthnum": 7, "daynum": 31, "year": 1979}
     }

    ,{"id": "CarmenWheeler"
      ,"first": "Carmen"
      ,"last": "Wheeler"
      ,"child_of": "BenWheeler"
      ,"birthday": {"monthnum": 6, "daynum": 3, "year": 2009}
     }

    ,{"id": "NinaWheeler"
      ,"first": "Nina"
      ,"last": "Wheeler"
      ,"child_of": "BenWheeler"
      ,"birthday": {"monthnum": 8, "daynum": 19, "year": 2011}
     }

    ,{"id": "JenniferJaff&eacute;"
      ,"first": "Jennifer"
      ,"last": "Jaff&eacute;"
      ,"owner": true
      ,"address": [{
	"street": ["260 Moore Street"]
	,"city": "Santa Cruz"
	,"state": "CA"
	,"zip": "95060"
      }]
      ,"phone": "(831) 466-0974 (home), (917) 859-4667 (cell)"
      ,"birthday": {"monthnum": 4, "daynum": 18, "year": 1972}
     }

    ,{"id": "TobyJaff&eacute;"
      ,"first": "Toby"
      ,"last": "Jaff&eacute;"
      ,"child_of": "JenniferJaff&eacute;"
      ,"birthday": {"monthnum": 5, "daynum": 10, "year": 2009}
     }

    ,{"id": "SamJaff&eacute;"
      ,"first": "Sam"
      ,"last": "Jaff&eacute;"
      ,"child_of": "JenniferJaff&eacute;"
      ,"birthday": {"monthnum": 9, "daynum": 26, "year": 2012}
     }

    ,{"id": "MariamGates"
      ,"first": "Mariam"
      ,"last": "Gates"
      ,"owner": true
      ,"address": [{
	"street": ["122 Echo St"]
	,"city": "Santa Cruz"
	,"state": "CA"
	,"zip": "95060"
      }]
      ,"phone": "(617) 271-7106, (831) 454-8895"
      ,"birthday": {"monthnum": 10, "daynum": 10, "year": 1971}
     }

    ,{"id": "JasmineGates"
      ,"first": "Jasmine"
      ,"last": "Gates"
      ,"child_of": "MariamGates"
      ,"birthday": {"monthnum": 5, "daynum": 11, "year": 2003}
     }

    ,{"id": "DylanGates"
      ,"first": "Dylan"
      ,"last": "Gates"
      ,"child_of": "MariamGates"
      ,"birthday": {"monthnum": 5, "daynum": 19, "year": 2006}
     }

    ,{"id": "ElizabethZackheim"
      ,"first": "Elizabeth"
      ,"last": "Zackheim"
      ,"owner": true
      ,"address": [{
	"street": ["185 West End Avenue, Apt 26H"]
	,"city": "New York"
	,"state": "NY"
	,"zip": "10023"
      }]
      ,"phone": "(917) 407-1342, (212) 366-2659"
      ,"birthday": {"monthnum": 9, "daynum": 1, "year": 1969}
     }

    ,{"id": "GordonWheeler"
      ,"first": "Gordon"
      ,"last": "Wheeler"
      ,"owner": true
      ,"address": [{
	"street": ["127 Abby Ct."]
	,"city": "Santa Cruz"
	,"state": "CA"
	,"zip": "95062-1425"
      }]
      ,"phone": "(831) 426-6099 (home)"
      ,"birthday": {"monthnum": 4, "daynum": 10, "year": 1944}
     }

    ,{"id": "JonKorn"
      ,"first": "Jon"
      ,"last": "Korn"
      ,"spouse_of": "SarahWheeler"
      ,"birthday": {"monthnum": 8, "daynum": 20, "year": 1980}
     }

    ,{"id": "BenG"
      ,"first": "Ben"
      ,"last": "G"
      ,"spouse_of": "RebekahWheeler"
      ,"birthday": {"monthnum": 1, "daynum": 2, "year": 1980}
     }

    ,{"id": "KateCortesi"
      ,"first": "Kate"
      ,"last": "Cortesi"
      ,"spouse_of": "BenWheeler"
      ,"birthday": {"monthnum": 2, "daynum": 2, "year": 1979}
     }

    ,{"id": "HugoJaff&eacute;"
      ,"first": "Hugo"
      ,"last": "Jaff&eacute;"
      ,"spouse_of": "JenniferJaff&eacute;"
      ,"birthday": {"monthnum": 11, "daynum": 19, "year": 1972}
     }

    ,{"id": "RolfGates"
      ,"first": "Rolf"
      ,"last": "Gates"
      ,"spouse_of": "MariamGates"
      ,"birthday": {"monthnum": 2, "daynum": 3, "year": 1966}
     }

    ,{"id": "AdrianZackheim"
      ,"first": "Adrian"
      ,"last": "Zackheim"
      ,"spouse_of": "ElizabethZackheim"
      ,"birthday": {"monthnum": 9, "daynum": 19, "year": 1962}
     }

    ,{"id": "NancyLunney-Wheeler"
      ,"first": "Nancy"
      ,"last": "Lunney-Wheeler"
      ,"spouse_of": "GordonWheeler"
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

function enoughAddressInfoForGoogle(address) {
  return (address.hasOwnProperty('street') && address.hasOwnProperty('city') && address.hasOwnProperty('state') && address.hasOwnProperty('zip'));
} 

app.controller('AddressController', ['$scope', function($scope) {
  $scope.birthdayFmt = birthdayFmt;
  $scope.people = people;
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

  function flickrURL(person) {
    var url = "http://www.flickr.com/photos/90204134@N00/tags/" + person.first.toLowerCase() + "/";
    return url;
  }
  $scope.flickrURL = flickrURL;

  function needsClearfixForPeriod(index, period) {
    return (index % period === 0);
  }
  $scope.needsClearfixForPeriod = needsClearfixForPeriod;

  $scope.age = function(person) {
    return age(person);
  };

  function findSpouse(person) {
    var spouse = _.find(people, function(candidate) { return candidate.hasOwnProperty('spouse_of') && candidate.spouse_of === person.id; });
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

  $scope.children = {};
  function findChildren(person) {
    var children = _.filter(people, function(candidate) { return candidate.hasOwnProperty('child_of') && candidate.child_of === person.id; });
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



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
      ,"last": "Jaffe"
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
      ,"last": "Zackhei"
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






angular.module('YourKidsAddressesApp', [
  'YourKidsAddressesApp.controllers'
  ,'ngSanitize']);

angular.module('YourKidsAddressesApp.controllers', []
	      ).controller('BirthdayController', ['$scope', function($scope) {
  $scope.people = people; //orderBy($scope.birthdayDate);

  $scope.birthdayDate = function(person) {
    var birthDate = new Date(2015, person.birthday.monthnum - 1, person.birthday.daynum);
    console.log(person.first + birthDate + person.birthday.monthnum);
    return birthDate;
  };
  $scope.birthdayFmt = function(person, fmt) {
    var birthDate = $scope.birthdayDate(person);
   // return "ht";
    return moment(birthDate).format(fmt);
  };
  

}]);




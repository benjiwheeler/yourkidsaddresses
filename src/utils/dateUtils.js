// utils/dateUtils.js
const shortDateOptions = { month: 'short', day: 'numeric' }; // Example: 'Oct 31'
const shortDateFormatter = new Intl.DateTimeFormat('en-US', shortDateOptions);
const today = new Date();
today.setHours(0,0,0,0);

const age = function(person) {
  if (person.birthday === undefined || person.birthday === null || person.birthday === "") {
    return 0;
  }
  return today - dateBorn(person);
};

export const birthdayFmt = (birthdayInfo) => {
  if (!birthdayInfo) return "";
  const birthDate = new Date(birthdayInfo.year, birthdayInfo.monthnum - 1, birthdayInfo.daynum);
  return shortDateFormatter.format(birthDate);
};

export const birthdayInlineStr = function(person) {
  if (person.birthday === undefined) {
    return "";
  }
  return "(b. " + birthdayFmt(person.birthday) + ")";
};

const birthdayDateForYear = function(person, year) {
  return new Date(year, person.birthday.monthnum - 1, person.birthday.daynum);
};

const birthdayDateWithoutYear = function(person) {
  if (person.birthday === undefined) {
    return new Date(3000, 0, 1); // far in the future
  }
  const birthDate = birthdayDateForYear(person, 2015);
//  console.log(person.first + birthDate + person.birthday.daynum);
  return birthDate;
};

const dateBorn = function(person) {
  return new Date(person.birthday.year, person.birthday.monthnum - 1, person.birthday.daynum);
};

const nextBirthdayWithYear = function(person) {
  const curYear = today.getFullYear();
  const nextYear = curYear + 1;
  const birthdayThisYear = birthdayDateForYear(person, curYear);
  const birthdayNextYear = birthdayDateForYear(person, nextYear);
  let nextBirthday = birthdayThisYear;
  if (nextBirthday < today) {
    nextBirthday = birthdayNextYear;
  }
  return nextBirthday;
};

export const sortByBirthday = function(personA, personB) {
  if (personA.birthday === undefined) {
    return 1;
  }
  if (personB.birthday === undefined) {
    return -1;
  }
  const birthdayWithoutYearA = birthdayDateWithoutYear(personA);
  const birthdayWithoutYearB = birthdayDateWithoutYear(personB);
  return birthdayWithoutYearA - birthdayWithoutYearB;
};

export const sortByAge = function(personA, personB) {
  if (personA.birthday === undefined) {
    return 1;
  }
  if (personB.birthday === undefined) {
    return -1;
  }
  const ageA = age(personA);
  const ageB = age(personB);
  return ageA - ageB;
};

export const sortByTimeUntilBirthday = function(personA, personB) {
  if (personA.birthday === undefined) {
    return 1;
  }
  if (personB.birthday === undefined) {
    return -1;
  }
  const nextBirthdayA = nextBirthdayWithYear(personA);
  const nextBirthdayB = nextBirthdayWithYear(personB);
  if (nextBirthdayA < nextBirthdayB) {
    return -1;
  } else if (nextBirthdayB < nextBirthdayA) {
    return 1;
  } else {
    return 0;
  }
};

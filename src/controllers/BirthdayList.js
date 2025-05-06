import React from 'react';
import usePeopleData from '../hooks/usePeopleData';
import { sortByBirthday } from '../utils/dateUtils';
import BirthdayListComponent from '../components/BirthdayList';

const BirthdayList = () => {
  const people = usePeopleData();
  if (!Array.isArray(people) || people.length === 0) return null;
  const sortedPeople = people.sort(sortByBirthday);
  // console.log(people);
  // console.log(" in birthday list, sorted people is:");
  // console.log(sortedPeople);
  return (
    <BirthdayListComponent sortedPeople={sortedPeople} />
  );
};

export default BirthdayList;

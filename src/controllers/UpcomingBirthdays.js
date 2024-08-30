// components/CalendarController.js
import React from 'react';
import usePeopleData from '../hooks/usePeopleData';
import { sortByTimeUntilBirthday, birthdayFmt } from '../utils/dateUtils';
import UpcomingBirthdaysComponent from '../components/UpcomingBirthdays';

const UpcomingBirthdays = () => {
  const people = usePeopleData();
  if (!Array.isArray(people) || people.length === 0) return null;
  const sortedPeople = [...people].sort(sortByTimeUntilBirthday);
  return UpcomingBirthdaysComponent(sortedPeople.slice(0, 5));
};

export default UpcomingBirthdays;

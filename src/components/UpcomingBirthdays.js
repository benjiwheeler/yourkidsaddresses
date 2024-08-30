// components/CalendarController.js
import React from 'react';
import { birthdayFmt } from '../utils/dateUtils';

const UpcomingBirthdays = (nPeopleByBirthday) => {
  return (
    <>
      <b style={{float: "left"}}>Upcoming birthdays:</b>
      <ul className="list-inline">
        {nPeopleByBirthday.map(person => (
          <li key={person.id}>
            {person.nickname} - {birthdayFmt(person.birthday)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UpcomingBirthdays;

// components/CalendarController.js
import React from 'react';
import { birthdayFmt } from '../utils/dateUtils';

const BirthdayList = ({ sortedPeople }) => {
  // console.log("in BirthdayList component, sortedPeople is:");
  // console.log(sortedPeople);
  return (
    <div>
      <h1>Birthdays</h1>
      <div style={{ width: '90%', position: 'relative', marginLeft: '10%' }}>
        <div style={{ margin: '0 auto', position: 'relative', width: '90%', maxWidth: '400px' }}>
          <ul style={{ listStyleType: 'none', marginLeft: '20%', padding: 0 }}>
            {sortedPeople.filter(person => person.birthday).map(person => (
              <li key={person.id}>
                {person.nickname} - {birthdayFmt(person.birthday)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BirthdayList;

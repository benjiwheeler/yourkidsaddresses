// hooks/usePeopleData.js
import { useState, useEffect } from 'react';
// import axios from 'axios';
import peopleData from '../data/people.json';

const childrenOf = person => (
  peopleData.filter(candidate => candidate.hasOwnProperty('child_of') && candidate.child_of === person.id)
);

const spouseOf = person => (
  peopleData.find(candidate => candidate.hasOwnProperty('spouse_of') && (candidate.spouse_of === person.id))
);

// console.log("here");

const usePeopleData = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log("is loaded true or false?", loaded);
    if (!loaded) {
      // revise peopleData to add the list of children as a property of each person
      console.log("people data starts as");
      console.log(peopleData);
      const updatedPeopleData = peopleData.map(person => ({
        ...person,
        children: childrenOf(person),
        spouse: spouseOf(person)
      }));
      console.log("after updating people data... it is");
      console.log(updatedPeopleData);
      setData(updatedPeopleData);
      setLoaded(true);
    }
  }, [loaded]);

  return data;
};

export default usePeopleData;

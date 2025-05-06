import React from 'react';
import usePeopleData from '../hooks/usePeopleData';
import { sortByAge } from '../utils/dateUtils';
import AddressesComponent from '../components/Addresses';

const onlyAddressOwners = people => people.filter(person => (
  person.hasOwnProperty('owner') && person.owner === true
));

const Addresses = () => {
  const people = usePeopleData();
  if (!Array.isArray(people) || people.length === 0) return null;
  const sortedPeople = onlyAddressOwners(people).sort(sortByAge);
  // console.log("in Addresses controller... people is:");
  // console.log(people);
  // console.log("in Addresses controller... sorted people is:");
  // console.log(sortedPeople);

  // return list of all sortedPeople, bolding the name of each person
  return AddressesComponent({sortedPeople});
};

export default Addresses;

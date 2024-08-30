import React from 'react';
import Address from './Address';

const Addresses = ({ sortedPeople }) => {
  return (
    <div>
      {sortedPeople.map((person, index) => (
        <>
        <div key={person.id} className="address col-md-4 col-lg-3 col-xs-12 col-sm-6">
          {person.first === 'Gordon' && (
            <>
              <i>(And of course...)</i>
              <br />&nbsp;
            </>
          )}
          <Address person={person} />
        </div>
        {/* these ARE necessary to keep tiling working properly */}
        {(index + 1) % 4 === 0 && <div className="clearfix visible-lg" />}
        {(index + 1) % 3 === 0 && <div className="clearfix visible-md" />}
        {(index + 1) % 2 === 0 && <div className="clearfix visible-sm" />}
        </>
      ))}     
    </div>
  );
}

export default Addresses;

import React from 'react';
import { sortByAge, birthdayInlineStr } from '../utils/dateUtils';
import { googleMapsURL } from '../utils/addressUtils';
import { spouseStr } from '../utils/peopleUtils';

const Address = ({ person }) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        {person.first}&nbsp;
        {person.last}&nbsp;
        {birthdayInlineStr(person)}&nbsp;
        {spouseStr(person)}
      </div>
      <div className="panel-body">
        {person.children && person.children.sort(sortByAge).map(child => (
          <ul style={{listStyleType: "None", paddingLeft: 0}}>
            <li>
              {child.photos ? (
                <>
                  {child.first}&nbsp;
                  {child.last}&nbsp;
                  [<a href={child.photos}>photos</a>]
                </>
              ) : (
                <>
                  {child.first}&nbsp;
                  {child.last}
                </>
              )}
              <ul style={{listStyleType: "None", paddingLeft: "1rem"}}>
                {child.birthday && (
                  <p style={{fontSize: ".8em"}}>{birthdayInlineStr(child)}</p>
                )}
                {child.phone && (
                  <p style={{fontSize: ".8em"}}>{child.phone}</p>
                )}
                {child.additional_info && (
                  <p style={{fontSize: ".8em"}} dangerouslySetInnerHTML={{ __html: child.additional_info}} />
                )}
              </ul>
              </li>
          </ul>
        ))}
        <hr />
        <ul style={{listStyleType: "None"}}>
          {person.address.map(address => (
            <li key={address.street[0]}>
              {person.phone && (
                <>
                  {person.phone}
                  <br />
                </>
              )}
              {address.street.map(streetLine => (
                <span key={streetLine.id}>{streetLine}</span>
              ))}
              <br />
              {address.city},&nbsp;
              {address.state}&nbsp;
              {address.zip}
              <br />
              [ <a href={googleMapsURL(address)}>Google map</a> ]
            </li>
          ))}
        </ul>
        {person.additional_info && (
          <>
            <hr />
            <span dangerouslySetInnerHTML={{ __html: person.additional_info }}></span>
          </>
        )}
      </div>
    </div>
  );
}

export default Address;

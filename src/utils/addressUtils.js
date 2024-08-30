// utils/addressUtils.js
export const googleMapsURL = (address) => {
  if (!address) return "#";
  const { street, city, state, zip } = address;
  const addressStr = encodeURIComponent(`${street} ${city} ${state} ${zip}`);
  return `http://maps.google.com/maps?f=q&hl=en&geocode=&q=${addressStr}&ie=UTF8&z=16&iwloc=addr`;
};

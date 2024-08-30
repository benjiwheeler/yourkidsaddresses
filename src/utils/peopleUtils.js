import { birthdayInlineStr } from './dateUtils';

export const spouseStr = person => {
  var str = "";
  const spouse = person.spouse;
  if (spouse !== undefined && spouse !== null) {
    // console.log("spouse.last = " + spouse.last + "; trused = " + $sce.trustAsHtml(spouse.last));
    str = " and " + spouse.first + " " + spouse.last;
    if (!!spouse.birthday) {
      str += birthdayInlineStr(spouse);
    }
  }
  return str;
}

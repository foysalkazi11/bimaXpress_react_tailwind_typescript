export default function getAge(dateString: any) {
  var today = new Date();
  var DOB = new Date(dateString);
  var totalMonths =
    (today.getFullYear() - DOB.getFullYear()) * 12 +
    today.getMonth() -
    DOB.getMonth();
  totalMonths += today.getDay() < DOB.getDay() ? -1 : 0;
  var years = today.getFullYear() - DOB.getFullYear();
  if (DOB.getMonth() > today.getMonth()) years = years - 1;
  else if (DOB.getMonth() === today.getMonth())
    if (DOB.getDate() > today.getDate()) years = years - 1;

  var days;
  var months;

  if (DOB.getDate() > today.getDate()) {
    months = totalMonths % 12;
    if (months === 0) months = 11;
    var x = today.getMonth();
    switch (x) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: {
        var a = DOB.getDate() - today.getDate();
        days = 31 - a;
        break;
      }
      default: {
        var b = DOB.getDate() - today.getDate();
        days = 30 - b;
        break;
      }
    }
  } else {
    days = today.getDate() - DOB.getDate();
    if (DOB.getMonth() === today.getMonth()) months = totalMonths % 12;
    else months = (totalMonths % 12) + 1;
  }
  var age = {
    years,
    months: months - 1,
    days,
  };
  return age;
}

// console.log(getAge("2010/02/28"));
// console.log(getAge("2010/03/01"));

export function age(dob) {
  const milsToYears = 3.154e+10;
  const today = new Date();

  return parseInt((today-dob)/milsToYears);
} 
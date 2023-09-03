//https://www.codewars.com/kata/52685f7382004e774f0001f7 (link)



/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/


// ===========  1  ============


// function humanReadable(seconds) {
//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const remainingSeconds = seconds % 60;

//   const formatValue = (value) => value.toString().padStart(2, "0");

//   return `${formatValue(hours)}:${formatValue(minutes)}:${formatValue(remainingSeconds)}`;
// }


//===========   2============

function humanReadable(seconds) {
  const c = (x) => (x < 10 ? `0${x}` : x);
  return `${c(parseInt(seconds / 3600))}:${c(parseInt(seconds / 60) % 60)}:${c(
    parseInt(seconds % 60)
  )}`;
}
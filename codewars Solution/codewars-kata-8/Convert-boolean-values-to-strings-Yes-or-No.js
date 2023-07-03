//https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript (link)

/*
Complete the method that takes a boolean value and return a string for , or a string for ."Yes"true"No"false
*/

function boolToWord(boolean) {
  if (boolean) {
    return "Yes";
  } else {
    return "No";
  }
}

function boolToWord(boolean) {
  return boolean ? "Yes" : "No";
}

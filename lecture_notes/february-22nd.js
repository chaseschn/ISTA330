/*
  How scope works with let and var
*/


// ------ scope of outer myData starts here -----
let myData = 7;
if (true) {
  // ------ scope of inner myData starts here -----

  console.log(myData);; // <-- What variable is this???
  //... more code
  let myData = 9;
  //... more code
  console.log(myData);;
  // ------ scope of inner myData ends here -----
}
// ------ scope of outer myData ends here -----
 //************************************************************ */
// ------ scope of myData starts here -----
var myData = 7;
if (true) {
  

  console.log(myData);; // <-- What variable is this???
  //... more code
  var myData = 9;
  //... more code
  console.log(myData);;
 
}
// ------ scope of  myData ends here -----






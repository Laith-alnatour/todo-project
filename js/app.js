'use strict';

var userName = prompt("Enter your name") ;
// console.log("his name is "+userName) ;

var userGender = prompt("Enter your gender") ;
// console.log("his gender is "+userGender) ;

var userAge; 
// = prompt("Enter your age") ;
// console.log("his age is "+userAge) ;




for (let i=0 ;i<5;i++ ){
  userAge = prompt("Enter your age")

if (userAge>0) {
//  console.log("his age is "+userAge) ;
  
  break
}
else {alert ("That's wrong age ")}  

}


var userWelcome= confirm("We would like to welcome you to our website");


  if ((userWelcome===true)&&(userGender==="male")) {
    alert("you are most welcome Mr "+userName) }

  if ((userWelcome===true)&&(userGender==="female")) {
    alert("you are most welcome Mrs "+userName) }

if ((userWelcome===true)&&(userGender!=(("male")) && (userGender!=("female")))) {
      alert("you are most welcome "+userName) }



var moreQu = confirm("Are you interested to ask you more ?") ;
if (moreQu===true){

var intrest = prompt("Are you interested to manage your life (yes/no) ?") ;
if(intrest==="") {alert("invalid choice"); intrest="invalid" } ;


var haveWork = prompt("Do you have too much work need manage perfectly(yes/no)? ") ;
if(haveWork==="") {alert("invalid choice"); haveWork="invalid" } ;

var needTool = prompt("Do you have took or something manage your work? (yes/no)") ;
if(needTool==="") {alert("invalid choice"); needTool="invalid" } ;


let arr=[];

arr.push(intrest,haveWork,needTool)
console.log(arr);
}
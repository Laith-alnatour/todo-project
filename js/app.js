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

else { alert("As you want "+userName) }



var moreQu = prompt("Are you interested to ask you more ?") ;

if (moreQu==="yes"){

var intrest = prompt("Are you interested to manage your life ?") ;
if(intrest=="")
{intrest="invalid" };

var haveWork = prompt("Do you have too much work need manage perfectly ") ;
if(haveWork=="")
{haveWork="invalid" };

var needTool = prompt("Do you have took or something manage your work") ;
if(needTool=="")
{needTool="invalid" };

const arr=[intrest ,haveWork,needTool];
// console.log(Arr);
var i;
for (var i=0;i<4;i++) {
  console.log(arr[i]);
  
}

}
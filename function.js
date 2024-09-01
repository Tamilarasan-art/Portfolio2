var skill=document.getElementById("Skills");
var education=document.getElementById("education");
var experience=document.getElementById("experience");
var skillcon=document.getElementById("skill-con");


/*--------service----------*/

function opentab1(){
    document.getElementById("Skills").style.color="#4B70F5";document.getElementById("education").style.color="#DDDDDD";document.getElementById("experience").style.color="#DDDDDD";
    document.getElementById("skill-con").style.display="block";
    document.getElementById("education-con").style.display="none";
    document.getElementById("experince-con").style.display="none";

}
function opentab2(){
    document.getElementById("Skills").style.color="#DDDDDD";document.getElementById("education").style.color="#4B70F5";document.getElementById("experience").style.color="#DDDDDD";
    document.getElementById("skill-con").style.display="none";
    document.getElementById("education-con").style.display="block";
    document.getElementById("experince-con").style.display="none";

}
function opentab3(){
    document.getElementById("Skills").style.color="#DDDDDD";document.getElementById("education").style.color="#DDDDDD";document.getElementById("experience").style.color="#4B70F5";
    document.getElementById("skill-con").style.display="none";document.getElementById("education-con").style.display="none";document.getElementById("experince-con").style.display="block";
}
/*--------service----------*/
/*--------------------Project---------------*/

function openproject1(){
    document.getElementById("project-container1").style.display="flex";
    document.getElementById("project-container2").style.display="none";
}
function openproject2(){
    document.getElementById("project-container1").style.display="none";
    document.getElementById("project-container2").style.display="flex";
}
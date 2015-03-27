/*function setClick(){
var divs = document.getElementsByClassName("mine");
for(var i = 0;i < divs.length;i++){
setEvent(divs[i]);
}
}

function setEvent(div){
div.addEventListener("click", callback(div), false);
}

function callback(){

}*/
function callEvent(obj, event, num){
num = Number(num);
var btn = event.button;
if(btn == 2)right(obj,num);
if(btn == 0)left(obj, num);
}

function right(obj,num){
var c = obj.style.background;
if(c == "gray")obj.style.background = 'green';
else if(c == "green")obj.style.background = 'gray';
if(obj.index == -1)check(num);
}

function left(obj, num){
var numm = obj.index;
if(numm != -1&&numm != 0&&numm != -2){
obj.style.background = "white";
obj.innerHTML = obj.index;
}else if(numm == 0){
getZero(obj, num);
}else if(numm == -1){
showAll(num);
alert("game over ~ sb");
}
}

function getZero(obj, num){
obj.style.background = "white";
var id = obj.id;
var a = [-1,0,1];
for(var i = 0;i < a.length;i++){
for(var j = 0;j < a.length;j++){
var tempid = Number(id)+a[i]*num+a[j];
var temp = document.getElementById(tempid);
if(temp.index == 0&&temp.style.background!='white')getZero(temp, num);
else if(temp.index != -1&&temp.index != -2&&temp.index != 0){
temp.style.background = "white";
temp.innerHTML = temp.index;
}
}
}
}

function showAll(num){
var divs = document.getElementsByClassName("mine");
for(var i = 1;i < num - 1;i++){
for(var j = 1;j < num - 1;j++){
var temp = i*num+j;
if(divs[temp].index == -1)divs[temp].style.background = 'red';
else {
divs[temp].style.background = 'white';
divs[temp].innerHTML = divs[temp].index;
}
}
}
}

function check(num){
var divs = document.getElementsByClassName("mine");
for(var i = 1;i < num - 1;i++){
for(var j = 1;j < num - 1;j++){
var temp = i*num+j;
var c = divs[temp].style.background;
var n = divs[temp].index;
if(c == 'green'){
if(n != -1)return;
}else if(c == 'gray'){
if(n == -1)return;
}
}
}
alert("哼~~!");
}

function makeMap(num){
var pre = '<div id="minearea" style="position:relative;width:'+(400+2*num)+'px;height:'+(400+2*num)+'px;background:white">';
for(var i = 0;i < num;i++){
pre += '<div style="height:'+400/num+'px;position:relative">';
for(var j = 0;j < num;j ++){
pre += '<div id="'+(i*num+j)+'" class="mine" onmousedown="callEvent(this,event,'+num+');" index=0 style="border:1px solid;background:gray; width:'+400/num+'px;height:'+400/num+'px;float:left"></div>';
}
pre += '</div>';
}
pre += '</div>';
document.getElementById("mainplace").innerHTML = pre;
document.oncontextmenu = stop;
}

function setMines(num){
var minenum = Math.floor(num*num/4);
var r = [];
var divs = document.getElementsByClassName("mine");
for(var i = 0;i < minenum;i++){
var temp = Math.floor(Math.random()*num*num);
divs[temp].index = -1;
//divs[temp].style.background = 'red';
}
setBlack(num);
}

function setBlack(num){
var divs = document.getElementsByClassName("mine");
for(var j = 0;j < num;j++){
divs[j].index = -2;
divs[num*num - 1 - j].index = -2;
divs[num*j].index = -2;
divs[num*(j+1) - 1].index = -2;
divs[j].style.background = 'black';
divs[num*num - 1 - j].style.background = 'black';
divs[num*j].style.background = 'black';
divs[num*(j+1) - 1].style.background = 'black';
}
}

function stop(){
return false;
}

function setNums(num){
var a = [-1,0,1];
var divs = document.getElementsByClassName("mine");
for(var i = 1;i < num - 1;i++){
for(var j = 1;j < num - 1;j++){
var temp = i*num+j;

if(divs[temp].index != -1){
var minenum = 0;
for(var k = 0;k < a.length;k++){
for(var p = 0;p < a.length;p++)
if(divs[temp + num*a[k] + a[p]].index == -1)minenum++;
}
divs[temp].index = minenum;
//divs[temp].innerHTML = minenum;
}
}
}
}


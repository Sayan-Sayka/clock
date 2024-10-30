let hr=document.querySelector('#hr');
let mn=document.querySelector('#mn');
let sc=document.querySelector('#sc');
let clock = document.querySelector('.clock');


setInterval(()=>{
    let day = new Date();
let hh = day.getHours()*30;
let mm = day.getMinutes()*6;
let ss = day.getSeconds()*6;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let ampm = document.getElementById('ampm');
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h>=12 ? "PM" : "AM";
if(h>12){
    h=h-12;
}
h= (h<10) ? "0"+h : h;
m= (m<10) ? "0"+m : m;
s= (s<10) ? "0"+s : s;
hour.innerHTML=h;
minute.innerHTML=m;
second.innerHTML=s
ampm.innerHTML=am;
})

let criBtn = document.querySelector('.crimson');
let bluBtn = document.querySelector('.blue');
let greBtn = document.querySelector('.green');
let yelBtn = document.querySelector('.yellow');
let purBtn = document.querySelector('.purple');
let whiBtn = document.querySelector('.white');
let blaBtn = document.querySelector('.black');
function setTimeColor(color) {
    document.querySelectorAll("#time div").forEach((element) => {
        element.style.color = color;
    });
}
function setClockNumbersColor(color) {
    document.querySelectorAll(".clock span b").forEach((element) => {
        element.style.color = color;
    });
}
function setContainerColor(color) {
    document.querySelector(".container").style.backgroundColor = color;
}


function changecrimson(){
    document.body.style.backgroundColor = "#ba2c2c";
    document.querySelector(".clock").style.backgroundColor = "#ba2c2c";
    setContainerColor("#ba2c2c");
    setTimeColor("#810000");
    setClockNumbersColor("black");
}
function changeblue(){
    document.body.style.backgroundColor = "#5562fe";
    document.querySelector(".clock").style.backgroundColor = "#5562fe";
    setContainerColor("#5562fe");
    setTimeColor("#040768");
    setClockNumbersColor("black");
}
function changegreen(){
    document.body.style.backgroundColor = "#93ff7e";
    document.querySelector(".clock").style.backgroundColor = "#93ff7e";
    setContainerColor("#93ff7e");
    setTimeColor("#095d02");
    setClockNumbersColor("black");
}
function changeyellow(){
    document.body.style.backgroundColor = "rgb(248, 248, 116)";
    document.querySelector(".clock").style.backgroundColor = "rgb(248, 248, 116)";
    setContainerColor("rgb(248, 248, 116)");
    setTimeColor("#969807");
    setClockNumbersColor("black");
}
function changepurple(){
    document.body.style.backgroundColor = "rgb(138, 51, 138)";
    document.querySelector(".clock").style.backgroundColor = "rgb(138, 51, 138)";
    setContainerColor("rgb(138, 51, 138)");
    setTimeColor("#45046f");
    setClockNumbersColor("black");
}
function changewhite(){
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    document.querySelector(".clock").style.backgroundColor = "rgb(255, 255, 255)";
    setContainerColor("rgb(255, 255, 255)");
    setTimeColor("#8c8c8c");
    setClockNumbersColor("black");
}
function changeblack(){
    document.body.style.backgroundColor = "#2f363e";
    document.querySelector(".clock").style.backgroundColor = "#2f363e";
    setContainerColor("#2f363e");
    setTimeColor("var(--clr)");
    setClockNumbersColor("white");
}

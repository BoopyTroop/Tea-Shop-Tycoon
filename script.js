
//var mySave;
//var level = 1;

//function saveStuff() {
//  localStorage.setItem('mySave', level);
//}

//function loadStuff() {
//  level = localStorage.getItem('mySave');
//}

var ngbtn;
var cbtn;
var level;
var mylvl;
var moneyNum = 0;
var title;
var tcName = " ";
var makeTcName;
var colors;
var color = " ";
var usbtn;
var ukbtn;
var frbtn;
var jpbtn;
var country;
var tstitle;

function doStuff() {
  ngbtn = document.getElementById("newgameBtn");
  cbtn = document.getElementById("playBtn");
  title = document.getElementById("title");
  makeTcName = document.getElementById("makeTcName");
  colors = document.getElementById("colors");
  usbtn = document.getElementById("USbtn");
  ukbtn = document.getElementById("UKbtn");
  jpbtn = document.getElementById("JPbtn");
  frbtn = document.getElementById("Frbtn");
  tstitle = document.getElementById("tstitle");
  
}

function newgame() {

  makeTcName.style.visibility = "visible";
  clearStuff();
  save()
}



function play() {

  load();
  window.location.href = "teashop.html";
  
}

function clearStuff() {
  colors.style.visibility = "hidden";
  cbtn.style.visibility = "hidden";
  ngbtn.style.visibility = "hidden";
  title.style.visibility = "hidden";
  usbtn.style.visibility = "hidden";
  ukbtn.style.visibility = "hidden";
  jpbtn.style.visibility = "hidden";
  frbtn.style.visibility = "hidden";
}

function setTcName() {
  tcName = document.getElementById("tsname").value;
  makeTcName.style.visibility = "Hidden";
  title.innerHTML = "Choose a color for your tea shop";
  title.style.visibility = "Visible";
  colors.style.visibility = "Visible";
}

function save() {
  localStorage.setItem('color', color);
  localStorage.setItem('country', country);
  localStorage.setItem('tcName', tcName);
  //localStorage.setItem('money', money);
}

function load() {
  color = localStorage.getItem('color');
  country = localStorage.getItem('country');
  tcName = localStorage.getItem('tcName');
  money = localStorage.getItem('money');

}

function color1() {
  color = "LightPink";
  chooseCountry();
}
function color2() {
  color = "Aquamarine";
  chooseCountry();
}
function color3() {
  color = "BurlyWood";
  chooseCountry();
}
function color4() {
  color = "Khaki";
  chooseCountry();
}
function color5() {
  color = "Lavender";
  chooseCountry();
}
function color6() {
  color = "LightSkyBlue";
  chooseCountry();
}

function chooseCountry() {
  colors.style.visibility = "hidden";
  title.style.visibility = "hidden";
  title.innerHTML = "Choose a country for " + tcName;
  title.style.visibility = "Visible";
  usbtn.style.visibility = "Visible";
  ukbtn.style.visibility = "Visible";
  jpbtn.style.visibility = "Visible";
  frbtn.style.visibility = "Visible";
}

function us() {
  clearStuff();
  country = "US";
  save();
  window.location.href = "teashop.html";
}

function uk() {
  clearStuff();
  country = "UK";
  save();
  window.location.href = "teashop.html";
}

function jp() {
  clearStuff();
  country = "JP";
  save();
  window.location.href = "teashop.html";
}

function fr() {
  clearStuff();
  country = "FR";
  save();
  window.location.href = "teashop.html";
}
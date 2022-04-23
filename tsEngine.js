var tstitle;
var checkbox;
var opened;
var price = 4;
var money = 50;
var pricebox;
var help;
var stocktext;
var rent = 0;
var packets = 0;
var selectb;

function loadGame() {
  load()
  money = parseInt(money)
  tstitle = document.getElementById("tstitle");
  selectb = document.getElementById("selectbox");
  stocktext = document.getElementById("stock");
  mtitle = document.getElementById("money");
  otitle = document.getElementById("open");
  checkBox = document.getElementById("myCheck");
  help = document.getElementById("help");
  mtitle.innerHTML = "Money: $" + money;
  tstitle.innerHTML = localStorage.getItem('tcName') + " Teashop";
  document.body.style.backgroundColor = color;
  console.log("Loaded Game")
  console.log("Background Color: " + color);
  console.log("Name: " + tcName);
  console.log("Country: " + country);
  console.log("Money: " + money);

  help.innerHTML = "Help:<br>1 Box = 15 Tea Packets<br>No Tea Packets = No Income<br>Prices will affect customers depending on quality of tea. <br>Example: If your tea is trash and you charge $10 you will get less customers.<br>Country affects rent and customers<br>If your money is in the negative for more then a day then its game over";

  stocktext.innerHTML = "Packets: " + packets + "<br>Rent: " + rent + "<br>Price: $" + price;
}


function check() {
  if (checkBox.checked == true){
    otitle.style.color = "Green";
    otitle.innerHTML = "Open";
    console.log(tcName + " Status: Open")
    opened = setInterval(tcopen, 750);
  } else {
     console.log(tcName + " Status: Closed")
     otitle.style.color = "darkRed";
     otitle.innerHTML = "Closed";
     clearInterval(opened);
     tcclosed();
  }
}


function tcopen() {
  money += price;
  if (money < 0) {
    money = 0
  }
  mtitle.innerHTML = "Money: $" + money;
  help.style.visibility = "hidden";
}

function tcclosed() {
  
}

function buyship() {
  if (selectb.value == "a") {
    if (money >= 25) {
      money -= 25;
      packets += 75;
    }
  }
  else if (selectb.value == "b") {
    if (money >= 45) {
      money -= 45;
      packets += 150;
    }
  }
  else if (selectb.value == "c") {
    if (money >= 70) {
      money -= 70;
      packets += 225;
    }
  }
  else if (selectb.value == "d") {
    if (money >= 100) {
      money -= 100;
      packets += 375;
    }
  }
    mtitle.innerHTML = "Money: $" + money;
    stocktext.innerHTML = "Packets: " + packets + "<br>Rent: " + rent + "<br>Price: $" + price;
  
}
function setprice() {
  pricebox = document.getElementById("pricebox").value;
  pricebox = parseInt(pricebox);
  price = pricebox
  stocktext.innerHTML = "Packets: " + packets + "<br>Rent: " + rent + "<br>Price: $" + price;
}


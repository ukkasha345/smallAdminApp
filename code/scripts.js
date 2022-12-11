var listoftmep = document.getElementsByClassName("tmp-div")

let btn1 = document.getElementById(".tmp1");
let btn2 = document.getElementById(".tmp2");
let btn3 = document.getElementById(".tmp3");
let btn4 = document.getElementById(".tmp4");
let btn5 = document.querySelector(".tmp5");
let btn6 = document.querySelector(".tmp6");

let count = 0;

function Funtmp1() {
  document.getElementById("templaeDiv").className = "tmp-div active";
  document.getElementById("txt").innerHTML = "Hello World!";
}

function Funtmp2() {
// get a list of divs. check whos button is pressed and then add their a class name active or anything
 console.log(listoftmep.length)
  // document.getElementById("templaeDiv").className = "tmp-div active";
  // console.log(e.length)
}

btn3.onclick = function() {
  count += 1;
  if(count%2==0)
  {
    document.querySelector(".tmpe3").style.display = "none";
  }
  else{
    document.querySelector(".tmpe3").style.display = "block";

  }
  console.log(count);
};

function Funtmp3(e) {
 console.log(e)
 
}
function Funtmp4() {
  document.querySelector(".tmpe4").style.display = "none";

  // alert("Button is clicked");
}
function Funtmp5() {
  alert("Button is clicked");
}
function Funtmp6() {
  alert("Button is clicked");
}
// btn.addEventListener("click", function );

// selecting a div upon button clicked
// function Funtmp1() {
//   document.getElementsByClassName("tmp1").style.backgroundColor = "red";
// }
// function Funtmp2() {
//   document.getElementsByClassName("tmp2").style.backgroundColor = "yellow";
// }
// function Funtmp3() {
//   document.getElementsByClassName("tmp3").style.backgroundColor = "green";
// }
// function Funtmp4() {
//   document.getElementsByClassName("tmp4").style.backgroundColor = "blue";
// }
// function Funtmp5() {
//   document.getElementsByClassName("tmp5").style.backgroundColor = "brown";
// }
// function Funtmp6() {
//   document.getElementsByClassName("tmp6").style.backgroundColor = "pink";
// }

// jscs:disable
// jscs:enable
// jscs:disable validateQuoteMarks
// jscs:disable maximumLineLength
// jscs:disable requireSpacesInAnonymousFunctionExpression
// jscs:disable requirePaddingNewLinesBeforeLineComments
// jscs:disable requireSpaceAfterKeywords
var sentences = [
  'I love you the more in that I believe you had liked me for my own sake and for nothing else.',
  "There is nothing permanent except change.",
  "You cannot shake hands with a clenched fist.",
  "Let us sacrifice our today so that our children can have a better tomorrow.",
  "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You act to change and control your life; and the procedure, the process is its own reward.",
  "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
];
var tips = [
  'Try using all your fingers',
  'Dont overuse any fingers',
  'Dont look at your keyboard while you are typing',
];
var username;
var sentence = sentences[Math.floor(Math.random() * sentences.length)];
var takeTimeOne = 0;
var takeTimeTwo;
var input;
var count;
var takeTimeResult;
var takeTimeTwo = Date.now();
var takeTimeBoth = (takeTimeTwo - takeTimeOne);
var cpmResult = Math.round((count * 60) / takeTimeResult);
var tip = tips[Math.floor(Math.random() * tips.length)];
var autocheckOrNot;
var lastTop = 0;
var points = 0;
var top1 = 0;
var top2 = 0;
var top3 = 0;
var top4 = 0;
var top5 = 0;
var top6 = 0;
var top7 = 0;
var top8 = 0;
var top9 = 0;
var top10 = 0;
var lastGuy = 0;
var guy = 0;
var guy1 = 0;
var guy2 = 0;
var guy3 = 0;
var guy4 = 0;
var guy5 = 0;
var guy6 = 0;
var guy7 = 0;
var guy8 = 0;
var guy9 = 0;
var guy10 = 0;
var checkOrNot;
var lastInput = "";
var accCount = 0;
var accPercentage = 100;

//var key = event.keyCode;
function startup() {
  document.getElementById("myInput").disabled = true;
  document.getElementById("myInput").value = "";
  document.getElementById("writeSentence").innerHTML = sentence;
  input = document.getElementById("myInput").value;
  count = input.length;
  document.getElementById("optionsOne").style.visibility = "hidden";
  // Retrieve
  username = localStorage.getItem("username");
  if (username == null) {
    console.log("no user registered");
    document.getElementById("welcomeText").innerHTML = "Welcome";
  } else {
    console.log("username " + username);
    document.getElementById("welcomeText").innerHTML = "Welcome " + username;
  }
}

//	var timerValue = false;
//	var timeTF = 0;
function register() {
  document.getElementById("register").style.visibility = "hidden";
  document.getElementById("unregister").style.visibility = "visible";
  username = document.getElementById("loginText").value;
  document.getElementById("welcomeText").innerHTML = "Welcome " + username;
  // Check browser support
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("username", username);
  } else {
    document.getElementById("notify").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}

function unregister() {
  document.getElementById("welcomeText").innerHTML = "You are not registered anymore, your scores will not be saved.";
  // Check browser support
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.removeItem("username");
  } else {
    document.getElementById("notify").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}

function changeSentence() {
  sentence = sentences[Math.floor(Math.random() * sentences.length)];
  document.getElementById("writeSentence").innerHTML = sentence;
  document.getElementById("myInput").disabled = true;
  document.getElementById("myInput").value = "";

}

function start(time) {
  cpmResult = 0;
  document.getElementById("timeCourse").innerHTML = "";
  document.getElementById("valueCpm").innerHTML = "";
  document.getElementById("timeCourse").innerHTML = "";

  document.getElementById("myInput").value = "";

  setTimeout(function() {
    document.getElementById(time).innerHTML = "3";
  }, 1000);

  setTimeout(function() {
    document.getElementById(time).innerHTML = "2";
  }, 2000);

  setTimeout(function() {
    document.getElementById(time).innerHTML = "1";
  }, 3000);

  setTimeout(function() {
    document.getElementById(time).innerHTML = "Go";
  }, 4000);

  //setTimeout(function () {var takeTimeOne = 1;}, 4000);

  setTimeout(checkError, 4000);
  setTimeout(able, 4000);
  setTimeout(cpm, 4000);
  setTimeout(setTimer, 4000);
  setTimeout(finalAutoCheck, 50);
  autocheckOrNot = 1;
  checkOrNot = 1;

  //setTimeout(keyEnter, 4000);

  //var timeTF = 0;
}

// function keyEnter() {
//   var key = event.keyCode;
//   if (key == 13) {
//     finalCheck;
//     key = 0;
//     setTimeout(keyEnter, 100);
//   }
// }
//document.body.innerHTML = "test"; SO YOU DONT NEED AN ID!!!
function able() {
  document.getElementById("myInput").disabled = false;
}

//When you write var you are creating a local scoped var.
function toggleOptions() {
  var showHid = document.getElementById("optionsOne").style.visibility;

  if (showHid == "hidden") {
    document.getElementById("optionsOne").style.visibility = "visible";

  } else {
    document.getElementById("optionsOne").style.visibility = "hidden";

  }
}

function setTimer() {
  takeTimeOne = Date.now();
  return takeTimeOne;
}

function test() {

}

function cpm() {
  takeTimeTwo = Date.now();
  takeTimeBoth = (takeTimeTwo - takeTimeOne);
  takeTimeResult = takeTimeBoth / 1000;
  cpmResult = Math.round((count * 60) / takeTimeResult);
  if (checkOrNot == 1) {
    input = document.getElementById("myInput").value; //make taketimeresult reactive
    count = input.length;
    document.getElementById("cpmCount").innerHTML = cpmResult + " cpm";
    setTimeout(cpm, 500);
  }

  if (checkOrNot == 1) {
    document.getElementById("timeCourse").innerHTML = "" + Math.round(takeTimeResult) + " s";
  }
}

// To change body background color document.body.style.backgroundColor = 'green';

function checkError() {
  input = document.getElementById("myInput").value;
  if (input != lastInput) {
    if (checkOrNot == 1) {
      if (sentence.indexOf(input) == 0)
        document.getElementById("myInput").style.backgroundColor = 'lightgreen';
      else {
        document.getElementById("myInput").style.backgroundColor = 'pink';
        if (lastInput.length < input.length) {
          accCount = accCount + 1;
          accPercentage = Math.round(100 - (accCount / input.length * 100));
        }
      }

      setTimeout(checkError, 50);
      document.getElementById("myInput").disabled = false;
      document.getElementById("accuracyCount").innerHTML = accCount + " mistakes";
      document.getElementById("accPercent").innerHTML = accPercentage + " % accuracy";

    }

    lastInput = input;
  }

  setTimeout(checkError, 50);

}

function tipsFunction() {
  tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tips").innerHTML = "Tips: " + tip;
}

function finalAutoCheck() {
  takeTimeTwo = Date.now();
  takeTimeBoth = (takeTimeTwo - takeTimeOne);
  takeTimeResult = takeTimeBoth / 1000;
  cpmResult = Math.round((count * 60) / takeTimeResult);
  input = document.getElementById("myInput").value;
  if (autocheckOrNot == 1) {
    if (input == sentence) {
      alert("Well done");
      checkOrNot = 0;
      document.getElementById("myInput").style.backgroundColor = 'white';
      document.getElementById("timeCourse").innerHTML = "This took you " + Math.round(takeTimeResult) + " s";
      document.getElementById("myInput").disabled = true;
      setCheckTops();
      if (cpmResult < 100) {
        document.getElementById("valueCpm").innerHTML = "Keep practicing";
      } else {
        if (cpmResult > 100, cpmResult < 200) {
          document.getElementById("valueCpm").innerHTML = "You are getting better";
        }

        if (cpmResult > 200, cpmResult < 300) {
          document.getElementById("valueCpm").innerHTML = "Wow, you are good";
        }

        if (cpmResult > 300) {
          document.getElementById("valueCpm").innerHTML = "You are a typing god";
        }
      }

      setTimeout(finalAutoCheck, 500);
      autocheckOrNot = 0;
    }
  }

  setTimeout(finalAutoCheck, 500);
}

var topList = [];

function exportTops() {
  return top1,
    top2,
    top3,
    top4,
    top5,
    top6,
    top7,
    top8,
    top9,
    top10,
    guy1,
    guy2,
    guy3,
    guy4,
    guy5,
    guy6,
    guy7,
    guy8,
    guy9,
    guy10;
}

function setCheckTops() {
  guy = username;
  points = cpmResult;
  checkTops();
}

function checkTops() {
  console.log(points, username);
  if (points > top1) {
    lastTop = top1;
    lastGuy = guy1;
    top1 = points;
    guy1 = guy;
  } else if (points > top2) {
    lastTop = top2;
    lastGuy = guy2;
    top2 = points;
    guy2 = guy;
  } else if (points > top3) {
    lastTop = top3;
    lastGuy = guy3;
    top3 = points;
    guy3 = guy;
  } else if (points > top4) {
    lastTop = top4;
    lastGuy = guy4;
    top4 = points;
    guy4 = guy;
  } else if (points > top5) {
    lastTop = top5;
    lastGuy = guy5;
    top5 = points;
    guy5 = guy;
  } else if (points > top6) {
    lastTop = top6;
    lastGuy = guy6;
    top6 = points;
    guy6 = guy;
  } else if (points > top7) {
    lastTop = top7;
    lastGuy = guy7;
    top7 = points;
    guy7 = guy;
  } else if (points > top8) {
    lastTop = top8;
    lastGuy = guy8;
    top8 = points;
    guy8 = guy;
  } else if (points > top9) {
    lastTop = top9;
    lastGuy = guy9;
    top9 = points;
    guy9 = guy;
  } else if (points > top10) {
    lastTop = top10;
    lastGuy = guy10;
    top10 = points;
    guy10 = guy;
  }

  console.log(top1, guy1);
  exportTops();
}

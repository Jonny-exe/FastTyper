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
var getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
};

//var key = event.keyCode;
function startup() {
  document.getElementById("myInput").disabled = true;
  document.getElementById("myInput").value = "";
  changeSentence();
  input = document.getElementById("myInput").value;
  count = input.length;
  setOptionsVisivility();
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

function setOptionsVisivility() {
  document.getElementById("optionsOne").style.visibility = "hidden";
  document.getElementById("optionsTwo").style.visibility = "hidden";
  document.getElementById("optionsThree").style.visibility = "hidden";
  document.getElementById("optionsCheckOne").style.visibility = "hidden";
  document.getElementById("optionsCheckTwo").style.visibility = "hidden";
  document.getElementById("optionsCheckOneSpan").style.visibility = "hidden";
  document.getElementById("optionsCheckTwoSpan").style.visibility = "hidden";
  document.getElementById("optionsCheckThreeSpan").style.visibility = "hidden";
  document.getElementById("optionsCheckFourSpan").style.visibility = "hidden";
  document.getElementById("optionsCheckFiveSpan").style.visibility = "hidden";

  document.getElementById("optionsCheckOne").checked = true;
  document.getElementById("optionsCheckTwo").checked = true;
  document.getElementById("optionsCheckThree").checked = false;
  document.getElementById("optionsCheckFour").checked = true;
  document.getElementById("optionsCheckFive").checked = false;

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
  document.getElementById("myInput").disabled = true;
  document.getElementById("myInput").value = "";
//TODO: make random sentences write work
  if (document.getElementById("optionsCheckFive").checked == true) {
    getJSON('https://raw.githubusercontent.com/sindresorhus/mnemonic-words/master/words.json',
      function(err, data) {
        if (err !== null) {
          alert('Something went wrong: ' + err);
        } else {
          //data is an array

          el = data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " " + data[Math.floor(Math.random() * data.length)] + " ";
          sentence = el;
          if (document.getElementById("optionsCheckThree").checked == true) {
            if (sentence.includes(1, 2, 3, 4, 5, 6, 7, 8, 9)) {
              document.getElementById("writeSentence").innerHTML = sentence;
              if (document.getElementById("optionsCheckOne").checked == true) {
                if (sentence.length > 100) {
                  document.getElementById("writeSentence").innerHTML = sentence;
                } else {
                  changeSentence();
                }

              } else {

                if (document.getElementById("optionsCheckTwo").checked == true) {
                  if (sentence.length < 100) {
                    document.getElementById("writeSentence").innerHTML = sentence;
                  }
                } else {
                  changeSentence();
                }
              }
            } else {
              changeSentence();
            }
          } else {

            if (document.getElementById("optionsCheckOne").checked == true) {
              if (sentence.length > 100) {
                document.getElementById("writeSentence").innerHTML = sentence;
              } else {
                changeSentence();
              }

            } else {
              if (document.getElementById("optionsCheckTwo").checked == true) {
                if (sentence.length < 100) {
                  document.getElementById("writeSentence").innerHTML = sentence;
                }
              } else {
                changeSentence();
              }
            }
          }
        }
      }
    );
  } else {
    getJSON('https://raw.githubusercontent.com/dwyl/quotes/master/quotes.json',
      function(err, data) {
        if (err !== null) {
          alert('Something went wrong: ' + err);
        } else {
          //data is an array, inside the array there are dictionari, with 2 key  value pairs, author and text

          el = data[Math.floor(Math.random() * data.length)];
          sentence = el.text;
          if (document.getElementById("optionsCheckThree").checked == true) {
            if (sentence.includes(1, 2, 3, 4, 5, 6, 7, 8, 9)) {
              document.getElementById("writeSentence").innerHTML = sentence;
              if (document.getElementById("optionsCheckOne").checked == true) {
                if (sentence.length > 100) {
                  document.getElementById("writeSentence").innerHTML = sentence;
                } else {
                  changeSentence();
                }

              } else {
                if (document.getElementById("optionsCheckTwo").checked == true) {
                  if (sentence.length < 100) {
                    document.getElementById("writeSentence").innerHTML = sentence;
                  }
                } else {
                  changeSentence();
                }
              }
            } else {
              changeSentence();
            }
          } else {
            if (document.getElementById("optionsCheckOne").checked == true) {
              if (sentence.length > 100) {
                document.getElementById("writeSentence").innerHTML = sentence;
              } else {
                changeSentence();
              }

            } else {
              if (document.getElementById("optionsCheckTwo").checked == true) {
                if (sentence.length < 100) {
                  document.getElementById("writeSentence").innerHTML = sentence;
                }
              } else {
                changeSentence();
              }
            }
          }
        }
      }
    );
  }
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
    document.getElementById("optionsTwo").style.visibility = "visible";
    document.getElementById("optionsThree").style.visibility = "visible";



  } else {
    document.getElementById("optionsOne").style.visibility = "hidden";
    document.getElementById("optionsTwo").style.visibility = "hidden";
    document.getElementById("optionsThree").style.visibility = "hidden";
  }
}

function toggleCheckOptionsTwo() {
  var activateDeactivate = (document.getElementById("optionsCheckFour").checked = true);
  console.log(activateDeactivate);
  if (showHid == true) {
    document.getElementById("optionsCheckFour").checked = true;
    document.getElementById("optionsCheckFive").checked = false;

//TODO: make toggleCheckOptionsTwo work

  } else {
    document.getElementById("optionsCheckFour").checked = false;
    document.getElementById("optionsCheckFour").checked = true;
    }
}

function toggleCheckOptions() {
  var showHid = document.getElementById("optionsCheckOne").style.visibility;

  if (showHid == "hidden") {
    document.getElementById("optionsCheckFiveSpan").style.visibility = "visible";
    document.getElementById("optionsCheckFourSpan").style.visibility = "visible";
    document.getElementById("optionsCheckOneSpan").style.visibility = "visible";
    document.getElementById("optionsCheckTwoSpan").style.visibility = "visible";
    document.getElementById("optionsCheckThreeSpan").style.visibility = "visible";
    document.getElementById("optionsCheckOne").style.visibility = "visible";
    document.getElementById("optionsCheckTwo").style.visibility = "visible";

  } else {
    document.getElementById("optionsCheckFiveSpan").style.visibility = "hidden";
    document.getElementById("optionsCheckFourSpan").style.visibility = "hidden";
    document.getElementById("optionsCheckOneSpan").style.visibility = "hidden";
    document.getElementById("optionsCheckThreeSpan").style.visibility = "hidden";
    document.getElementById("optionsCheckTwoSpan").style.visibility = "hidden";
    document.getElementById("optionsCheckOne").style.visibility = "hidden";
    document.getElementById("optionsCheckTwo").style.visibility = "hidden";

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
console.log(guy1, top1);

var topList = [];

function setCheckTops() {
  guy = username;
  points = cpmResult;
  checkTops();
}

function checkTops() {
  if (points > top1) {
    lastTop = top1;
    lastGuy = guy1;
    top1 = points;
    guy1 = guy;
    points = lastTop;
    guy = lastGuy;
    checkTops();
  } else if (points > top2) {
    lastTop = top2;
    lastGuy = guy2;
    top2 = points;
    guy2 = guy;
    points = lastTop;
    guy = lastGuy;
    checkTops();
  } else if (points > top3) {
    lastTop = top3;
    lastGuy = guy3;
    top3 = points;
    guy3 = guy;
    points = lastTop;
    guy = lastGuy;
    checkTops();
  } else if (points > top4) {
    lastTop = top4;
    lastGuy = guy4;
    top4 = points;
    guy4 = guy;
    points = lastTop;
    guy = lastGuy;
    checkTops();
  } else if (points > top5) {
    lastTop = top5;
    lastGuy = guy5;
    top5 = points;
    guy5 = guy;
    points = lastTop;
    guy = lastGuy;
    checkTops();
  } else if (points > top6) {
    lastTop = top6;
    lastGuy = guy6;
    top6 = points;
    guy6 = guy;
    points = lastTop;
    guy = lastGuy;
    checkTops();
  } else if (points > top7) {
    lastTop = top7;
    lastGuy = guy7;
    top7 = points;
    guy7 = guy;
    points = lastTop;
    guy = lastGuy;
    checkTops();
  } else if (points > top8) {
    lastTop = top8;
    lastGuy = guy8;
    top8 = points;
    guy8 = guy;
    points = lastTop;
    guy = lastGuy;
    checkTops();
  } else if (points > top9) {
    lastTop = top9;
    lastGuy = guy9;
    top9 = points;
    guy9 = guy;
    points = lastTop;
    guy = lastGuy;
    checkTops();
  } else if (points > top10) {
    lastTop = top10;
    lastGuy = guy10;
    top10 = points;
    guy10 = guy;
    points = lastTop;
    guy = lastGuy;
    checkTops();
  }

  console.log("top 1" + top10);
  localStorage.setItem("top1", top1);
  localStorage.setItem("guy1", guy1);
  localStorage.setItem("top2", top2);
  localStorage.setItem("guy2", guy2);
  localStorage.setItem("top3", top3);
  localStorage.setItem("guy3", guy3);
  localStorage.setItem("top4", top4);
  localStorage.setItem("guy4", guy4);
  localStorage.setItem("top5", top5);
  localStorage.setItem("guy5", guy5);
  localStorage.setItem("top6", top6);
  localStorage.setItem("guy6", guy6);
  localStorage.setItem("top7", top7);
  localStorage.setItem("guy7", guy7);
  localStorage.setItem("top8", top8);
  localStorage.setItem("guy8", guy8);
  localStorage.setItem("top9", top9);
  localStorage.setItem("guy9", guy9);
  localStorage.setItem("top10", top10);
  localStorage.setItem("guy10", guy10);

}
// TODO: How to write from java script to a public github gist
function setRankingsLink() {
  location.href = "TrRankings.html?guy1=" + guy1 + "&top1=" + top1 + "&guy2=" + guy2 + "&top2=" + top2 + "&guy3=" + guy3 +
    "&top3=" + top3 + "&guy4=" + guy4 + "&top4=" + top4 + "&guy5=" + guy5 + "&top5=" + top5 + "&guy6=" + guy6 + "&top6=" +
    top6 + "&guy7=" + guy7 + "&top7=" + top7 + "&guy8=" + guy8 + "&top8=" + top8 + "&guy9=" + guy9 + "&top9=" + top9 +
    "&guy10=" + guy10 + "&top10=" + top10;
}

function getTops() {
  top1 = localStorage.getItem("top1");
  guy1 = localStorage.getItem("guy1");
  top2 = localStorage.getItem("top2");
  guy2 = localStorage.getItem("guy2");
  top3 = localStorage.getItem("top3");
  guy3 = localStorage.getItem("guy3");
  top4 = localStorage.getItem("top4");
  guy4 = localStorage.getItem("guy4");
  top5 = localStorage.getItem("top5");
  guy5 = localStorage.getItem("guy5");
  top6 = localStorage.getItem("top6");
  guy6 = localStorage.getItem("guy6");
  top7 = localStorage.getItem("top7");
  guy7 = localStorage.getItem("guy7");
  top8 = localStorage.getItem("top8");
  guy8 = localStorage.getItem("guy8");
  top9 = localStorage.getItem("top9");
  guy9 = localStorage.getItem("guy9");
  top10 = localStorage.getItem("top10");
  guy10 = localStorage.getItem("guy10");
}

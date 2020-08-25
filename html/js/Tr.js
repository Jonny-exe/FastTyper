// jscs:disable
// jscs:enable
// jscs:disable validateQuoteMarks
// jscs:disable maximumLineLength
// jscs:disable requireSpacesInAnonymousFunctionExpression
// jscs:disable requirePaddingNewLinesBeforeLineComments
// jscs:disable requireSpaceAfterKeywords
// jscs:disable
// jshint esversion: 8
//TODO: learn more shortcuts for atom
//imports
import {
  Octokit
} from "https://cdn.pika.dev/@octokit/core";
import {t} from './t.js';

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

//shortchut consts
const optionsSmall = document.getElementsByClassName('optionsSmall');
const optionsBig = document.getElementsByClassName('optionsBig');
const options = document.getElementsByClassName('op');
const displayFinished = document.getElementById("displayFinished");
const separator = " ||";
const maxTop = 100;
const inputEl = document.getElementById("myInput");
const opLong = document.getElementById("optionsCheckLong");
const opLongSp = document.getElementById("optionsCheckLongSpan");
const opShort = document.getElementById("optionsCheckShort");
const opShortSp = document.getElementById("optionsCheckShortSpan");
const opNormal = document.getElementById("optionsCheckNormal");
const opNormalSp = document.getElementById("optionsCheckNormalSpan");
const opRandom = document.getElementById("optionsCheckRandom");
const opRandomSp = document.getElementById("optionsCheckRandomSpan");
const opDark = document.getElementById("optionsCheckDark");
const opDarkSp = document.getElementById("optionsCheckDarkSpan");
const opNumbers = document.getElementById("optionsCheckNumbers");
const opNumbersSp = document.getElementById("optionsCheckNumbersSpan");
const opKeysSp = document.getElementById("optionsCheckKeysSpan");
const opKeys = document.getElementById("optionsCheckKeys");
const welcomeText = document.getElementById("welcomeText");
const register = document.getElementById("register");
const unregister = document.getElementById("unregister");
const timeEl = document.getElementById("time");
const keys = document.getElementsByClassName("keys");
const keypad = document.getElementById("keyPad");
const rankings = document.getElementById("optionsOne");
const credits = document.getElementById("optionsTwo");
const moreOp = document.getElementById("optionsThree");
const wrSentence = document.getElementById("writeSentence");
const image = document.getElementById("image");

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var isSentenceChanged;
var finished = false;
var canRotate = true;
var part1;
var part2;
var fullPart;
var ranNumber;
var finalNumber;
var pressedKey;
var sentenceWrite;
var words = "";
var el = "";
var input;
var username;
var sentence = sentences[Math.floor(Math.random() * sentences.length)];
var takeTimeOne = 0;
var takeTimeTwo;
var count;
var takeTimeResult;
var takeTimeTwo = Date.now();
var takeTimeBoth = (takeTimeTwo - takeTimeOne);
var cpmResult = Math.round((count * 60) / takeTimeResult);
var tip = tips[Math.floor(Math.random() * tips.length)];
var autocheckOrNot;
var rankingStr;

//tops
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

// var guys = guy1, guy2, guy3, guy4, guy5, guy6, guy7, guy8, guy9, guy10;
// var tops = top1, top2, top3, top4, top5, top6, top7, top8, top9, top10;
var ranking = [];
var myRankingJson;
var rank;

var isTyping = false;
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

console.log("hi");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules you cant inport the octokit
function setEvents() {
  image.addEventListener('click', toggleOptions);
  rankings.addEventListener('click', setRankingsLink);
  document.getElementById('optionsTwo').addEventListener('click', toggleCheckOptions);
  document.getElementById('optionsCheckNormal').addEventListener('click', toggleCheckOptionsNormal, true);
  opRandom.addEventListener('click', toggleCheckOptionsNormal, false);
  opKeys.addEventListener('click', toggleKeys);
  opDark.addEventListener('click', toggleDarkMode);
  document.getElementById('register').addEventListener('click', registerFunc);
  document.getElementById('unregister').addEventListener('click', unregisterFunc);
  document.getElementById('changeSentence').addEventListener('click', changeSentence);
  document.getElementById('start').addEventListener('click', start, time);
  document.getElementById('tips').addEventListener('click', tipsFunction);
  document.getElementById('myInput').addEventListener('keydown', function(event) {
    var keynum;
    console.log("onkeydown");
    if (window.event) { // IE
      keynum = event.keyCode;
    } else if (event.which) { // Netscape/Firefox/Opera
      keynum = event.which;
    }
    //use something like charCodeAt to get the number.
    pressedKey = String.fromCharCode(keynum);
    pressedKey = pressedKey.charCodeAt();

    return changeKeyColor(pressedKey);
  });
}

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({
  auth: t
});

async function getGist() {

  // //working
  // const response1 = await octokit.request('GET /gists/a8aa0f34f366403f79b4646e8964bc33', {
  //   gist_id: 'gist_id'
  // })
  // console.log(response1);
  // //working
  // const response2 = await octokit.request('PATCH /gists/a8aa0f34f366403f79b4646e8964bc33', {
  //   gist_id: 'gist_id',
  //   description: 'my-title-2',
  //   "files": {
  //     "Tr-gist.json": {
  //       "content": "{\"name\" : \"jonny\",\"points\": \"300\"}"
  //     }
  //   }
  // })
  //working
  //make this work with vars

  const response3 = await octokit.request('PATCH /gists/a8aa0f34f366403f79b4646e8964bc33', {
    gist_id: 'gist_id',
    description: 'my-title-2',
    "files": {
      "Tr-gist.json": {
        "content": `${rankingStr}`
      }
    }
  });
  console.log("gistUpdated");

  // //creates a new one with each call
  //       const response4 = await octokit.request('POST /gists', {
  //         description: 'computerGenerated',
  //         "files": {
  //           "Computer generated file": {
  //             "content": "{\"name\" : \"Frank\",\"points\": \"350\"}"
  //           }
  //         }
  //       })
  //       console.log(response4);
}
console.log(Octokit);


//var key = event.keyCode;
function startup() {
  setEvents();
  toggleKeys();
  console.log("startup");
  inputEl.disabled = true;
  inputEl.value = "";
  console.log("hihiih");
  changeSentence();
  input = inputEl.value;
  count = input.length;
  setOptionsVisivility();
  bodyFadeIn();
  getRanking();
  // Retrieve
  localStorage.getItem("lightningMode");
  if (localStorage.getItem("lightningMode") == "dark") {
    setDarkMode(true);
    opDark.checked = true;
  } else {
    setDarkMode(false);
    opDark.checked = false;
  }
  username = localStorage.getItem("username");
  if (username == null) {
    console.log("no user registered");
    welcomeText.innerHTML = "Welcome";
  } else {
    console.log("username " + username);
    welcomeText.innerHTML = `Welcome ${username}`;
  }
}

// inputEl.onchange = function() {
//   if (finished) {
//     updateDisplay();
//   }
// };
//
// function updateDisplay() {
//   displayFinished.value = "finished";
//   var request = new XMLHttpRequest();
//   formData.append(name, value);
//   request.responesType = 'text';
//   request.onload = function() {
//     displayFinished.value = "finished";
//   };
//   request.send();
// }

function setOptionsVisivility() {
  for (let i = 0; i < options.length; i++) {
    options[i].style.visibility = "hidden";
  }

  opLong.checked = true;
  opShort.checked = true;
  opNumbers.checked = false;
  opRandom.checked = false;
  opNormal.checked = true;
  opDark.checked = false;
  opKeys.checked = false;
}

//	var timerValue = false;
//	var timeTF = 0;
function registerFunc() {
  register.style.visibility = "hidden";
  unregister.style.visibility = "visible";
  username = document.getElementById("loginText").value;
  welcomeText.innerHTML = "Welcome " + username;
  // Check browser support
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("username", username);
  } else {
    document.getElementById("notify").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}

function unregisterFunc() {
  register.style.visibility = "visible";
  unregister.style.visibility = "hidden";
  welcomeText.innerHTML = "You are not registered anymore, your scores will not be saved.";
  // Check browser support
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.removeItem("username");
  } else {
    document.getElementById("notify").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}


// numbers: boolean, true ... mix numbers into words; false ... do not use any numbers
// noOfWords: integer, number of words, e.g. 10 or 20 or any other number
// numbersPerWords: add a number after every N-th word, e.g. if set to 5, after 5 words a number will be placed
function computeRandomSentence(noOfWords, numbers, numbersPerWords) {
  getJSON('https://raw.githubusercontent.com/sindresorhus/mnemonic-words/master/words.json',
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        sentence = "";
        for (i = 0; i < noOfWords; i++) {
          if ((numbers) && ((i % numbersPerWords) == (numbersPerWords - 1))) {
            // use number
            words = data[Math.floor(Math.random() * data.length)] + " " + Math.floor((Math.random() * 9999));
          } else {
            // dont use numbers
            words = data[Math.floor(Math.random() * data.length)];
          }
          if (i == (noOfWords - 1))
            words += ".";
          else
            words += " ";
          sentence += words;

        }
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        writeSentence();
      }
    }
  );
}

//TODO: maybe try makeing an number input field, and that will determing the length of the random sentence
function changeSentence() {
  accCount = 0;
  sentence = "";
  el = "";
  inputEl.disabled = true;
  inputEl.value = "";

  if (opRandom.checked) {
    getJSON('https://raw.githubusercontent.com/sindresorhus/mnemonic-words/master/words.json',
      function(err, data) {
        if (err !== null) {
          alert('Something went wrong: ' + err);
        } else {
          ranNumber = _.shuffle([10, 20]);
          finalNumber = ranNumber[0];
          if (opNumbers.checked) {
            if (!opShort.checked && opLong.checked) {
              sentence = computeRandomSentence(20, true, 5);
            }

            if (opShort.checked && !opLong.checked) {
              sentence = computeRandomSentence(10, true, 5);
            }

            if (opShort.checked && opLong.checked) {
              sentence = computeRandomSentence(finalNumber, true, 5);
            }
          }
          if (!opNumbers.checked) {
            if (opShort.checked && !opLong.checked) {
              sentence = computeRandomSentence(10, false, 5);
            }

            if (!opShort.checked && opLong.checked) {
              sentence = computeRandomSentence(20, false, 5);
            }

            if (opShort.checked && opLong.checked) {
              sentence = computeRandomSentence(finalNumber, false, 5);
            }
          }
        }

      }
    );
  }
  if (opNormal.checked == true) {
    getJSON('https://raw.githubusercontent.com/dwyl/quotes/master/quotes.json',
      function(err, data) {
        if (err !== null) {
          alert('Something went wrong: ' + err);
        } else {
          //data is an array, inside the array there are dictionari, with 2 key  value pairs, author and text
          //TODO: make an infine play mode, or a paragraph play mode.
          el = data[Math.floor(Math.random() * data.length)];
          sentence = el.text;
          if (opNumbers.checked == true) {
            if (sentence.includes(1, 2, 3, 4, 5, 6, 7, 8, 9)) {
              writeSentence();
              if (opLong.checked == true) {
                if (sentence.length > 100) {
                  writeSentence();
                } else {
                  changeSentence();
                }

              } else {
                if (opShort.checked == true) {
                  if (sentence.length < 100) {
                    writeSentence();
                  }
                } else {
                  changeSentence();
                }
              }
            } else {
              changeSentence();
            }
          }
          if (!opShort.checked && opLong.checked) {
            console.log("long");
            if (sentence.length > 100) {
              writeSentence();
            } else {
              changeSentence();
            }
          }

          if (opShort.checked && !opLong.checked) {
            console.log("short");
            if (sentence.length < 100) {
              writeSentence();
            } else {
              changeSentence();
            }
          }

          if (opLong.checked && opShort.checked) {
            writeSentence();

          }
        }
      }

    );

  }
}


function start(time) {
  inputEl.disabled = true;
  cpmResult = 0;
  accCount = 0;
  isTyping = false;
  document.getElementById("accuracyCount").innerHTML = "";
  document.getElementById("timeCourse").innerHTML = "";
  document.getElementById("valueCpm").innerHTML = "";
  document.getElementById("timeCourse").innerHTML = "";
  document.getElementById("myInput").value = "";
  document.getElementById("accPercent").innerHTML = "";
  document.getElementById("cpmCount").innerHTML = "";
  inputEl.style.backgroundColor = 'rgb(224, 224, 224)';

  setTimeout(function() {
    timeEl.innerHTML = "3";
    startTimer();
  }, 1000);

  setTimeout(function() {
    timeEl.innerHTML = "2";
  }, 2000);

  setTimeout(function() {
    timeEl.innerHTML = "1";
  }, 3000);

  setTimeout(function() {
    timeEl.innerHTML = "Go";
    finishTimer();

  }, 4000);

  //setTimeout(function () {var takeTimeOne = 1;}, 4000);

  setTimeout(checkError, 4000);
  setTimeout(able, 4000);
  setTimeout(cpm, 4000);
  setTimeout(setTimer, 4000);
  setTimeout(finalAutoCheck, 4000);
  setTimeout(changeSentenceColor, 4000);
  setTimeout(function() {
    autocheckOrNot = true;
  }, 3990);
  setTimeout(function() {
    isTyping = true;
  }, 3990);
}

//document.body.innerHTML = "test"; SO YOU DONT NEED AN ID!!!
function able() {
  inputEl.disabled = false;
  var input = inputEl;
  input.select();
  input.focus();
}

function toggleDarkMode() {
  var toggleDarkMode = opDark.checked;
  if (toggleDarkMode == true) {
    setDarkMode(true);
    localStorage.setItem("lightningMode", "dark");
  } else {
    setDarkMode(false);
    localStorage.setItem("lightningMode", "light");
  }
}

//darkMode: boolean...true: set dark mode; false: set light mode;
//TODO:make this beetter
function setDarkMode(darkMode) {
  var x = document.getElementsByClassName("keys");
  if (darkMode) {
    document.body.style.backgroundColor = "#333333";
    document.body.style.color = "#ffffff";
    for (let i = 0; i < x.length; i++) {
      x[i].style.borderRadius = "5px";
    }
  } else {

    document.body.style.backgroundColor = "#E0E0E0";
    document.body.style.color = "#000000";
    for (let i = 0; i < x.length; i++) {
      x[i].style.borderRadius = "4px";
    }
  }
}

function toggleKeys() {
  var toggleKeys = opKeys.checked;
  if (toggleKeys == true) {
    keysGoIn();
    keypad.style.visibility = "visible";
    localStorage.setItem("keys", "true");
  } else {
    keysGoOut();
    setTimeout(function keypadVisibel() {
      keypad.style.visibility = "hidden";
      localStorage.setItem("keys", "true");
    }, 300);
  }
}
//TODO: nginx flask on the laptop for a sever;
//When you write var you are creating a local scoped var.
function toggleOptions() {
  optionsBigFadeIn();
  var showHid = rankings.style.visibility;
  if (showHid == "hidden") {
    rotateShow();
    canRotate = false;
    console.log(optionsBig.length);
    setTimeout(function setrotate() {
      canRotate = true;
    }, 500);
    for (let i = 0; i < optionsBig.length; i++) {
      optionsBig[i].style.visibility = "visible";
    }
  } else {
    rotateHide();
    canRotate = false;
    setTimeout(function setrotate() {
      canRotate = true;
    }, 500);
    for (let i = 0; i < options.length; i++) {
      options[i].style.visibility = "hidden";
    }
  }
}

function toggleCheckOptionsNormal(optionsNormal) {
  if (optionsNormal == true) {
    opNormal.checked = true;
    opRandom.checked = false;
  } else {
    opNormal.checked = false;
    opRandom.checked = true;
  }
}

function toggleCheckOptions() {
  optionsFadeIn();
  var showHid = opLong.style.visibility;
  console.log("checkOptions");
  if (showHid == "hidden") {
    for (let i = 0; i < optionsSmall.length; i++) {
      optionsSmall[i].style.visibility = "visible";
    }
  } else {
    for (let i = 0; i < optionsSmall.length; i++) {
      optionsSmall[i].style.visibility = "hidden";
    }
  }
}

function setTimer() {
  takeTimeOne = Date.now();
  return takeTimeOne;
}

function cpm() {
  takeTimeTwo = Date.now();
  takeTimeBoth = (takeTimeTwo - takeTimeOne);
  takeTimeResult = takeTimeBoth / 1000;
  cpmResult = Math.round((count * 60) / takeTimeResult);
  if (isTyping) {
    input = inputEl.value; //make taketimeresult reactive
    count = input.length;
    document.getElementById("cpmCount").innerHTML = cpmResult + " cpm";
    setTimeout(cpm, 100);
  }

  if (isTyping) {
    document.getElementById("timeCourse").innerHTML = `${Math.round(takeTimeResult)} s${separator}`;
  }
}

// To change body background color document.body.style.backgroundColor = 'green';

function checkError() {

  input = inputEl.value;
  if (input != lastInput) {
    if (isTyping) {
      if (sentence.indexOf(input) == 0)
        inputEl.style.backgroundColor = 'lightgreen';
      else {
        inputEl.style.backgroundColor = 'pink';
        if (lastInput.length < input.length) {
          accCount = accCount + 1;
          accPercentage = Math.round(100 - (accCount / input.length * 100));
        }
      }

      setTimeout(checkError, 50);
      inputEl.disabled = false;
      document.getElementById("accuracyCount").innerHTML = accCount + " mistakes" + separator;
      document.getElementById("accPercent").innerHTML = accPercentage + " % accuracy" + separator;

    }

    lastInput = input;
  }

  setTimeout(checkError, 50);

}

function writeSentence() {
  console.log("changed");
  wrSentence.innerHTML = changeSentenceColor();
}

function changeSentenceColor() {
  input = inputEl.value;
  part1 = sentence.substring(0, input.length);
  part2 = sentence.substring(input.length, sentence.length);
  part1 = part1.fontcolor("#ffffff");
  fullPart = part1 + part2;

  if (isTyping) {
    wrSentence.innerHTML = fullPart;
    setTimeout(changeSentenceColor, 25);
  }
  sentenceWrite = fullPart;
  return sentenceWrite;
}
//TODO
// function myKeyPress(e) {
//   var keynum;
//
//   if (window.event) { // IE
//     keynum = e.keyCode;
//   } else if (e.which) { // Netscape/Firefox/Opera
//     keynum = e.which;
//   }
//   //use something like charCodeAt to get the number.
//   pressedKey = String.fromCharCode(keynum);
//   pressedKey = pressedKey.charCodeAt();
//
//   return changeKeyColor(pressedKey);
// }



function changeKeyColor(lastKey) {
  //  lastKey = lastKey.toLowerCase();
  document.getElementById(lastKey).style.backgroundColor = "#828282";

  setTimeout(function() {
    document.getElementById(lastKey).style.backgroundColor = "#aaaaaa";
  }, 100);
}


function tipsFunction() {
  tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tips").innerHTML = "Tips: " + tip;
}

function finalAutoCheck() {
  finished = true;
  takeTimeTwo = Date.now();
  takeTimeBoth = (takeTimeTwo - takeTimeOne);
  takeTimeResult = takeTimeBoth / 1000;
  cpmResult = Math.round((count * 60) / takeTimeResult);
  input = inputEl.value;
  if (autocheckOrNot) {
    if (input == sentence) {
      timeEl.innerHTML = "Finished";
      endTimer();
      isTyping = false;
      inputEl.style.backgroundColor = 'rgb(224, 224, 224)';
      document.getElementById("timeCourse").innerHTML = "This took you " + Math.round(takeTimeResult) + " s" + separator;
      inputEl.disabled = true;
      setCheckTops();
      let praise = "";
      if (cpmResult < 100) {
        praise = " Keep practicing";
      } else if (cpmResult < 200) {
        praise = " You are getting better";
      } else if (cpmResult < 300) {
        praise = " Wow, you are good";
      } else {
        praise = " You are a typing god";
      }
      document.getElementById("valueCpm").innerHTML = `${separator} ${praise}`;
      autocheckOrNot = false;
    }
  }
  setTimeout(finalAutoCheck, 200);
}

var topList = [];

function setCheckTops() {
  guy = username;
  points = cpmResult;
  rank = {
    'name': username,
    'points': points,
    'date': date
  };
  console.log(ranking);
  sortTops();
}

function sortTops() {
  console.log(rank);
  ranking.push(rank);
  ranking = _.sortBy(ranking, ['points', "name"]);

  console.log(_.sortBy(ranking, ['points']));
  console.log(ranking[0]);
  ranking.reverse();
  delete ranking.slice(maxTop - 1, ranking.length);
  // delete ranking[];
  rankingStr = JSON.stringify(ranking);
  console.log(rankingStr);
  getGist();
}

function getRanking() {
  getJSON('https://gist.githubusercontent.com/Jonny-exe/a8aa0f34f366403f79b4646e8964bc33/raw/Tr-gist.json',
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        ranking = data;
        console.log(ranking);
      }
    }
  );
}

// TODO: How to write from java script to a public github gist
function setRankingsLink() {
  location.href = "TrRankings.html";
}

function getTops() {
  console.log("tops");
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

function bodyFadeIn() {
  var tl = new TimelineMax();
  var body = document.body;

  //You need the ease, if not it happens instantly and it doesent work

  tl.fromTo(
    body, 10, {
      opacity: 0
    }, {
      opacity: 100,
      ease: Power2.easeInOut
    });
  console.log("fadeIn");

}

function optionsFadeIn() {
  var tl = new TimelineMax();
  var options = document.getElementsByClassName("container");
  var body = document.body;

  //   tl.fromTo(
  //     options, 1.5, { y: "0%" },
  //      { y: "100%", ease: Power2.easeInOut});
  // }
  tl.fromTo(
    options, 0.5, {
      y: "-500%",
      opacity: 0
    }, {
      y: "0%",
      opacity: 1,
      ease: Elastic.easeInOut
    }
  );
}

function optionsBigFadeIn() {
  var tl = new TimelineMax();
  var options = document.getElementsByClassName("mainOptions");

  //   tl.fromTo(
  //     options, 1.5, { y: "0%" },
  //      { y: "100%", ease: Power2.easeInOut});
  // }
  tl.fromTo(
    ".optionsBig", 0.3, {
      y: "-500%",
      opacity: 0
    }, {
      y: "0%",
      opacity: 1,
      ease: Elastic.easeInOut
    }
  );

}

function startTimer() {
  var tl = new TimelineMax();
  var text = timeEl;
  tl.fromTo(
    text, 0.2, {
      x: "-100%"
    }, {
      x: "30%",
      ease: Sine.easeInOut
    }
  );
}

function finishTimer() {
  var tl = new TimelineMax();
  var text = timeEl;
  tl.fromTo(
    text, 0.2, {
      x: "0%"
    }, {
      x: "1000%",
      ease: Sine.easeInOut
    }, "+=0.2"
  );
}
//make all in one function
function endTimer() {
  var tl = new TimelineMax();
  var text = timeEl;
  tl.fromTo(
    text, 0.2, {
      x: "-100%"
    }, {
      x: "0%",
      ease: Sine.easeInOut
    }, "+=0.2"
  );
}

function keysGoIn() {
  var tipsText = document.getElementById('tips');
  var tl = new TimelineMax();
  tl.fromTo(
      tipsText, 0.2, {
        y: "-1000%"
      }, {
        y: "0%",
        ease: Sine.easeInout
      }
    )
    .fromTo(
      keypad, 0.5, {
        x: "-200%"
      }, {
        x: "0%",
        ease: Sine.easeInout
      }
    );
}
//make only one function keysMove(true)
function keysGoOut() {
  var tl = new TimelineMax();
  var tipsText = document.getElementById('tips');

  tl.fromTo(
      keypad, 0.2, {
        x: "0%"
      }, {
        x: "-200%",
        ease: Sine.easeInout
      }
    )
    .fromTo(
      tipsText, 0.3, {
        y: "0%"
      }, {
        y: "-1000%",
        ease: Sine.easeInout
      }
    );
}

function rotateShow() {
  if (canRotate) {
    TweenLite.to(image, 0.5, {
      rotation: "+=-90"
    });
  }
}

function rotateHide() {
  if (canRotate) {
    TweenLite.to(image, 0.5, {
      rotation: "+=90"
    });
  }
}


//updateDisplay();
startup();
console.log(octokit);

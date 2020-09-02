// jscs:disable
// jscs:enable
// jscs:disable validateQuoteMarks
// jscs:disable maximumLineLength
// jscs:disable requireSpacesInAnonymousFunctionExpression
// jscs:disable requirePaddingNewLinesBeforeLineComments
// jscs:disable requireSpaceAfterKeywords
// jscs:disable
// jshint esversion: 8
// jshint:disable W051
//TODO: learn more shortcuts for atom
//imports
import {
  Octokit
} from "https://cdn.skypack.dev/@octokit/core";

// import {
//   Octokit
// } from "https://cdn.jsdelivr.net/npm/@octokit/core@3.1.2/dist-node/index.js";

import {
  startKeyboard,
  setKeyboard,
  startSetKeyboard
} from "https://raw.githack.com/Jonny-exe/HTML-keyboard/master/keyboard.js";


//CONSTS
export var t;
export var language;
export var singleLan;
export var optionsSmall;
export var optionsBig;
export var options;
export var displayFinished;
export var separator;
export var maxTop;
export var opStyleWhite;
export var opStyleDark;
export var opStyleBlue;
export var styleOptions;
export var button;
export var inputEl;
export var opLong;
export var opLongSp;
export var opShort;
export var opShortSp;
export var opNormal;
export var opNormalSp;
export var opRandom;
export var opRandomSp;
export var opDark;
export var opDarkSp;
export var opNumbers;
export var opNumbersSp;
export var opKeysSp;
export var opKeys;
export var welcomeText;
export var register;
export var unregister;
export var timeEl;
export var keys;
export var keypad;
export var rankings;
export var home;
export var credits;
export var moreOp;
export var styleOp;
export var wrSentence;
export var image;
export var imageStyle;
export var queryString;
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
export var octokit;

// VARs
export var sentences;
export var tips;
export var key;
export var link;
export var changeColor;
export var today;
export var date;
export var isSentenceChanged;
export var finished;
export var canRotate;
export var part1;
export var part2;
export var fullPart;
export var ranNumber;
export var finalNumber;
export var pressedKey;
export var sentenceWrite;
export var words;
export var el;
export var input;
export var username;
export var sentence;
export var takeTimeOne;
export var count;
export var takeTimeResult;
export var takeTimeTwo;
export var takeTimeBoth;
export var cpmResult;
export var tip;
export var autocheckOrNot;
export var rankingStr;
export var lastSentence;
export var wordsLink;
export var delRanking;
//tops
export var lastTop;
export var points;
export var lastGuy;
export var guy;
export var ranking;
export var myRankingJson;
export var rank;
export var boderColor;
export var isTyping;
export var lastInput;
export var accCount;
export var accPercentage;
export var getJSON;

export function setT(arg) {
  t = arg;
}

function initConsts() {
  language = document.getElementById('language');
  singleLan = document.getElementsByClassName('singleLan');
  optionsSmall = document.getElementsByClassName('optionsSmall');
  optionsBig = document.getElementsByClassName('optionsBig');
  options = document.getElementsByClassName('op');
  displayFinished = document.getElementById("displayFinished");
  separator = " ||";
  maxTop = 100;
  opStyleWhite = document.getElementById('optionsStyleWhite');
  opStyleDark = document.getElementById('optionsStyleDark');
  opStyleBlue = document.getElementById('optionsStyleBlue');
  styleOptions = document.getElementsByClassName('styleOp');
  button = document.getElementsByClassName('button');
  inputEl = document.getElementById("myInput");
  opLong = document.getElementById("optionsCheckLong");
  opLongSp = document.getElementById("optionsCheckLongSpan");
  opShort = document.getElementById("optionsCheckShort");
  opShortSp = document.getElementById("optionsCheckShortSpan");
  opNormal = document.getElementById("optionsCheckNormal");
  opNormalSp = document.getElementById("optionsCheckNormalSpan");
  opRandom = document.getElementById("optionsCheckRandom");
  opRandomSp = document.getElementById("optionsCheckRandomSpan");
  opDark = document.getElementById("optionsCheckDark");
  opDarkSp = document.getElementById("optionsCheckDarkSpan");
  opNumbers = document.getElementById("optionsCheckNumbers");
  opNumbersSp = document.getElementById("optionsCheckNumbersSpan");
  opKeysSp = document.getElementById("optionsCheckKeysSpan");
  opKeys = document.getElementById("optionsCheckKeys");
  welcomeText = document.getElementById("welcomeText");
  register = document.getElementById("register");
  unregister = document.getElementById("unregister");
  timeEl = document.getElementById("time");
  keys = document.getElementsByClassName("keys");
  keypad = document.getElementById("HTML-keyboard");
  rankings = document.getElementById("optionsOne");
  home = document.getElementById("home");
  credits = document.getElementById("optionsThree");
  moreOp = document.getElementById("optionsTwo");
  styleOp = document.getElementById("optionsFour");
  wrSentence = document.getElementById("writeSentence");
  image = document.getElementById("image");
  imageStyle = document.getElementsByClassName('styleImg');
  queryString = window.location.search;
  // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
  octokit = new Octokit({
    auth: t
  });
}

function initVars() {
  sentences = [
    'I love you the more in that I believe you had liked me for my own sake and for nothing else.',
    "There is nothing permanent except change.",
    "You cannot shake hands with a clenched fist.",
    "Let us sacrifice our today so that our children can have a better tomorrow.",
    "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You act to change and control your life; and the procedure, the process is its own reward.",
    "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
  ];
  tips = [
    'Try using all your fingers',
    'Dont overuse any fingers',
    'Dont look at your keyboard while you are typing',
  ];
  key = "";
  link = "";
  changeColor = "#ffffff";
  today = new Date();
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  finished = false;
  canRotate = true;
  words = "";
  el = "";
  sentence = sentences[Math.floor(Math.random() * sentences.length)];
  takeTimeOne = 0;
  takeTimeTwo = Date.now();
  takeTimeBoth = (takeTimeTwo - takeTimeOne);
  cpmResult = Math.round((count * 60) / takeTimeResult);
  tip = tips[Math.floor(Math.random() * tips.length)];
  delRanking = 0;
  lastTop = 0;
  points = 0;
  lastGuy = 0;
  guy = 0;
  ranking = [];
  isTyping = false;
  lastInput = "";
  accCount = 0;
  accPercentage = 100;
  getJSON = function(url, callback) {
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
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules you cant inport the octokit
export function setEvents() {
  image.addEventListener('click', toggleOptions);
  imageStyle[0].addEventListener('click', function() {
    checkStyle("white");
    console.log("white");
  });
  imageStyle[1].addEventListener('click', function() {
    checkStyle("blue");
    console.log("blue");
  });
  imageStyle[2].addEventListener('click', function() {
    checkStyle("dark");
  });
  imageStyle[3].addEventListener('click', function() {
    checkStyle("green");
  });

  document.getElementById('language').addEventListener('click', toggleLanguages);
  singleLan[0].addEventListener('click', function() {
    changeLanguage("english");
  });
  singleLan[1].addEventListener('click', function() {
    changeLanguage("german");
  });
  singleLan[2].addEventListener('click', function() {
    changeLanguage("spanish");
  });


  rankings.addEventListener('click', setRankingsLink);
  home.addEventListener('click', goHome);
  credits.addEventListener('click', setCreditsLink);
  document.getElementById('optionsTwo').addEventListener('click', toggleCheckOptions);
  document.getElementById('optionsCheckNormal').addEventListener('click', toggleCheckOptionsNormal, true);
  opRandom.addEventListener('click', toggleCheckOptionsNormal, false);
  opKeys.addEventListener('click', toggleKeys);
  document.getElementById('optionsFour').addEventListener('click', toggleStyles);
  document.getElementById('register').addEventListener('click', registerFunc);
  document.getElementById('unregister').addEventListener('click', unregisterFunc);
  document.getElementById('changeSentence').addEventListener('click', changeSentence);
  document.getElementById('start').addEventListener('click', start, time);
  document.getElementById('tips').addEventListener('click', tipsFunction);
  document.getElementById('myInput').addEventListener('keydown', function(event) {
    var keynum;
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

export function readTextFile() {
  getJSON('https://raw.githubusercontent.com/Jonny-exe/German-Words-Library/master/German-words-1600000-words-multilines.json',
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        // console.log(data.length);
      }
    }
  );
}

// readTextFile();

export async function getGist() {

  // //working
  // export const response1 = await octokit.request('GET /gists/a8aa0f34f366403f79b4646e8964bc33', {
  //   gist_id: 'gist_id'
  // })
  // console.log(response1);
  // //working
  // export const response2 = await octokit.request('PATCH /gists/a8aa0f34f366403f79b4646e8964bc33', {
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
  console.log("updategist");

  // //creates a new one with each call
  //       export const response4 = await octokit.request('POST /gists', {
  //         description: 'computerGenerated',
  //         "files": {
  //           "Computer generated file": {
  //             "content": "{\"name\" : \"Frank\",\"points\": \"350\"}"
  //           }
  //         }
  //       })
  //       console.log(response4);
  getRanks();
}

// console.log(Octokit);


//export var key = event.keyCode;

export function startup() {
  console.log("startup() starting...");
  initConsts();
  initVars();
  getRanks();
  changeLanguage("english");
  var color = localStorage.getItem('colorStyle');
  checkStyle(color);
  setEvents();
  toggleKeys();
  inputEl.disabled = true;
  inputEl.value = "";
  changeSentence();
  input = inputEl.value;
  count = input.length;
  setOptionsVisivility();
  bodyFadeIn();
  getRanking();
  startSetKeyboard("HTML-keyboard");
  // Retrieve

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
//   export var request = new XMLHttpRequest();
//   formData.append(name, value);
//   request.responesType = 'text';
//   request.onload = function() {
//     displayFinished.value = "finished";
//   };
//   request.send();
// }

export function setOptionsVisivility() {
  for (let i = 0; i < options.length; i++) {
    options[i].style.visibility = "hidden";
  }

  opLong.checked = true;
  opShort.checked = true;
  opNumbers.checked = false;
  opRandom.checked = false;
  opNormal.checked = true;
  opKeys.checked = false;
}

//	export var timerValue = false;
//	export var timeTF = 0;
export function registerFunc() {
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

export function unregisterFunc() {
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
export function computeRandomSentence(noOfWords, numbers, numbersPerWords) {
  getJSON(wordsLink,
    function(err, data) {
      var otherData = _.shuffle(data);
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        sentence = "";
        for (let i = 0; i < noOfWords; i++) {
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
export function changeSentence() {
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
  // link = "https://raw.githubusercontent.com/dwyl/quotes/master/quotes.json"; //"https://raw.githubusercontent.com/GianNipitella/SpanishQuotes/gh-pages/javascripts/citas.json";
  if (opNormal.checked == true) {
    getJSON(link,
      function(err, data) {
        // console.log(data.length);
        console.log(data.length);

        if (err !== null) {
          alert('Something went wrong: ' + err);
        } else {
          //data is an array, inside the array there are dictionari, with 2 key  value pairs, author and text
          //TODO: make an infine play mode, or a paragraph play mode.
          el = data[Math.floor(Math.random() * data.length)];
          if (key == "text") {
            sentence = el.text;
          }
          if (key == "Cita") {
            sentence = el.Cita;
            sentence = sentence.substring(1, sentence.length - 1);
          }
          if (key == "") {

            sentence = el[Math.floor(Math.random() * el.length)];
          }
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
            if (sentence.length > 100) {
              writeSentence();
            } else {
              changeSentence();
            }
          }

          if (opShort.checked && !opLong.checked) {
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

// function getRanks() {
//   getJSON('https://gist.githubusercontent.com/Jonny-exe/a8aa0f34f366403f79b4646e8964bc33/raw/Tr-gist.json',
//     function(err, data) {
//       if (err !== null) {
//         alert('Something went wrong: ' + err);
//       } else {
//         console.log();
//         ranking = data;
//         console.log(ranking.length);
//         console.log(ranking[0].date);
//         console.log(ranking[0].points);
//         for (let i = 0; i < ranking.length; i++) {
//           var spc = " ";
//           var currentDiv = document.getElementById("div1");
//           var newP = document.createElement("p");
//           newP.style.fontSize = "225%";
//           var newContent = document.createTextNode("Top" + spc + (i + 1) + spc + "-" + spc + "Name" + spc + ranking[i].name + spc + "Points" + spc + ranking[i].points + spc + "Date" + spc + ranking[i].date);
//           newP.appendChild(newContent);
//           currentDiv.insertBefore(newP, currentDiv.childNodes[ranking.length]);
//         }
//       }
//     }
//   );
// }
export function getRanks() {
  getJSON('https://gist.githubusercontent.com/Jonny-exe/a8aa0f34f366403f79b4646e8964bc33/raw/Tr-gist.json',
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        var table = document.getElementById("table");
        ranking = data;
        if (delRanking != 0) {
          console.log("delete row");
          for (let i = 0; i < ranking.length + 4; i++) {
            table.deleteRow(0);
          }
        }
        delRanking = delRanking + 1;
        console.log(ranking.length);
        console.log(ranking[0].date);
        console.log(ranking[0].points);
        var spc = " ";

        for (let i = 0; i < ranking.length; i++) {
          var row;
          if (i == 0) {
            row = table.insertRow(0);
            row = table.insertRow(1);
            row = table.insertRow(2);
            row = table.insertRow(3);
            row.style.height = "100px";
          }
          row = table.insertRow(i + 4);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);

          cell1.innerHTML = "Top" + spc + (i + 1) + spc + "-" + spc + "Name" + spc + ranking[i].name;
          cell2.innerHTML = "Points" + spc + ranking[i].points;
          cell3.innerHTML = "Date" + spc + ranking[i].date;
          row.style.fontSize = "225%";
        }
      }
    }
  );
}
//TODO: make idioms
export function start(time) {
  inputEl.disabled = true;
  cpmResult = 0;
  accCount = 0;
  isTyping = false;
  if (lastSentence == sentence) {
    changeSentence();
  }
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
export function able() {
  inputEl.disabled = false;
  var input = inputEl;
  input.select();
  input.focus();
}

export function toggleStyles() {
  var hideOptions = opLong.style.visibility;
  var hideStyle = optionsStyleBlue.visibility;
  if (hideOptions == "visible") {
    toggleCheckOptions();
    toggleStyleOptions();
  } else {
    toggleStyleOptions();

  }
}

//darkMode: boolean...true: set dark mode; false: set light mode;
//TODO:make this beetter

export function toggleKeys() {
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
export function toggleOptions() {
  optionsBigFadeIn();
  var showHid = rankings.style.visibility;
  if (showHid == "hidden") {
    rotateShow();
    canRotate = false;
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

//TODO: make flag icons, or background on the languages;
//TODO: make the languages work

export function toggleCheckOptionsNormal(optionsNormal) {
  if (optionsNormal == true) {
    opNormal.checked = true;
    opRandom.checked = false;
  } else {
    opNormal.checked = false;
    opRandom.checked = true;
  }
}

export function toggleCheckOptions() {
  optionsFadeIn();
  if (document.getElementsByClassName('singleLan')[0].style.visibility == "visible") {
    toggleLanguages();
  }
  var showHid = opLong.style.visibility;
  if (showHid == "hidden") {
    for (let i = 0; i < optionsSmall.length; i++) {
      optionsSmall[i].style.visibility = "visible";
    }
    for (let a = 0; a < styleOptions.length; a++) {
      styleOptions[a].style.visibility = "hidden";
    }
  } else {
    for (let i = 0; i < optionsSmall.length; i++) {
      optionsSmall[i].style.visibility = "hidden";
    }
  }
}

export function toggleLanguages() {
  if (opStyleWhite.style.visibility == 'visible') {
    toggleStyleOptions();
  }
  if (opLong.style.visibility == 'visible') {
    toggleCheckOptions();
  }
  var showHid = document.getElementsByClassName('singleLan')[0].style.visibility;
  if (showHid == "visible") {
    for (let i = 0; i < document.getElementsByClassName('singleLan').length; i++) {
      document.getElementsByClassName('singleLan')[i].style.visibility = "hidden";
    }
  } else {
    for (let i = 0; i < document.getElementsByClassName('singleLan').length; i++) {
      document.getElementsByClassName('singleLan')[i].style.visibility = "visible";
    }
  }
}

export function changeLanguage(language) {
  if (language == "english") {
    document.getElementsByClassName("singleLanImg")[0].style.border = "thick solid " + boderColor;
    document.getElementsByClassName("singleLanImg")[1].style.border = 'none';
    document.getElementsByClassName("singleLanImg")[2].style.border = 'none';
    link = "https://raw.githubusercontent.com/dwyl/quotes/master/quotes.json";
    key = "text";
    wordsLink = 'https://raw.githubusercontent.com/sindresorhus/mnemonic-words/master/words.json';
  }
  if (language == "spanish") {
    document.getElementsByClassName("singleLanImg")[0].style.border = 'none';
    document.getElementsByClassName("singleLanImg")[1].style.border = 'none';
    document.getElementsByClassName("singleLanImg")[2].style.border = "thick solid " + boderColor;
    link = "https://raw.githubusercontent.com/GianNipitella/SpanishQuotes/gh-pages/javascripts/citas.json";
    key = "Cita";
    wordsLink = "https://raw.githubusercontent.com/words/an-array-of-spanish-words/master/index.json";
  }
  if (language == "german") {
    document.getElementsByClassName("singleLanImg")[0].style.border = 'none';
    document.getElementsByClassName("singleLanImg")[1].style.border = "thick solid " + boderColor;
    document.getElementsByClassName("singleLanImg")[2].style.border = 'none';

    link = "https://raw.githubusercontent.com/stevencaro/quotation/master/german-quotes.json";
    key = "";
    wordsLink = "https://raw.githubusercontent.com/Jonny-exe/Tr/master/GermanWords.json";
  }
  changeSentence();
}

export function checkStyle(color) {
  var fade = document.getElementsByClassName('fade');

  var x = document.getElementsByClassName("keys");
  var bodyStyle = document.body.style;
  var backgroundColor;
  var mainColor;
  var secondaryColor;
  var extraColor;
  var colors = ['white', 'blue', 'dark', 'green'];
  if (color == "white" || colors.includes(color) == false) {
    fade[0].style.visibility = "visible";
    fade[1].style.visibility = 'hidden';
    fade[2].style.visibility = "hidden";
    fade[3].style.visibility = "hidden";

    mainColor = '#000000';
    backgroundColor = '#E0E0E0';
    extraColor = '#ffffff';

    bodyStyle.textShadow = "2px 2px 4px #838383";
    wrSentence.style.textShadow = "2px 2px 4px #838383";
    localStorage.setItem("colorStyle", color);
    for (let i = 0; i < x.length; i++) {
      x[i].style.borderRadius = "4px";
    }
  } else if (color == "dark") {
    fade[0].style.visibility = "hidden";
    fade[1].style.visibility = 'hidden';
    fade[2].style.visibility = "visible";
    fade[3].style.visibility = "hidden";

    mainColor = '#ffffff';
    backgroundColor = '#333333';
    extraColor = '#b1b1b1';

    document.body.style.textShadow = "2px 2px 4px #838383";
    document.getElementById('writeSentence').style.textShadow = "2px 2px 4px #838383";
    for (let i = 0; i < x.length; i++) {
      x[i].style.borderRadius = "5px";
    }
    for (let i = 0; i < button.length; i++) {
      button[i].style.borderRadius = "4px";
    }
  } else if (color == "blue") {
    fade[0].style.visibility = "hidden";
    fade[1].style.visibility = 'visible';
    fade[2].style.visibility = "hidden";
    fade[3].style.visibility = "hidden";

    mainColor = '#3ca7f5';
    backgroundColor = '#f6f4f4';
    extraColor = '#dfdfdf';

    document.body.style.textShadow = "2px 2px 4px #838383";
    document.getElementById('writeSentence').style.textShadow = "2px 2px 4px #838383";
    for (let i = 0; i < x.length; i++) {
      x[i].style.borderRadius = "5px";
    }
    for (let i = 0; i < button.length; i++) {
      button[i].style.borderRadius = "4px";
    }
  } else if (color == "green") {
    fade[0].style.visibility = "hidden";
    fade[1].style.visibility = 'hidden';
    fade[2].style.visibility = "hidden";
    fade[3].style.visibility = "visible";

    mainColor = '#6bff00';
    backgroundColor = '#333333';
    extraColor = '#ffffff';
    document.body.style.textShadow = "none";
    document.getElementById('writeSentence').style.textShadow = "none";
    document.body.style.textDecoration = "none";

    for (let i = 0; i < x.length; i++) {
      x[i].style.borderRadius = "5px";
    }
    for (let i = 0; i < button.length; i++) {
      button[i].style.borderRadius = "4px";
    }
  }

  boderColor = mainColor;
  changeColor = extraColor;
  bodyStyle.backgroundColor = backgroundColor;
  inputEl.style.backgroundColor = backgroundColor;
  loginText.style.backgroundColor = backgroundColor;
  bodyStyle.color = mainColor;
  localStorage.setItem("colorStyle", color);
  changeLanguage();
}

//TODO:Make rankings fith this.An element with position: sticky; is positioned based on the user's scroll position.

export function toggleStyleOptions() {

  if (document.getElementsByClassName('singleLan')[0].style.visibility == 'visible') {
    toggleLanguages();
  }
  if (opLong.style.visibility == 'visible') {
    toggleCheckOptions();
  }
  var showHid = opStyleWhite.style.visibility;
  if (showHid == "hidden") {
    for (let i = 0; i < styleOptions.length; i++) {
      styleOptions[i].style.visibility = "visible";
      document.getElementById("checkOptionsSmall").style.height = "0px";
    }
  } else {
    for (let i = 0; i < styleOptions.length; i++) {
      styleOptions[i].style.visibility = "hidden";
      document.getElementById("checkOptionsSmall").style.height = "100%";
    }
  }
}


export function setTimer() {
  takeTimeOne = Date.now();
  return takeTimeOne;
}

export function cpm() {
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

export function checkError() {

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

export function writeSentence() {
  wrSentence.innerHTML = changeSentenceColor();
}

export function changeSentenceColor() {
  input = inputEl.value;
  part1 = sentence.substring(0, input.length);
  part2 = sentence.substring(input.length, sentence.length);
  part1 = part1.fontcolor(changeColor);
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



export function changeKeyColor(lastKey) {
  //  lastKey = lastKey.toLowerCase();
  document.getElementById(lastKey).style.backgroundColor = "#828282";

  setTimeout(function() {
    document.getElementById(lastKey).style.backgroundColor = "#aaaaaa";
  }, 100);
}


export function tipsFunction() {
  tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tips").innerHTML = "Tips: " + tip;
}

export function finalAutoCheck() {
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
      lastSentence = sentence;
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

export function setCheckTops() {
  guy = username;
  points = cpmResult;
  rank = {
    'name': username,
    'points': points,
    'date': date
  };
  sortTops();
}

export function sortTops() {
  console.log(rank);
  ranking.push(rank);
  console.log(ranking);
  ranking = _.sortBy(ranking, ['points', "name"]);

  console.log(_.sortBy(ranking, ['points']));
  console.log(ranking);
  ranking.reverse();
  delete ranking.slice(maxTop - 1, ranking.length);
  // delete ranking[];
  rankingStr = JSON.stringify(ranking);
  console.log(rankingStr);
  getGist();
}

export function getRanking() {
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
//TODO: make a home for the rankigs
export function setRankingsLink() {
  location.href = "#fade1";
}


export function setCreditsLink() {
  location.href = "TrCredits.html";
}

export function goHome() {
  location.href = "#welcomeText";
}


export function bodyFadeIn() {
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
}

export function optionsFadeIn() {
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

export function optionsBigFadeIn() {
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

export function startTimer() {
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

export function finishTimer() {
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
export function endTimer() {
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

export function keysGoIn() {
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
export function keysGoOut() {
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

export function rotateShow() {
  if (canRotate) {
    TweenLite.to(image, 0.5, {
      rotation: "+=-90"
    });
  }
}

export function rotateHide() {
  if (canRotate) {
    TweenLite.to(image, 0.5, {
      rotation: "+=90"
    });
  }
}

setTimeout(function() {
  startup();
}, 1000);

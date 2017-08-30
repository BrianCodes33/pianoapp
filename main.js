let isOn = false;
let notePlaying = false;
let isStrict = false;
const notes = ['f', 'g', 'a', 'b'];
const keyColors = ['tomato', 'dodgerblue', 'lightseagreen', 'goldenrod']
let sequence = [];
let guessSequence = [];
let idx = 0;
let guessIdx = 0;

window.onload = function() {
  gameInit();
}

function resetGame() {
  sequence = [];
  $('.scoreboard').text('00');
}

function gameInit() {
  console.log('game init');
  $('.on-off button').click(function() {
    let onOff = $('.on-off button').text();
    if (onOff === 'Off') {
      $('.on-off button').text('On');
      $('.on-off button').css('background', 'lightseagreen');
      addtoSequence();
    } else {
      $('.on-off button').text('Off');
      $('.on-off button').css({
        background: 'yellow',
        color: 'black'
      });
      // reset scoreboard and sequence
      resetGame();

    }
  })
  $('.strict-mode button').click(function() {
    let strictMode = $('.strict-mode').text().trim();
    console.log(strictMode);
    if (strictMode === 'Strict Mode') {
      $('.strict-mode button').text('Easy Mode');
      $('.strict-mode button').css('background', 'lightseagreen');
    } else {
      $('.strict-mode button').text('Strict Mode');
      $('.strict-mode button').css({
        background: 'yellow',
        color: 'black'
      });
    }
  })
}

function playSequence(note) {
  // for(var i=0; i<sequence.length; i++) {
  // const randomNote = notes[randomNum];
  const audio = document.querySelector(`audio[data-key=${note}]`);
  audio.play();
  notePlaying = true;
  $('#' + note).css('background', keyColors[notes.indexOf(note)]);
  idx++;
  audio.addEventListener("ended", function() {
    audio.currentTime = 0;
    console.log("ended");
    $('#' + note).css('background', 'none');
    notePlaying = false;
  });
  if (idx >= sequence.length) {
    guessIdx = 0;
    return;

  }
  // else
  setTimeout(() => {
    playSequence(sequence[idx]);
  }, 800)
}

function addtoSequence() {
  if (!notePlaying) {
    const randomNum = Math.floor(Math.random() * notes.length);
    sequence.push(notes[randomNum]);
    console.log(sequence);
    idx = 0;
    playSequence(sequence[0]);
    let scoreboard = Number(document.querySelector('.scoreboard').innerText);
    scoreboard += 1;
    $('.scoreboard').text(scoreboard);
    // change key playing's color
  }
}

function compareGuess(note) {
  console.log('user guessed', note);
  guessSequence.push(note);
  if (sequence[guessIdx] === note) {
    guessIdx++;
    return true;
  } else {
    return false;
  }
}

function wrongAnswer() {
  const audio = document.querySelector(`audio[data-key="wrongAnswer"]`);
  audio.play();
  guessIdx = 0;
  isStrict ? resetGame() : playSequence();
  // replay sequence if easy mode
}

function continueGame() {
  setTimeout(function() {
    guessIdx = 0;
    guessSequence = [];
    addtoSequence();
  }, 900);
}


$(`.key[data-key="f"]`).mousedown(function() {
  // user is guessing the sequence
  console.log('User guess: f');
  // compare with sequence
  const ok = compareGuess("f");
  if (!ok) {
    wrongAnswer();
    return;
  }
  const audio = document.querySelector(`audio[data-key="f"]`);
  audio.play();
  $('#f').css('background', keyColors[0]);
  audio.addEventListener("ended", function() {
    audio.currentTime = 0;
    console.log("ended user guess");
    $('#f').css('background', 'none');
    notePlaying = false;
    // guessIdx++;
    if (guessIdx >= sequence.length) {
      continueGame();
    }
  });
});

// $("#f").mouseout(function() {
//   $('#f').css('background', 'none');
// });

$("#g").mousedown(function() {
  // user is guessing the sequence
  console.log('User guess:g');
  // compare with sequence
  const ok = compareGuess("g");
  if (!ok) {
    wrongAnswer();
    return;
  }

  const audio = document.querySelector(`audio[data-key="g"]`);
  audio.play();
  $('#g').css('background', keyColors[1]);
  audio.addEventListener("ended", function() {
    audio.currentTime = 0;
    console.log("ended user guess");
    $('#g').css('background', 'none');
    notePlaying = false;
    // guessIdx++;
    if (guessIdx >= sequence.length) {
      continueGame();
    }
  });
});


$("#a").mousedown(function() {
  // user is guessing the sequence
  console.log('User guess:');
  // compare with sequence
  const ok = compareGuess("a");
  if (!ok) {
    wrongAnswer();
    return;
  }
  const audio = document.querySelector(`audio[data-key="a"]`);
  audio.play();
  $('#a').css('background', keyColors[2]);
  audio.addEventListener("ended", function() {
    audio.currentTime = 0;
    console.log("ended user guess");
    $('#f').css('background', 'none');
    notePlaying = false;
    // guessIdx++;
    if (guessIdx >= sequence.length) {
      continueGame();
    }
  });
});


$("#b").mousedown(function() {
  // user is guessing the sequence
  console.log('User guess:');
  // compare with sequence
  const ok = compareGuess("b");
  if (!ok) {
    wrongAnswer();
    return;
  }
  const audio = document.querySelector(`audio[data-key="b"]`);
  audio.play();
  $('#b').css('background', keyColors[3]);
  audio.addEventListener("ended", function() {
    audio.currentTime = 0;
    console.log("ended user guess");
    $('#b').css('background', 'none');
    notePlaying = false;
    // guessIdx++;
    if (guessIdx >= sequence.length) {
      continueGame();
    }
  });
});

let isOn = false;
let notePlaying = false;
let isStrict = false;
const notes = ['f', 'g', 'a', 'b'];
const keyColors= ['tomato','dodgerblue','lightseagreen','goldenrod']
let sequence = [];
let guessSequence = [];

window.onload = function() {
  gameInit();
}

function gameInit() {
  console.log('game init');
  $('.on-off button').click(function() {
    let onOff = $('.on-off button').text();
    if (onOff === 'Off') {
      $('.on-off button').text('On');
      $('.on-off button').css('background', 'lightseagreen');
      playSequence();
    } else {
      $('.on-off button').text('Off');
      $('.on-off button').css({
        background: 'yellow',
        color: 'black'
      });
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



function playSequence() {
  if (!notePlaying) {
    const randomNum = Math.floor(Math.random() * notes.length);
    sequence.push(notes[randomNum]);
    console.log(sequence);
    const randomNote = notes[randomNum];
    const audio = document.querySelector(`audio[data-key=${randomNote}]`);
    audio.play();
    notePlaying = true;
    let scoreboard = Number(document.querySelector('.scoreboard').innerText);
    scoreboard += 1;
    $('.scoreboard').text(scoreboard);

    $('#'+randomNote).css('background', keyColors[randomNum]);
    // change key playing's color
    audio.addEventListener("ended", function(){
     audio.currentTime = 0;
     console.log("ended");
     $('#'+randomNote).css('background', 'none');
     notePlaying = false;
    });
  }
  console.log();
}

function compareGuess(note) {
  console.log('user guessed', note);
  guessSequence.push(note);
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === guessSequence[i]) {
      return true;
    } else {
      return false;
    }
  }
}

function wrongAnswer() {
  const audio = document.querySelector(`audio[data-key="wrongAnswer"]`);
  audio.play();
}

function continueGame() {
  setTimeout(playSequence,2500);
}


$(`.key[data-key="f"]`).mousedown(function() {
  // user is guessing the sequence
  console.log('User guess:');
  // compare with sequence
  const ok = compareGuess("f");
  if (!ok) {
    wrongAnswer();
    return;
  }
  const audio = document.querySelector(`audio[data-key="f"]`);
  audio.play();
    $('#f').css('background', keyColors[0]);
    audio.addEventListener("ended", function(){
     audio.currentTime = 0;
     console.log("ended user guess");
     $('#f').css('background', 'none');
     notePlaying = false;
     continueGame();
    });
});

// $("#f").mouseout(function() {
//   $('#f').css('background', 'none');
// });

$("#g").mousedown(function() {
  // user is guessing the sequence
  console.log('User guess:');
  // compare with sequence
  const ok = compareGuess("g");
  if (!ok) {
    wrongAnswer();
    return;
  }

  const audio = document.querySelector(`audio[data-key="g"]`);
  audio.play();
  $('#g').css('background', keyColors[1]);
  audio.addEventListener("ended", function(){
   audio.currentTime = 0;
   console.log("ended user guess");
   $('#g').css('background', 'none');
   notePlaying = false;
   continueGame();
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
  audio.addEventListener("ended", function(){
   audio.currentTime = 0;
   console.log("ended user guess");
   $('#f').css('background', 'none');
   notePlaying = false;
   continueGame();
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
  audio.addEventListener("ended", function(){
   audio.currentTime = 0;
   console.log("ended user guess");
   $('#b').css('background', 'none');
   notePlaying = false;
   continueGame();
  });
});

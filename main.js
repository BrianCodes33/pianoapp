let isOn = false;
let isStrict = false;
const notes = ['f', 'g', 'a', 'b'];
let sequence = [];
let guessSequence = [];

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
        background : 'none',
        color: 'black'
      });

    }
  })
}
gameInit();

var notePlaying = false;
//
// $("audio").on("ended", function(){
//     var audio = $(this).next("audio");
//     if (audio.length) {
//         audio.get(0).play();
//     } else {
//         notePlaying = false;
//     }
// });


function playSequence() {
  if (!notePlaying) {
    const randomNum = Math.floor(Math.random() * notes.length);
    console.log(randomNum);
    sequence.push(notes[randomNum]);
    const randomNote = notes[randomNum];
    const audio = document.querySelector(`audio[data-key=${randomNote}]`);
    audio.play();
    notePlaying = true;
  }

}

function compareGuess(note) {
  console.log('user guessed', note);
  guessSequence.push(note);
  for (let i = 0; i < sequence.length; i++) {
    if(sequence[i] === guessSequence[i]) {
      return true;
    } else {
      return false;
    }
  }
}

$(`.key[data-key="f"]`).mousedown(function() {
  // user is guessing the sequence
  console.log('User guess:');
  // compare with sequence
  const ok = compareGuess("f");
  ok
  const audio = document.querySelector(`audio[data-key="f"]`);
  audio.play();
  $('#f').css('background', 'tomato');
});

$("#f").mouseout(function() {
  $('#f').css('background', 'none');
});

$("#g").mousedown(function() {
  // user is guessing the sequence
  console.log('User guess:');
  // compare with sequence
  compareGuess("g");
  const audio = document.querySelector(`audio[data-key="g"]`);
  audio.play();
  $('#g').css('background', 'dodgerblue');
});

$("#g").mouseout(function() {
  $('#g').css('background', 'none');
});

$("#a").mousedown(function() {
  // user is guessing the sequence
  console.log('User guess:');
  // compare with sequence
  compareGuess("a");
  const audio = document.querySelector(`audio[data-key="a"]`);
  audio.play();
  $('#a').css('background', 'lightseagreen');
});

$("#a").mouseout(function() {
  $('#a').css('background', 'none');
});

$("#b").mousedown(function() {
  // user is guessing the sequence
  console.log('User guess:');
  // compare with sequence
  compareGuess("b");
  const audio = document.querySelector(`audio[data-key="b"]`);
  audio.play();
  $('#b').css('background', 'goldenrod');
});

$("#b").mouseout(function() {
  $('#b').css('background', 'none');
});

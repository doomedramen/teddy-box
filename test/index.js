const RFIDLoop = require('./rfidLoop');
const stream = require('youtube-audio-stream')
const decoder = require('@suldashi/lame').Decoder
const speaker = require('speaker')


let playing = false;
let player = null;

function play() {
  playing = true;
  console.log('playing');
  player = stream('https://www.youtube.com/watch?v=L_jWHffIx5E')
    .pipe(decoder())
    .pipe(new speaker())
}
function stop() {
  playing = false;
  if (player) {
    player.stop();
  }
}

RFIDLoop(function (hasCard) {
  console.log('HERE!!!');


  if (hasCard) {
    if (!playing) {
      play();
    }
  } else {
    stop();
  }



})
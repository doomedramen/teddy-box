const stream = require('youtube-audio-stream')
const decoder = require('@suldashi/lame').Decoder
const speaker = require('speaker')
export default function handler(req, res) {


  const url = JSON.parse(req.body).url;
  console.log('playing', url);


  stream(url)
    .pipe(decoder())
    .pipe(new speaker())


  res.status(200);
}

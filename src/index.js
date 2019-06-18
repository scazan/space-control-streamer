const Stream = require('node-rtsp-stream')

const stream1 = new Stream({
  name: 'name',
  streamUrl: 'rtsp://192.168.0.40/video.pro2',
  // streamUrl: 'rtsp://184.72.239.149/vod/mp4:BigBuckBunny_115k.mov',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
});

const stream2 = new Stream({
  name: 'name',
  streamUrl: 'rtsp://192.168.0.43/video.pro2',
  // streamUrl: 'rtsp://184.72.239.149/vod/mp4:BigBuckBunny_115k.mov',
  wsPort: 9998,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
});

const stream3 = new Stream({
  name: 'name',
  streamUrl: 'rtsp://184.72.239.149/vod/mp4:BigBuckBunny_115k.mov',
  wsPort: 9997,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
});

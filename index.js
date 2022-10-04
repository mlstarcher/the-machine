import emitter from './emitter/index.js';
import clock from './clock/index.js';
import Track from './sequencer/track.js';
console.log('App started');

emitter.once('playing', () => {
  console.log('Sequencer starting');
});

emitter.once('stopped', () => {
  console.log('Sequencer stopped');
});

let track_4 = new Track({
  track_number: 4,
});

//track_4.listen();

clock.run();
setTimeout(() => {
  clock.setTempo(120);
}, 4000);
setTimeout(() => {
  clock.setSwing(60);
}, 4000);
setTimeout(() => {
  clock.stop();
}, 30000);

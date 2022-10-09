import emitter from './emitter/index.js';
import clock from './clock/index.js';
import Track from './track/track.js';
console.log('App started');

emitter.once('playing', () => {
  console.log('Sequencer starting');
});

emitter.once('stopped', () => {
  console.log('Sequencer stopped');
});

let track_4 = new Track({
  track_number: 4,
  callback: () => {
    console.log('this.track_number', this.track_number);
  },
});

let track_4 = new Track({
  track_number: 4,
  callback: () => {
    console.log('this.track_number', this.track_number);
  },
});

track_4.listen();

track_4.activateStep(1);
track_4.activateStep(5);

clock.run();
setTimeout(() => {
  clock.setTempo(120);
}, 4000);
setTimeout(() => {
  track_4.activateStep(7);
}, 4000);
setTimeout(() => {
  clock.stop();
}, 30000);

import emitter from './emitter/index.js'
//var sequencer = require('./sequencer')
// console.log('StepListener: ', StepListener)
// StepListener.on('step', () => {
//   console.log('Stepin')
// })

console.log('App started');

emitter.on('event', () => {
  console.log('an event occurred!');
});
emitter.emit('event');
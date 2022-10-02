import emitter from "./emitter/index.js";
import sequencer from "./sequencer/index.js";
console.log("App started");

emitter.once('playing', () => {
  console.log('Sequencer starting')
})

emitter.once('stopped', () => {
  console.log('Sequencer stopped')
})

emitter.on("step", (step) => {
  console.log(step);
});

sequencer.play();
setTimeout(() => {sequencer.setTempo(120)}, 4000)
setTimeout(() => {sequencer.setSwing(60)}, 4000)
setTimeout(() => {sequencer.stop()}, 30000)


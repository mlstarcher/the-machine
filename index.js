import emitter from "./emitter/index.js";
import sequencer from "./sequencer/index.js";
console.log("App started");

emitter.on("step", () => {
  console.log("steppin");
});

sequencer.play();
// emitter.emit('event');

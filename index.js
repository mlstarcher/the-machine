import emitter from "./emitter/index.js";
import sequencer from "./sequencer/index.js";

emitter.on("step", () => {
  console.log("steppin");
});

sequencer.play();
console.log("App started");

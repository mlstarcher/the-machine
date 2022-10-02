// var StepSequencer = require("./sequencerClass");
import StepSequencer from "./stepSequencer.js";
import sequence from "./sequence.js"
let sequencer = new StepSequencer(4, sequence);

export default sequencer;

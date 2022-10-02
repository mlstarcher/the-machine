// var StepSequencer = require("./sequencerClass");
import StepSequencer from "./msSequencer.js";
import sequence from "./sequence.js"
let sequencer = new StepSequencer(sequence);

export default sequencer;

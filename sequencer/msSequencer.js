import emitter from "../emitter/index.js";
import NanoTimer from "nanotimer";

class StepSequencer {
  constructor(sequence, tempo) {
    this.tempo = tempo;
    this.sequence = sequence || [0, 0, 0, 0];
    this._playing = false;
    this.step = 0;
  }
  play() {
    if (this._playing) return;
    console.log('Playing ran')
    this._playing = true;
    this.clock();
  }
  stop() {
    if (!this._playing) return;
    this._playing = false;ß
  }
  clock() {
    console.log('this._playing', this._playing);
    if (!this._playing) return;
    this.step++;
    if (this.step === this.sequence.length -1) {
      this.step = 0;
    }
    console.log('In sequencer step: ', this.step)
    emitter.emit('step')
    // setTimeout(this.clock, (60 / this.tempo))
    setTimeout(() => {this.clock()}, 2000)
  }
}

export default StepSequencer;
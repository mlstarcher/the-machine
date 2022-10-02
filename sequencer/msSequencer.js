import emitter from "../emitter/index.js";
import NanoTimer from "nanotimer";

class StepSequencer {
  constructor(sequence, tempo) {
    this._tempo = tempo || 120;
    this.sequence = sequence || [0, 0, 0, 0];
    this._playing = false;
    this.step = 0;
    this.interval = Math.floor(60000 / (this._tempo * 2));
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
    if (!this._playing) return;
    this.step++;
    if (this.step === this.sequence.length -1) {
      this.step = 0;
    }
    console.log('In sequencer step: ', this.step)
    emitter.emit('step')
    // setTimeout(this.clock, (60 / this.tempo))
    setTimeout(() => this.clock(), this.interval)
  }
}

export default StepSequencer;
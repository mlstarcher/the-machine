import emitter from "../emitter/index.js";
import NanoTimer from "nanotimer";

class StepSequencer {
  constructor(sequence, tempo) {
    this._tempo = tempo || 120;
    this.sequence = sequence || [0, 0, 0, 0];
    this._playing = false;
    this.step = 0;
    this._swing = 0;
    //this.interval = Math.floor(60000 / (this._tempo * 2));
  }
  play() {
    if (this._playing) return;
    this._playing = true;
    emitter.emit('playing');
    this.clock();
  }
  setTempo(tempo) {
    this._tempo = tempo;
  }
  setSwing(swing) {
    this._swing = swing;
  }
  stop() {
    if (!this._playing) return;
    this._playing = false;
    emitter.emit('stopped')
  }
  clock() {
    let interval = Math.floor(60000 / (this._tempo * 2));
    if (!this._playing) return;
    // if (this.step % 2 === false) {
    //   interval += _swing;
    // }
    this.step++;
    console.log('interval: ', interval)
    if (this.step === this.sequence.length) {
      this.step = 0;
    }
    emitter.emit('step', this.step)
    setTimeout(() => this.clock(), interval)
  }
}

export default StepSequencer;
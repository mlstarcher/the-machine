import NanoTimer from "nanotimer";
import emitter from "../emitter/index.js";

class StepSequencer {
  constructor(tempo, division, sequence) {
    this.tempo = tempo || 120;
    this.division = division;
    this.sequence = sequence || [];
    this.step = 0;
    this.timer = new NanoTimer();
    this.timeout = Math.floor((60 / (this.tempo * this.division)) * 10e8) + 'n';
    this._playing = false;
  }
  play() {
    if (this._playing) return;
    this.step = 0;
    this._playing = true;
    loop.call(this);
  }
  loop() {
    var self = this;
    self.timer.setTimeout(function () {
      advance.call(self);
      if (self._playing ) loop.call(self);
    }, '', self.timeout);
  }
  advance() {
    // this.emit('' + this.step, this.sequence[this.step]);
    this.emit('step');
    this.step = (this.step + 1);
    if (this.step === this.sequence.length) this.step = 0;
  }
  resume() {
    if (this._playing) return;
    this._playing = true;
    loop.call(this);
  }
  stop() {
    if (!this._playing) return;
    this._playing = false;
    this.timer.clearTimeout();
  }
  setTempo(tempo) {
    if (typeof tempo !== 'number') throw new TypeError('Tempo must be a number');
    this.tempo = tempo;
    this.timeout = Math.floor((60 / (this.tempo * this.division)) * 10e8) + 'n';
  }
  setSequence(division, sequence) {
    if (typeof division !== 'number') throw new TypeError('Division must be a number');
    if (!(sequence instanceof Array)) throw new TypeError('Sequence must be an array');

    this.division = division;
    this.sequence = sequence;
    this.timeout = Math.floor((60 / (this.tempo * this.division)) * 10e8) + 'n';
  }
  //emitter.call(this);
}

export default StepSequencer;
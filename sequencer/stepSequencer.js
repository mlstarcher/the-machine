import NanoTimer = require("nanotimer");
import emitter from "../emitter";


class StepSequencer {
  constructor(tempo, division, sequence) {
    this.tempo = tempo || 120;
    this.division = division;
    this.sequence = sequence;
    this.step = 0;
    this.timer = new NanoTimer();
    this.timeout = Math.floor((60 / (this.tempo * this.division)) * 10e8) + 'n';
    this._playing = false;
    // emitter.call(this);
  }
}
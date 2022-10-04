//import emitter from '../emitter/index.js';
import { EventEmitter } from 'node:events';
import NanoTimer from 'nanotimer';

class Clock extends EventEmitter {
  constructor(tempo, sequence_length) {
    super();
    this._tempo = tempo || 120;
    this._sequence_length = sequence_length || 16;
    this._running = false;
    this.step = 0;
    this._swing = 0;
  }
  run() {
    if (this._running) return;
    this._running = true;
    this.emit('playing');
    this.clock();
  }
  setTempo(tempo) {
    this._tempo = tempo;
  }
  setSwing(swing) {
    this._swing = swing;
  }
  stop() {
    if (!this._running) return;
    this._running = false;
    this.emit('stopped');
  }
  clock() {
    let interval = Math.floor(60000 / (this._tempo * 2));
    if (!this._running) return;
    // if (this.step % 2 === false) {
    //   interval += _swing;
    // }
    this.step++;
    if (this.step === this._sequence_length) {
      this.step = 0;
    }
    console.log('Clock is on step ', this.step);
    this.emit('advance', this.step);
    setTimeout(() => this.clock(), interval);
  }
}

export default Clock;

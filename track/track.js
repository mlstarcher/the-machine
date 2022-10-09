import emitter from '../emitter/index.js';

class Track {
  constructor(config) {
    this._track_number = config.track_number || 1;
    this.step_number = config.step_number || 1;
    this.callback = () => {
      console.log('Track ' + this._track_number + ' has no callback assigned');
    };
    this._sequence = config.sequence || [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    //this.listen();
  }
  listen() {
    emitter.on('advance', (step_number) => {
      if (this._sequence[step_number] != 1) return;
      this.callback(this._track_number, step_number);
    });
  }
  setSequence(sequence) {
    this._sequence = sequence;
  }
  incrementSequence() {
    if (this._sequence.length === 16) return;
    this._sequence.push(0);
  }
  decrementSequence() {
    if (this._sequence.length === 1) return;
    this._sequence.pop();
  }
  activateStep(step_number) {
    this._sequence[step_number] = 1;
  }
  deactivateStep() {
    this._sequence[step_number] = 0;
  }
  getTrackNumber() {
    return this._track_number;
  }
}

export default Track;

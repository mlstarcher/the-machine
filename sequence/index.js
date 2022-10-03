class Step {
  constructor(callback) {
    this._sequence = [0, 0, 0, 0, 0, 0, 0, 0]
  }
  process(stepNumber) {
    for (var i = 0; i < this._sequence.length; i++) {
      if (_sequence[i] === 1) {
        callback(stepNumber, i)
      }
    }

  }
}
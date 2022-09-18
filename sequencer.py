import time


class Sequencer:
    def __init__(self):
        self._tempo = 100
        self.status = 'stop'
        self._playing = False
        self.step = 0
        self.counter = 0
        self.sequence = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 0],
            [3, 0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0, 0],
            [5, 0, 0, 0, 0, 0, 0, 0],
            [6, 0, 0, 0, 0, 0, 0, 0],
            [7, 0, 0, 0, 0, 0, 0, 0],
        ]

    def play(self):
        if self._playing:
            return
        self._playing = True
        self.clock()

    def stop(self):
        if not self._playing:
            return
        self._playing = False

    def setTempo(self, bpm):
        self._tempo = bpm

    def clock(self):
        if self._playing and self.counter < 10:
            print(self.step)
            self.step += 1
            if self.step == len(self.sequence) - 1:
                self.step = 0
            self.counter += 1
            time.sleep((60 / self._tempo) - time.time() * 8 % 1 / 8)
            self.clock()
        else:
            print('stopped')
            self.step = 0


looper = Sequencer()
looper.play()

# time.sleep(5)
print('stopping')
looper.stop()

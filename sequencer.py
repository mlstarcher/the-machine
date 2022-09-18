import time

# tempo = 100
# beat_length = 60 / tempo

# print(beat_length)
# def clock():
#     counter = 0
#     time.sleep(time.time() * 8 % 1 / 8) # enable to sync clock for demo
#     while counter < 10:
#         counter += 1
#         print(time.time())
#         time.sleep(beat_length - time.time() * 8 % 1 / 8)

# def setTempo(bpm):
#   tempo = bpm

class Sequencer:
  def __init__(self):
    self.tempo = 100
    self.status = 'stop'
    self._beat_length = 60 / self.tempo
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
  def clock(self):
    counter = 0
    step = 0
    time.sleep(time.time() * 8 % 1 / 8) # resync clock every loop
    while counter < 8:
        if self.status == 'stop':
          break
        counter += 1
        if step == 7:
          step = 0
        else:
          step += 1
        print(time.time())
        print(self.sequence[step])
        time.sleep(self._beat_length - time.time() * 8 % 1 / 8)
  def play(self):
    self.status = 'play'
    self.clock()

looper = Sequencer()
looper.play()
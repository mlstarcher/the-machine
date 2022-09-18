import time

tempo = 100
beat_length = 60 / tempo

print(beat_length)
def drummer():
    counter = 0
    time.sleep(time.time() * 8 % 1 / 8) # enable to sync clock for demo
    while counter < 10:
        counter += 1
        print(time.time())
        time.sleep(beat_length - time.time() * 8 % 1 / 8)

drummer()
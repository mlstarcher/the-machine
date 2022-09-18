import time

def drummer():
    counter = 0
    # time.sleep(time.time() * 8 % 1 / 8) # enable to sync clock for demo
    while counter < 60 * 8:
        counter += 1
        print(time.time())
        time.sleep(.125 - time.time() * 8 % 1 / 8)

drummer()
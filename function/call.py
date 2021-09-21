import requests
import sched, time
import os
 
ip_x="localhost"
ip_x2="localhost"
ip_x3="localhost"



s = sched.scheduler(time.time, time.sleep)
def do_something(sc): 
    print("Doing stuff...")
    # do your stuff
    # Request the HTML for this web page:
    response = requests.get(f"http://{ip_x}:5000/data")
    with open("response.txt", "w", encoding="utf-8") as f:
        f.write(response.text)

    response = requests.get(f"http://{ip_x2}:5001/data")
    with open("response.txt", "w", encoding="utf-8") as f:
        f.write(response.text)

    response = requests.get(f"http://{ip_x3}:5002/data")
    with open("response.txt", "w", encoding="utf-8") as f:
        f.write(response.text)


    s.enter(10, 1, do_something, (sc,))

    

s.enter(10, 1, do_something, (s,))
s.run()
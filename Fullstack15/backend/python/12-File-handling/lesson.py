# os  == operating system
# sys == system

import os

FILENAME = "file.txt"

if os.path.exists(FILENAME):
    print("File already exists")
else:
    file = open(FILENAME, "x")
    file.close()
    print("File created")


with open(FILENAME, 'w') as file:
    print("File opened to write")
    lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    file.write(lorem)
    file.close()


with open(FILENAME) as file:
    print("File opened to read")
    print(file.read())
    file.close()

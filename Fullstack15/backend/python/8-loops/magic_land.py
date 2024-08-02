import random
# GAME MAGIC LAND

# [word, explanation]
words = [
    ["Banana", "A yellow fruit that is long and curved"],
    ["Apple", "A round fruit that is red or green"],
    ["Table", "A piece of furniture with a flat top and one or more legs"],
    ["Chair", "A separate seat for one person, typically with a back and four legs"],
    ["Television", "A system for converting visual images (with sound) into electrical signals, transmitting them by radio or other means, and displaying them electronically on a screen"],
    ["Computer", "An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program"],
    ["Python", "A high-level programming language mostly for backend"],
    ["JavaScript", "A high-level programming language mostly for frontend"],
]
TARGET = random.choice(words)
WORD = TARGET[0]
EXPLANATION = TARGET[1]


def show_msg(msg:str) -> None:
    print("----------------------------------------")
    print(msg)
    print("----------------------------------------")

# You have 7 lives
# You can not enter the same letter twice (it will show error message)
# You can only enter one word or letter
# If wrong data-type entered, don't subtract from lives and let it start over



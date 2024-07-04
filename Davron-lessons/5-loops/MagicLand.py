import random
QUESTIONS = {
    "question1": {
        "text": "Apple",
        "explanation": "A round fruit that is sweet and juicy.",
    },
    "question2": {
        "text": "Banana",
        "explanation": "A long yellow fruit that is sweet and delicious.",
    },
    "question3": {
        "text": "Cherry",
        "explanation": "A small round fruit that is red and sweet.",
    },
    "question4": {
        "text": "Car",
        "explanation": "A vehicle that has four wheels and an engine.",
    },
    "question5": {
        "text": "Bike",
        "explanation": "A two-wheeled vehicle that is powered by pedalling.",
    },
    "question6": {
        "text": "Bus",
        "explanation": "A large vehicle that is used to transport people.",
    },
    "question7": {
        "text": "Dog",
        "explanation": "A domesticated animal that is known for its loyalty.",
    },
    "question8": {
        "text": "Cat",
        "explanation": "A domesticated animal that is known for its independence.",
    },
    "question9": {
        "text": "Bird",
        "explanation": "A small animal that has feathers and can fly.",
    },
    "question10": {
        "text": "Fish",
        "explanation": "An animal that lives in water and has fins.",
    }
}

random_int = random.randrange(len(QUESTIONS.keys()))
random_key = list(QUESTIONS.keys())[random_int]
QUESTION = QUESTIONS[random_key]

TEXT = QUESTION["text"]
EXPLANATION = QUESTION["explanation"]


lives = random.randrange(2, 6)
HIDDEN_TEXT = "_" * len(TEXT)
LETTER_POOL = ""


def show_text(text: str) -> None:
    print("==========================")
    print(text)
    print("==========================")


while lives > 0:
    if "_" not in HIDDEN_TEXT:
        show_text(f"CONGRATULATIONS! You have guessed the text - {TEXT}. You have {lives} lives left.")
        break
    
    letter = input(f"""
EXPLANATION: {EXPLANATION}
--------------------------
You have {lives} lives
--------------------------
Word: {HIDDEN_TEXT}
--------------------------
Guess a letter: """).lower()


    if letter in LETTER_POOL:
        show_text("You have already guessed this letter.")
        continue
    else:
        LETTER_POOL += letter

    if letter.isalpha() and len(letter) == 1:
        if letter in TEXT.lower():
            show_text("CORRECT! Continue...")
            new_text = ""
            for i in range(len(TEXT)):
                if letter == TEXT[i].lower():
                    new_text += TEXT[i]
                else:
                    new_text += HIDDEN_TEXT[i]
            HIDDEN_TEXT = new_text
        else:
            lives -= 1
            show_text("WRONG! Try again...")
    elif letter.isalpha() and len(letter) > 1:
        if letter == TEXT.lower():
            show_text(f"CONGRATULATIONS! You have guessed the text - {TEXT}. You have {lives} lives left.")
            break
        else:
            lives -= 1
            show_text("WRONG! Try again...")
    else:
        show_text("Please enter a valid letter.")
        continue


if lives == 0:
    show_text(f"GAME OVER! The text was - {TEXT}")





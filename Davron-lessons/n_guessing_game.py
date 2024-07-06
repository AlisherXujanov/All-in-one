# *-----------------------------------------------------------
# !------------------Game "GUESS THE NUMBER"------------------
# *-----------------------------------------------------------
import random

LIVES = 5
RANDOM_NUMBER = random.randint(1, 100)


def show_message(text: str) -> None:
    print("=====================================")
    print(text)
    print("=====================================")


def ask_to_play_again():
    again = input("Would you like to play again? (yes/no) (y/n): ")
    if again == 'y' or again == 'yes':
        print("-----------------------------------------")
        print("-----------------------------------------")
        print("-----------------------------------------")
        print("Great! Let's play again! 👍")
        print("-----------------------------------------")
        print("-----------------------------------------")
        print("-----------------------------------------")
        return True
    else:
        print("GOODBYE! Thank you for playing!")
        return False

FIRST_TIME = True
NUMBERS_POOL = []

while LIVES > 0:
    if FIRST_TIME:
        answer = input("Guess the number between 1 and 100: ")
        FIRST_TIME = False
    else:
        answer = input("Guess another number again: ")

    if answer.isnumeric():
        guessed_number = int(answer)

        if guessed_number in NUMBERS_POOL:
            show_message("You have already guessed this number!")
            continue
        else:
            NUMBERS_POOL.append(guessed_number)

        if guessed_number > RANDOM_NUMBER:  # When TOO HIGH
            LIVES -= 1
            if LIVES > 0:
                show_message(f"TOO HIGH! Try again!  You have {LIVES} lives left.")
            else:
                show_message(f"GAME OVER! The number was {RANDOM_NUMBER}")
                if ask_to_play_again():
                    LIVES = 5
                    RANDOM_NUMBER = random.randint(1, 100)

        elif guessed_number < RANDOM_NUMBER:  # When TOO LOW
            LIVES -= 1
            if LIVES > 0:
                show_message(f"TOO LOW! Try again!  You have {LIVES} lives left.")
            else:
                show_message(f"GAME OVER! The number was {RANDOM_NUMBER}")
                if ask_to_play_again():
                    LIVES = 5
                    RANDOM_NUMBER = random.randint(1, 100)

        else:  # When CORRECT
            show_message("Congratulations! You won!")

            if ask_to_play_again():
                LIVES = 5
                RANDOM_NUMBER = random.randint(1, 100)
            else:
                break

    else:
        show_message("Please enter a valid number")


# GAME MAGIC LAND
# You have 7 lives
# You can not enter the same letter twice (it will show error message)
# You can only enter one word or letter
# If wrong data-type entered, don't subtract from lives and let it start over
import random


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
LIVES = 7

# APPLE  =>  _ _ _ _ _
HIDDEN_WORD = "_" * len(WORD)
ALREADY_GUESSED_LETTERS_OR_WORDS = []


def restart_game():
    target = random.choice(words)
    word = target[0]
    exp = target[1]
    lives = 7
    hidden_word = "_" * len(word)
    return target, word, exp, lives, hidden_word


def show_msg(msg:str) -> None:
    print("----------------------------------------")
    print(msg)
    print("----------------------------------------")
    
print("""
Welcome to Magic Land Game 🔥
In this game, you will guess the word.
In total, you have 7 lives.
You can not enter the same letter twice.
You can only enter one word or letter.
If wrong data-type entered, don't subtract from lives and let it start over.
""")




while LIVES > 0:
    answer = input(f"""
-----------------------
EXPLANATION: {EXPLANATION}
-----------------------
Current WORD: {HIDDEN_WORD}
-----------------------
LIVES: {LIVES}
-----------------------
Enter a word or letter:  """).strip().lower()



    if answer in ALREADY_GUESSED_LETTERS_OR_WORDS:
        show_msg("""
💥💥💥💥💥
You have already guessed this letter or word.
Please try another one. 
💥💥💥💥💥
""")
        continue
    else:
        ALREADY_GUESSED_LETTERS_OR_WORDS.append(answer)


    if len(answer) == 1:
        if answer.isalpha():
            if answer in WORD.lower():
                # OPEN IT from inside HIDDEN_WORD
                # APPLE  =>  p   =>  _ P P _ _
                new_word = ''
                for i in range(len(WORD)):
                    if WORD[i].lower() == answer:
                        new_word += WORD[i]
                    else:
                        new_word += HIDDEN_WORD[i]
                HIDDEN_WORD = new_word
                show_msg(f"✅✅✅ Correct answer! ✅✅✅")
                
                if "_" not in HIDDEN_WORD:
                    show_msg("""🎉🎉🎉 YOU WON! 🎉🎉🎉""")            
                    again = input("Do you want to play again? (y/n): ").strip().lower()
                    if 'y' in again or 'yes' in again:
                        TARGET, WORD, EXPLANATION, LIVES, HIDDEN_WORD = restart_game()
                        ALREADY_GUESSED_LETTERS_OR_WORDS = []
                        continue
                    else:
                        print("Goodbye!")
                        break
            else:
                LIVES -= 1
                show_msg(f"❌❌❌ Wrong answer! ❌❌❌ Try again ...")

                if LIVES == 0:
                    print(f"YOU LOST! 🥲")
                    print(f"The word was: {WORD}")
                    print("-----------------------------------------------------")
                    again = input("Do you want to play again? (y/n): ").strip().lower()
                    if 'y' in again or 'yes' in again:
                        TARGET, WORD, EXPLANATION, LIVES, HIDDEN_WORD = restart_game()
                        ALREADY_GUESSED_LETTERS_OR_WORDS = []
                        continue
                    else:
                        print("Goodbye!")
                        break
        else:
            show_msg("❌❌❌ WRONG ANSWER! ❌❌❌")
    elif answer == WORD.lower():
        show_msg("""🎉🎉🎉 YOU WON! 🎉🎉🎉""")
        break
    else:
        show_msg("❌❌❌ WRONG ANSWER! ❌❌❌")




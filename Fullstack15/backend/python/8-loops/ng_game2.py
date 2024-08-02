# Number Guessing Game 2
# This game includes only computer to guess a number that you think of
# Each time computer show a message that includes a guessed-number
# We should confirm saying it is less or more or correct

lives = 7


def print_message(msg: str) -> None:
    print("======= ======= ======= ======= ======= ")
    print(msg)
    print("======= ======= ======= ======= ======= ")


print("Hello, welcome to the Number Guessing Game!!!")
print("---------------------------------------")
print_message("Think of a number from 1 to 100 and I will guess it.")
print("---------------------------------------")

start = 1
end = 100



while lives > 0:
    MIDDLE = (start+end) // 2
    print_message(f"Is your number {MIDDLE}?")

    answer = input(f"""
Enter: 
    - l or less if your number is less than {MIDDLE}
    - m or more if your number is more than {MIDDLE}
    - c or correct if I guessed your number:  """).lower()

    if answer == 'c' or answer == 'correct':
        print("I am very clever!!!")
        print_message(f"Your number is {MIDDLE}")
        print("----------------------------------------")
        break
    else:
        lives -= 1

        if lives == 0:
            print_message(f"You are lier!!! 😒")
            break    
        
        if answer == 'l' or answer == 'less':
            end = MIDDLE - 1
        else:
            start = MIDDLE + 1
        print_message(f"I have {lives} lives left.")    
        print("Let me try again....🥲")
        print("----------------------------------------")



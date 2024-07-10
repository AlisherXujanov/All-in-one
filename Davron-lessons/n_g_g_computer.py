LIVES = 7

start = 1
end = 100


def show_message(text: str) -> None:
    print("============================================")
    print(text)
    print("============================================")


found = False
while LIVES > 0 and not found:
    pointer = (start+end)//2  # MIDDLE POINTER
    show_message(f"Is your number {pointer}?🤔😮")

    print("Less or l || More or m ||  Correct or c")
    valid = False
    while not valid:
        our_answer = input("Enter your answer: ").lower()
        if our_answer == 'less' or our_answer == 'l':
            valid = True
            end = pointer
            LIVES -= 1
        elif our_answer == 'more' or our_answer == 'm':
            valid = True
            start = pointer
            LIVES -= 1
        elif our_answer == 'correct' or our_answer == 'c':
            valid = True
            show_message(f"""Wohoo! I guessed your number {
                         pointer} in {8-LIVES} tries.""")
            found = True
            break
        else:
            valid = False
            show_message("Invalid input. Please enter a valid input.")


if LIVES == 0 and not found:
    show_message("I lost 😒! You cheated!")

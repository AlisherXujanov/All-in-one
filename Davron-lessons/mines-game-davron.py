import random
alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
counter = 2


def show_text(text: str) -> None:
    print("============================================")
    print(text)
    print("============================================")


def topRows(rows: int) -> str:
    numbers = "".join([f'║   {i+1}   ' for i in range(rows-1)])
    return f"╔═══════╦{('═══════╦' * (rows - 1))}═══════╗\n" \
        f"║  😮   {numbers}║   {rows}   ║\n"


def middleRows(rows: int, letter: str) -> str:
    return f"╠═══════╬{('═══════╬' * (rows - 1))}═══════╣\n" \
        f"║   {letter}   {('║   *   ' * (rows - 1))}║   *   ║\n"


def bottomRows(rows: int, letter: str) -> str:
    return f"╠═══════╬{('═══════╬' * (rows - 1))}═══════╣\n" \
        f"║   {letter}   {('║   *   ' * (rows - 1))}║   *   ║\n" \
        f"╚═══════╩{('═══════╩' * (rows - 1))}═══════╝\n"


def createTable(rows: int, col: int) -> None:
    if rows != 0 and col != 0:
        middle_rows = "".join([middleRows(rows, alpha[i])
                              for i in range(rows-1)])
        print(
            topRows(rows) + middle_rows + bottomRows(rows, alpha[:rows][-1])
        )
    else:
        show_text("Please enter a valid number!!!!!!")


LIVE = 1
MONEY = 10
rows_and_cells = []
BOMBS_LIST = []

while LIVE > 0:
    print("=========================================================================")
    print("=========================================================================")
    print("========================= WELCOME TO GAME MINES =========================")
    print("=========================================================================")
    print("=========================================================================")
    print("Rules:")
    print("You can choose number of rows, cols and number of MINES in game")
    print("You have 1 live ❤️  and 10$ dollars 💵 !!")
    print("You must select cells of type (ex: A1).")
    print("You will have more money if it is an empty cell and not a 💣!")
    print("The more mines the less empty spaces so the more change to win more money")
    print("BUT, if you step on a mine and you will lose. That's all!")
    print("Good luck in the game!")
    user_name = input("Enter your name: ")
    desired_size_of_table = input(
        "What size of table would you like to have? (ex: 4x4 to 9x9): ")

    for u in desired_size_of_table:
        if u.isnumeric():
            rows_and_cells.append(int(u))

    if len(rows_and_cells) >= 2:
        rows = rows_and_cells[0]
        cols = rows_and_cells[-1]

        MINES = input(
            f"Select the number of mines (select from 1 to {(rows*cols)-1}): ")
        print("==========================================")
        print(f"""Hi {user_name} you have only
- {LIVE} life ❤️ !!
- ${MONEY} 💵 !!
- {MINES} mines 💣 in table !!
""")

        BOMBS_LIST = [
            alpha[:cols][random.randrange(cols)] +
            str(random.randint(1, cols))
            for _ in range(int(MINES))
        ]
        print("==========================================")
        print(f"This is table of mines 👇👇👇 , lets play now 😆!!")
        createTable(rows, cols)
    else:
        show_text("Invalid input. Please enter table size in the format 'NxM'.")
    break


def show_wrong_format_text(cols):
    show_text(
        f"WRONG FORMAT! Please enter a cell in the range of 'A1' to '{alpha[cols-1]}{cols}'.")


def ask():
    print("==========================================")
    rows = rows_and_cells[0]
    cols = rows_and_cells[-1]
    while True:
        answer = input("Choose a cell  (ex:  A2, C5 ...): ".upper())
        if len(answer) == 2:
            a_rows, a_cols = answer.upper()
            if a_rows.isalpha() and a_cols.isnumeric():
                if int(a_cols) > cols:
                    show_wrong_format_text(cols)
                elif a_rows not in alpha[:rows]:
                    show_wrong_format_text(cols)
                else:
                    return answer
            else:
                show_wrong_format_text(cols)
        else:
            show_wrong_format_text(cols)


while True:
    BOMBS_LIST2 = []
    for b in BOMBS_LIST:
        for b2 in BOMBS_LIST:
            if b not in BOMBS_LIST2:
                BOMBS_LIST2.append(b)

    print("BOMB LIST: ", BOMBS_LIST2)

    if ask() in BOMBS_LIST:
        print("GAME OVER! YOU LOSE! 💥💥💥")
        LIVE = 0
        MONEY = 0
        break
    else:
        rows = rows_and_cells[0]
        cols = rows_and_cells[-1]
        print("GOOD JOB! YOU WIN! 💵💵💵")
        if (int(rows)*int(cols)) - int(MINES) == 1:
            MONEY *= (MONEY * MONEY)
            print(f"And now you have {MONEY} dollars!")
        elif (int(rows)*int(cols)) - int(MINES) < 6 and (int(rows)*int(cols)) - int(MINES) > 2:
            MONEY *= MONEY
            print(f"And now you have {MONEY} dollars!")
        elif (int(rows)*int(cols)) - int(MINES) == 10:
            MONEY += MONEY
            print(f"And now you have {MONEY} dollars!")
        elif (int(rows)*int(cols)) - int(MINES) > 20:
            MONEY += 5
            print(f"And now you have {MONEY} dollars!")
        else:
            print("ERROR!")

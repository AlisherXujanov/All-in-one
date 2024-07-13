alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"
counter = 2



def show_text(text: str) -> None:
    print("============================================")
    print(text)
    print("============================================")


def topRows(r):
    return f"╔═══════╦{('═══════╦' * (r - 1))}═══════╗\n" \
        f"║       {('║       ' * (r - 1))}║       ║\n"


def middleRows(r):
    return f"╠═══════╬{('═══════╬' * (r - 1))}═══════╣\n" \
        f"║       {('║   x   ' * (r - 1))}║   x   ║\n"


def bottomRows(r):
    return f"╠═══════╬{('═══════╬' * (r - 1))}═══════╣\n" \
        f"║       {('║   x   ' * (r - 1))}║   x   ║\n" \
        f"╚═══════╩{('═══════╩' * (r - 1))}═══════╝\n"


def createTable(rows: int, col: int) -> None:
    if rows != 0 and col != 0:
        print(topRows(rows) + (middleRows(rows) * (col-1)) + bottomRows(rows))
    else:
        show_text("Please enter a valid number!!!!!!")


LIVE = 1
MONEY = 10
while LIVE > 0:
    print("=========================================================================")
    print("=========================================================================")
    print("========================= WELCOME TO GAME MINES =========================")
    print("=========================================================================")
    print("=========================================================================")
    print("Rules:")
    print("You can choose number of rows, cols and number of mines in game")
    print("You have 1 live ❤️  and 10$ dollars 💵 !!")
    print("You must select cells of type (ex: A1).")
    print("You will have more money if it is an empty cell and not a 💣!")
    print("The more mines the less empty spaces so the more change to win more money")
    print("BUT, if you step on a mine and you will lose. That's all!")
    print("Good luck in the game!")
    name = input("Enter your name: ")
    answer1 = input("What size of table would you like to have? (ex: 4x4 to 9x9): ")

    res = []

    for u in answer1:
        if u.isnumeric():
            res.append(u)

    if len(res) >= 2:
        rows = int("".join(res[0]))
        col = int(res[-1])

        mines = input(
            f"Select the number of mines (select from 1 to {(rows*col)-5}): ")
        print("==========================================")
        print(f"""Hi {name} you have only 
- {LIVE} life ❤️ !!
- ${MONEY} 💵 !!
- {mines} mines 💣 in table !!
""")
        print("==========================================")
        print(f"This is table of mines 👇👇👇 , lets play now 😆!!")
        createTable(rows, col)
    else:
        show_text("Invalid input. Please enter table size in the format 'NxM'.")
    break

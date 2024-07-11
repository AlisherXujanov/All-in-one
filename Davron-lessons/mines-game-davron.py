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


LIVES = 7
MONEY = 10
while LIVES > 0:
    print("=========================================================================")
    print("=========================================================================")
    print("========================= WELCOME TO GAME MINES =========================")
    print("=========================================================================")
    print("=========================================================================")
    name = input("Enter your name:")
    answer1 = input("What table do you want (ex: 4x4 to 9x9): ")

    res = []

    for u in answer1:
        if u.isnumeric():
            res.append(u)

    if len(res) >= 2:
        rows = int("".join(res[0]))
        col = int(res[-1])

        mines = input(
            f"Select the number of minutes (select from 1 to {(rows*col)-5})")
        print(f"HI {name} wlcome to mines game 🎉!!")
        print("==========================================")
        print(f"{name} you have {LIVES} lives ❤️!!")
        print("==========================================")
        print(f"And you have {MONEY} money 💵!!")
        print("==========================================")
        print(f"And you have {mines} mines 💣!!")
        print("==========================================")
        print(f"And you have table mines 👇👇👇!!")
        createTable(rows, col)

    else:
        show_text("Invalid input. Please enter table size in the format 'NxM'.")
        break

# 5x5

# |-----------------------------------
# |       1     2     3     4     5  |
# |    |-----------------------------|
# | A  |  x  |  x  |  x  |  x  |  x  |
# |    |-----------------------------|
# | B  |  x  |  x  |  x  |  x  |  x  |
# |    |-----------------------------|
# | C  |  x  |  x  |  x  |  x  |  x  |
# |    |-----------------------------|
# | D  |  x  |  x  |  x  |  x  |  x  |
# |    |-----------------------------|
# | E  |  x  |  x  |  x  |  x  |  x  |
# |-----------------------------------



def print_board(board):
    print("  | 1 | 2 | 3 | 4 | 5 |")
    print("  |---|---|---|---|---|")
    for i in range(5):
        print(f"{chr(65+i)} |", end="")
        for j in range(5):
            print(f" {board[i][j]} |", end="")
        print("\n  |---|---|---|---|---|")
        
        
def get_user_input():
    while True:
        user_input = input("Enter the position (e.g. A1): ")
        if len(user_input) != 2:
            print("Invalid input. Please enter a letter and a number.")
            continue
        row = user_input[0].upper()
        col = user_input[1]
        if row not in "ABCDE" or col not in "12345":
            print("Invalid input. Please enter a letter from A to E and a number from 1 to 5.")
            continue
        return row, int(col)
    
    
def main():
    board = [["x" for _ in range(5)] for _ in range(5)]
    print_board(board)
    
    for _ in range(5):
        row, col = get_user_input()
        row_dict = {"A": 0, "B": 1, "C": 2, "D": 3, "E": 4}
        board[row_dict[row]][col-1] = "o"
        
        print_board(board)
        
    print("Game over!")
    
    
main()
# Multiplication table using while loop
def multiplication_table():
    user_input = int(input("Enter a positive integer: "))

    # Input validation
    if user_input <= 0:
        print("Invalid input. Please enter a positive integer!")
        return

    multiplication_table = []

    i = 1
    while i < 11:
        multiplication_table.append(user_input * i)
        i += 1

    print(", ".join(map(str, multiplication_table)))


multiplication_table()

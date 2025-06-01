# Multiplication table using for loop
def multiplication_table():
    user_input = int(input("Enter a positive integer: "))

    # Input validation
    if user_input <= 0:
        print("Invalid input. Please enter a positive integer!")
        return

    multiplication_table = []

    for i in range(1, 11):
        multiplication_table.append(user_input * i)

    print(", ".join(map(str, multiplication_table)))


multiplication_table()

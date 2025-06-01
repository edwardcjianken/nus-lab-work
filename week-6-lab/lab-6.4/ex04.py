# Prime Factorisation

num = int(input("Enter a positive integer greater than 1: "))

if num <= 1:
    print("Invalid input. Please try again.")
else:
    factor = 2
    print("Prime Factors:")

    while num > 1:
        if num % factor == 0:
            print(factor)
            num //= factor
        else:
            factor += 1

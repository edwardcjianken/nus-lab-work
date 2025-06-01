# Pythagoras' Theorem: Right-angle triangle calculations

# a = float(input("Enter side a: "))
# b = float(input("Enter side b: "))

# hypotenuse = (a**2 + b**2) ** 0.5

# print(f"Hypotenuse is: {hypotenuse:.2f}")

# a = float(input("Enter side a: "))
# hypotenuse = float(input("Enter hypotenuse: "))

# b = (hypotenuse**2 - a**2) ** 0.5

# print(f"Side b is: {b:.2f}")

# b = float(input("Enter side b: "))
# hypotenuse = float(input("Enter hypotenuse: "))

# a = (hypotenuse**2 - b**2) ** 0.5

# print(f"Side a is: {a:.2f}")

# Pythagoras' Theorem: Right-angle triangle calculations (enhanced with control flow)

flag = True

while flag:
    print(
        """
    Which side would you like to calculate?
      Enter 1 for Hypotenuse (c)
      Enter 2 for Side a
      Enter 3 for Side b
    """
    )

    choice = int(input("Enter your choice (1, 2, or 3): "))

    if choice == 1:
        a = float(input("Enter side a: "))
        b = float(input("Enter side b: "))
        c = (a**2 + b**2) ** 0.5
        print(f"Hyptenuse is: {c:.2f}")
        flag = False

    elif choice == 2:
        b = float(input("Enter side b: "))
        c = float(input("Enter hypotenuse: "))

        if c > b:
            a = (c**2 - b**2) ** 0.5
            print(f"Side a is: {a:.2f}")
            flag = False
        else:
            print("Invalid input. Hypotenuse need to be greater than b.")

    elif choice == 3:
        a = float(input("Enter side a: "))
        c = float(input("Enter hypotenuse: "))

        if c > a:
            b = (c**2 - a**2) ** 0.5
            print(f"Side b is: {b:.2f}")
            flag = False
        else:
            print("Invalid input. Hypotenuse need to be greater than a.")

    else:
        print("Invalid input. Please try again.")

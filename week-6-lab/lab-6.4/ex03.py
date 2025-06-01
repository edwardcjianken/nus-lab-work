# Draw a triangle with asterisks

# Input and validation

while True:
    base = input("Enter base of integer (odd number integer, minimum is 3 units): ")

    if base == "":
        print("Input cannot be empty. Please try again!")
        continue

    base = int(base)

    if base < 3 or base % 2 == 0:
        print("Invalid base input. Please try again!")
        continue
    else:
        print(f"You have requested a triangle with base of {base} units.")
        break

# Calculate height using base

height = (base + 1) / 2
print(f"This triangle has a computed height of {height} units")

# Form triangle with asterisks

for i in range(1, base + 1, 2):
    stars = "*" * i
    print(stars.center(base))

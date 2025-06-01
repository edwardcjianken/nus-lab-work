int_input = int(input("Enter a positive integer: "))

nth_digit = int(input("Enter nth digit: "))

int_input_array = []

while int_input > 0:
    int_input_array.insert(0, int_input % 10)
    int_input = int_input // 10

if nth_digit > len(int_input_array) or nth_digit <= 0:
    print("Invalid nth digit input. Please try again.")
else:
    print(int_input_array[nth_digit - 1])

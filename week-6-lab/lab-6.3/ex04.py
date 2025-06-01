def generate_nric(nric_type):

    # Input validation
    if nric_type not in "STFG":
        print("Invalid input. Please try again!")
        return

    # Assign prefix
    prefix = nric_type

    import random

    # Assign digits
    digits = "".join(str(random.randint(0, 9)) for _ in range(7))

    # Assign check character
    weights = [2, 7, 6, 5, 4, 3, 2]
    weighted_sum = sum(int(digits[i]) * weights[i] for i in range(7))

    if prefix in "TG":
        weighted_sum += 4

    remainder = weighted_sum % 11

    st_mapping = ["J", "Z", "I", "H", "G", "F", "E", "D", "C", "B", "A"]
    fg_mapping = ["X", "W", "U", "T", "R", "Q", "P", "N", "M", "L", "K"]

    if prefix in "ST":
        expected_check_char = st_mapping[remainder]
    else:
        expected_check_char = fg_mapping[remainder]

    generated_nric = prefix + digits + expected_check_char

    print(generated_nric)


# Main program
nric_type = input("Enter identity card type (S, T, F or G only): ").strip().upper()
generate_nric(nric_type)

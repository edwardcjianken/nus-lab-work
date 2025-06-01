def validate_nric(nric):

    nric = nric.strip().upper()
    print(nric)  # For debugging purpose

    if len(nric) != 9 or nric[0] not in "STFG" or not nric[1:8].isdigit():
        print("Invalid NRIC.")
        return

    weights = [2, 7, 6, 5, 4, 3, 2]
    prefix = nric[0]
    digits = nric[1:8]
    check_char = nric[8]

    # Weighted sum
    weighted_sum = sum(int(digits[i]) * weights[i] for i in range(7))

    # Add 4 if NRIC starts with 'T' or 'G'
    if prefix in "TG":
        weighted_sum += 4

    # Calculate remainder
    remainder = weighted_sum % 11

    # Mapping tables
    st_mapping = ["J", "Z", "I", "H", "G", "F", "E", "D", "C", "B", "A"]
    fg_mapping = ["X", "W", "U", "T", "R", "Q", "P", "N", "M", "L", "K"]

    if prefix in "ST":
        expected_check_char = st_mapping[remainder]
    else:
        expected_check_char = fg_mapping[remainder]

    if check_char == expected_check_char:
        print("Valid NRIC.")
    else:
        print("Invalid NRIC.")


nric_input = input("Enter your NRIC: ")
validate_nric(nric_input)

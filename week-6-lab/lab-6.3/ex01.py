while True:

    conversion_type = input(
        "Enter temperature conversion type\n"
        "(C for Celsius to Fahrenheit | F for Fahrenheit to Celsius):"
    ).upper()

    if conversion_type == "C":

        while True:

            temp_celsius = float(input("Enter temperature in Celsius: "))

            if 0 <= temp_celsius <= 100:
                temp_fahrenheit = (temp_celsius * 180 / 100) + 32

                print(
                    f"{temp_celsius:.1f} Celsius is equivalent to {temp_fahrenheit:.1f} Fahrenheit."
                )
                break
            else:
                print(f"Invalid input. Please enter temperature range from 0 to 100.")
                continue
        break

    elif conversion_type == "F":

        while True:

            temp_fahrenheit = float(input("Enter temperature in Fahrenheit: "))

            if 32 <= temp_fahrenheit <= 212:
                temp_celsius = (temp_fahrenheit - 32) * 100 / 180

                print(
                    f"{temp_fahrenheit:.1f} Fahrenheit is equivalent to {temp_celsius:.1f} Celsius"
                )
                break
            else:
                print(f"Invalid input. Please enter temperature range from 32 to 212.")
                continue

        break

    else:

        print("Invalid input. Please try again!")
        continue

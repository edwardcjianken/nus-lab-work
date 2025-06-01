# Celsius to Fahrenheit conversion

temp_celsius = float(input("Enter temperature in celsius: "))
temp_fahrenheit = (temp_celsius * 180 / 100) + 32

print(f"{temp_celsius} Celsius is equivalent to {temp_fahrenheit} Fahrenheit.")

# Fahrenheit to Celsius conversion

temp_fahrenheit = float(input("Enter temperature in fahrenheit: "))
temp_celsius = (temp_fahrenheit - 32) * 100 / 180

print(f"{temp_fahrenheit} Fahrenheit is equivalent to {temp_celsius} Calsius.")

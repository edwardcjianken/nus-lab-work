# Swap two variables

# Method 1: Using third temporary variable

var1_str, var2_str = input("Enter 2 variables separated by a space: ").split()

var1 = int(var1_str)
var2 = int(var2_str)

var_temp = var1
var1 = var2
var2 = var_temp

print(var1, var2)


# Method 2: Using Python Tuple Unpacking
var1_str, var2_str = input("Enter 2 variables separated by a space: ").split()

var1 = int(var1_str)
var2 = int(var2_str)

var1, var2 = var2, var1

print(var1, var2)

# Method 3: Using arithmatic operations

var1_str, var2_str = input("Enter 2 variables separated by a space: ").split()

var1 = int(var1_str)
var2 = int(var2_str)

var1 = var1 + var2
var2 = var1 - var2
var1 = var1 - var2

print(var1, var2)

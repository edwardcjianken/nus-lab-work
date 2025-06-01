# Triangle Type Identifier

# 3 types of triangle
# - Acute triangle
# - Right triangle
# - Obtuse triangle

print("Triangle Type Identifier:")
angle1 = int(input("Enter first angle: "))
angle2 = int(input("Enter second angle: "))
angle3 = int(input("Enter third angle: "))
sum_of_angles = angle1 + angle2 + angle3


if sum_of_angles == 180:
    if angle1 < 90 and angle2 < 90 and angle3 < 90:
        print("This is an acute triangle.")

    elif angle1 == 90 or angle2 == 90 or angle3 == 90:
        print("This is a right triangle.")

    elif angle1 > 90 or angle2 > 90 or angle3 > 90:
        print("This is an obtuse triangle.")

else:
    print("This is not a valid triangle.")

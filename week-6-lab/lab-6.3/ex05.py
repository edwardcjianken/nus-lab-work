print("Smart Home System Commands")
print("A = Lights turned on.")
print("B = Lights turned off.")
print("C = Alarm has been set.")
print("D = Alarm has been disarmed.")
print("E = All doors are now locked.")
print("F = All doors are now unlocked.")

command_input = input("Enter a system command: ").strip().upper()

match command_input:
    case "A":
        print("Lights turned on.")
    case "B":
        print("Lights turned off.")
    case "C":
        print("Alarm has been set.")
    case "D":
        print("Alarm has been disarmed.")
    case "E":
        print("All doors are now locked.")
    case "F":
        print("All doors are now unlocked.")
    case _:
        print("Invalid command.")

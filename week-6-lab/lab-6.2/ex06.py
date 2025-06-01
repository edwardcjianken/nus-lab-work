# Compount Interest and Future Value Calculator

principal = float(input("Enter principal amount (initial investment): "))
annual_rate_percent = float(input("Enter annual interest rate (%): "))
time_year = float(input("Enter length of time in years: "))
compound_frequency_annum = float(input("Enter number of compounding period per annum"))

# Convert annual rate percent to decimal
annual_rate = annual_rate_percent / 100

future_value = principal * (1 + (annual_rate / compound_frequency_annum)) ** (
    compound_frequency_annum * time_year
)

compound_interest = future_value - principal

print(f"Future Value: ${future_value:.2f}.")
print(f"Compound Interest Earned: ${compound_interest:.2f}")

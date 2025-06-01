# Exchange rate
usd_to_sgd_rate = 1.3100
sgd_to_usd_rate = 1 / usd_to_sgd_rate

# USD to SGD conversion
usd_amount = float(input("Enter amount in USD to convert to SGD: "))
sgd_amount = usd_amount * usd_to_sgd_rate

print(f"{usd_amount} USD is equivalent to {sgd_amount} SGD.")

# SGD to USD conversion
sgd_amount = float(input("Enter amount in SGD to convert to USD: "))
usd_amount = sgd_amount * sgd_to_usd_rate

print(f"{sgd_amount} SGD is equivalent to {usd_amount} USD.")

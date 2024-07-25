

# Simple Interest Calculator Script

# Define variables for principal, rate, and time
principal=$1
rate=$2
time=$3

# Validate input
if [ -z "$principal" ] || [ -z "$rate" ] || [ -z "$time" ]; then
  echo "Usage: $0 <principal> <rate> <time>"
  exit 1
fi

# Calculate simple interest
interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)

# Output the result
echo "The simple interest is: $interest"
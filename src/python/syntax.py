# Python syntax from the javasript perspective


# Define attributes / variables
# Numbers
num_int = 10
num_float = 3.33
print(type(num_int), " ", type(num_float))

# String
string_text = "Hi"
string_num = "10"
print(type(string_text), " ", type(string_num))

# Boolean
is_python = True
is_js = False
print(type(is_python), " ", type(is_js))

# my_listay
my_list = [1, 2, 3, 4, 5]
my_tuple = (1, 2, 3)
my_set = {1, 2, 3, 4, 2}
print(type(my_list), " ", type(my_tuple), " ", type(my_set))
print(my_set)

# Dictionary / objects
my_dict = {"crop_type": "Grain", "cost": 4, "amount": 10}
print(type(my_dict))

# Undefined
x = None
print(type(x))

# Sample if / else
if num_int > num_float:
    print("int is bigger")
elif num_int < num_float:
    print("float is bigger")


# Functions
# Parameters
def func_params(p1, p2, p3):
    print(f"p1: {p1}, p2: {p2}, p3: {p3}")


func_params("a", "b", "c")


# Returns
def multiply(x, y):
    return x * y


product = multiply(5, 6)
print(product)


# Arrays
my_list = [2, 3, 4 ]

# Add to the front
my_list.insert(0, 1)
print(my_list)

# Add to the end
my_list.append(5)
print(my_list)

# Update values
my_list[2] = "three"
print(my_list)

# Loops
# For
for x in range(5):
    print(x)

# For/in
for key in my_dict:
    print(key, ": ", my_dict[key])

# While
i = 0
while i < 5:
    print(i)
    i = i + 1

# Do while
i = 0
while True:
    print(i)
    i = i + 1
    if(i > 4):
        break

# ForEach
my_list2 = [1, 2, 3]

def for_each(function, list):
    i = 0
    for x in list:
        print(" ",i)
        list[i] = function(x)
        i += 1

def double(value):
    return value * 2

for_each(double, my_list2)
print(my_list2)


# Objects / Dictionaries
# Declare object
class Crop:
    def __init__(self, crop_type, cost, amount):
        self.crop_type = crop_type
        self.cost = cost
        self.amount = amount

    def __str__(self):
        return f"Crop {self.crop_type}, costs {self.cost} dollars and we have {self.amount} in stock"

grain = Crop(**my_dict)

# Lookup key to retrieve value
print(grain)

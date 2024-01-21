# for loops
'''
for i in range(10):
    print(i)
print()

for i in range(1,11):
    print(i)
print()

for i in range(100,-1,-10):
    print(i)
'''

# while loops
num = 8
while num > 0:
    print(num)
    num = num - 1

ans = ""
while ans != "nelson":
    ans = input("Please type the correct name: ")


for i in range(2):
    for j in range(3):
        print(i*j, end="")
    print()
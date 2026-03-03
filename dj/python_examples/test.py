x = ['str', 'new', 123, 45.34]
x.append([1, 3, 5, 7])
x.append((1, 4, 'New'))

print(x[4][0])

friends = ['Frank', 'Didi', 'Johan']
ages = [55, 23, 65]
for i in range(3):
    print('The age of '+friends[i]+ 'is: ', ages[i])
    
z = friends + ages
print(z[-3:-1])
print(z.count('Johan'))

test_d = dict()
test_d['test1'] = 123
test_d[1] = 456
print(test_d)

for i in test_d.values():
    print(i)
    # print(j)
    
def sum(a, b):
    print(a+b)

res = sum(2, 4)
print(res)
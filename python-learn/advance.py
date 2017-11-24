arr = ['foo', 'bar', 'baz', 'hor']

print arr[:3]
print arr[-3:]
print arr[::2]

str_a = u'abcde'

print str_a[:3]
print str_a[-3:]
print str_a[:3:2]

dict_a = {'a': 1, 'b': 2, 'c': 3}

for k in dict_a:
    print k

for k in dict_a.iterkeys():
    print k

for k in dict_a.itervalues():
    print k

for k, p in dict_a.iteritems():
    print k, p

for i, v in enumerate(dict_a):
    print i, v


r1 = range(1, 11)
print r1

r2 = [x * x for x in range(1, 11)]
print r2

r3 = [x * x for x in range(1, 11) if x % 2 == 0]
print r3

r4 = [m + n for m in 'ABC' for n in 'XYZ']
print r4

L = ['Hello', 'World', 'IBM', 'Apple']
print [s.lower() for s in L]

isinstance('a', str)

L = ['Hello', 'World', 18, 'Apple', None]
print [s.lower() for s in L if isinstance(s, str)]

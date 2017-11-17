# -*- coding: utf-8 -*-

a = 1
print a

b = 1.0
print b

print 'i \'m ok'
print r'i \'m ok'

print '''i \'m ok
i \'m not ok '''
print r'''i \'m ok
i \'m not ok '''

c = True
d = False
print c
print d
print c and d
print c or d

e = not c
print e

print None

x = 'abc'
y = x
x = 'def'
print y

print ord('a')
print chr(65)

print u'中'
print 'hello, %s' % 'world'

arr = [1, 2, 3]
print arr
print len(arr)
arr[0] = a
print arr[0]
print arr[-1]

_tuple = (1, 2, 3)
# _tuple[0] = 4 // error
print _tuple[0]
print _tuple

_obj = {
    'a': 1,
    'b': 2,
    'c': 3
  }
print _obj
print _obj['a']
# print _obj['d'] // error
print _obj.get('a')
print _obj.get('d')
print _obj.get('d', 4)

s1 = set([1,2,3])
s2 = set([1,2,3,4])
print s1 | s2

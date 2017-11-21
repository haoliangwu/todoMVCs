import math


def move(x, y, step, angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny


def my_abs(a):
    if not isinstance(a, (int, float)):
        raise TypeError('error type')

    if a >= 0:
        return a
    else:
        return -a

# my_abs('A')


a, b = move(1, 2, 1)
c = move(1, 2, 1)
print a, b
print c

# t1 = tuple([2, 4])


def power(x, n=2):
    s = 1
    while n > 0:
        n -= 1
        s *= x
    return s


a = power(2, 2)
b = power(2, 3)

print a
print b


def add_end(l=[]):
    l.append('end')
    return l


a = add_end()
b = add_end()

print b


def add_end(l=None):
    if(l is None):
        l = []
    l.append('end')
    return l


a = add_end()
b = add_end()

print b


def calc(*numbers, **opts):
    sum = 0

    if(opts.has_key('initial')):
        sum = opts['initial']

    for n in numbers:
        sum = sum + n * n
    return sum


e = calc(1, 2, 3, 4, 5)

print e

m = tuple([1, 2, 3, 4, 5])

opts = {'initial': 5}

n = calc(*m, **opts)

print n

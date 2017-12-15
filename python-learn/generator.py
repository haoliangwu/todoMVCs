g = (x * x for x in range(1, 10))

for x in g:
    print x


def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n = n + 1


for fibv in fib(6):
    print fibv


def format_fn(str='abc'):
    str = str.lower()

    res = ''

    for i, v in enumerate(str):
        if i == 0:
            res = res + v.upper()
        else:
            res = res + v

    return res


print(map(format_fn, ['adam', 'LISA', 'barT']))


def lazy_sum(*args):
    def sum():
        s = 0
        for i in args:
            s += i

        return s

    return sum


print lazy_sum(*[1,2,3,4,5])()

print map(lambda x: x*x, [1,2,3,4,5])


class Hello(object):
    def hello(self, name='world'):
        print('Hello, %s.' % name)

h = Hello()

print type(Hello)
print type(h)

class ListMetaclass(type):
    def __new__(cls, name, bases, attrs):
        print cls, name, bases, attrs
        attrs['add'] = lambda self, value: self.append(value)
        return type.__new__(cls, name, bases, attrs)

class MyList(list):
    __metaclass__ = ListMetaclass

L = MyList()
L.add(1)

print L

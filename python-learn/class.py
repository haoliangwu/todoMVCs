class Point(object):
    def __init__(self, x, y):
        self._source = 1
        self.moveTo(x, y)

    def log(self):
        print 'the point is (%s, %s)' % (self.x, self.y)

    def moveTo(self, x, y):
        self.x = x
        self.y = y

    @property
    def source(self):
        return self._source

    @source.setter
    def source(self, value):
        self._source = value


p1 = Point(1, 2)

p1.log()

p1.moveTo(2, 4)

p1.log()

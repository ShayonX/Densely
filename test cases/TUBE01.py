# TestCase TUBE01 testing averageSize
import unittest

humanSizeSample = [0,1,2,3,4,5,6,7,8]
sampleSize = 20


def averageSize():
    sum = 0
    for i in humanSizeSample:
        sum += i
    return sum / sampleSize


class MyTest(unittest.TestCase):
    def test(self):
        self.ans = averageSize()
        self.assertGreater(self.ans, 0, "Positive")

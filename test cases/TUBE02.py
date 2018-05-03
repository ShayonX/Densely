# TestCase TUBE02 testing srcTest value
import unittest
import cv2


def fun():
    srcTest = 'publicDensity.mpeg'
    srcWebcam = 0
    srcMain = ''  # we can also use a live source here
    cap = cv2.VideoCapture(srcTest)  # Open video file
    return srcTest


class MyTest(unittest.TestCase):
    def test(self):
        self.ans = fun()
        print(self.ans)
        self.assertEqual(self.ans, '*.mpeg', "Correct")

import json
from numpy import array
import numpy as np
import os
from PIL import Image
from keras.datasets import mnist

x_train=[]
# the data, split between train and test sets
for i in os.listdir('Data/'):
    img = Image.open("Data/"+i)
    x_train.append(np.asarray(img))


(x_tr, y_tr), (x_te, y_te) = mnist.load_data()
print (x_tr.shape)
print (type(y_tr))
print(y_tr.shape)



y_train=[]
classes={}
with open("Labels/numeric_classes.json") as a:
    classes=json.load(a)

for i in classes.keys():
	y_train.append(classes[i])

#print(y_train)
print(type(y_train))
print(np.asarray(y_train).shape)
print(type(np.asarray(y_train)))
print(np.asarray(x_train).shape)
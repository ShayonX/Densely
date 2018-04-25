from __future__ import print_function

import keras
import numpy as np
from PIL import Image
from numpy import array
from sklearn.model_selection import train_test_split
from keras.preprocessing.image import ImageDataGenerator, array_to_img, img_to_array, load_img
from sklearn.preprocessing import LabelEncoder
from keras.utils import np_utils
from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten, Activation
from keras.layers import Conv2D, MaxPooling2D
from keras import backend as K
import os
import json

batch_size = 128

num_classes = 5

epochs = 10

# input image dimensions

img_rows, img_cols = 576, 768

# the data, split between train and test sets
X = []
for i in zip(os.listdir('Data/'), range(0, 754)):
    img = load_img("Data/" + i[0])
    X.append(img_to_array(img))
X = np.asarray(X)

Y = []
classes = {}
with open("Labels/numeric_classes.json") as a:
    classes = json.load(a)
Y = list((classes.values()))
encoder = LabelEncoder()
encoder.fit(Y)
encoded_Y = encoder.transform(Y)
Y = np_utils.to_categorical(encoded_Y)

x_train, x_test, y_train, y_test = train_test_split(X, Y, test_size=0.3, random_state=0)

input_shape = (576, 768, 3)
model = Sequential()

model.add(Conv2D(32, (3, 3), input_shape=input_shape))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))

model.add(Conv2D(32, (3, 3)))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))

model.add(Conv2D(64, (3, 3)))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))

model.add(Flatten())

model.add(Dense(output_dim=64))
model.add(Activation("relu"))

model.add(Dense(output_dim=5))
model.add(Activation("softmax"))
model.compile(loss='categorical_crossentropy', optimizer='sgd', metrics=['accuracy'])

model.fit(x_train, y_train, epochs=epochs)

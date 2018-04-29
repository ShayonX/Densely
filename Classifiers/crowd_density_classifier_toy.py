import keras
import numpy as np
import cv2
import colorsys
import collections
from PIL import Image
from numpy import array
from sklearn.model_selection import train_test_split
from keras.preprocessing.image import ImageDataGenerator, array_to_img, img_to_array, load_img
from sklearn.preprocessing import LabelEncoder
from keras.utils import np_utils
from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten, Activation
from keras.layers import Conv2D, Conv1D, MaxPooling2D, MaxPool1D, ZeroPadding2D
from keras.optimizers import SGD, Adam
from keras.constraints import maxnorm
from keras import backend as K
import os
import json

batch_size = 32

num_classes = 5

epochs = 25

# input image dimensions

img_rows, img_cols = 200, 200

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

input_shape = (32, 32, 3)
model = Sequential()
# FIRST MODEL
# model.add(Conv2D(64, (3, 3), input_shape=input_shape))
# model.add(Activation('relu'))
# model.add(MaxPooling2D(pool_size=(2, 2)))
#
# model.add(Conv2D(32, (3, 3)))
# model.add(Activation('relu'))
# model.add(MaxPooling2D(pool_size=(2, 2)))
#
# model.add(Conv2D(64, (3, 3)))
# model.add(Activation('relu'))
# model.add(MaxPooling2D(pool_size=(2, 2)))
#
#
#
# model.add(Flatten())
#
# model.add(Dense(output_dim=64))
# model.add(Activation("relu"))
#
# model.add(Dense(output_dim=5))
# model.add(Activation("softmax"))
# model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
#
# model.fit(x_train, y_train, epochs=epochs, batch_size=batch_size)

# SECOND MODEL
# model.add(Conv2D(64, (3, 3), activation='relu', input_shape=input_shape))
# model.add(MaxPooling2D(pool_size=(2, 2)))
# model.add(Conv2D(64, (3, 3), activation='relu'))
# model.add(MaxPooling2D(pool_size=(2, 2)))
# model.add(Dropout(0.25))
#
# model.add(Conv2D(128, (3, 3), activation='relu'))
# model.add(Conv2D(128, (3, 3), activation='relu'))
# model.add(MaxPooling2D(pool_size=(2, 2)))
# model.add(Dropout(0.25))
#
#
#
# model.add(Flatten())
# model.add(Dense(256, activation='relu'))
# model.add(Dropout(0.5))
# model.add(Dense(5, activation='softmax'))

# Model 3
# model.add(ZeroPadding2D((1, 1), input_shape=input_shape))
# model.add(Conv2D(64, 3, 3, activation='relu'))
# model.add(ZeroPadding2D((1, 1)))
# model.add(Conv2D(64, 3, 3, activation='relu'))
# model.add(MaxPooling2D((2, 2), strides=(2, 2)))
#
#
#
# model.add(ZeroPadding2D((1, 1)))
# model.add(Conv2D(128, 3, 3, activation='relu'))
# model.add(ZeroPadding2D((1, 1)))
# model.add(Conv2D(128, 3, 3, activation='relu'))
# model.add(MaxPooling2D((2, 2), strides=(2, 2)))
# model.add(Dropout(0.2))
#
#
# model.add(ZeroPadding2D((1, 1)))
# model.add(Conv2D(256, 3, 3, activation='relu'))
# model.add(ZeroPadding2D((1, 1)))
# model.add(Conv2D(256, 3, 3, activation='relu'))
# model.add(ZeroPadding2D((1, 1)))
# model.add(Conv2D(256, 3, 3, activation='relu'))
# model.add(MaxPooling2D((2, 2), strides=(2, 2)))
# model.add(Dropout(0.2))
#
# model.add(ZeroPadding2D((1, 1)))
# model.add(Conv2D(512, 3, 3, activation='relu'))
# model.add(ZeroPadding2D((1, 1)))
# model.add(Conv2D(512, 3, 3, activation='relu'))
# model.add(ZeroPadding2D((1, 1)))
# model.add(Conv2D(512, 3, 3, activation='relu'))
# model.add(MaxPooling2D((2, 2), strides=(2, 2)))
#
# model.add(ZeroPadding2D((1, 1)))
# model.add(Conv2D(512, 3, 3, activation='relu'))
# model.add(ZeroPadding2D((1, 1)))
# model.add(Conv2D(512, 3, 3, activation='relu'))
# model.add(ZeroPadding2D((1, 1)))
# model.add(Conv2D(512, 3, 3, activation='relu'))
# model.add(MaxPooling2D((2, 2), strides=(2, 2)))
# model.add(Dropout(0.2))
#
# model.add(Flatten())
# model.add(Dense(4096, activation='relu'))
# model.add(Dropout(0.2))
# model.add(Dense(4096, activation='relu'))
# model.add(Dropout(0.2))
# model.add(Dense(num_classes, activation='softmax'))
# Compile model
lrate = 0.1
decay = lrate/epochs
sgd = SGD(lr=lrate, momentum=0.9, decay=decay, nesterov=False)
model.compile(loss='categorical_crossentropy', optimizer=sgd, metrics=['accuracy'])
print(model.summary())

model.fit(x_train, y_train, validation_data=(x_test, y_test) ,batch_size=batch_size, epochs=epochs)
score = model.evaluate(x_test, y_test, batch_size=32)
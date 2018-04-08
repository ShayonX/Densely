lables={}
import json
with open("Labels/classes.json") as a:
    labels=json.load(a)


shift={
    "very_low":0,
    "low":1,
    "medium":2,
    "high":3,
    "very_high":4,
    "":4
}
changed_labels={}
for i in labels.keys():
    changed_labels[i]=shift[labels[i]]

with open("Labels/numeric_classes.json",'w') as outf:
    json.dump(changed_labels,outf)
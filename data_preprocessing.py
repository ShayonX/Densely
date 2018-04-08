
# coding: utf-8

# In[44]:


import json


# In[45]:


raw_count = []
with open('raw_count.json') as file:
    raw_count = json.load(file)


# In[46]:


total_count={}
for i in raw_count[0].keys():
    total_count[i]=[]
    for j in zip(raw_count[0][i],raw_count[1][i]):
        total_count[i].append(j[0]+j[1])


# In[47]:


import os
if not os.path.exists("Data/"):
    os.makedirs("Data")


# In[48]:


image_count={}
for i in total_count.keys():    
    for j in range(len(total_count[i])):
        new_name=i+"_frame"+str(f'{j:04}'+".jpg")
        new_name=new_name.replace('/','_').replace('Time_','')
        image_count[new_name]=total_count[i][j]


# In[49]:


image_class={}
classes={
    "very_low":[0,8],
    "low":[9,16],
    "medium":[17,24],
    "high":[25,32],
    "very_high":[33,1000000]
}
for i in image_count.keys():
    image_class[i]=""
    for j in classes.keys():
        if classes[j][0]<image_count[i]<classes[j][1]:
            image_class[i]=j
            break


# In[50]:


with open("Data/classes.json","w") as outfile:
    json.dump(image_class,outfile)


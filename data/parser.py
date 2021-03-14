import json
import re

# file to which we will be writing 
fWrite = open('parsed.txt', 'w')

# opens the JSON file with the data and saves it to a JSON object
with open('info.json') as data_file:
    data = json.load(data_file)

# runs through each element in JSON object and extracts the data, writing it to file
for item in data:
    orig_tag = item["tag"]
    if "goesTo" in item: 
      orig_name = item["goesTo"]
      for info in orig_name: 
        new_tag = re.sub(r'(?<!^)(?=[A-Z])', '_', orig_tag).lower()
        new_info = re.sub(r'(?<!^)(?=[A-Z])', '_', info).lower()
        fWrite.write("goes_to_info(" + new_tag + ", " +  new_info + ").\n")
      #name = orig_name.split(" ")
      #first_name = name[1].lower()

      # convert tag to snake case
    #new_tag = re.sub(r'(?<!^)(?=[A-Z])', '_', orig_tag).lower()
    #new_name = re.sub(r'(?<!^)(?=[A-Z])', '_', orig_name).lower() 

      # write without quotes 
    #fWrite.write("goes_to_location(" + new_tag + ", " +  str(new_name).lower() + ").\n")
      # write with quotes
    #fWrite.write("info_desc(" + new_tag + ", \"" +  orig_name + "\").\n")
      
fWrite.close()
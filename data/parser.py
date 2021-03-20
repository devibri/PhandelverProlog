import json
import re

# file to which we will be writing 
fWrite = open('parsed.txt', 'w')

# opens the JSON file with the data and saves it to a JSON object
with open('cast.json') as data_file:
    data = json.load(data_file)

# runs through each element in JSON object and extracts the data, writing it to file
for item in data:
    orig_tag = item["tag"]
    if "faction" in item: 
      orig_name = item["faction"]
      # for info in orig_name: 
      #   new_tag = re.sub(r'(?<!^)(?=[A-Z])', '_', orig_tag).lower()
      #   new_info = re.sub(r'(?<!^)(?=[A-Z])', '_', info).lower()
      #   fWrite.write("goes_to_info(" + new_tag + ", " +  new_info + ").\n")
      #name = orig_name.split(" ")
      #first_name = name[1].lower()
      #if (first_name != None):
      new_tag = re.sub(r'(?<!^)(?=[A-Z])', '_', orig_tag).lower()
      #fWrite.write("character_info(" + new_tag + ", status, " +  orig_name + ").\n")

      # convert tag to snake case
    
    #new_name = re.sub(r'(?<!^)(?=[A-Z])', '_', orig_name).lower() 

      # write without quotes 
    
      # write with quotes
      fWrite.write("character_info(" + new_tag + ", faction, \"" +  orig_name + "\").\n")
      
fWrite.close()
# -*- coding: utf-8 -*-
"""
Created on Thu Jun 22 16:36:49 2023

@author: ap02323
"""


def exctract_coefficients_fromfile(filename):
    
    index_dict = {}
    value_dict = {}
    
    with open(filename, 'r') as file:
        for line in file:
            line = line.strip()
            if line.startswith("mIndices") or line.startswith("mValues"):
                variable_name, values_str = line.split(" = ")
                variable_name = variable_name.strip()
                
                # Extract the indices from the variable name
                indices = variable_name.split("_")[1:]
                indices[0] = indices[0][2:]
                indices = tuple(map(int, indices))
                
                values_str = values_str.strip()
                # Remove the square brackets and split the values by commas
                
    
                # Convert the values to integers or floats depending on the variable name
                if variable_name.startswith("mIndices"):
                    values_list = values_str[1:-1].split("),")
                    values_list[-1] = values_list[-1][0:-1]
                    values_list = [tuple(map(int, value.strip()[1:].split(","))) for value in values_list]
                    
                    # Store the values in the index dictionary
                    if indices not in index_dict:
                        index_dict[indices] = values_list
                    else:
                        index_dict[indices].extend(values_list)
                        
                elif variable_name.startswith("mValues"):
                    values_list = values_str[1:-1].split(",")
                    values_list = [float(value.strip()) for value in values_list]
                    
                    # Store the values in the values dictionary
                    if indices not in value_dict:
                        value_dict[indices] = values_list
                    else:
                        value_dict[indices].extend(values_list)
    
    return (index_dict, value_dict)

if __name__ == '__main__':
    
    filename = "coefficients.txt"
    ind_dict, val_dict = exctract_coefficients_fromfile(filename)

//require('babel-register')()

import yaml from "js-yaml";
import fs from "fs";
import path from "path";

export function readJsonFile(filename)
{
  var output;
  output = fs.readFileSync(path.join(__dirname,'../data/'+filename)).toString();
  jsonData = JSON.parse(output);
  return jsonData;
}

export function readYamlFile(folder,fileName)
{
  //var output = yaml.safeLoad(fs.readFileSync(path.join(__dirname,'../data/'+fileName),'utf-8'));
  var output = yaml.safeLoad(fs.readFileSync(path.join(__dirname,'../'+folder+'/'+fileName),'utf-8'));
  return output;
}

export function parseYamlData(yamlData, key1, key2, key3, key4)
{
   var result;
    if (key1 === null) {result = yamlData;}
    else
   {
    if (key1 !== null) {result = yamlData[key1];}
    if (key2 !== null) {result = yamlData[key1][key2];}
    if (key3 !== null) {result = yamlData[key1][key2][key3];}
    if (key4 !== null) {result = yamlData[key1][key2][key3][key4];}
  }
  return result;
}

export function readUserData(key1, key2, key3, key4)
{
var yamlData = readYamlFile('data', 'user_details.yaml');
var result = parseYamlData(yamlData, key1, key2, key3, key4)
return result;
}

export function readCountryConfigData(key1, key2, key3, key4)
{
  var yamlData = readYamlFile('config', 'environment_urls.yaml');
  var result = parseYamlData(yamlData, key1, key2, key3, key4)
  return result;
}

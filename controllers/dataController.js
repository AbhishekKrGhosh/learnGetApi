import arrayData from "../data/arrayData.js";
import person from "../data/person.js";
import employees from "../data/employees.js";
import mixedData from "../data/mixedData.js";
import languages from "../data/languages.js";
import complexLang from "../data/complexLang.js";
import nestedLang from "../data/nestedLang.js";

export const getArray = (req, res) => res.json(arrayData);
export const getObject = (req, res) => res.json(person);
export const getEmployees = (req, res) => res.json(employees);
export const getMixed = (req, res) => res.json(mixedData);
export const getLanguages = (req, res) => res.json(languages);
export const getComplexLanguages = (req, res) => res.json(complexLang);
export const getNestedLanguages = (req, res) => res.json(nestedLang);

export const testApi = (req, res) => {
  console.log("✅ Test API called at:", new Date().toLocaleString());
  res.send("Test API working!");
};

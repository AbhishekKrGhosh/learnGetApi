import express from "express";
import {
  getArray,
  getObject,
  getEmployees,
  getMixed,
  getLanguages,
  getComplexLanguages,
  getNestedLanguages,
  testApi,
} from "../controllers/dataController.js";

const router = express.Router();

router.get("/array", getArray);
router.get("/object", getObject);
router.get("/employees", getEmployees);
router.get("/mixed", getMixed);
router.get("/languages", getLanguages);
router.get("/complex-languages", getComplexLanguages);
router.get("/nested-languages", getNestedLanguages);
router.get("/test", testApi);

export default router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fitnessRoutes = void 0;
const express_1 = require("express");
const CreateFitnessController_1 = require("../modules/fitness/useCases/createFitness/CreateFitnessController");
const ListFitnessController_1 = require("../modules/fitness/useCases/ListFitness/ListFitnessController");
const fitnessRoutes = express_1.Router();
exports.fitnessRoutes = fitnessRoutes;
const createFitnessController = new CreateFitnessController_1.CreateFitnessControler();
const listFitnessController = new ListFitnessController_1.ListFitnessController();
fitnessRoutes.post("/", createFitnessController.handle);
fitnessRoutes.get("/", listFitnessController.handle);

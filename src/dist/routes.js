"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFitness = void 0;
const CreateFitnessService_1 = __importDefault(require("./CreateFitnessService"));
function CreateFitness(request, response) {
    const fitness = {
        dia: new Date(2021, 12, 4),
        comentarios: "Felipe é tooop"
    };
    CreateFitnessService_1.default.execute(fitness);
    return response.send();
}
exports.CreateFitness = CreateFitness;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var router_1 = __importDefault(require("./router"));
exports.default = redux_1.combineReducers({
    router: router_1.default.reducers,
});

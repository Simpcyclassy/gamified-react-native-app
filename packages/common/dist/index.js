"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var store_1 = __importDefault(require("./store"));
var App_1 = __importDefault(require("./components/App"));
var NativeApp = function () {
    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },
        react_1.default.createElement(App_1.default, null)));
};
exports.default = NativeApp;

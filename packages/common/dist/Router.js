"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("./components/home/components");
var components_2 = require("./components/questions/components");
var Router = function () {
    var _a = react_1.useState('Home'), route = _a[0], setRoute = _a[1];
    return (route === 'Home' ? react_1.default.createElement(components_1.Home, null) : react_1.default.createElement(components_2.Questions, null));
};
exports.default = Router;

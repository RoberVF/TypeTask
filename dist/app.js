"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const path = require('path');
const main_routes_1 = __importDefault(require("./routes/main.routes"));
const PORT = 3000 || process.env.PORT;
app.set('port', PORT);
app.set('views', path.join(__dirname, "views"));
app.set('view engine', "ejs");
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(main_routes_1.default);
app.use(express_1.default.static(path.join(__dirname, "/public")));
exports.default = app;

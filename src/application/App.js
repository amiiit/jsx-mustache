"use strict";
exports.__esModule = true;
var React = require("react");
var cx = require("./app.scss");
var Editor_1 = require("../editor/Editor");
var example_ad_structure_json_1 = require("../editor/example.ad_structure.json");
var example_ad_data_json_1 = require("../editor/example.ad_data.json");
var App = function () {
    return React.createElement("div", { className: cx.locals.app },
        React.createElement("h1", null, "Aditor"),
        React.createElement(Editor_1["default"], { ad: example_ad_structure_json_1["default"], testData: example_ad_data_json_1["default"] }));
};
exports["default"] = App;

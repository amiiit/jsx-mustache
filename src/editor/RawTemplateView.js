"use strict";
exports.__esModule = true;
var React = require("react");
var transformator_1 = require("../jsx-mustache/transformator");
var Ad_1 = require("./Ad");
var RawTemplateView = function (_a) {
    var ad = _a.ad;
    var template = transformator_1.transform(React.createElement(Ad_1["default"], { ad: ad }));
    return React.createElement("div", null,
        React.createElement("pre", null, template));
};
exports["default"] = RawTemplateView;
